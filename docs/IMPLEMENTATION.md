# Technische Umsetzung – Version 2.0.0

## Architektur

Die Anwendung ist eine statische Single-Page-Webapp aus:

- semantischem HTML,
- einer zentralen CSS-Datei,
- datengetriebener JavaScript-Konfiguration,
- einer Spiellogik- und UI-Datei,
- einem generativen Audiomodul,
- Service Worker und Web-App-Manifest.

Es gibt keine Laufzeitabhängigkeiten und keinen Build-Prozess.

## Dateien

### `index.html`

Enthält App-Shell, Ressourcenleiste, Hauptnavigation, Dialog und Script-Einbindung.

### `js/game-data.js`

Zentrale Datenquelle für:

- Skills
- Items und Materialien
- Aktionen
- Rennen und Rivalen
- Regionen
- Sponsoren
- Quests und Erfolge
- Perks
- Einrichtungen und Legacy
- Trainingsziele
- Entscheidungsevents

### `js/app.js`

Enthält:

- State-Schema und Migration
- Save/Load/Export/Import
- Offline-Aktionsabschluss
- Trainingszyklen
- Zielrennen und Bereitschaft
- Rennsimulation
- Inventar, Ausrüstung und Crafting
- Welt, Karriere, Quests und UI-Rendering
- Ereignisse und Eingabebehandlung

### `js/audio.js`

Erzeugt Soundeffekte und Ambient-Musik zur Laufzeit über die Web Audio API. Es werden keine externen Audiodateien benötigt.

### `sw.js`

Cached die Kernassets für Offline-Nutzung. Der Cache-Name enthält die Release-Version, damit alte Dateien bei einem Update entfernt werden.

## Speicherung

Der State wird als JSON in `localStorage` gespeichert. Das Schema besitzt eine interne Version. Beim Laden wird ein gespeicherter State mit einem aktuellen Default-State zusammengeführt und um neue Felder ergänzt.

Wesentliche Schutzmaßnahmen:

- fehlende Felder werden ergänzt,
- Markt und Trainingszyklus werden nach der Migration initialisiert,
- ungültige Referenzen werden nicht als neue Daten vorausgesetzt,
- offene Entscheidungsevents werden nicht überschrieben,
- Export und Import verwenden lesbares JSON.

## Trainingsmodell

`trainingCycle.loads` speichert sechs Belastungsarten. `trainingTargets` liefert fokusabhängige Sollwerte. Die Bewertung berechnet:

- Abdeckung der Kategorien,
- Verhältnis der Gesamtlast,
- Überlastung oberhalb eines Schwellenwerts.

Der Rennmultiplikator mischt aktuellen und letzten Zyklus und ist bewusst begrenzt.

## Rennmodell

Die Simulation verbindet:

- distanzabhängige Gewichte,
- Disziplinskills und Unterstützungsfähigkeiten,
- Körperbereitschaft,
- Equipmentstats,
- Perks,
- Trainingsbalance,
- Strategie und Verpflegung,
- Wetter und Strecke,
- Rivalen und Zufallsereignisse.

Sie produziert Zeit, Platzierung, Splits, Ereignisse, Belohnungen, Loot, Rivalenfortschritt und Mastery.

## Tagesmarkt

Der Markt wird aus dem lokalen Datum deterministisch erzeugt. Dadurch bleibt die Auswahl für den Tag stabil. Bestand und Käufe werden im Savegame gespeichert.

## PWA

- Manifest: `manifest.webmanifest`
- Service Worker: `sw.js`
- Icons: `assets/icon-192.png` und `assets/icon-512.png`
- relative Pfade ermöglichen Hosting in einem GitHub-Pages-Unterpfad.

## Lokaler Server

`tools/dev-server.js` ist ein kleiner statischer Node.js-Server ohne externe Bibliotheken. Er verhindert Pfad-Traversal, setzt passende MIME-Typen und deaktiviert den Cache für Entwicklung.

## Automatische Tests

### `tools/validate-data.js`

Prüft Content-IDs, Referenzen, Voraussetzungen und Datenstruktur.

### `tools/validate-project.js`

Prüft:

- Pflichtdateien,
- HTML-Referenzen,
- Manifest und Icons,
- Service-Worker-Assets,
- konsistente Versionsnummern.

### `tools/smoke-test.js`

Lädt die App in einer simulierten DOM-Umgebung und prüft Kernpfade wie Onboarding, Zielrennen, Training, Ereignisentscheidung, Markt, Rennen und Einstellungen.

### GitHub Actions

`.github/workflows/quality.yml` führt `npm test` bei Pushes und Pull Requests gegen `main` aus.

## Erweiterung

Neue Inhalte sollten bevorzugt in `js/game-data.js` ergänzt werden. Änderungen an neuen Datentypen erfordern zusätzlich Rendering- und State-Logik in `js/app.js`.

Nach jeder Änderung:

```bash
npm test
```
