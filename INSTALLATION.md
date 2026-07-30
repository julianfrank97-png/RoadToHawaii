# Installation von Anfang an

Diese Anleitung setzt **kein vorhandenes Repository** und keine ältere Spielversion voraus. Das ZIP-Paket enthält bereits alle Dateien für das Spiel, den lokalen Start, GitHub Pages und automatische Qualitätsprüfungen.

# Teil A – Spiel zuerst lokal testen

## 1. ZIP-Datei entpacken

Entpacke `triathlon-game-v2.0.0.zip` an einen Ort, den du wiederfindest.

Im entpackten Ordner liegt der eigentliche Repository-Ordner:

```text
triathlon-game/
```

Darin muss `index.html` direkt sichtbar sein.

## 2. Windows

Doppelklicke im Ordner `triathlon-game` auf:

```text
start_local.bat
```

Die Datei verwendet zuerst Node.js und alternativ Python. Der Browser öffnet normalerweise automatisch:

```text
http://127.0.0.1:8080
```

Bleibt ein schwarzes Terminalfenster geöffnet, ist das korrekt. Es stellt den lokalen Server bereit. Zum Beenden das Fenster schließen oder `Strg+C` drücken.

## 3. macOS oder Linux

Terminal im Ordner `triathlon-game` öffnen und ausführen:

```bash
chmod +x start_local.sh
./start_local.sh
```

Danach im Browser öffnen:

```text
http://127.0.0.1:8080
```

## 4. Alternative mit Node.js

Node.js 18 oder neuer genügt. Es müssen keine zusätzlichen Pakete installiert werden.

```bash
npm start
```

Ein anderer Port kann so verwendet werden:

```bash
node tools/dev-server.js 8081
```

## Warum nicht einfach `index.html` doppelklicken?

Viele Browser beschränken Service Worker, PWA-Funktionen und bestimmte lokale Dateien bei `file://`. Über den mitgelieferten lokalen Server verhält sich die App wie später auf GitHub Pages.

# Teil B – Neues GitHub-Repository im Browser erstellen

Dies ist die einfachste Variante ohne Git-Befehle.

## 1. GitHub-Konto anlegen oder anmelden

Melde dich bei GitHub an.

## 2. Neues Repository erstellen

1. Oben rechts auf das Plus-Symbol klicken.
2. `New repository` wählen.
3. Als Namen beispielsweise eintragen:

```text
triathlon-karriere
```

4. Für GitHub Pages mit einem kostenlosen Konto `Public` wählen.
5. **Keine** README, `.gitignore` oder Lizenz erzeugen lassen. Diese Dateien sind bereits im Paket vorhanden.
6. `Create repository` anklicken.

## 3. Alle Spieldateien hochladen

Im leeren Repository:

1. `uploading an existing file` oder `Add file` → `Upload files` öffnen.
2. Den Ordner `triathlon-game` auf deinem Computer öffnen.
3. **Den gesamten Inhalt dieses Ordners** in die Upload-Fläche ziehen.
4. Prüfen, dass `index.html`, `css`, `js`, `assets`, `docs`, `tools` und `.github` hochgeladen werden.
5. Als Commit-Nachricht eintragen:

```text
Initial release: Triathlon Karriere v2.0.0
```

6. Direkt auf den Branch `main` committen.

### Wichtig zur Ordnerstruktur

Richtig:

```text
Repository
├── index.html
├── css/
├── js/
└── ...
```

Falsch:

```text
Repository
└── triathlon-game/
    ├── index.html
    └── ...
```

Bei der falschen Struktur findet GitHub Pages die Startdatei nicht im Repository-Stamm.

## 4. GitHub Pages aktivieren

1. Im Repository `Settings` öffnen.
2. Links `Pages` auswählen.
3. Unter `Build and deployment` bei `Source` wählen:

```text
Deploy from a branch
```

4. Branch `main` auswählen.
5. Ordner `/(root)` auswählen.
6. `Save` anklicken.

GitHub zeigt anschließend die Adresse der Website an. Sie folgt normalerweise diesem Muster:

```text
https://DEIN-BENUTZERNAME.github.io/triathlon-karriere/
```

Die erstmalige Veröffentlichung kann einen Moment benötigen. Auf der Pages-Seite wird der aktuelle Bereitstellungsstatus angezeigt.

## 5. Automatischer Qualitätscheck

Nach dem Upload erscheint im Repository der Bereich `Actions`. Der mitgelieferte Workflow führt bei Änderungen automatisch aus:

```bash
npm test
```

Ein grüner Haken bedeutet, dass Daten, Dateiverweise und Kernabläufe den automatisierten Test bestanden haben.

# Teil C – Neues Repository über Git-Befehle

Diese Variante ist optional und sinnvoll, wenn Git bereits installiert ist.

1. Auf GitHub ein leeres Repository `triathlon-karriere` erstellen.
2. Terminal im lokalen Ordner `triathlon-game` öffnen.
3. Folgende Befehle ausführen und `DEIN-BENUTZERNAME` ersetzen:

```bash
git init
git add .
git commit -m "Initial release: Triathlon Karriere v2.0.0"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/triathlon-karriere.git
git push -u origin main
```

Danach GitHub Pages wie in Teil B aktivieren.

# Teil D – Spiel als App installieren

Nach der Veröffentlichung über GitHub Pages:

## iPhone/iPad

1. Spiel in Safari öffnen.
2. Teilen-Symbol antippen.
3. `Zum Home-Bildschirm` wählen.

## Android

1. Spiel in Chrome öffnen.
2. Browsermenü öffnen.
3. `App installieren` oder `Zum Startbildschirm hinzufügen` wählen.

## Desktop

Unterstützte Browser zeigen in oder neben der Adressleiste eine Installationsoption an.

# Teil E – Spielstand sichern

Der Spielstand befindet sich **nicht im GitHub-Repository**, sondern lokal im jeweiligen Browser.

## Backup erstellen

1. Spiel öffnen.
2. Zahnrad öffnen.
3. `Spielstand exportieren` wählen.
4. Die JSON-Datei sicher speichern.

## Backup wiederherstellen

1. Zahnrad öffnen.
2. `Spielstand importieren` wählen.
3. Die zuvor exportierte JSON-Datei auswählen.

Besonders vor folgenden Aktionen exportieren:

- Browserdaten löschen,
- Gerät wechseln,
- Domain oder Repository-Namen ändern,
- größere spätere Spielupdates einspielen.

# Teil F – Eigene Änderungen veröffentlichen

## Browser-Variante

1. Geänderte Dateien im Repository ersetzen oder hochladen.
2. Commit erstellen.
3. GitHub Pages veröffentlicht den neuen Stand automatisch.

## Git-Variante

```bash
git add -A
git commit -m "Describe your game update"
git push
```

Vor jedem Upload lokal ausführen:

```bash
npm test
```

# Teil G – Häufige Probleme

## GitHub Pages zeigt 404

Prüfen:

- `index.html` liegt direkt im Repository-Stamm.
- Pages verwendet `main` und `/(root)`.
- Das Repository ist bei einem kostenlosen Konto öffentlich.
- Im Bereich `Actions` oder `Settings` → `Pages` ist kein Fehler sichtbar.

## Alte Version bleibt sichtbar

Die App verwendet einen Service Worker und Offline-Cache.

1. Seite vollständig neu laden.
2. Browser-Tab schließen und erneut öffnen.
3. Notfalls Website-Daten dieser Pages-Adresse löschen.
4. Danach Spielstand importieren, falls zuvor exportiert.

## Lokaler Port 8080 ist belegt

```bash
node tools/dev-server.js 8081
```

Dann `http://127.0.0.1:8081` öffnen.

## `npm` wird nicht gefunden

Node.js ist nicht installiert oder nicht im Suchpfad. Die App kann alternativ mit Python 3 gestartet werden:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

## Spielstand auf einem anderen Gerät fehlt

Das ist erwartbar. Savegames sind lokal an Browser und Website-Adresse gebunden. Exportdatei auf das neue Gerät übertragen und dort importieren.

# Teil H – Öffentlichkeit und reale Produktnamen

Eine GitHub-Pages-Website ist öffentlich erreichbar. Auch ein Pages-Deployment aus einem privaten Repository ist kein privater Spielserver. Das Paket ist für die persönliche, nicht kommerzielle Nutzung zusammengestellt. Reale Produkt- oder Modellnamen sind zentral austauschbar und sollten vor einer breiteren Veröffentlichung geprüft oder ersetzt werden.
