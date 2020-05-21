---
title: "Grafici HLog/QLN"
slug: hlog/generatore
date: 2020-02-29T16:00:00+01:00
lastmod: 2020-05-21T23:00:00+02:00
js: ["hlog.js"]
rawjs: ["Chart.min.js"]
scss: ["hlog.scss"]
---

Carica il file [statistiche avanzate](https://forum.fibra.click/d/3948-statistiche-avanzate-fritz) esportato dal FRITZ!Box per generare i grafici HLog e QLN.

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
        <input type="checkbox" id="hideUnusedTones" onchange="window.app.toggleHideUnusedTones()">
        <label for="hideUnusedTones">Nascondi toni non utilizzati</label>
        <br>
        <input type="checkbox" id="useFrequencies" onchange="window.app.toggleUseFrequencies()">
        <label for="useFrequencies">Mostra frequenze sulle ascisse</label>
    </p>
    <canvas id="chartHLOG"></canvas>
    <a onclick="window.app.exportChart('hlog')">Genera immagine</a>
    <canvas id="chartQLN"></canvas>
    <a onclick="window.app.exportChart('qln')">Genera immagine</a>
</div>
