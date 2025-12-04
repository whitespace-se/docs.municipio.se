---
sidebar_position: 1
title: Municipio för utvecklare
---

# Municipio för utvecklare

Municipio är ett WordPress-baserat ramverk utvecklat för offentliga
organisationer med höga krav på tillgänglighet, säkerhet och långsiktig
förvaltning. För dig som utvecklare innebär det en gemensam, beprövad grund som
gör det enklare att bygga och förvalta webbplatser utan att uppfinna allt själv.

## Plattformens grund

Den tekniska definitionen av plattformen finns i **Municipio LTS-bundlen**:

- GitHub:
  [https://github.com/municipio-se/municipio-lts](https://github.com/municipio-se/municipio-lts)
- Hanteras via Composer och samlar alla centrala paket och beroenden.

LTS-bundlen säkerställer att:

- alla installationer utgår från samma bas,
- beroenden är versionshanterade och spårbara,
- uppdateringar kan göras kontrollerat.

## Starta ett nytt projekt

När du vill komma igång med ett nytt projekt kan du välja att utgå från vår
boilerplate:

- GitHub:
  [https://github.com/municipio-se/municipio-lts-boilerplate](https://github.com/municipio-se/municipio-lts-boilerplate)

Boilerplaten är en rekommenderad startpunkt, inte ett krav. Den ger en färdig
struktur för hur du kan organisera teman, anpassningar och projektupplägg i
linje med hur vi själva arbetar – men du kan också bygga upp en egen struktur så
länge den utgår från LTS-bundlen.

## Utvecklarens förhållningssätt

Som utvecklare i Municipio-ekosystemet är några principer extra viktiga:

- **Bygg ovanpå, inte i kärnan** – anpassningar ska i första hand ligga utanför
  plattformens grundpaket.
- **Håll dig nära LTS** – utgå från LTS-bundlen för att förenkla uppdateringar
  och förvaltning.
- **Använd Composer konsekvent** – så att beroenden blir tydliga, spårbara och
  hanterbara över tid.
