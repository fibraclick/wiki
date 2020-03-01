---
title: "Grafici HLOG/QLN"
slug: hlog
date: 2020-02-29T16:00:00+01:00
lastmod: 2020-03-01T23:00:00+01:00
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
    <p>
        <input type="checkbox" id="hideFrequencies" onchange="window.app.toggleHideFrequencies()">
        <label for="hideFrequencies">Nascondi toni non utilizzati</label>
    </p>
    <canvas id="chartHLOG"></canvas>
    <a onclick="window.app.exportChart('hlog')">Esporta come immagine</a>
    <canvas id="chartQLN"></canvas>
    <a onclick="window.app.exportChart('qln')">Esporta come immagine</a>
</div>
