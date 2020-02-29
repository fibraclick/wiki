---
title: "Grafici HLOG/QLN"
slug: hlog
date: 2020-02-29T16:00:00+01:00
lastmod: 2020-02-29T16:00:00+01:00
js: ["hlog.js"]
rawjs: ["Chart.min.js"]
scss: ["hlog.scss"]
---

Carica il file statistiche avanzate generato dal FRITZ!Box.

<p>
    <input type="file" name="file" id="file">
</p>

<p id="profile">
    <span id="profile"></span>
</p>

<div id="charts">
    <canvas id="chartHLOG"></canvas>
    <a onclick="window.app.export('hlog')">Esporta come immagine</a>
    <canvas id="chartQLN"></canvas>
    <a onclick="window.app.export('qln')">Esporta come immagine</a>
</div>
