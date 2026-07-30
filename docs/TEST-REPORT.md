# Testbericht – Version 2.0.0

## Gegenstand

Geprüft wurde das vollständige Repository `Triathlon Karriere – Complete Career` als statische Webapp.

## Automatisierte Prüfungen

### JavaScript-Syntax

Geprüft mit `node --check`:

- `js/game-data.js`
- `js/audio.js`
- `js/app.js`
- `tools/dev-server.js`
- `tools/validate-data.js`
- `tools/validate-project.js`
- `tools/smoke-test.js`

### Datenvalidator

Erwarteter Umfang:

- 18 Skills
- 70 Items
- 76 Aktionen
- 20 Rennen
- 10 Rivalen
- 10 Sponsoren
- 30 Quests
- 10 Regionen
- 16 Perks
- 27 Erfolge
- 16 Materialien
- 8 Entscheidungsevents

Der Validator prüft insbesondere doppelte IDs und ungültige Referenzen.

### Projektvalidator

Geprüft werden:

- alle Pflichtdateien,
- HTML-Quellen und Stylesheets,
- Manifest-Syntax und Icons,
- Service-Worker-Assetliste,
- konsistente Versionsnummern.

### DOM-Smoke-Test

Der automatisierte Kernablauftest prüft:

1. Initialisierung und erstes Rendering,
2. Onboarding mit Athletenname und Fokus,
3. Wahl eines Zielrennens,
4. Start und Offline-Abschluss einer Trainingsaktion,
5. Aktualisierung der Trainingsbelastung,
6. Erzeugung und Auflösung einer dynamischen Entscheidung,
7. Rendering des Tagesmarktes,
8. Rennsimulation und Zählung eines Zielrennen-Finishes,
9. Speicherung der Audioeinstellungen,
10. Abwesenheit erfasster JavaScript-Laufzeitfehler in der Testumgebung.

## Manuell technisch geprüft

- Repository-Struktur ist direkt für GitHub Pages geeignet.
- `index.html` liegt im Root.
- alle App-Pfade sind relativ.
- Service Worker verwendet den Cache `triathlon-karriere-v2.0.0`.
- Startskripte verwenden den Repository-Ordner als Arbeitsverzeichnis.
- Savegame-Export benennt Dateien als v2-Save.
- eine bestehende offene Entscheidung kann nicht durch eine neue Entscheidung überschrieben werden.

## Bekannte Grenzen der Prüfung

- Kein vollständiger mehrwöchiger menschlicher Balancing-Test mit Telemetrie.
- Keine manuelle Testmatrix über alle iOS-, Android- und Desktop-Browser.
- Keine automatisierte visuelle Pixelprüfung.
- Web Audio und Haptik hängen von Browser, Gerät und Nutzerfreigabe ab.
- Browser können Audio vor der ersten Nutzerinteraktion blockieren; das ist erwartetes Plattformverhalten.

## Bewerteter Status

Das Paket ist für die persönliche Nutzung, lokalen Start und statisches Hosting als zusammenhängendes Release vorbereitet. Die automatisierten Tests decken Datenkonsistenz, Projektstruktur und zentrale Spielabläufe ab. Sie ersetzen keine langfristige Spielbalance-Studie, reduzieren aber typische Integrations-, Referenz- und Savegamefehler deutlich.
