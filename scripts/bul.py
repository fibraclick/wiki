import json
import logging
import os
import re
import shutil

from openpyxl import load_workbook

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s')

LAST_UPDATE = "7-10-19"

OUTPUT_DIR = "../static/stato-bul/"

MAPPINGS = {
    'emiliaromagna-polesinezibello': 'emiliaromagna-polesineparmense',
    'toscana-piteglio': 'toscana-sanmarcellopiteglio',
    'lombardia-godiasco': 'lombardia-godiascosaliceterme',
    'valledaosta-chtillon': 'valledaosta-chatillon',
    'valledaosta-hne': 'valledaosta-hone',
    'valledaosta-jovenan': 'valledaosta-jovencan',
    'valledaosta-rhmesnotredame': 'valledaosta-rhemesnotredame',
    'valledaosta-rhmessaintgeorges': 'valledaosta-rhemessaintgeorges',
    'veneto-brenzone': 'veneto-brenzonesulgarda',
    'veneto-santostinodilivenza': 'veneto-sanstinodilivenza',
}

wb = load_workbook(filename="all.xlsx", read_only=True)
data = {}
comuni = {}
most_recent = {}

def find_status_column(row):
    for i in range(3, 6):
        heading = row[i].value.strip().lower()
        if "stato" in heading or "status" in heading:
            return i

    raise Exception("Status column was not found")


def calculate_key(regione, nome):
    key = re.sub(r"[^a-z]*", "", regione.lower()) + "-" +\
          re.sub(r"[^a-z]*", "", nome.lower())
    return key


def process_sheet(ws, date, type):
    table_started = False
    status_column = 0

    for row in ws.rows:
        if len(row) == 0 or row[0].value is None:
            continue

        if not table_started:
            if row[0].value.strip().lower() == "regione":
                table_started = True
                status_column = find_status_column(row)
            continue

        regione = row[0].value
        provincia = row[1].value
        nome = row[2].value
        status_text = row[status_column].value

        key = calculate_key(regione, nome)
        if key in MAPPINGS:
            key = MAPPINGS[key]

        if not key in data:
            data[key] = dict(key=key, regione=regione, provincia=provincia, nome=nome, fibra=[], fwa=[])

        comune = data[key]
        comune[type].append(dict(date=date, text=status_text))

        if not key in comuni:
            comuni[key] = dict(key=key, regione=regione, nome=nome)
        if date == LAST_UPDATE and not key in most_recent:
            most_recent[key] = dict(key=key, regione=regione, nome=nome)


def fill_missing_info(date, type):
    for comune in data.values():
        statuses = comune[type]
        if len(statuses) > 0 and statuses[-1]["date"] != date:
            comune[type].append(dict(date=date, text=None))


for ws in reversed(wb.worksheets):
    if not (ws.title.endswith("fibra") or ws.title.endswith("fwa")):
        continue

    date, type = ws.title.rsplit("-", 1)
    logging.info("Processing " + ws.title)

    process_sheet(ws, date, type)
    fill_missing_info(date, type)

logging.info("Done")

logging.info("MISSING in last update:")

for key in comuni:
    if not key in most_recent:
        logging.info(f"{comuni[key]['regione']} - {comuni[key]['nome']} - [{key}]")

logging.info("Cleaning directories...")

# Ensure output dir is empty
if os.path.exists(OUTPUT_DIR):
    shutil.rmtree(OUTPUT_DIR)

os.mkdir(OUTPUT_DIR)
os.mkdir(OUTPUT_DIR + "comuni")

logging.info("Writing files...")

for key in data:
    with open(f"{OUTPUT_DIR}comuni/{key}.json", "w") as file:
        json.dump(data[key], file)

logging.info("Writing index...")

with open(OUTPUT_DIR + "index.json", "w") as file:
    json.dump(list(comuni.values()), file)

logging.info("Done")
