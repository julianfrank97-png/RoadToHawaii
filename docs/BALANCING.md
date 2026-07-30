# Balancing-Grundlage – Version 2.0.0

## 1. Ziel des Balancings

Das Spiel soll langfristige Progression erzeugen, ohne eine einzige optimale Route zu erzwingen. Training, Ausrüstung, Taktik, Produktion, Karriere und Welt sollen einander verstärken, aber kein System darf alle anderen ersetzen.

## 2. Leistungsmodell

Die Rennleistung entsteht aus fünf Blöcken:

1. dauerhafte Skills,
2. aktueller Körperzustand,
3. ausgerüstete Werte und Zustand,
4. Trainingsplanung und Zielvorbereitung,
5. Rennentscheidungen und Ereignisse.

Der Körperzustand wird aus Energie, Form, Moral und Ermüdung berechnet. Er begrenzt, wie viel der dauerhaften Fähigkeiten im konkreten Rennen nutzbar ist.

## 3. Distanzgewichtung

### Sprint und Supersprint

- hohe relative Bedeutung von Wechseln, Kraft, Technik und aggressiver Renntaktik,
- Ernährung nur begrenzt relevant,
- kurze Fehler und Sekundenverluste haben hohen Einfluss.

### Standarddistanz

- ausgewogenste Skillprüfung,
- Disziplinskills, Technik, Ausdauer und Renntaktik müssen zusammenpassen.

### Mitteldistanz

- hohe Bedeutung von Radfahren, Aerodynamik, Ernährung und Lauf unter Vorermüdung,
- Komfort und Zuverlässigkeit gewinnen an Wert.

### Langdistanz

- Ausdauer, Ernährung, Regeneration, mentale Stärke, Organisation und Materialzustand werden entscheidend,
- aggressives Pacing kann einen starken Charakter trotzdem zerstören.

## 4. Trainingszyklen

Die Zykluswertung berechnet eine Abdeckung der Sollbelastung und zieht starke Überlastung ab. Der Wert wird begrenzt und mit dem letzten Zyklus gemischt, damit eine einzelne kurzfristige Aktion nicht die gesamte Vorbereitung bestimmt.

Die daraus entstehende Rennwirkung bewegt sich nur in einem moderaten Korridor. Trainingsplanung ist relevant, aber ein hoher Zykluswert ersetzt keine Skills oder Ausrüstung.

## 5. XP-Progression

XP wächst langfristig an. Aktionen besitzen einen Primärskill und meist wenige Sekundärskills. So bleiben Produktions- und Unterstützungsfähigkeiten miteinander verbunden, ohne automatisch gemeinsam zu maximieren.

Grundregeln:

- kurze Aktionen sind flexibel, aber pro Minute nicht immer am effizientesten,
- lange Idle-Aktionen sind planbar,
- aktive Vorbereitung verbessert Qualität oder Nebenbelohnungen,
- spätere Aktionen benötigen Zugang, Ressourcen oder Skill-Level.

## 6. Ausrüstungsanteil

Gear optimiert einen vorhandenen Athleten. Es soll:

- auf frühen Levels deutlich spürbar sein,
- im Endgame Build-Unterschiede erzeugen,
- aber keine fehlende sportliche Basis kompensieren.

High-End-Gegenstände besitzen Trade-offs, etwa:

- Aero gegen Seitenwindstabilität,
- Geschwindigkeit gegen Komfort,
- Gewicht gegen Haltbarkeit,
- Leistung gegen Wartungskosten.

## 7. Loot und planbarer Fortschritt

Zufallsloot darf begeistern, aber nicht die einzige Endgame-Route sein.

- Shop: sichere Grundversorgung
- Tagesmarkt: günstige Gelegenheit
- Rennen: thematischer Loot und Rivalenbelohnungen
- Quests: gezielte einzigartige Inhalte
- Sponsoren: vertraglich gebundener Zugang
- Crafting: planbare Spezialisierung

Ein seltenes Item kann eine Produktionskette beschleunigen oder verändern, darf aber nicht dauerhaft alle Alternativen entwerten.

## 8. Ökonomie

Geldquellen:

- Rennen
- Sponsorverträge
- Karriereaktionen
- Quests und Erfolge

Geldsenken:

- Reisen
- Startgebühren
- Shop und Tagesmarkt
- Reparaturen und Upgrades
- Einrichtungen
- Entwicklung und Produktion

Materialsenken verhindern, dass Training und Loot langfristig nur Lagerbestände aufblasen. Einrichtungen reduzieren später Reibung, aber beseitigen die Ökonomie nicht vollständig.

## 9. Idle gegen aktives Spiel

Idle-Spiel liefert verlässlichen Kernfortschritt. Aktive Spieler erhalten Vorteile durch:

- bessere Aktionsauswahl,
- Zielrennenplanung,
- markt- und regionsabhängige Entscheidungen,
- passende Loadouts,
- Rennstrategie,
- dynamische Ereignisse.

Der Vorteil soll aus Qualität der Entscheidungen entstehen, nicht aus permanenter Anwesenheit.

## 10. Risiko und Frustgrenzen

Negative Ereignisse dürfen:

- Ressourcen kosten,
- die Strategie verändern,
- ein Rennen erschweren.

Sie dürfen nicht:

- große Teile des Spielstands löschen,
- legendäre Ausrüstung ohne Gegenmaßnahme vernichten,
- einen Spieler über lange Zeit vollständig blockieren.

Defekte werden durch Zustand, Mechanik, Material und Strategie beeinflusst. Regeneration soll Planung belohnen, aber keine reale Wartepflicht erzeugen, die das Spiel unspielbar macht.

## 11. Build-Vielfalt

Beispielhafte konkurrenzfähige Wege:

- explosiver Kurzdistanzathlet,
- effizienter Langdistanzathlet,
- Aero-Spezialist,
- technischer Allrounder,
- selbstversorgender Crafting-Athlet,
- Sponsor- und Medienkarriere,
- zuverlässiger Minimalist.

Perk-Slots und Gear-Trade-offs verhindern, dass alle Vorteile gleichzeitig aktiv sind.

## 12. Endgame

Nach Hawaii bleiben folgende Ziele:

- Sieg und schnellere Zeiten,
- alle Rivalen schlagen,
- alle Rennen meistern,
- vollständige Sammlung,
- perfektes Gear und Prototypen,
- Einrichtungen maximieren,
- Saison- und Legacy-Fortschritt,
- alternative Distanz-Builds.

## 13. Parameter für spätere Feinabstimmung

Die wichtigsten Stellschrauben liegen zentral im Code und in `js/game-data.js`:

- Aktionsdauer und XP,
- Energie- und Ermüdungswerte,
- Trainingslasten und Fokusziele,
- Rennschwierigkeit und Rivalenwerte,
- Drop-Chancen,
- Itemstats und Upgrade-Kosten,
- Shoppreise und Materialausbeute,
- Sponsorziele,
- Questanforderungen.

Für echtes Feintuning sollten spätere Spielstände über mehrere Karrierestufen beobachtet werden. Der aktuelle Stand ist systemisch balanciert und automatisiert geprüft, aber keine groß angelegte Telemetrie- oder Spielerteststudie.
