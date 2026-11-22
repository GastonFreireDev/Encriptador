#!/usr/bin/env python3
"""Genera docs/index.html (versión instalable en iPhone) a partir de bitacora-de-fuerza/index.html.
Uso: python3 bitacora-de-fuerza/build.py"""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src = (root / 'bitacora-de-fuerza' / 'index.html').read_text()
head = '''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#eef0f3" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0b0f13" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Bitácora">
<meta name="format-detection" content="telephone=no">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" type="image/png" href="icon-192.png">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>
</head>
<body>
'''
tail = '''
<script>if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}</script>
</body>
</html>
'''
(root / 'docs' / 'index.html').write_text(head + src + tail)
print('docs/index.html generado')
