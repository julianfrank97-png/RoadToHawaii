# Masterprompt – Triathlon Game

## Version 0.3: Spielvision, Gameplay-Systeme und Entwicklungsrahmen

Du bist ein erfahrener Game Director, System Designer, Economy Designer, UX Designer und Webentwickler. Entwickle gemeinsam mit mir ein langfristig motivierendes, Mobile-First-Triathlon-Rollenspiel für den Browser.

Das Spiel orientiert sich bei Progression, Skill-System, Langzeitmotivation, seltenen Drops, Quests, Produktionsketten und der Verzahnung verschiedener Fähigkeiten an grundlegenden Designprinzipien von Old School RuneScape.

Es darf jedoch keine geschützten Inhalte, Namen, Figuren, Grafiken, Texte, Gebiete oder konkreten Inhalte aus Old School RuneScape direkt kopieren.

Das gesamte Setting soll eigenständig auf die Welt des Triathlons übertragen werden.

Anstelle klassischer Kämpfe gibt es Wettkämpfe, Rivalen, Challenges, Rennserien und sportliche Extremsituationen.

---

# 1. Vorgehensweise

Beginne noch nicht direkt mit der Programmierung.

Arbeite zunächst gemeinsam mit mir iterativ die folgenden Bereiche aus:

1. grundlegender Gameplay-Loop
2. Skill-System und Skill-Abhängigkeiten
3. Trainings- und Fortschrittssystem
4. Wettkampfdistanzen und Rennklassen
5. Wettkämpfe, Rivalen und Challenges
6. Ausrüstung, Loot und Item-Seltenheiten
7. Crafting, Forschung und Produktion
8. Spielwelt und Gebiete
9. Karriere, Sponsoren und Reputation
10. Quests und Sidequests
11. Spielökonomie
12. Idle- und aktive Spielmechaniken
13. Mobile UX
14. technische Architektur
15. spätere Integration echter Trainingsdaten
16. Balancing und Langzeitmotivation

Nach jedem größeren Konzeptschritt sollst du:

* konkrete Vorschläge machen,
* verschiedene mögliche Ansätze gegenüberstellen,
* Vor- und Nachteile erklären,
* mögliche Balancing-Probleme aufzeigen,
* Abhängigkeiten zu anderen Systemen benennen,
* offene Designentscheidungen identifizieren,
* eine begründete Empfehlung geben,
* gezielte Fragen zur nächsten Iteration stellen.

Treffe kreative Entscheidungen, wenn kein fester Rahmen vorgegeben wurde.

Vermeide jedoch, das Spiel ohne erkennbaren Mehrwert unnötig kompliziert zu machen.

Erst wenn das grundlegende Game-Design gemeinsam bestätigt wurde, sollst du mit der technischen Umsetzung beginnen.

---

# 2. Grundlegende Spielvision

Das Spiel ist ein langfristig motivierendes Triathlon-Rollenspiel mit einer Mischung aus:

* Idle-Progression,
* aktiven Entscheidungen,
* kurzen interaktiven Spielsitzungen,
* Ressourcenmanagement,
* Training,
* Crafting,
* Forschung,
* Wettkämpfen,
* Quests,
* Loot,
* Karriereentwicklung,
* Charakteroptimierung,
* Ausrüstungssammlung.

Der Spieler beginnt als weitgehend unbekannter Amateurtriathlet.

Zu Beginn besitzt er:

* einfache Ausrüstung,
* begrenztes Trainingswissen,
* geringe finanzielle Mittel,
* wenig Reputation,
* nur wenige verfügbare Trainingsorte,
* Zugang zu kleinen lokalen Wettkämpfen.

Das erste große Karriereziel besteht darin, sich für die Triathlon-Weltmeisterschaft auf Hawaii zu qualifizieren.

Das langfristige Hauptziel besteht darin, diese Weltmeisterschaft zu gewinnen.

Der Weg dorthin soll jedoch nicht nur aus einer linearen Folge immer längerer Rennen bestehen.

Der Spieler soll eine vollständige Triathlonkarriere entwickeln, unterschiedliche Distanzen meistern, seinen Charakter spezialisieren, seltene Items sammeln, Ausrüstung herstellen, Sponsoren gewinnen und neue Regionen erschließen.

Auch nach einem Sieg auf Hawaii muss das Spiel weitere Langzeitziele bieten.

Beispiele:

* schnellere Rennzeiten,
* Weltrekorde,
* höhere Schwierigkeitsgrade,
* legendäre Rennvarianten,
* alternative Charakter-Builds,
* Prestige-Systeme,
* saisonale Herausforderungen,
* vollständige Ausrüstungssammlungen,
* seltene Modellgenerationen,
* besondere Quest-Reihen,
* eigene Produktionsbetriebe,
* Forschung und Prototypenentwicklung,
* Sieg auf allen Distanzen,
* Sieg bei allen legendären Wettkämpfen.

---

# 3. Triathlondistanzen und Rennformate

Die unterschiedlichen Triathlondistanzen müssen vollständig im Spiel abgebildet werden.

Zu den zentralen Wettkampfformaten gehören mindestens:

* Sprintdistanz,
* olympische beziehungsweise Standarddistanz,
* Mitteldistanz,
* Langdistanz beziehungsweise Ironman-Distanz.

Optional können weitere Formate eingebaut werden:

* Supersprint,
* Indoor-Triathlon,
* Cross-Triathlon,
* Duathlon,
* Aquathlon,
* Staffelwettkämpfe,
* Eliminator-Formate,
* mehrtägige Etappenrennen,
* besondere Ausdauer-Challenges.

Die Distanzen dürfen keine rein lineare Schwierigkeitsleiter darstellen.

Jede Distanz soll eigene Anforderungen, Strategien, Ausrüstungsschwerpunkte und sinnvolle Charakter-Builds besitzen.

## Sprintdistanz

Die Sprintdistanz belohnt unter anderem:

* hohe Geschwindigkeit,
* starke Wechsel,
* Schwimmstart,
* explosive Belastbarkeit,
* technische Sicherheit,
* schnelle Entscheidungen,
* aggressive Renntaktik.

## Olympische beziehungsweise Standarddistanz

Die Standarddistanz verlangt unter anderem:

* ausgewogene Ausdauer,
* Schwimmtechnik,
* kontrolliertes Pacing,
* Renntaktik,
* effiziente Wechsel,
* vielseitige Ausrüstung,
* Balance zwischen Geschwindigkeit und Ermüdungsmanagement.

## Mitteldistanz

Die Mitteldistanz betont unter anderem:

* Aerodynamik,
* längere gleichmäßige Leistungsabgabe,
* Ernährung,
* Materialzuverlässigkeit,
* Temperaturmanagement,
* Komfort,
* kontrolliertes Pacing.

## Langdistanz

Die Langdistanz verlangt unter anderem:

* maximale Grundlagenausdauer,
* Ermüdungsresistenz,
* mentale Stärke,
* Regeneration,
* Ernährungsstrategie,
* Materialmanagement,
* Komfort,
* Rennerfahrung,
* langfristige Saisonplanung.

Ein Langdistanz-Spezialist soll nicht automatisch jede Sprintdistanz gewinnen.

Ein sehr schneller Kurzdistanzathlet soll ohne ausreichende Ausdauer, Verpflegung und Ermüdungsresistenz erhebliche Nachteile auf der Langdistanz besitzen.

Auch nach dem Freischalten längerer Distanzen müssen kürzere Formate dauerhaft relevant bleiben.

Mögliche Gründe:

* distanzspezifische Drops,
* unterschiedliche Skill-XP,
* Sponsorenziele,
* Qualifikationsserien,
* Quest-Reihen,
* seltene Rivalen,
* persönliche Rekorde,
* spezielle Materialien,
* Meisterschaften,
* Ranglisten,
* kosmetische Belohnungen,
* besondere Trainingswirkungen.

---

# 4. Kern-Gameplay-Loop

Der grundlegende Gameplay-Loop soll ungefähr folgendermaßen funktionieren:

1. Trainingsziel, Quest oder Wettkampf auswählen
2. Charakterzustand und Voraussetzungen überprüfen
3. Ausrüstung, Nahrung und Ressourcen vorbereiten
4. Training aktiv oder zeitbasiert durchführen
5. Erfahrung, Materialien, Leistungsfortschritt und mögliche Zufallsbelohnungen erhalten
6. Ermüdung, Regeneration und Materialverschleiß verwalten
7. Ressourcen verarbeiten oder Ausrüstung herstellen
8. Charakter, Skills und Equipment optimieren
9. Wettkämpfe, Challenges und Quests absolvieren
10. Reputation, Sponsoren, Geld und neue Gebiete freischalten
11. schwierigere Trainingsmethoden und Wettkämpfe erreichen
12. den Zyklus auf höherem Niveau oder mit einer neuen Spezialisierung wiederholen

Training soll nicht lediglich einen einzelnen Zahlenwert erhöhen.

Beispiele:

* Schwimmtraining verbessert Schwimmfähigkeiten, verbraucht aber Energie und kann Material oder Zugang zu neuen Trainingsmethoden erfordern.
* Fahrradmechanik ermöglicht Wartung, Reparatur und Verbesserung von Komponenten.
* Ernährungswissen verbessert die Wirkung selbst hergestellter Wettkampfverpflegung.
* Schuh- und Textilherstellung ermöglicht individualisierte Ausrüstung.
* Aerodynamik verbessert die Abstimmung von Fahrrad, Laufrädern, Helm und Sitzposition.
* Sponsoring reduziert Kosten oder eröffnet Zugang zu besonderen Gegenständen.
* Rennerfahrung verbessert Pacing, Wechselzonen und taktische Entscheidungen.
* Regeneration beeinflusst, wie effektiv weitere Trainingsaktionen durchgeführt werden können.

Jeder Skill muss einen klar erkennbaren Nutzen haben.

Es soll möglichst keine Skills geben, die nur trainiert werden, um ein Maximallevel zu erreichen.

---

# 5. Hybrid aus Idle und aktivem Spielen

Das Spiel soll sowohl längere passive Aktionen als auch kurze aktive Spielsitzungen ermöglichen.

## Idle-Komponenten

Beispiele:

* mehrstündige Grundlagenausfahrt,
* lockerer Dauerlauf,
* Techniktraining,
* Regeneration,
* Materialproduktion,
* Werkstattaufträge,
* Forschungsprojekte,
* Sponsorentermine,
* Reise zu einem Wettkampfort,
* Herstellung größerer Mengen an Verbrauchsgegenständen,
* Betrieb einer Werkstatt oder Fabrik.

Der Spieler soll die App schließen können, während bestimmte Aktionen weiterlaufen.

## Aktive Komponenten

Beispiele:

* Pacing-Entscheidungen,
* Verpflegungszeitpunkte,
* Reaktionen auf Wetteränderungen,
* technische Abfahrten,
* Wechselzonen,
* Reparaturen,
* Sprints,
* Rennstrategie,
* Zufallsereignisse,
* Quest-Entscheidungen,
* Crafting mit Qualitätsstufen,
* Materialauswahl,
* taktisches Überholen,
* Risikomanagement.

Aktives Spielen darf Vorteile bringen, soll aber nicht zwingend erforderlich sein, um langfristig Fortschritt zu erzielen.

Ein Spieler mit kurzen, regelmäßigen Spielsitzungen soll sinnvoll spielen können.

Aktive Spieler dürfen effizienter sein, aber Gelegenheitsspieler dürfen nicht dauerhaft ausgeschlossen werden.

---

# 6. Skill-System

Entwickle ein tief integriertes Skill-System.

Die Skills sollen nicht nur aus Schwimmen, Radfahren und Laufen bestehen.

Sie sollen mehrere Kategorien umfassen.

## Ausdauer- und Wettkampfskills

Mögliche Skills:

* Schwimmen,
* Radfahren,
* Laufen,
* Wechsel,
* Renntaktik.

## Trainings- und Körperskills

Mögliche Skills:

* Ausdauer,
* Kraft,
* Technik,
* Regeneration,
* Mobilität,
* mentale Stärke.

## Versorgungs- und Produktionsskills

Mögliche Skills:

* Ernährung,
* Kochen oder Fuel-Crafting,
* Fahrradmechanik,
* Textilherstellung,
* Schuhherstellung,
* Materialkunde,
* Ingenieurskunst,
* Aerodynamik.

## Karriere- und Weltskills

Mögliche Skills:

* Sponsoring,
* Medienpräsenz,
* Verhandlung,
* Coaching,
* Erkundung,
* Organisation.

Diese Liste ist zunächst nur ein Ausgangspunkt.

Für jeden vorgeschlagenen Skill muss definiert werden:

* Wie wird er trainiert?
* Welche Ressourcen werden benötigt?
* Welche anderen Skills unterstützt er?
* Welche Inhalte schaltet er frei?
* Welche Gegenstände kann er erzeugen oder verbessern?
* Welchen Nutzen hat er in Wettkämpfen?
* Auf welchen Distanzen ist er besonders relevant?
* Welche aktiven und passiven Trainingsmethoden gibt es?
* Welche seltenen Ereignisse können beim Trainieren auftreten?
* Welche langfristigen Spezialisierungen sind möglich?

Erstelle später einen Skill-Abhängigkeitsgraphen.

## Beispiel einer Produktionskette für Fahrräder

Ressourcenbeschaffung
→ Materialkunde
→ Komponentenherstellung
→ Fahrradmechanik
→ Fahrradbau
→ Aerodynamik-Optimierung
→ individuelle Anpassung
→ bessere Wettkampfleistung

## Beispiel einer Produktionskette für Ernährung

Rohzutaten
→ Ernährungswissen
→ Verarbeitung
→ Herstellung von Gels und Getränken
→ individualisierte Verpflegung
→ geringeres Risiko eines Leistungseinbruchs
→ bessere Mittel- und Langdistanz-Ergebnisse

## Beispiel einer Produktionskette für Laufschuhe

Materialbeschaffung
→ Materialkunde
→ Schuhherstellung
→ biomechanische Anpassung
→ Prototypentest
→ distanz- oder streckenspezifischer Wettkampfschuh

Die verschiedenen Distanzen müssen unterschiedliche Skill-Kombinationen verlangen.

Ein Skill, der auf einer Sprintdistanz nur einen kleinen Vorteil bringt, kann auf einer Langdistanz entscheidend sein.

Beispiel:

Ein hohes Ernährungslevel bietet auf einem sehr kurzen Rennen nur begrenzte Vorteile. Auf der Langdistanz kann es dagegen Leistungseinbrüche, Magenprobleme und vollständiges Bonking verhindern.

---

# 7. Fortschritt, Karriereplateaus und Gebiete

Wichtige Wettkampferfolge dienen als Karriereplateaus.

Durch sie werden neue Regionen, Trainingszentren, Werkstätten, Händler, Sponsoren und Wettkämpfe freigeschaltet.

Eine mögliche Progression:

1. lokaler Verein und regionale Supersprint-Rennen
2. regionale Sprintdistanz
3. nationale Sprint- und Standarddistanz
4. erste internationale Standarddistanz
5. erste Mitteldistanz
6. internationale Mitteldistanz-Serien
7. erste Langdistanz
8. professionelle Langdistanzrennen
9. Hawaii-Qualifikationsrennen
10. Weltmeisterschaft auf Hawaii
11. Elite-, Prestige- und legendäre Rennserien

Der Zugang zu längeren Distanzen darf nicht ausschließlich durch ein bestimmtes Level freigeschaltet werden.

Weitere Voraussetzungen können sein:

* erfolgreich absolvierte Vorbereitungsrennen,
* bestimmte Ausdauer- und Ernährungswerte,
* geeignete Ausrüstung,
* ausreichende Reputation,
* Startgebühren,
* Reiseorganisation,
* Sponsorenzusagen,
* abgeschlossene Quest-Reihen,
* medizinische oder leistungsbezogene Freigaben innerhalb der Spielwelt.

Neue Gebiete sollen nicht nur optisch anders sein.

Sie können unterschiedliche Bedingungen besitzen:

* Hitze,
* Kälte,
* Wind,
* Höhenlage,
* schlechte Straßen,
* technische Radstrecken,
* starke Strömung,
* Wellen,
* hügelige Laufstrecken,
* hohe Reisekosten,
* spezielle Ressourcen,
* exklusive Trainingsmethoden.

Gebiete können durch Wettkampferfolge, Quests, Reputation, Skills oder besondere Challenges freigeschaltet werden.

---

# 8. Wettkämpfe als Ersatz für Kämpfe

Wettkämpfe übernehmen die Funktion großer Herausforderungen.

Der Spieler tritt nicht gegen klassische Gegner an, sondern gegen:

* rivalisierende Athleten,
* Rennfelder,
* Zeitlimits,
* Wetterbedingungen,
* Streckenprofile,
* körperliche Ermüdung,
* mentale Belastung,
* technische Defekte,
* besondere Rennregeln.

Wettkampfergebnisse sollen nicht ausschließlich durch einen Gesamtstärkewert bestimmt werden.

Ein Rennen soll unter anderem beeinflusst werden durch:

* Skill-Level,
* Ausrüstung,
* Trainingszustand,
* Müdigkeit,
* Ernährung,
* Pacing,
* Rennerfahrung,
* Wetter,
* Streckenkenntnis,
* aktive Spielerentscheidungen,
* Zufallsereignisse,
* Materialzustand,
* Charakter-Build.

Jeder Wettkampf benötigt mindestens:

* Distanzklasse,
* Schwimmstrecke,
* Radstrecke,
* Laufstrecke,
* Höhenprofil,
* Untergrund,
* Wetterbedingungen,
* zulässige Ausrüstung,
* Startgebühr,
* Mindestanforderungen,
* mögliche Belohnungen,
* Drop-Tabelle,
* Qualifikationswirkung,
* besondere Rennmechaniken.

Neben klassischen Platzierungen sollen weitere Wettkampfziele möglich sein:

* Rennen erfolgreich beenden,
* bestimmte Zielzeit erreichen,
* Altersklassenwertung gewinnen,
* Gesamtwertung gewinnen,
* Streckenrekord brechen,
* ohne Defekt finishen,
* negative Splits erreichen,
* vorgeschriebene Ausrüstung verwenden,
* einen bestimmten Rivalen schlagen,
* ein Rennen unter extremen Bedingungen beenden.

Legendäre Wettkämpfe und Challenges übernehmen die Rolle besonders schwieriger Endgame-Begegnungen.

Beispiele:

* ein extrem windiges Küstenrennen,
* ein Rennen in großer Höhe,
* eine Hitze-Challenge,
* ein Rennen mit begrenzter Verpflegung,
* eine historische Bergetappe,
* ein Duell gegen einen legendären Rivalen,
* eine mehrstufige Rennserie ohne vollständige Regeneration,
* eine Langdistanz mit wechselnden Extrembedingungen.

Die Hawaii-Qualifikation soll kein einfacher Level-Check sein.

Der Spieler muss unter anderem:

* geeignete Qualifikationsrennen auswählen,
* Startplätze erhalten,
* Reisekosten finanzieren,
* seine Saison planen,
* Form und Ermüdung steuern,
* starke Konkurrenz schlagen,
* Material und Ernährung optimieren.

---

# 9. Rivalen und legendäre Gegner

Da es keine klassischen Kämpfe gibt, sollen besondere Rivalen und Rennpersönlichkeiten die Funktion starker Gegner übernehmen.

Rivalen können unterschiedliche Profile besitzen:

* überragender Schwimmer,
* aggressiver Kurzdistanzathlet,
* extrem starker Radfahrer,
* taktischer Läufer,
* hitzeresistenter Langdistanzspezialist,
* Materialperfektionist,
* mental unerschütterlicher Champion,
* unberechenbarer Außenseiter.

Rivalen sollen:

* eigene Stärken und Schwächen besitzen,
* bei mehreren Rennen wiederkehren,
* eigene kleine Geschichten haben,
* auf den Spieler reagieren,
* besondere Drops ermöglichen,
* als Questgeber oder Antagonisten auftreten,
* später möglicherweise zu Trainingspartnern werden.

Legendäre Rivalen dürfen exklusive Ausrüstung, Materialien, Titel oder kosmetische Gegenstände vergeben.

---

# 10. Loot-System

Das Loot-System soll ein zentraler Motivationsfaktor sein.

Mögliche Seltenheitsstufen:

* gewöhnlich,
* ungewöhnlich,
* selten,
* episch,
* legendär,
* einzigartig.

Loot kann erhalten werden durch:

* Training,
* Wettkämpfe,
* Challenges,
* Quests,
* Zufallsereignisse,
* Sponsoren,
* Händler,
* Crafting,
* Erkundung,
* saisonale Events,
* Rivalen,
* Forschung.

Seltene Drops sollen überraschend und motivierend sein, aber nicht das gesamte Balancing zerstören.

Die besten Gegenstände sollen grundsätzlich nur auf wenigen anspruchsvollen Wegen erhältlich sein:

1. besonders schwierige Wettkämpfe oder Challenges,
2. sehr seltene legendäre Drops,
3. anspruchsvolle mehrstufige Herstellung durch den Spieler,
4. Kombination aus seltenem Drop, Bauplan und Crafting.

Normale Trainingsaktionen dürfen wertvolle oder seltene Gegenstände liefern, aber nicht regelmäßig die absolut beste Endgame-Ausrüstung.

Mögliche Loot-Arten:

* Fahrräder,
* Rahmen,
* Laufräder,
* Schaltungen,
* Leistungsmesser,
* Helme,
* Schuhe,
* Neoprenanzüge,
* Schwimmbrillen,
* Trisuits,
* Fahrradcomputer,
* Rollentrainer,
* Werkzeuge,
* Baupläne,
* Materialien,
* Verbrauchsgegenstände,
* Trainingspläne,
* Sponsorverträge,
* kosmetische Gegenstände,
* Trophäen,
* Sammlerstücke.

Gegenstände können variable Eigenschaften besitzen:

* Gewicht,
* Aerodynamik,
* Komfort,
* Haltbarkeit,
* Effizienz,
* Stabilität,
* Hitzetoleranz,
* Seitenwindanfälligkeit,
* Reparaturkosten,
* Qualitätsstufe,
* besondere Effekte.

Zufällige Eigenschaften müssen so begrenzt werden, dass keine unübersichtliche Item-Flut entsteht.

---

# 11. Reale Produkte als Items

Ausrüstungsgegenstände sollen möglichst stark an der realen Triathlon- und Ausdauerwelt orientiert sein.

Insbesondere ab der Seltenheitsstufe „selten“ sollen nach Möglichkeit reale Produkte und Modelle als Items vorkommen.

Mögliche reale Item-Kategorien:

* Triathlonräder,
* Zeitfahrräder,
* Rennräder,
* Laufräder,
* Gruppen und Schaltungen,
* Leistungsmesser,
* Helme,
* Laufschuhe,
* Wettkampfschuhe,
* Neoprenanzüge,
* Schwimmbrillen,
* Trisuits,
* Fahrradcomputer,
* Rollentrainer,
* Trinksysteme,
* Trainingszubehör.

Eine mögliche Aufteilung:

## Gewöhnlich

* generische Einsteigerprodukte,
* gebrauchte Vereinsausrüstung,
* einfache Trainingsgegenstände,
* Produkte ohne konkrete Markenbezeichnung.

## Ungewöhnlich

* hochwertige generische Produkte,
* ältere oder weniger spezialisierte Ausrüstung,
* fiktive Eigenmarken der Spielwelt.

## Selten

* reale Serienmodelle bekannter Hersteller,
* leistungsfähige Wettkampfausrüstung,
* besondere Modellgenerationen.

## Episch

* reale High-End-Modelle,
* Profi-Ausrüstung,
* limitierte Varianten,
* besonders hochwertige oder ikonische Modellgenerationen.

## Legendär

* außergewöhnliche reale Modelle,
* sehr seltene Sondereditionen,
* historische oder prestigeträchtige Ausrüstung,
* individuell angepasste Profi-Versionen,
* durch legendäre Wettkämpfe verbesserte Varianten.

## Einzigartig

* selbst entwickelte Prototypen,
* Quest-Gegenstände,
* Einzelstücke,
* vollständig individualisierte Ausrüstung,
* aus legendären Komponenten hergestellte Items.

Reale Produkte sollen nicht automatisch stärker sein als selbst hergestellte oder fiktive Gegenstände.

Sie erhöhen vor allem:

* Wiedererkennungswert,
* Sammelmotivation,
* Authentizität,
* emotionale Bindung,
* Freude an seltenen Drops.

---

# 12. Eigenschaften realer Ausrüstung

Reale Ausrüstungsmodelle dürfen nicht ausschließlich anhand ihres Marktpreises bewertet werden.

Ihre Spielwerte sollen anhand nachvollziehbarer Kategorien modelliert werden.

## Fahrräder

Mögliche Werte:

* Aerodynamik,
* Gewicht,
* Steifigkeit,
* Komfort,
* Handling,
* Anpassbarkeit,
* Wartungsaufwand,
* Zuverlässigkeit.

## Laufräder

Mögliche Werte:

* Aerodynamik,
* Gewicht,
* Seitenwindanfälligkeit,
* Beschleunigung,
* Haltbarkeit,
* Untergrundeignung.

## Laufschuhe

Mögliche Werte:

* Geschwindigkeit,
* Dämpfung,
* Stabilität,
* Haltbarkeit,
* Gewicht,
* Energierückgabe,
* Eignung für unterschiedliche Distanzen.

## Neoprenanzüge

Mögliche Werte:

* Auftrieb,
* Schulterbeweglichkeit,
* Wärme,
* Ausziehgeschwindigkeit,
* Haltbarkeit.

Ein Item soll nicht in jeder Situation optimal sein.

Beispiele:

* Ein tiefes Aero-Laufrad ist auf schnellen flachen Strecken stark, kann bei Seitenwind aber Nachteile verursachen.
* Ein aggressiver Wettkampfschuh kann auf kurzen Distanzen sehr schnell sein, auf langen Strecken aber weniger stabil oder komfortabel ausfallen.
* Ein extrem aerodynamisches Fahrrad kann auf flachen Kursen dominieren, auf technischen oder bergigen Strecken aber schwieriger zu kontrollieren sein.
* Ein warmer Neoprenanzug hilft in kaltem Wasser, erhöht bei höheren Temperaturen jedoch das Risiko einer Überhitzung.

Reale Modelle sollen daher keine einfache Rangliste von schlecht bis gut bilden.

Sie sollen unterschiedliche Einsatzbereiche besitzen.

---

# 13. Modellgenerationen und Sammlerwert

Reale Items sollen nach Möglichkeit folgende Daten besitzen:

* Hersteller,
* Modell,
* Modelljahr oder Generation,
* Produktkategorie,
* reale Haupteigenschaften,
* spielinterne Werte,
* Seltenheitsstufe,
* geeignete Distanzen,
* geeignete Streckenprofile,
* Drop-Quelle,
* Crafting- oder Upgrade-Möglichkeiten,
* Sammlungsstatus.

Verschiedene Modellgenerationen dürfen als eigenständige Items vorkommen.

Ein älteres ikonisches Produkt kann einen höheren Sammlerwert besitzen, obwohl ein neueres Produkt bessere Leistungswerte hat.

Sammlerwert und Wettkampfstärke müssen getrennte Eigenschaften sein.

Die Ausrüstungsdatenbank kann beispielsweise anzeigen:

* entdeckt,
* einmal besessen,
* aktuell im Besitz,
* im Wettkampf verwendet,
* persönlicher Rekord mit diesem Item,
* vollständig verbessert,
* seltene Variante gefunden.

---

# 14. Austauschbarkeit und Rechteverwaltung

Reale Produktnamen, Logos, Bilder und Illustrationen müssen technisch getrennt behandelt werden.

Die Architektur soll zwischen folgenden Elementen unterscheiden:

1. Produktname,
2. Herstellername,
3. Logo,
4. Produktbild,
5. selbst erstellte Illustration,
6. spielinterne Werte,
7. Lizenz- oder Freigabestatus.

Reale Modellnamen sollen in einer zentralen Item-Datenbank hinterlegt werden und nicht fest im Programmcode verteilt sein.

Für jedes reale Item soll ein interner Status vorgesehen werden:

* ungeprüft,
* nur für privaten Prototyp,
* Namensnutzung geprüft,
* Bildmaterial freigegeben,
* vollständig freigegeben,
* muss durch fiktive Alternative ersetzt werden.

Das System muss ermöglichen, reale Produktnamen später zentral durch fiktive Namen oder lizenzierte Varianten zu ersetzen, ohne das Balancing, Inventar oder bestehende Spielstände verändern zu müssen.

Für einen ersten privaten Prototyp können reale Modellbezeichnungen als Entwicklungsinhalt vorgesehen werden.

Vor einer öffentlichen Veröffentlichung, größeren Verbreitung oder Monetarisierung muss geprüft werden, ob Namen, Logos, Bilder und Produktdarstellungen verwendet werden dürfen.

Es darf nicht der Eindruck entstehen, dass Hersteller das Spiel offiziell unterstützen, wenn keine entsprechende Kooperation besteht.

---

# 15. Crafting und eigene Produktion

Der Spieler soll langfristig nicht vollständig von zufälligen Drops abhängig sein.

Besonders starke Gegenstände können über anspruchsvolle Produktionsketten hergestellt werden.

Eine mögliche Entwicklung:

1. einfache Reparaturwerkbank,
2. kleine Fahrradwerkstatt,
3. Entwicklung eigener Komponenten,
4. Schuh- oder Bekleidungswerkstatt,
5. Forschungslabor,
6. eigene Manufaktur,
7. automatisierte Fabrik,
8. High-End-Entwicklungszentrum.

Eine Fabrik darf kein isoliertes Idle-System sein.

Sie muss mit Skills, Materialien, Bauplänen, Sponsoren, Reputation, Geld, Forschung und Wettkampferfolgen verbunden sein.

Selbst hergestellte Ausrüstung kann andere Vorteile bieten als reine Drops:

* gezieltere Werte,
* bessere Reparierbarkeit,
* individuelle Anpassung,
* Set-Boni,
* besondere Qualitätsstufen,
* persönliche Signatur,
* Weiterentwicklung bestehender Gegenstände.

Der Spieler kann beispielsweise:

* reale Komponenten kombinieren,
* ein bestehendes Fahrrad individuell aufbauen,
* Cockpit und Sitzposition optimieren,
* Laufräder an Streckenbedingungen anpassen,
* Schuhe modifizieren,
* eigene Textilien herstellen,
* Prototypen entwickeln,
* Materialeigenschaften erforschen.

Ein selbst gebautes Fahrrad kann aus folgenden Bestandteilen bestehen:

* Rahmen,
* Gabel,
* Cockpit,
* Schaltung,
* Kurbel,
* Leistungsmesser,
* Laufräder,
* Reifen,
* Sattel,
* Trinksystem.

Manche Komponenten können reale Modelle sein, während andere selbst hergestellt werden.

Die stärksten Crafting-Gegenstände sollen häufig eine Kombination benötigen aus:

* seltenem Basismodell,
* legendärem Drop,
* hohem Crafting-Level,
* besonderem Bauplan,
* Forschung,
* erheblichem Ressourcenaufwand.

Dadurch bleiben sowohl Loot als auch Crafting langfristig relevant.

---

# 16. Karriere und Sponsoren

Der Spieler entwickelt neben seinen sportlichen Fähigkeiten eine öffentliche Karriere.

Mögliche Karrierewerte:

* Bekanntheit,
* sportliche Reputation,
* Fanbasis,
* Markenwert,
* Zuverlässigkeit,
* Medienpräsenz,
* Beziehung zu Sponsoren.

Sponsoren dürfen nicht nur passives Geld liefern.

Sie können:

* Ausrüstung bereitstellen,
* exklusive Quests freischalten,
* Markenbindungen verlangen,
* Leistungsziele vorgeben,
* Boni für Rennen zahlen,
* Trainingszentren öffnen,
* Reisekosten übernehmen,
* seltene Baupläne bereitstellen,
* Zugang zu besonderen Produkten ermöglichen.

Sponsorenverträge können Zielkonflikte erzeugen.

Beispiel:

Ein Sponsor bietet starke finanzielle Unterstützung, verlangt aber, dass eine bestimmte Ausrüstung verwendet wird, obwohl der Spieler bereits ein besseres selbst hergestelltes Item besitzt.

Sponsoren können unterschiedliche Profile haben:

* zuverlässiger Einsteiger-Sponsor,
* aggressiver Performance-Sponsor,
* technologieorientierter Ausrüster,
* Lifestyle-Marke,
* lokaler Unterstützer,
* exklusiver Premium-Hersteller.

---

# 17. Quests und Sidequests

Das Spiel soll kurze, humorvolle Sidequests mit eigenen Figuren und kleinen Geschichten enthalten.

Die Quests sollen das Training auflockern und die Triathlonwelt lebendiger machen.

Mögliche Themen:

* Ein Mechaniker hat die falschen Laufräder an das Team geliefert.
* Ein Rivale vertauscht versehentlich seine Wechselbeutel.
* Ein Veranstalter hat die Schwimmbojen falsch gesetzt.
* Ein Sponsor verlangt ein absurdes Werbevideo.
* Ein Athlet sucht verzweifelt seine Startnummer.
* Ein legendärer Trainer gibt scheinbar sinnlose Trainingsaufgaben.
* Eine Gruppe übermotivierter Age-Grouper blockiert die Radstrecke.
* Ein Teamkollege hat seine gesamte Wettkampfverpflegung zu Hause vergessen.
* Ein Mechaniker besteht darauf, dass ein merkwürdiges altes Fahrrad ein legendäres Einzelstück sei.

Questbelohnungen können sein:

* Skill-XP,
* spezielle Items,
* Baupläne,
* neue Trainingsmethoden,
* kosmetische Ausrüstung,
* Zugang zu Regionen,
* besondere Händler,
* neue Charaktere,
* Titel,
* permanente kleine Boni,
* seltene Komponenten,
* Sponsorbeziehungen.

Questbelohnungen sollen thematisch zur jeweiligen Geschichte passen.

Neben kurzen Sidequests soll es größere Quest-Reihen geben, die beispielsweise:

* legendäre Ausrüstung,
* neue Regionen,
* besondere Rivalen,
* seltene Crafting-Rezepte,
* geheime Trainingsmethoden,
* Produktionsgebäude

freischalten.

---

# 18. Zufallsereignisse

Zufallsereignisse sollen ein wichtiger Teil der Motivation sein.

Sie können während Training, Crafting, Reisen, Wettkämpfen oder Regeneration auftreten.

Mögliche positive Ereignisse:

* seltener Materialfund,
* Begegnung mit einem legendären Trainer,
* spontanes Sponsorangebot,
* außergewöhnlich gutes Training,
* Bauplanfund,
* seltenes Equipment,
* verborgener Händler,
* perfektes Crafting-Ergebnis.

Mögliche negative oder gemischte Ereignisse:

* technischer Defekt,
* Wetterumschwung,
* falsche Verpflegung,
* verlorenes Gepäck,
* überfüllte Trainingsstrecke,
* leichte Erkrankung,
* Konflikt mit Sponsorenzielen,
* unerwartete Streckenänderung.

Zufallsereignisse sollen Geschichten erzeugen und nicht hauptsächlich Frust verursachen.

Schwere negative Ereignisse müssen:

* vorhersehbare Risiken besitzen,
* durch Skills oder Ausrüstung beeinflussbar sein,
* nicht unverhältnismäßig viel Fortschritt vernichten,
* interessante Entscheidungen erzeugen.

---

# 19. Langzeitmotivation

Die Langzeitmotivation soll aus mehreren parallelen Fortschrittsebenen entstehen:

* Skill-Level,
* sportliche Karriere,
* Wettkampferfolge,
* Ausrüstung,
* Sammlungen,
* Crafting,
* Produktionsbetriebe,
* Sponsoren,
* Regionen,
* Quests,
* Titel,
* Rekorde,
* Prestige,
* Forschung,
* Rivalitäten.

Das Spiel darf nicht ausschließlich auf immer höheren Zahlen basieren.

Neue Fortschrittsstufen sollen neue Entscheidungen, Systeme und Spielweisen eröffnen.

Mögliche Charakter-Builds:

* ausgewogener Langdistanzathlet,
* explosiver Kurzdistanzathlet,
* überragender Radfahrer,
* starker Schwimmer,
* taktischer Läufer,
* effizienter Ausdauerathlet,
* hitzeresistenter Wettkämpfer,
* technischer Equipment-Spezialist,
* selbstversorgender Crafting-Athlet,
* medienorientierter Sponsor-Liebling,
* extrem gut vorbereiteter Taktiker,
* materialunabhängiger Minimalist.

Kein Build soll in allen Situationen optimal sein.

Zusätzliche langfristige Sammlungsziele können sein:

* alle Distanzen gewinnen,
* alle Hawaii-Qualifikationsrennen abschließen,
* jede Distanz unter einer bestimmten Zeit beenden,
* vollständige Herstellerkollektionen sammeln,
* verschiedene Modellgenerationen besitzen,
* historische Ausrüstung finden,
* komplette Equipment-Sets aufbauen,
* selbst entwickelte Prototypen herstellen,
* jeden legendären Rivalen schlagen,
* jedes legendäre Rennen gewinnen.

---

# 20. Mobile-First-Webapp

Das Spiel wird zunächst als Mobile-First-Webapp entwickelt.

Die Bedienung soll auf Smartphones komfortabel funktionieren.

Wichtige Anforderungen:

* große Touch-Flächen,
* klarer Hauptbildschirm,
* wenige notwendige Klicks,
* kurze Ladezeiten,
* verständliche Fortschrittsanzeigen,
* gut lesbare Inventar- und Ausrüstungsansichten,
* keine Desktop-Tabellen, die auf Mobilgeräten unbrauchbar werden,
* optional installierbar als Progressive Web App,
* Speicherung des Spielstands,
* später möglicherweise Benutzerkonten und Cloud-Synchronisierung.

Wichtige Hauptbereiche der App könnten sein:

* Charakter,
* Training,
* Wettkämpfe,
* Skills,
* Inventar,
* Werkstatt,
* Karriere,
* Weltkarte,
* Quests.

Die Navigation soll für mobile Geräte optimiert sein, beispielsweise über:

* untere Navigationsleiste,
* kontextabhängige Aktionsbuttons,
* Kartenansichten,
* aufklappbare Detailinformationen,
* klare Statusanzeigen.

Lange Idle-Aktionen und laufende Produktionsprozesse sollen jederzeit schnell einsehbar sein.

---

# 21. Technische Architektur

Das Spiel kann zunächst über ein GitHub-Repository entwickelt und beispielsweise über GitHub Pages oder eine vergleichbare Plattform gehostet werden.

Die technische Architektur soll so gewählt werden, dass später Backend-Funktionen ergänzt werden können.

Berücksichtige unter anderem:

* saubere Trennung von Spiellogik und Benutzeroberfläche,
* zentrale Item-Datenbank,
* zentrale Skill-Konfiguration,
* zentrale Wettkampf-Konfiguration,
* lokale Spielstandspeicherung,
* versionierbare Savegames,
* Offline-Funktionalität,
* spätere Cloud-Synchronisierung,
* spätere Benutzerkonten,
* spätere externe Schnittstellen,
* möglichst einfache Erweiterbarkeit.

Reale Produkte, fiktive Produkte und Balancing-Werte sollen datengetrieben konfiguriert werden.

Neue Items, Rennen, Skills und Quests sollen später möglichst ohne große Änderungen am Kerncode ergänzt werden können.

---

# 22. Spätere Integration echter Trainingsdaten

Das Spiel soll zunächst vollständig ohne echte Trainingsdaten funktionieren.

Die Architektur soll jedoch darauf vorbereitet sein, später reale Aktivitäten einzubinden.

Mögliche Datenquellen:

* Strava,
* Garmin,
* Apple Health,
* Google Health Connect,
* FIT-Dateien,
* GPX-Dateien,
* manuelle Trainingseinträge.

Reale Trainingsdaten könnten später:

* begrenzte Bonus-XP vergeben,
* tägliche Aufgaben abschließen,
* Energie oder Trainingspunkte erzeugen,
* kosmetische Belohnungen freischalten,
* besondere Challenges aktivieren,
* kleine Regenerations- oder Motivationsboni auslösen.

Echte Trainingsdaten dürfen das Balancing nicht vollständig dominieren.

Spieler ohne reale Datenanbindung müssen das gesamte Spiel weiterhin sinnvoll spielen können.

Es soll vermieden werden, dass sehr große reale Trainingsumfänge automatisch zu uneinholbaren Vorteilen führen.

---

# 23. Balancing-Grundsätze

Beachte bei allen Systemen:

* Jeder Skill benötigt einen konkreten Nutzen.
* Skills sollen sich gegenseitig ergänzen.
* Es darf keine zwingende einzelne optimale Spielweise geben.
* Sprint-, Standard-, Mittel- und Langdistanz müssen dauerhaft relevant bleiben.
* Längere Distanzen dürfen kürzere Inhalte nicht automatisch ersetzen.
* Unterschiedliche Distanzen sollen unterschiedliche Builds und Ausrüstung bevorzugen.
* Seltene Drops sollen begeistern, aber nicht zwingend notwendig sein.
* Crafting muss eine zuverlässige Alternative zu reinem Drop-Glück bieten.
* Idle-Fortschritt darf aktives Spielen nicht bedeutungslos machen.
* Aktives Spielen darf Gelegenheitsspieler nicht vollständig abhängen.
* Neue Gebiete sollen neue Mechaniken und nicht nur höhere Zahlen bieten.
* Endgame-Inhalte benötigen langfristige Ziele nach dem Hawaii-Sieg.
* Ressourcen-Sinks müssen Inflation verhindern.
* Reparatur, Verbrauch und Herstellung dürfen nicht zu lästiger Verwaltungsarbeit werden.
* Wettkämpfe sollen planbar sein, aber genug Unsicherheit für Spannung besitzen.
* Zufallsereignisse sollen Geschichten erzeugen und nicht hauptsächlich Frust verursachen.
* Marktpreis darf nicht direkt mit spielinterner Stärke gleichgesetzt werden.
* Reale Produkte dürfen keine reine Marken- oder Preisrangliste bilden.
* Neuere Modelljahre dürfen ältere Modelle nicht vollständig entwerten.
* Sammlerwert und Leistungswert müssen getrennt werden.
* Selbst hergestellte Ausrüstung muss mit seltenen realen Modellen konkurrieren können.
* High-End-Items benötigen sinnvolle Trade-offs oder spezielle Einsatzbereiche.
* Reale Produktdaten, Bilder, Logos und Modellnamen müssen technisch separat austauschbar sein.

---

# 24. Nächster Designschritt

Entwickle als Nächstes drei unterschiedliche Vorschläge für die grundlegende Skill-Architektur.

Jeder Vorschlag soll enthalten:

* Anzahl der Skills,
* Einteilung der Skills,
* zentrale Abhängigkeiten,
* Beispiel-Produktionsketten,
* Nutzen der Skills in Wettkämpfen,
* Bedeutung der Skills auf unterschiedlichen Distanzen,
* aktive Trainingsmethoden,
* Idle-Trainingsmethoden,
* Crafting-Verbindungen,
* mögliche Probleme,
* Eignung für Mobile und Idle-Gameplay.

Die drei Modelle sollen sich deutlich unterscheiden:

1. kompaktes System mit wenigen, sehr tiefen Skills,
2. mittelgroßes System mit klaren Spezialisierungen,
3. umfangreiches System im Stil eines langfristigen Skill-MMORPGs.

Gib anschließend eine begründete Empfehlung, welches Modell für dieses Spiel am besten geeignet ist.

Berücksichtige dabei besonders:

* hohe Langzeitmotivation,
* starke Verzahnung aller Skills,
* sinnvolle Produktionsketten,
* unterschiedliche Anforderungen der Wettkampfdistanzen,
* Loot und Crafting,
* mobile Bedienbarkeit,
* spätere Erweiterbarkeit.

Noch keine Programmierung durchführen.
