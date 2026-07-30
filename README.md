# Triathlon Karriere – Complete Career

**Version 2.0.0** · vollständiges Mobile-First-Singleplayer-Triathlon-Rollenspiel für den Browser

Du startest als unbekannter Vereinsathlet in Hohenlohe und entwickelst über Training, Wettkämpfe, Material, Regionen, Sponsoren, Rivalen und eigene Produktentwicklung eine vollständige Triathlonkarriere. Das erste große Ziel ist die Qualifikation für Hawaii. Danach folgen der Sieg, schnellere Zeiten, alternative Builds, Sammlungen, Legacy-Upgrades und die eigene Endurance-Dynastie.

Dieses Paket ist ein **vollständiges neues Repository**. Eine ältere Version ist nicht erforderlich. Die Anwendung besitzt keinen Build-Zwang, kein Framework und kein Backend. Sie kann lokal gestartet und direkt über GitHub Pages veröffentlicht werden.

## Direkt loslegen

- Neueinrichtung ohne vorhandenes Repository: [INSTALLATION.md](INSTALLATION.md)
- Sehr kurze Checkliste: [START-HERE.txt](START-HERE.txt)
- Spielsysteme und Einstieg: [docs/GAMEPLAY-GUIDE.md](docs/GAMEPLAY-GUIDE.md)
- Teststatus: [docs/TEST-REPORT.md](docs/TEST-REPORT.md)

## Umfang der Version 2.0.0

- 18 dauerhaft trainierbare Skills
- 76 Athleten-, Werkstatt- und Karriereaktionen
- 20 Rennen von Supersprint bis Langdistanz-Weltmeisterschaft
- 10 Regionen mit eigenen Boni, Reisekosten und Freischaltungen
- 70 Ausrüstungs-, Verbrauchs-, Prototyp- und Sammlergegenstände
- 16 Materialien und mehrstufige Produktionsketten
- 30 Quests in verbundenen Quest-Reihen
- 27 Erfolge
- 16 Build-Perks mit begrenzten aktiven Slots
- 10 wiederkehrende Rivalen mit Siegen, Niederlagen und Respekt
- 10 Sponsoren mit Zielkonflikten und individuellen Boni
- 6 ausbaubare Einrichtungen
- Zielrennen und mehrteilige Bereitschaftsanalyse
- siebentägige Trainingszyklen mit Fokus, Belastungsverteilung und Überlastungsrisiko
- rotierender Tagesmarkt mit begrenztem Bestand
- dynamische Karriereentscheidungen mit echten Konsequenzen
- Tages- und Wochenziele
- Saison-, Lizenz-, Meisterschafts- und Legacy-System
- persönliche Bestzeiten, Bestplatzierungen und Renn-Mastery
- Ausrüstungszustand, Qualität, Upgrades, Mastery und drei Loadouts
- distanzabhängige Rennplanung mit Pacing, Fueling, Wetter und Ereignissen
- lokale Savegames mit Export, Import und Schema-Migration
- installierbare PWA und Offline-Cache
- generative Soundeffekte, Ambient-Musik und Haptikoption
- automatisierte Daten-, Projekt- und Kernablauftests

## Was Version 2.0 besser verzahnt

### Zielrennen steuern die Karriere

Ein gewähltes Zielrennen verbindet Trainingsplanung, Region, Ausrüstung, Logistik und Coach-Empfehlungen. Die Bereitschaft wird getrennt nach Körperzustand, Skills, Gear, Trainingsplan und Logistik bewertet.

### Training ist ein Wochenplan statt einer XP-Schaltfläche

Jede Athletenaktion erzeugt Belastung in Schwimmen, Rad, Lauf, Kraft, Regeneration oder Rennen. Ein Trainingszyklus belohnt sinnvolle Abdeckung und bestraft einseitige Überlastung. Der aktuelle und der vorherige Zyklus wirken auf die Rennleistung.

### Loot besitzt mehrere Lebensphasen

Gegenstände werden gefunden, gekauft, hergestellt, ausgerüstet, abgenutzt, repariert, verbessert und durch Nutzung gemeistert. Seltene Basismodelle können Bestandteil höherwertiger Produktionsketten sein. Sammlerwert und Wettkampfwert bleiben getrennt.

### Regionen sind funktional

Reisen verändert Trainingsboni, Shopkonditionen, Rennzugang, Materialien und Logistik. Eine Region ist nicht nur ein anderes Hintergrundbild.

### Karriereentscheidungen erzeugen Geschichten

Nach Aktionen können Situationen auftreten, bei denen zwischen Geld, Reputation, Materialien, Energie, Moral oder Beziehungen abgewogen wird. Eine offene Entscheidung wird nicht durch ein weiteres Ereignis überschrieben.

### Mehrere Fortschrittspfade bleiben konkurrenzfähig

Sportliche Skills, Crafting, Sponsorenzugang, Shop, Quests, Regionen und Rivalen führen auf unterschiedlichen Wegen zu konkurrenzfähigen Builds. Legendäres Gear ersetzt kein Training, ein reiner Crafting-Build bleibt aber spielbar.

## Kern-Gameplay-Loop

1. Zielrennen auswählen und Bereitschaft prüfen.
2. Trainingsfokus und fehlende Belastungsreize erkennen.
3. Athleten-, Werkstatt- und Karriereaktion parallel starten.
4. Skills, Form, Materialien, Geld, Reputation und Regionen entwickeln.
5. Gear bauen, pflegen, aufwerten und als Loadout speichern.
6. Pacing, Verpflegung und Wetterschutz für das Rennen festlegen.
7. Gegen Rivalen antreten, Drops erhalten und Rekorde verbessern.
8. Quests, Verträge, Tagesziele und Saisonstufen abschließen.
9. Hawaii erreichen und über Legacy, Meisterschaft, Sammlung und Bestzeiten weiterspielen.

## Lokaler Start

Mit Node.js:

```bash
npm start
```

Oder über die mitgelieferten Startdateien:

- Windows: `start_local.bat`
- macOS/Linux: `./start_local.sh`

Danach öffnet sich das Spiel unter `http://127.0.0.1:8080`.

Es müssen keine Pakete mit `npm install` heruntergeladen werden.

## Qualitätsprüfung

```bash
npm test
```

Der Befehl prüft:

- Datenreferenzen und doppelte IDs,
- Pflichtdateien, Manifest und Service Worker,
- JavaScript-Kernabläufe in einer simulierten Browserumgebung.

## Projektstruktur

```text
triathlon-game/
├── .github/workflows/quality.yml
├── assets/
├── css/styles.css
├── docs/
├── js/
│   ├── app.js
│   ├── audio.js
│   └── game-data.js
├── tools/
│   ├── dev-server.js
│   ├── smoke-test.js
│   ├── validate-data.js
│   └── validate-project.js
├── index.html
├── manifest.webmanifest
├── sw.js
├── package.json
├── start_local.bat
└── start_local.sh
```

## Speicherung und Datenschutz

Der Spielstand liegt ausschließlich im `localStorage` des Browsers. Es gibt kein Benutzerkonto, kein Tracking-Backend und keine Cloud-Synchronisierung. Wer Browserdaten löscht oder auf ein anderes Gerät wechselt, benötigt eine zuvor exportierte Savegame-Datei.

Empfehlung: nach wichtigen Karriereschritten über das Zahnrad einen Spielstand exportieren.

## Reale Produktbezeichnungen

Einige seltene Gegenstände verwenden reale Modellbezeichnungen als austauschbaren Inhalt eines privaten Prototyps. Logos und fremde Produktbilder sind nicht enthalten. Hinweise zur privaten Nutzung stehen in [PRIVATE-USE-NOTICE.md](PRIVATE-USE-NOTICE.md).

## Bewusste Grenzen

Version 2.0.0 ist ein reifes persönliches Singleplayer-Produkt, aber kein Online-Service. Nicht enthalten sind Benutzerkonten, Cloud-Saves, Mehrspieler, serverseitige Ranglisten, Echtgeldkäufe oder eine reale Trainingsdaten-Schnittstelle. Diese Grenzen vermeiden laufende Serverkosten und machen das Spiel vollständig selbst hostbar.
