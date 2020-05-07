---
title: "Grafici HLOG/QLN"
slug: hlog
date: 2020-02-29T16:00:00+01:00
lastmod: 2020-05-07T19:00:00+02:00
js: ["hlog.js"]
rawjs: ["Chart.min.js"]
scss: ["hlog.scss"]
---

Carica il file [statistiche avanzate](https://forum.fibra.click/d/3948-statistiche-avanzate-fritz) esportato dal FRITZ!Box per generare i grafici HLOG e QLN.

<p>
    <input type="file" name="file" id="file">
</p>

<div id="charts">
    <p>
        <strong>Profilo</strong>: <span id="profile"></span>
    </p>
    <p id="noUsData">
        ❗ <strong>Dati US mancanti</strong>
    </p>
    <p>
        <input type="checkbox" id="hideFrequencies" onchange="window.app.toggleHideFrequencies()">
        <label for="hideFrequencies">Nascondi toni non utilizzati</label>
    </p>
    <canvas id="chartHLOG"></canvas>
    <a onclick="window.app.exportChart('hlog')">Genera immagine</a>
    <canvas id="chartQLN"></canvas>
    <a onclick="window.app.exportChart('qln')">Genera immagine</a>
</div>
