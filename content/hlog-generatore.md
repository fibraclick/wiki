---
title: "Generatore grafici HLog/QLN"
slug: hlog/generatore
date: 2020-02-29T16:00:00+01:00
lastmod: 2020-05-29T16:15:00+02:00
js: ["hlog.js"]
rawjs: ["Chart.min.js"]
scss: ["hlog.scss"]
---

Carica il file [statistiche avanzate](https://forum.fibra.click/d/3948-statistiche-avanzate-fritz) esportato dal FRITZ!Box per generare i grafici HLog e QLN.

{{< info >}}
Leggi anche la [guida]({{< relref "/posts/hlog.md" >}}) che spiega come interpretare i grafici.
{{< /info >}}

<p>
    <input type="file" name="file" id="file">
</p>

<div id="charts">
    <p>
        <strong>Profilo</strong>: <span id="profile"></span><br>
        <strong>Vectoring</strong>: <span id="vectoring"></span><br>
        <strong>Lunghezza (cavo 0,4 mm)</strong>: <span id="length1"></span> m<br>
        <strong>Lunghezza (cavo 0,6 mm)</strong>: <span id="length2"></span> m
    </p>
    <p id="noUsData">
        ❗ <strong>Dati US mancanti</strong>
    </p>
    <p>
        <input type="checkbox" id="hideUnusedTones" onchange="window.app.toggleHideUnusedTones()">
        <label for="hideUnusedTones">Nascondi toni non utilizzati</label>
        <br>
        <input type="checkbox" id="useFrequencies" onchange="window.app.toggleUseFrequencies()">
        <label for="useFrequencies">Mostra frequenze sulle ascisse</label>
    </p>
    <div class="chart-container"><canvas id="chartHLOG"></canvas></div>
    <a onclick="window.app.exportChart('hlog')">Genera immagine</a>
    <div class="chart-container"><canvas id="chartQLN"></canvas></div>
    <a onclick="window.app.exportChart('qln')">Genera immagine</a>
</div>
