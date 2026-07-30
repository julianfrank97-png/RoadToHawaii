/* Triathlon Karriere – datengetriebene Konfiguration. Version 2.0.0 "Complete Career". */
window.GAME_DATA = {
  "version": "2.0.0",
  "skills": {
    "swimming": {
      "name": "Schwimmen",
      "icon": "🏊",
      "category": "Wettkampf",
      "description": "Tempo, Effizienz und Sicherheit im Wasser."
    },
    "cycling": {
      "name": "Radfahren",
      "icon": "🚴",
      "category": "Wettkampf",
      "description": "Leistung, Trittökonomie und Umsetzung auf der Radstrecke."
    },
    "running": {
      "name": "Laufen",
      "icon": "🏃",
      "category": "Wettkampf",
      "description": "Tempo und Laufleistung unter Vorermüdung."
    },
    "transitions": {
      "name": "Wechsel",
      "icon": "↻",
      "category": "Wettkampf",
      "description": "Schnelle, sichere Abläufe in T1 und T2."
    },
    "racecraft": {
      "name": "Renntaktik",
      "icon": "♟",
      "category": "Wettkampf",
      "description": "Pacing, Streckenanalyse und Reaktion auf Rivalen."
    },
    "endurance": {
      "name": "Ausdauer",
      "icon": "∞",
      "category": "Körper",
      "description": "Leistung über lange Distanzen aufrechterhalten."
    },
    "strength": {
      "name": "Kraft",
      "icon": "◆",
      "category": "Körper",
      "description": "Beschleunigung, Stabilität und Bergleistung."
    },
    "technique": {
      "name": "Technik",
      "icon": "◎",
      "category": "Körper",
      "description": "Bewegungsökonomie, Kontrolle und Fehlervermeidung."
    },
    "recovery": {
      "name": "Regeneration",
      "icon": "☾",
      "category": "Körper",
      "description": "Müdigkeit abbauen und Trainingsqualität sichern."
    },
    "mental": {
      "name": "Mentale Stärke",
      "icon": "◈",
      "category": "Körper",
      "description": "Stresskontrolle und Widerstand gegen Einbrüche."
    },
    "nutrition": {
      "name": "Ernährung",
      "icon": "⚗",
      "category": "Produktion",
      "description": "Fuel-Crafting, Flüssigkeit und Verträglichkeit."
    },
    "mechanics": {
      "name": "Fahrradmechanik",
      "icon": "🔧",
      "category": "Produktion",
      "description": "Wartung, Reparatur und individuelle Aufbauten."
    },
    "materials": {
      "name": "Materialkunde",
      "icon": "⬢",
      "category": "Produktion",
      "description": "Qualität, Gewicht, Komfort und Haltbarkeit."
    },
    "aerodynamics": {
      "name": "Aerodynamik",
      "icon": "➤",
      "category": "Produktion",
      "description": "Luftwiderstand reduzieren, ohne Kontrolle zu verlieren."
    },
    "productDevelopment": {
      "name": "Produktentwicklung",
      "icon": "⚙",
      "category": "Produktion",
      "description": "Prototypen und individualisierte High-End-Ausrüstung."
    },
    "sponsorship": {
      "name": "Sponsoring",
      "icon": "🤝",
      "category": "Karriere",
      "description": "Verträge, Ausrüstungspakete und Zielkonflikte."
    },
    "media": {
      "name": "Medienpräsenz",
      "icon": "◉",
      "category": "Karriere",
      "description": "Bekanntheit, Fanbasis und Markenwert."
    },
    "organization": {
      "name": "Organisation & Erkundung",
      "icon": "🧭",
      "category": "Karriere",
      "description": "Reisen, Saisonplanung, Strecken und Händler."
    }
  },
  "items": {
    "club_bike": {
      "name": "Gebrauchtes Vereinsrad",
      "icon": "🚲",
      "category": "Fahrrad",
      "slot": "bike",
      "rarity": "common",
      "value": 90,
      "description": "Solide, schwer und erstaunlich zuverlässig.",
      "stats": {
        "bike": 2,
        "reliability": 5,
        "comfort": 2
      }
    },
    "basic_helmet": {
      "name": "Einfacher Straßenhelm",
      "icon": "⛑",
      "category": "Helm",
      "slot": "helmet",
      "rarity": "common",
      "value": 35,
      "description": "Sicher und unspektakulär.",
      "stats": {
        "reliability": 2,
        "aero": 1
      }
    },
    "training_shoes": {
      "name": "Gepolsterte Trainingsschuhe",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "common",
      "value": 45,
      "description": "Nicht schnell, aber bequem und haltbar.",
      "stats": {
        "run": 2,
        "comfort": 5,
        "stability": 4
      }
    },
    "basic_goggles": {
      "name": "Vereins-Schwimmbrille",
      "icon": "🥽",
      "category": "Schwimmen",
      "slot": "goggles",
      "rarity": "common",
      "value": 15,
      "description": "Beschlägt manchmal, sitzt aber meistens.",
      "stats": {
        "swim": 2,
        "reliability": 2
      }
    },
    "elastic_laces": {
      "name": "Elastische Schnürsenkel",
      "icon": "➰",
      "category": "Zubehör",
      "slot": "accessory",
      "rarity": "uncommon",
      "value": 65,
      "description": "Spart wertvolle Sekunden in T2.",
      "stats": {
        "transition": 4
      }
    },
    "repair_kit": {
      "name": "Kompaktes Reparaturset",
      "icon": "🧰",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "uncommon",
      "value": 55,
      "description": "Neutralisiert einen kleineren Raddefekt im Rennen.",
      "stats": {},
      "consumable": "repair"
    },
    "homemade_gel": {
      "name": "Hausgemachtes Energiegel",
      "icon": "🧪",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "uncommon",
      "value": 22,
      "description": "Stabilisiert die Energieversorgung im Rennen.",
      "stats": {},
      "consumable": "fuel"
    },
    "premium_gel": {
      "name": "Individuelles Langdistanzgel",
      "icon": "⚗",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "rare",
      "value": 65,
      "description": "Hochverträgliche Rezeptur für lange Renntage.",
      "stats": {},
      "consumable": "premiumFuel"
    },
    "aero_bottle": {
      "name": "Werkstatt-Aero-Flasche",
      "icon": "🧴",
      "category": "Trinksystem",
      "slot": "accessory",
      "rarity": "uncommon",
      "value": 180,
      "description": "Ein kleiner aerodynamischer Vorteil mit brauchbarer Versorgung.",
      "stats": {
        "aero": 3,
        "nutrition": 2
      }
    },
    "alloy_wheels": {
      "name": "Solide Aluminium-Laufräder",
      "icon": "◯",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "uncommon",
      "value": 240,
      "description": "Robust, gutmütig und auch bei Seitenwind entspannt.",
      "stats": {
        "bike": 2,
        "handling": 5,
        "reliability": 4
      }
    },
    "training_wetsuit": {
      "name": "Vereins-Neoprenanzug",
      "icon": "🏊",
      "category": "Neoprenanzug",
      "slot": "wetsuit",
      "rarity": "uncommon",
      "value": 220,
      "description": "Ordentlicher Auftrieb, etwas störrisch in T1.",
      "stats": {
        "swim": 4,
        "transition": -1,
        "comfort": 2
      }
    },
    "gps_watch": {
      "name": "Multisport-Trainingsuhr",
      "icon": "⌚",
      "category": "Computer",
      "slot": "computer",
      "rarity": "uncommon",
      "value": 260,
      "description": "Hilft beim Pacing und bei der Streckenorganisation.",
      "stats": {
        "tactic": 3,
        "organization": 3
      }
    },
    "prototype_trisuit": {
      "name": "Eigenbau-Aero-Trisuit",
      "icon": "🥋",
      "category": "Trisuit",
      "slot": "suit",
      "rarity": "epic",
      "value": 900,
      "description": "Schnell, individuell und bei Hitze nicht ganz unproblematisch.",
      "stats": {
        "aero": 7,
        "swim": 2,
        "run": 2,
        "heat": -2
      }
    },
    "carbon_spacer": {
      "name": "Eigenbau-Carbonspacer",
      "icon": "⬟",
      "category": "Komponente",
      "slot": "accessory",
      "rarity": "epic",
      "value": 760,
      "description": "Ein überraschend leichter Prototyp aus der eigenen Werkstatt.",
      "stats": {
        "aero": 5,
        "bike": 2
      }
    },
    "custom_super_shoe": {
      "name": "Individueller Superschuh-Prototyp",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "epic",
      "value": 1100,
      "description": "Sehr schnell, aber nur mit hoher Lauftechnik wirklich stabil.",
      "stats": {
        "run": 10,
        "comfort": 3,
        "stability": -2
      }
    },
    "smart_hydration": {
      "name": "Adaptives Trinksystem",
      "icon": "💧",
      "category": "Trinksystem",
      "slot": "accessory",
      "rarity": "legendary",
      "value": 1800,
      "description": "Versorgungssystem für Hitze und lange Distanzen.",
      "stats": {
        "nutrition": 8,
        "aero": 4,
        "heat": 4
      }
    },
    "canyon_speedmax": {
      "name": "Canyon Speedmax CF SLX",
      "icon": "🚴",
      "category": "Zeitfahrrad",
      "slot": "bike",
      "rarity": "rare",
      "value": 1800,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Schnell auf flachen Kursen, anspruchsvoll bei Wind.",
      "stats": {
        "bike": 8,
        "aero": 12,
        "comfort": 4,
        "handling": -2,
        "reliability": 7
      },
      "prototypeOnly": true
    },
    "cervelo_p_series": {
      "name": "Cervélo P-Series",
      "icon": "🚴",
      "category": "Zeitfahrrad",
      "slot": "bike",
      "rarity": "rare",
      "value": 1650,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Ausgewogener Triathlon-Aufbau mit guter Anpassbarkeit.",
      "stats": {
        "bike": 7,
        "aero": 9,
        "comfort": 6,
        "handling": 1,
        "reliability": 7
      },
      "prototypeOnly": true
    },
    "zipp_404": {
      "name": "Zipp 404 Firecrest",
      "icon": "◯",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "rare",
      "value": 1100,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Aero-Allrounder mit Seitenwind-Trade-off.",
      "stats": {
        "aero": 7,
        "bike": 3,
        "handling": 2
      },
      "prototypeOnly": true
    },
    "dt_swiss_arc": {
      "name": "DT Swiss ARC 1100 DICUT",
      "icon": "◯",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "rare",
      "value": 1150,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Schneller Hochprofil-Laufradsatz.",
      "stats": {
        "aero": 8,
        "bike": 3,
        "handling": 1,
        "reliability": 4
      },
      "prototypeOnly": true
    },
    "vaporfly_3": {
      "name": "Nike Vaporfly 3",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "rare",
      "value": 650,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Leicht und schnell, weniger stabil.",
      "stats": {
        "run": 8,
        "comfort": 2,
        "stability": -1
      },
      "prototypeOnly": true
    },
    "metaspeed_sky": {
      "name": "ASICS METASPEED SKY PARIS",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "rare",
      "value": 680,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Aggressiver Wettkampfschuh für hohes Tempo.",
      "stats": {
        "run": 9,
        "comfort": 1,
        "stability": -2
      },
      "prototypeOnly": true
    },
    "giro_aerohead": {
      "name": "Giro Aerohead MIPS",
      "icon": "⛑",
      "category": "Helm",
      "slot": "helmet",
      "rarity": "rare",
      "value": 520,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Starker Aero-Bonus bei höherem Wärmegefühl.",
      "stats": {
        "aero": 6,
        "bike": 2,
        "heat": -2
      },
      "prototypeOnly": true
    },
    "sailfish_ultimate": {
      "name": "sailfish Ultimate IPS",
      "icon": "🏊",
      "category": "Neoprenanzug",
      "slot": "wetsuit",
      "rarity": "rare",
      "value": 760,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Auftrieb und Schulterfreiheit für offene Gewässer.",
      "stats": {
        "swim": 8,
        "transition": 2,
        "comfort": 3
      },
      "prototypeOnly": true
    },
    "roka_maverick": {
      "name": "ROKA Maverick X2",
      "icon": "🏊",
      "category": "Neoprenanzug",
      "slot": "wetsuit",
      "rarity": "rare",
      "value": 790,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Sehr beweglich und schnell auszuziehen.",
      "stats": {
        "swim": 7,
        "transition": 4,
        "comfort": 3
      },
      "prototypeOnly": true
    },
    "edge_1050": {
      "name": "Garmin Edge 1050",
      "icon": "▣",
      "category": "Radcomputer",
      "slot": "computer",
      "rarity": "rare",
      "value": 620,
      "description": "Reales Modell als austauschbarer Prototyp-Inhalt. Unterstützt Pacing und Streckenkenntnis.",
      "stats": {
        "tactic": 6,
        "organization": 2
      },
      "prototypeOnly": true
    },
    "legendary_beacon": {
      "name": "Die schiefe Boje",
      "icon": "🔶",
      "category": "Sammlerstück",
      "slot": null,
      "rarity": "unique",
      "value": 0,
      "description": "Völlig nutzlos, aber bemerkenswert prestigeträchtig.",
      "stats": {}
    },
    "coach_notebook": {
      "name": "Notizbuch des wortkargen Trainers",
      "icon": "📓",
      "category": "Sammlerstück",
      "slot": null,
      "rarity": "legendary",
      "value": 0,
      "description": "Enthält Trainingshinweise wie „ruhiger anfangen“ und sonst fast nichts.",
      "stats": {}
    },
    "volcanic_medal": {
      "name": "Vulkaninsel-Finisher-Medaille",
      "icon": "🏅",
      "category": "Sammlerstück",
      "slot": null,
      "rarity": "legendary",
      "value": 0,
      "description": "Beweist, dass Hitze, Wind und Marathon keine endgültigen Argumente sind.",
      "stats": {}
    },
    "hawaii_trophy": {
      "name": "Weltmeisterschafts-Trophäe",
      "icon": "🏆",
      "category": "Sammlerstück",
      "slot": null,
      "rarity": "unique",
      "value": 0,
      "description": "Das große Karriereziel – und der Beginn des Endgames.",
      "stats": {}
    },
    "race_belt": {
      "name": "Startnummernband",
      "icon": "➖",
      "category": "Zubehör",
      "slot": "accessory",
      "rarity": "common",
      "value": 55,
      "description": "Klein, simpel und deutlich besser als Sicherheitsnadeln.",
      "stats": {
        "transition": 2,
        "organization": 1
      }
    },
    "basic_trisuit": {
      "name": "Vereins-Trisuit",
      "icon": "🥋",
      "category": "Trisuit",
      "slot": "suit",
      "rarity": "uncommon",
      "value": 210,
      "description": "Bequem genug für die ersten ernsthaften Rennen.",
      "stats": {
        "swim": 1,
        "bike": 1,
        "run": 1,
        "comfort": 3
      }
    },
    "road_bike": {
      "name": "Aluminium-Rennrad",
      "icon": "🚲",
      "category": "Rennrad",
      "slot": "bike",
      "rarity": "uncommon",
      "value": 680,
      "description": "Vielseitig, wartungsarm und auf technischen Kursen angenehm.",
      "stats": {
        "bike": 5,
        "handling": 5,
        "reliability": 6,
        "comfort": 3
      }
    },
    "clip_on_aero": {
      "name": "Aufsteck-Aerolenker",
      "icon": "➤",
      "category": "Cockpit",
      "slot": "accessory",
      "rarity": "uncommon",
      "value": 290,
      "description": "Macht aus dem Rennrad noch kein Zeitfahrrad, hilft aber.",
      "stats": {
        "aero": 4,
        "bike": 1,
        "handling": -1
      }
    },
    "carbon_wheels": {
      "name": "50-mm-Carbonlaufräder",
      "icon": "◯",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "rare",
      "value": 980,
      "description": "Schnell genug für flache Kurse und noch kontrollierbar im Wind.",
      "stats": {
        "aero": 6,
        "bike": 4,
        "handling": 1,
        "reliability": 3
      }
    },
    "disc_wheel": {
      "name": "Werkstatt-Scheibenrad",
      "icon": "◉",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "epic",
      "value": 1500,
      "description": "Auf flachen, ruhigen Strecken brutal schnell. Im Seitenwind eine Mutprobe.",
      "stats": {
        "aero": 12,
        "bike": 4,
        "handling": -5,
        "reliability": 2
      }
    },
    "stable_race_shoe": {
      "name": "Stabiler Carbon-Wettkampfschuh",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "rare",
      "value": 720,
      "description": "Etwas schwerer, dafür auch spät im Rennen kontrollierbar.",
      "stats": {
        "run": 7,
        "comfort": 5,
        "stability": 5
      }
    },
    "light_trainer": {
      "name": "Leichter Tempotrainingsschuh",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "uncommon",
      "value": 240,
      "description": "Guter Kompromiss für schnelle Trainingseinheiten.",
      "stats": {
        "run": 4,
        "comfort": 3,
        "stability": 2
      }
    },
    "openwater_goggles": {
      "name": "Panorama-Freiwasserbrille",
      "icon": "🥽",
      "category": "Schwimmen",
      "slot": "goggles",
      "rarity": "rare",
      "value": 260,
      "description": "Breites Sichtfeld, gute Orientierung, weniger Bojen-Slalom.",
      "stats": {
        "swim": 5,
        "tactic": 2,
        "reliability": 3
      }
    },
    "balanced_aero_helmet": {
      "name": "Belüfteter Aerohelm",
      "icon": "⛑",
      "category": "Helm",
      "slot": "helmet",
      "rarity": "rare",
      "value": 640,
      "description": "Nicht maximal aerodynamisch, aber auch bei Hitze vernünftig.",
      "stats": {
        "aero": 5,
        "bike": 2,
        "heat": 2,
        "reliability": 3
      }
    },
    "cold_wetsuit": {
      "name": "Kaltwasser-Neoprenanzug",
      "icon": "🏊",
      "category": "Neoprenanzug",
      "slot": "wetsuit",
      "rarity": "rare",
      "value": 720,
      "description": "Warm und auftriebsstark, in T1 etwas widerspenstig.",
      "stats": {
        "swim": 7,
        "comfort": 6,
        "transition": -2,
        "heat": -3
      }
    },
    "power_meter": {
      "name": "Doppelseitiger Leistungsmesser",
      "icon": "⚡",
      "category": "Sensorik",
      "slot": "computer",
      "rarity": "rare",
      "value": 820,
      "description": "Macht Pacing messbar statt gefühlt wissenschaftlich.",
      "stats": {
        "tactic": 5,
        "bike": 3,
        "organization": 2
      }
    },
    "pro_computer": {
      "name": "Profi-Multisportcomputer",
      "icon": "⌚",
      "category": "Computer",
      "slot": "computer",
      "rarity": "epic",
      "value": 1250,
      "description": "Pacing, Navigation und Verpflegungserinnerungen in einem Gerät.",
      "stats": {
        "tactic": 8,
        "organization": 6,
        "nutrition": 2
      }
    },
    "endurance_saddle": {
      "name": "Langdistanz-Sattel",
      "icon": "⌑",
      "category": "Komfort",
      "slot": "accessory",
      "rarity": "rare",
      "value": 480,
      "description": "Kaum spektakulär, bis Stunde fünf beginnt.",
      "stats": {
        "comfort": 8,
        "bike": 2,
        "aero": -1
      }
    },
    "hydration_vest": {
      "name": "Leichte Laufweste",
      "icon": "🎽",
      "category": "Versorgung",
      "slot": "hydration",
      "rarity": "uncommon",
      "value": 250,
      "description": "Für Hitze und lange Läufe, mit kleinem Gewichts-Trade-off.",
      "stats": {
        "nutrition": 4,
        "heat": 4,
        "run": -1
      }
    },
    "aero_hydration": {
      "name": "Front-Hydrationssystem",
      "icon": "💧",
      "category": "Versorgung",
      "slot": "hydration",
      "rarity": "rare",
      "value": 590,
      "description": "Trinken in Aeroposition, ohne den halben Kurs zu verlassen.",
      "stats": {
        "nutrition": 6,
        "aero": 4,
        "handling": -1
      }
    },
    "electrolyte_drink": {
      "name": "Elektrolytgetränk",
      "icon": "🥤",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "common",
      "value": 18,
      "description": "Verbessert die Versorgung bei Hitze und längeren Belastungen.",
      "stats": {},
      "consumable": "hydration"
    },
    "caffeine_gel": {
      "name": "Koffeingel",
      "icon": "⚡",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "rare",
      "value": 48,
      "description": "Starker Rennimpuls mit leicht erhöhtem Risiko.",
      "stats": {},
      "consumable": "caffeine"
    },
    "recovery_shake": {
      "name": "Regenerationsshake",
      "icon": "🥛",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "uncommon",
      "value": 34,
      "description": "Reduziert Ermüdung und stabilisiert die nächste Einheit.",
      "stats": {},
      "consumable": "recovery"
    },
    "anti_chafe": {
      "name": "Anti-Scheuer-Balsam",
      "icon": "🧴",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "uncommon",
      "value": 28,
      "description": "Auf langen Rennen unsichtbar wertvoll.",
      "stats": {},
      "consumable": "comfort"
    },
    "tire_sealant": {
      "name": "Renn-Dichtmilch",
      "icon": "◍",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "uncommon",
      "value": 42,
      "description": "Reduziert die Wahrscheinlichkeit eines Reifendefekts.",
      "stats": {},
      "consumable": "sealant"
    },
    "precision_bearings": {
      "name": "Keramiklager-Upgrade",
      "icon": "◉",
      "category": "Komponente",
      "slot": "accessory",
      "rarity": "epic",
      "value": 1150,
      "description": "Kleine Effizienzgewinne für Menschen, die kleine Effizienzgewinne lieben.",
      "stats": {
        "bike": 4,
        "aero": 2,
        "reliability": -1
      }
    },
    "adaptive_cockpit": {
      "name": "Adaptives Prototyp-Cockpit",
      "icon": "⌁",
      "category": "Cockpit",
      "slot": "accessory",
      "rarity": "legendary",
      "value": 2600,
      "description": "Passt Haltung und Versorgung an Streckenprofil und Ermüdung an.",
      "stats": {
        "aero": 9,
        "comfort": 7,
        "tactic": 5,
        "handling": 2
      }
    },
    "allweather_wheels": {
      "name": "Allwetter-Prototyp-Laufräder",
      "icon": "◯",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "legendary",
      "value": 2900,
      "description": "Schnell, stabil und teuer genug, um eine eigene Vitrine zu verdienen.",
      "stats": {
        "aero": 9,
        "bike": 6,
        "handling": 6,
        "reliability": 6
      }
    },
    "marathon_super_shoe": {
      "name": "Langdistanz-Superschuh",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "legendary",
      "value": 2300,
      "description": "Hohe Energierückgabe mit ungewöhnlich viel Stabilität.",
      "stats": {
        "run": 11,
        "comfort": 8,
        "stability": 5
      }
    },
    "champion_trisuit": {
      "name": "Weltmeisterschafts-Trisuit",
      "icon": "🥋",
      "category": "Trisuit",
      "slot": "suit",
      "rarity": "legendary",
      "value": 2800,
      "description": "Für Hitze, Aerodynamik und lange Tage optimiert.",
      "stats": {
        "swim": 3,
        "bike": 3,
        "run": 3,
        "aero": 9,
        "heat": 6,
        "comfort": 5
      }
    },
    "old_timer_frame": {
      "name": "Legendärer Stahlrahmen „Erwin“",
      "icon": "🚲",
      "category": "Sammlerstück",
      "slot": "bike",
      "rarity": "unique",
      "value": 600,
      "description": "Schwer, charmant und Gegenstand mehrerer widersprüchlicher Vereinsgeschichten.",
      "stats": {
        "bike": 1,
        "comfort": 8,
        "reliability": 10,
        "aero": -5
      }
    },
    "crooked_sign": {
      "name": "Das falsch herum montierte Streckenschild",
      "icon": "↩",
      "category": "Sammlerstück",
      "slot": null,
      "rarity": "unique",
      "value": 0,
      "description": "Beweisstück und Erinnerung daran, niemals blind der ersten Markierung zu folgen.",
      "stats": {}
    },
    "rival_gloves": {
      "name": "Handschuhe des Wattkönigs",
      "icon": "🧤",
      "category": "Zubehör",
      "slot": "accessory",
      "rarity": "epic",
      "value": 840,
      "description": "Gewonnen in einem Rivalenduell. Angeblich exakt 0,7 Watt schneller.",
      "stats": {
        "bike": 3,
        "mental": 3,
        "aero": 2
      }
    },
    "kona_shell": {
      "name": "Vulkanische Carbon-Schale",
      "icon": "🌋",
      "category": "Materialtrophäe",
      "slot": "accessory",
      "rarity": "unique",
      "value": 0,
      "description": "Eine einzigartige Komponente aus der finalen Questreihe.",
      "stats": {
        "aero": 6,
        "heat": 6,
        "reliability": 4
      }
    },
    "transition_rack_pro": {
      "name": "Profi-Wechselrack",
      "icon": "↻",
      "category": "Zubehör",
      "slot": "accessory",
      "rarity": "rare",
      "value": 720,
      "description": "Eine kompromisslos sortierte Wechselstation für schnelle und sichere Abläufe.",
      "stats": {
        "transition": 6,
        "organization": 2,
        "reliability": 2
      }
    },
    "smart_bottle_system": {
      "name": "Smartes Aero-Trinksystem",
      "icon": "💧",
      "category": "Versorgung",
      "slot": "hydration",
      "rarity": "rare",
      "value": 860,
      "description": "Erinnert an Trinken, reduziert Griffwege und bleibt auch auf schlechten Straßen ruhig.",
      "stats": {
        "nutrition": 5,
        "aero": 3,
        "reliability": 2
      }
    },
    "openwater_compass_goggles": {
      "name": "Open-Water-Kompassbrille",
      "icon": "🥽",
      "category": "Schwimmen",
      "slot": "goggles",
      "rarity": "epic",
      "value": 1480,
      "description": "Breites Sichtfeld und dezente Orientierungshilfe für unruhige Starts.",
      "stats": {
        "swim": 7,
        "mental": 4,
        "reliability": 3
      }
    },
    "recovery_sleep_kit": {
      "name": "Regenerations-Schlafset",
      "icon": "☾",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "rare",
      "value": 120,
      "description": "Maske, Ohrstöpsel und eine sehr überzeugende Ausrede, das Handy wegzulegen.",
      "stats": {},
      "consumable": "recovery"
    },
    "wind_tunnel_skin": {
      "name": "Windkanal-Trisuit",
      "icon": "🥋",
      "category": "Trisuit",
      "slot": "suit",
      "rarity": "epic",
      "value": 1950,
      "description": "Schnell in sauberer Position, weniger nachsichtig bei schlechter Haltung.",
      "stats": {
        "aero": 9,
        "bike": 3,
        "run": 2,
        "comfort": -1
      }
    },
    "stable_carbon_wheels": {
      "name": "Stabile 60-mm-Carbonlaufräder",
      "icon": "◯",
      "category": "Laufräder",
      "slot": "wheels",
      "rarity": "epic",
      "value": 2100,
      "description": "Fast so schnell wie tiefe Laufräder, aber deutlich berechenbarer im Seitenwind.",
      "stats": {
        "aero": 7,
        "handling": 6,
        "stability": 5,
        "reliability": 3
      }
    },
    "all_day_racer": {
      "name": "All-Day Carbon Racer",
      "icon": "👟",
      "category": "Laufschuhe",
      "slot": "shoes",
      "rarity": "epic",
      "value": 1780,
      "description": "Hohe Energierückgabe mit genug Stabilität für den späten Langdistanzlauf.",
      "stats": {
        "run": 8,
        "comfort": 6,
        "stability": 4,
        "reliability": 2
      }
    },
    "coach_tablet": {
      "name": "Coach-Analysecomputer",
      "icon": "⌚",
      "category": "Computer",
      "slot": "computer",
      "rarity": "rare",
      "value": 980,
      "description": "Verbindet Pacing, Trainingslast und Streckenprofil zu einem brauchbaren Plan.",
      "stats": {
        "tactic": 6,
        "organization": 5,
        "reliability": 2
      }
    },
    "carbon_repair_capsule": {
      "name": "Carbon-Notfallkapsel",
      "icon": "🧰",
      "category": "Verbrauch",
      "slot": null,
      "rarity": "rare",
      "value": 95,
      "description": "Leichtes Rennreparaturset für kleine Defekte und große Nerven.",
      "stats": {},
      "consumable": "repair"
    },
    "dynasty_bike": {
      "name": "Endurance-Dynasty-Prototyp",
      "icon": "🚴",
      "category": "Triathlonrad",
      "slot": "bike",
      "rarity": "unique",
      "value": 6200,
      "description": "Das Ergebnis aus Renndaten, Prototypenbau und unvernünftig vielen Teststunden.",
      "stats": {
        "bike": 13,
        "aero": 12,
        "comfort": 7,
        "handling": 6,
        "reliability": 7,
        "nutrition": 2
      }
    }
  },
  "athleteActions": [
    {
      "id": "pool_technique",
      "group": "Schwimmen",
      "title": "Technik im Becken",
      "icon": "🏊",
      "duration": 35,
      "description": "Ruhige Technikserie mit Fokus auf Wasserlage und Zug.",
      "energy": -9,
      "fatigue": 4,
      "form": 2,
      "xp": {
        "swimming": 170,
        "technique": 60
      },
      "materials": {
        "textile_fiber": [
          0,
          1
        ]
      },
      "tags": [
        "Schwimmen",
        "Technik"
      ],
      "calendarDays": 1
    },
    {
      "id": "threshold_swim",
      "group": "Schwimmen",
      "title": "Schwellenserie Schwimmen",
      "icon": "⏱",
      "duration": 58,
      "description": "Harte Intervalle für Tempo und kontrollierte Atmung.",
      "energy": -16,
      "fatigue": 10,
      "form": 3,
      "xp": {
        "swimming": 300,
        "endurance": 70,
        "mental": 45
      },
      "requirements": {
        "skill": [
          "swimming",
          4
        ]
      },
      "tags": [
        "Schwimmen",
        "Intensiv"
      ],
      "calendarDays": 1
    },
    {
      "id": "open_water_start",
      "group": "Schwimmen",
      "title": "Freiwasser-Starttraining",
      "icon": "🌊",
      "duration": 50,
      "description": "Massenstart, Orientierung und kontrolliertes Angehen.",
      "energy": -13,
      "fatigue": 7,
      "form": 2,
      "xp": {
        "swimming": 220,
        "mental": 90,
        "racecraft": 45
      },
      "requirements": {
        "skill": [
          "swimming",
          3
        ]
      },
      "tags": [
        "Open Water",
        "Mental"
      ],
      "calendarDays": 1
    },
    {
      "id": "recovery_swim",
      "group": "Schwimmen",
      "title": "Lockeres Regenerationsschwimmen",
      "icon": "💧",
      "duration": 42,
      "description": "Sehr ruhige Einheit, die Technik pflegt und Müdigkeit abbaut.",
      "energy": -3,
      "fatigue": -8,
      "morale": 3,
      "form": 1,
      "xp": {
        "swimming": 90,
        "recovery": 95,
        "technique": 35
      },
      "tags": [
        "Locker",
        "Erholung"
      ],
      "calendarDays": 1
    },
    {
      "id": "base_ride",
      "group": "Radfahren",
      "title": "Grundlagenausfahrt",
      "icon": "🚴",
      "duration": 90,
      "description": "Lange, ruhige Kilometer für Radleistung und Ausdauer.",
      "energy": -20,
      "fatigue": 13,
      "form": 3,
      "xp": {
        "cycling": 390,
        "endurance": 145,
        "technique": 45
      },
      "materials": {
        "rubber": [
          0,
          2
        ],
        "metal_parts": [
          0,
          1
        ]
      },
      "tags": [
        "Rad",
        "Ausdauer"
      ],
      "calendarDays": 1
    },
    {
      "id": "bike_intervals",
      "group": "Radfahren",
      "title": "Radintervalle",
      "icon": "⚡",
      "duration": 66,
      "description": "Schwellen- und VO₂-Intervalle für mehr Rennleistung.",
      "energy": -21,
      "fatigue": 16,
      "form": 4,
      "xp": {
        "cycling": 410,
        "strength": 80,
        "mental": 55
      },
      "requirements": {
        "skill": [
          "cycling",
          4
        ]
      },
      "tags": [
        "Rad",
        "Intensiv"
      ],
      "calendarDays": 1
    },
    {
      "id": "aero_session",
      "group": "Radfahren",
      "title": "Aeroposition testen",
      "icon": "➤",
      "duration": 70,
      "description": "Leistung halten, Position prüfen und Seitenwind simulieren.",
      "energy": -17,
      "fatigue": 10,
      "form": 2,
      "xp": {
        "cycling": 235,
        "aerodynamics": 150,
        "technique": 70
      },
      "requirements": {
        "skill": [
          "cycling",
          4
        ]
      },
      "tags": [
        "Rad",
        "Aero"
      ],
      "calendarDays": 1
    },
    {
      "id": "hill_repeats",
      "group": "Radfahren",
      "title": "Bergwiederholungen",
      "icon": "⛰",
      "duration": 78,
      "description": "Kurze harte Anstiege für Kraft, Technik und Kletterleistung.",
      "energy": -23,
      "fatigue": 17,
      "form": 4,
      "xp": {
        "cycling": 330,
        "strength": 150,
        "technique": 55
      },
      "requirements": {
        "skill": [
          "strength",
          3
        ]
      },
      "tags": [
        "Rad",
        "Berg"
      ],
      "calendarDays": 1
    },
    {
      "id": "easy_run",
      "group": "Laufen",
      "title": "Lockerer Dauerlauf",
      "icon": "🏃",
      "duration": 46,
      "description": "Ruhige Kilometer mit überschaubarer Belastung.",
      "energy": -10,
      "fatigue": 6,
      "form": 2,
      "xp": {
        "running": 185,
        "endurance": 55,
        "recovery": 25
      },
      "materials": {
        "foam": [
          0,
          1
        ]
      },
      "tags": [
        "Lauf",
        "Locker"
      ],
      "calendarDays": 1
    },
    {
      "id": "tempo_run",
      "group": "Laufen",
      "title": "Tempodauerlauf",
      "icon": "⏱",
      "duration": 60,
      "description": "Kontrolliertes Tempo nahe der Schwelle.",
      "energy": -17,
      "fatigue": 11,
      "form": 3,
      "xp": {
        "running": 300,
        "technique": 85,
        "mental": 35
      },
      "materials": {
        "foam": [
          0,
          2
        ]
      },
      "tags": [
        "Lauf",
        "Tempo"
      ],
      "calendarDays": 1
    },
    {
      "id": "long_run",
      "group": "Laufen",
      "title": "Langer Lauf",
      "icon": "🛣",
      "duration": 105,
      "description": "Lange Belastung mit Fokus auf Laufökonomie und Ausdauer.",
      "energy": -24,
      "fatigue": 17,
      "form": 4,
      "xp": {
        "running": 385,
        "endurance": 185,
        "mental": 55
      },
      "requirements": {
        "skill": [
          "running",
          4
        ]
      },
      "tags": [
        "Lauf",
        "Ausdauer"
      ],
      "calendarDays": 1
    },
    {
      "id": "brick_session",
      "group": "Laufen",
      "title": "Koppeltraining",
      "icon": "🔁",
      "duration": 115,
      "description": "Radfahren mit direktem Koppellauf. Effektiv, aber fordernd.",
      "energy": -29,
      "fatigue": 20,
      "form": 5,
      "xp": {
        "cycling": 240,
        "running": 230,
        "endurance": 155,
        "mental": 45
      },
      "requirements": {
        "skill": [
          "endurance",
          5
        ]
      },
      "tags": [
        "Rad + Lauf",
        "Hart"
      ],
      "calendarDays": 2
    },
    {
      "id": "transition_drill",
      "group": "Körper",
      "title": "Wechseltraining",
      "icon": "↻",
      "duration": 28,
      "description": "Helm, Schuhe, Startnummer – alles in der richtigen Reihenfolge.",
      "energy": -7,
      "fatigue": 3,
      "form": 1,
      "xp": {
        "transitions": 205,
        "racecraft": 55,
        "organization": 30
      },
      "tags": [
        "T1/T2",
        "Kurz"
      ],
      "calendarDays": 1
    },
    {
      "id": "strength_session",
      "group": "Körper",
      "title": "Kraft & Stabilität",
      "icon": "◆",
      "duration": 45,
      "description": "Rumpf, Beine und Verletzungsprävention.",
      "energy": -12,
      "fatigue": 8,
      "form": 2,
      "xp": {
        "strength": 240,
        "technique": 55,
        "recovery": 25
      },
      "tags": [
        "Kraft",
        "Stabilität"
      ],
      "calendarDays": 1
    },
    {
      "id": "mobility_session",
      "group": "Körper",
      "title": "Mobilität & Lauf-ABC",
      "icon": "◎",
      "duration": 38,
      "description": "Beweglichkeit, Koordination und effiziente Muster.",
      "energy": -6,
      "fatigue": -2,
      "morale": 2,
      "form": 1,
      "xp": {
        "technique": 180,
        "recovery": 70,
        "running": 35
      },
      "tags": [
        "Technik",
        "Locker"
      ],
      "calendarDays": 1
    },
    {
      "id": "mental_session",
      "group": "Körper",
      "title": "Mentales Renntraining",
      "icon": "◈",
      "duration": 44,
      "description": "Visualisierung, Drucksituationen und kontrollierte Starts.",
      "energy": -4,
      "fatigue": -4,
      "morale": 6,
      "xp": {
        "mental": 205,
        "racecraft": 75
      },
      "requirements": {
        "skill": [
          "mental",
          2
        ]
      },
      "tags": [
        "Mental",
        "Taktik"
      ],
      "calendarDays": 1
    },
    {
      "id": "nutrition_test",
      "group": "Körper",
      "title": "Verpflegung im Training testen",
      "icon": "⚗",
      "duration": 82,
      "description": "Lange Einheit mit kontrolliertem Fueling und Verträglichkeitstest.",
      "energy": -19,
      "fatigue": 12,
      "form": 2,
      "xp": {
        "endurance": 190,
        "nutrition": 170,
        "racecraft": 45
      },
      "costs": {
        "carbs": 1,
        "electrolytes": 1
      },
      "requirements": {
        "skill": [
          "nutrition",
          3
        ]
      },
      "tags": [
        "Fueling",
        "Ausdauer"
      ],
      "calendarDays": 1
    },
    {
      "id": "recovery_session",
      "group": "Regeneration",
      "title": "Regenerationsblock",
      "icon": "☾",
      "duration": 45,
      "description": "Schlaf, Mobilität und ruhige aktive Erholung.",
      "energy": 32,
      "fatigue": -30,
      "morale": 5,
      "form": 1,
      "xp": {
        "recovery": 190,
        "mental": 35
      },
      "tags": [
        "Erholung"
      ],
      "calendarDays": 1
    },
    {
      "id": "openwater_endurance",
      "group": "Schwimmen",
      "title": "Freiwasser-Dauerblock",
      "icon": "🌊",
      "duration": 95,
      "calendarDays": 2,
      "description": "Lange ruhige Abschnitte mit Orientierung und Rhythmus.",
      "energy": -19,
      "fatigue": 11,
      "form": 4,
      "xp": {
        "swimming": 380,
        "endurance": 150,
        "mental": 65
      },
      "requirements": {
        "skill": [
          "swimming",
          6
        ]
      },
      "regionBonus": {
        "coast": 1.15,
        "islands": 1.12
      },
      "tags": [
        "Open Water",
        "Ausdauer"
      ]
    },
    {
      "id": "swim_sprint_set",
      "group": "Schwimmen",
      "title": "Explosive Startserie",
      "icon": "⚡",
      "duration": 48,
      "calendarDays": 1,
      "description": "Kurze harte Starts für Sprint- und Eliminatorformate.",
      "energy": -15,
      "fatigue": 9,
      "form": 3,
      "xp": {
        "swimming": 280,
        "strength": 70,
        "transitions": 45
      },
      "requirements": {
        "skill": [
          "swimming",
          5
        ]
      },
      "tags": [
        "Sprint",
        "Intensiv"
      ]
    },
    {
      "id": "long_aero_ride",
      "group": "Radfahren",
      "title": "Lange Aero-Ausfahrt",
      "icon": "➤",
      "duration": 150,
      "calendarDays": 2,
      "description": "Aeroposition, konstante Leistung und Verpflegung über mehrere Stunden.",
      "energy": -29,
      "fatigue": 19,
      "form": 6,
      "xp": {
        "cycling": 560,
        "endurance": 240,
        "aerodynamics": 120,
        "nutrition": 60
      },
      "requirements": {
        "skill": [
          "cycling",
          8
        ]
      },
      "regionBonus": {
        "coast": 1.1,
        "islands": 1.15
      },
      "tags": [
        "Langdistanz",
        "Aero"
      ]
    },
    {
      "id": "technical_descents",
      "group": "Radfahren",
      "title": "Technische Abfahrten",
      "icon": "⛰",
      "duration": 82,
      "calendarDays": 1,
      "description": "Linienwahl, Bremsen und Kontrolle auf anspruchsvollen Straßen.",
      "energy": -17,
      "fatigue": 10,
      "form": 3,
      "xp": {
        "cycling": 280,
        "technique": 230,
        "mental": 70
      },
      "requirements": {
        "skill": [
          "technique",
          6
        ]
      },
      "regionBonus": {
        "alps": 1.22
      },
      "tags": [
        "Technik",
        "Berge"
      ]
    },
    {
      "id": "heat_brick",
      "group": "Koppel",
      "title": "Hitze-Koppeltraining",
      "icon": "☀",
      "duration": 138,
      "calendarDays": 2,
      "description": "Rad-Lauf-Koppel unter kontrollierter Hitze mit Fuel-Test.",
      "energy": -31,
      "fatigue": 22,
      "form": 7,
      "xp": {
        "cycling": 250,
        "running": 260,
        "endurance": 210,
        "nutrition": 150,
        "mental": 90
      },
      "requirements": {
        "skill": [
          "endurance",
          10
        ]
      },
      "regionBonus": {
        "islands": 1.25,
        "kona": 1.3
      },
      "tags": [
        "Hitze",
        "Langdistanz"
      ]
    },
    {
      "id": "race_pace_brick",
      "group": "Koppel",
      "title": "Wettkampf-Koppelblock",
      "icon": "⚑",
      "duration": 110,
      "calendarDays": 2,
      "description": "Geplantes Renntempo auf dem Rad, direkter Übergang in den Lauf.",
      "energy": -26,
      "fatigue": 17,
      "form": 6,
      "xp": {
        "cycling": 310,
        "running": 280,
        "transitions": 120,
        "racecraft": 140
      },
      "requirements": {
        "skill": [
          "racecraft",
          7
        ]
      },
      "tags": [
        "Koppel",
        "Pacing"
      ]
    },
    {
      "id": "trail_strength_run",
      "group": "Laufen",
      "title": "Hügeliger Traillauf",
      "icon": "🌲",
      "duration": 88,
      "calendarDays": 1,
      "description": "Kraft, Stabilität und Technik auf wechselndem Untergrund.",
      "energy": -19,
      "fatigue": 13,
      "form": 4,
      "xp": {
        "running": 300,
        "strength": 130,
        "technique": 110
      },
      "requirements": {
        "skill": [
          "running",
          6
        ]
      },
      "regionBonus": {
        "forest": 1.2,
        "alps": 1.1
      },
      "tags": [
        "Trail",
        "Kraft"
      ]
    },
    {
      "id": "marathon_pace",
      "group": "Laufen",
      "title": "Langdistanz-Renntempo",
      "icon": "∞",
      "duration": 130,
      "calendarDays": 2,
      "description": "Kontrollierter Lauf unter Vorermüdung mit klarer Verpflegungsstrategie.",
      "energy": -27,
      "fatigue": 18,
      "form": 6,
      "xp": {
        "running": 480,
        "endurance": 240,
        "racecraft": 120,
        "nutrition": 80
      },
      "requirements": {
        "skill": [
          "running",
          10
        ]
      },
      "tags": [
        "Langdistanz",
        "Pacing"
      ]
    },
    {
      "id": "altitude_camp_session",
      "group": "Spezial",
      "title": "Höhentraining",
      "icon": "🏔",
      "duration": 145,
      "calendarDays": 2,
      "description": "Anstrengender Reiz mit hohem Ausdauer- und Regenerationsbedarf.",
      "energy": -30,
      "fatigue": 24,
      "form": 8,
      "xp": {
        "endurance": 480,
        "mental": 170,
        "recovery": 80
      },
      "requirements": {
        "region": "alps",
        "skill": [
          "endurance",
          12
        ]
      },
      "tags": [
        "Höhe",
        "Elite"
      ]
    },
    {
      "id": "race_rehearsal",
      "group": "Spezial",
      "title": "Vollständige Rennsimulation",
      "icon": "🎯",
      "duration": 180,
      "calendarDays": 3,
      "description": "Material, Wechsel, Fueling und Pacing in einem langen Test.",
      "energy": -36,
      "fatigue": 27,
      "form": 10,
      "xp": {
        "swimming": 180,
        "cycling": 360,
        "running": 300,
        "transitions": 180,
        "racecraft": 280,
        "nutrition": 140,
        "organization": 100
      },
      "requirements": {
        "skill": [
          "racecraft",
          12
        ]
      },
      "tags": [
        "Simulation",
        "Elite"
      ]
    },
    {
      "id": "deep_recovery",
      "group": "Regeneration",
      "title": "Tiefenregeneration",
      "icon": "☾",
      "duration": 110,
      "calendarDays": 1,
      "description": "Physio, Schlaf und aktive Erholung als vollständiger Reset.",
      "energy": 36,
      "fatigue": -34,
      "form": -2,
      "morale": 9,
      "xp": {
        "recovery": 370
      },
      "requirements": {
        "facility": [
          "recovery",
          2
        ]
      },
      "tags": [
        "Erholung"
      ]
    },
    {
      "id": "confidence_session",
      "group": "Mental",
      "title": "Wettkampfvertrauen aufbauen",
      "icon": "◈",
      "duration": 62,
      "calendarDays": 1,
      "description": "Visualisierung, Startszenarien und kontrollierte Stressbelastung.",
      "energy": -5,
      "fatigue": -1,
      "morale": 12,
      "form": 1,
      "xp": {
        "mental": 300,
        "racecraft": 100
      },
      "requirements": {
        "skill": [
          "mental",
          5
        ]
      },
      "tags": [
        "Mental",
        "Rennen"
      ]
    },
    {
      "id": "taper_session",
      "group": "Regeneration",
      "title": "Taper-Einheit",
      "icon": "🪶",
      "duration": 42,
      "description": "Kurzer, scharfer Reiz mit wenig Ermüdung – ideal vor dem Zielrennen.",
      "energy": -6,
      "fatigue": -3,
      "form": 5,
      "morale": 2,
      "xp": {
        "racecraft": 90,
        "recovery": 100,
        "technique": 55
      },
      "requirements": {
        "skill": [
          "racecraft",
          5
        ]
      },
      "tags": [
        "Taper",
        "Rennvorbereitung"
      ],
      "calendarDays": 1,
      "trainingLoad": {
        "recovery": 35,
        "race": 25
      }
    },
    {
      "id": "brick_nutrition_test",
      "group": "Koppel",
      "title": "Koppel- und Fueling-Test",
      "icon": "⚗",
      "duration": 105,
      "description": "Lange Radbelastung, kurzer Lauf und eine Verpflegungsstrategie unter realer Belastung.",
      "energy": -22,
      "fatigue": 14,
      "form": 4,
      "xp": {
        "cycling": 210,
        "running": 140,
        "nutrition": 180,
        "endurance": 110,
        "racecraft": 80
      },
      "requirements": {
        "skill": [
          "nutrition",
          5
        ]
      },
      "tags": [
        "Koppel",
        "Fueling"
      ],
      "calendarDays": 2,
      "trainingLoad": {
        "bike": 42,
        "run": 27,
        "race": 18
      }
    },
    {
      "id": "mobility_reset",
      "group": "Regeneration",
      "title": "Mobility Reset",
      "icon": "🧘",
      "duration": 38,
      "description": "Beweglichkeit, Rumpfkontrolle und aktive Erholung ohne Leerlaufgefühl.",
      "energy": 5,
      "fatigue": -9,
      "form": 1,
      "morale": 2,
      "xp": {
        "recovery": 145,
        "technique": 90,
        "strength": 45
      },
      "tags": [
        "Regeneration",
        "Technik"
      ],
      "calendarDays": 1,
      "trainingLoad": {
        "recovery": 42,
        "strength": 12
      }
    },
    {
      "id": "heat_acclimation",
      "group": "Spezial",
      "title": "Hitzeakklimatisation",
      "icon": "☀",
      "duration": 72,
      "description": "Kontrollierte Belastung bei Wärme mit Fokus auf Trinken, Pacing und mentale Stabilität.",
      "energy": -15,
      "fatigue": 10,
      "form": 3,
      "xp": {
        "endurance": 130,
        "nutrition": 135,
        "mental": 120,
        "racecraft": 65
      },
      "requirements": {
        "skill": [
          "endurance",
          6
        ]
      },
      "tags": [
        "Hitze",
        "Langdistanz"
      ],
      "calendarDays": 2,
      "trainingLoad": {
        "bike": 18,
        "run": 18,
        "race": 22
      }
    }
  ],
  "workshopActions": [
    {
      "id": "craft_gel",
      "title": "Energiegel mischen",
      "icon": "🧪",
      "duration": 40,
      "description": "Kohlenhydrate und Elektrolyte zu einem verlässlichen Gel verarbeiten.",
      "xp": {
        "nutrition": 175
      },
      "costs": {
        "carbs": 2,
        "electrolytes": 1
      },
      "item": [
        "homemade_gel",
        2
      ],
      "tags": [
        "Fuel-Crafting"
      ]
    },
    {
      "id": "craft_premium_gel",
      "title": "Langdistanzgel entwickeln",
      "icon": "⚗",
      "duration": 92,
      "description": "Eine verträgliche High-Carb-Rezeptur für lange Renntage.",
      "xp": {
        "nutrition": 310,
        "productDevelopment": 75
      },
      "costs": {
        "carbs": 4,
        "electrolytes": 2,
        "polymer": 1
      },
      "item": [
        "premium_gel",
        2
      ],
      "requirements": {
        "skill": [
          "nutrition",
          7
        ]
      },
      "tags": [
        "Fuel-Crafting",
        "High-End"
      ]
    },
    {
      "id": "craft_repair_kit",
      "title": "Reparaturset bauen",
      "icon": "🧰",
      "duration": 55,
      "description": "Ersatzteile für den nächsten Defekt vorbereiten.",
      "xp": {
        "mechanics": 190,
        "materials": 55
      },
      "costs": {
        "rubber": 2,
        "metal_parts": 2
      },
      "item": [
        "repair_kit",
        1
      ],
      "tags": [
        "Werkstatt"
      ]
    },
    {
      "id": "build_alloy_wheels",
      "title": "Alu-Laufräder aufbauen",
      "icon": "◯",
      "duration": 105,
      "description": "Robuste Trainingslaufräder aus gebrauchten Teilen aufbauen.",
      "xp": {
        "mechanics": 260,
        "materials": 120
      },
      "costs": {
        "metal_parts": 5,
        "rubber": 2
      },
      "item": [
        "alloy_wheels",
        1
      ],
      "requirements": {
        "skill": [
          "mechanics",
          4
        ]
      },
      "tags": [
        "Laufräder"
      ]
    },
    {
      "id": "modify_wetsuit",
      "title": "Neoprenanzug anpassen",
      "icon": "🏊",
      "duration": 88,
      "description": "Passform und Ausziehbarkeit eines Vereinsanzugs verbessern.",
      "xp": {
        "materials": 190,
        "productDevelopment": 70,
        "transitions": 50
      },
      "costs": {
        "textile_fiber": 4,
        "polymer": 2
      },
      "item": [
        "training_wetsuit",
        1
      ],
      "requirements": {
        "skill": [
          "materials",
          3
        ]
      },
      "tags": [
        "Schwimmen"
      ]
    },
    {
      "id": "craft_aero_bottle",
      "title": "Aero-Flasche entwickeln",
      "icon": "🧴",
      "duration": 85,
      "description": "Trinksystem zwischen Versorgung und Luftwiderstand ausbalancieren.",
      "xp": {
        "aerodynamics": 210,
        "productDevelopment": 105,
        "materials": 70
      },
      "costs": {
        "polymer": 3,
        "carbon_fiber": 1
      },
      "item": [
        "aero_bottle",
        1
      ],
      "requirements": {
        "skill": [
          "aerodynamics",
          4
        ]
      },
      "tags": [
        "Aero",
        "Prototyp"
      ]
    },
    {
      "id": "craft_carbon_spacer",
      "title": "Carbonspacer-Prototyp",
      "icon": "⬟",
      "duration": 150,
      "description": "Ein riskanter High-End-Versuch mit epischem Ergebnis.",
      "xp": {
        "productDevelopment": 320,
        "materials": 180,
        "mechanics": 110
      },
      "costs": {
        "carbon_fiber": 4,
        "resin": 2,
        "blueprint": 1
      },
      "item": [
        "carbon_spacer",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          6
        ]
      },
      "tags": [
        "High-End"
      ]
    },
    {
      "id": "craft_trisuit",
      "title": "Aero-Trisuit fertigen",
      "icon": "🥋",
      "duration": 175,
      "description": "Textil, Kühlung und Aerodynamik in einem Rennanzug verbinden.",
      "xp": {
        "productDevelopment": 360,
        "materials": 210,
        "aerodynamics": 140
      },
      "costs": {
        "textile_fiber": 7,
        "polymer": 3,
        "blueprint": 2
      },
      "item": [
        "prototype_trisuit",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          9
        ]
      },
      "tags": [
        "Textil",
        "High-End"
      ]
    },
    {
      "id": "craft_super_shoe",
      "title": "Superschuh-Prototyp bauen",
      "icon": "👟",
      "duration": 205,
      "description": "Schaum, Platte und Passform für einen eigenen Wettkampfschuh abstimmen.",
      "xp": {
        "productDevelopment": 430,
        "materials": 240,
        "technique": 80
      },
      "costs": {
        "foam": 8,
        "carbon_fiber": 3,
        "textile_fiber": 3,
        "blueprint": 2
      },
      "item": [
        "custom_super_shoe",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          12
        ]
      },
      "tags": [
        "Schuh",
        "Endgame"
      ]
    },
    {
      "id": "craft_smart_hydration",
      "title": "Adaptives Trinksystem entwickeln",
      "icon": "💧",
      "duration": 260,
      "description": "Ein legendäres Versorgungssystem für Hitze und Langdistanz.",
      "xp": {
        "productDevelopment": 560,
        "nutrition": 260,
        "aerodynamics": 220
      },
      "costs": {
        "carbon_fiber": 6,
        "polymer": 8,
        "resin": 4,
        "blueprint": 4
      },
      "item": [
        "smart_hydration",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          18
        ]
      },
      "tags": [
        "Endgame",
        "Langdistanz"
      ]
    },
    {
      "id": "craft_electrolyte",
      "title": "Elektrolytgetränk mischen",
      "icon": "🥤",
      "duration": 34,
      "description": "Einfache Versorgung für Hitze und lange Einheiten.",
      "xp": {
        "nutrition": 130
      },
      "costs": {
        "electrolytes": 1,
        "carbs": 1
      },
      "item": [
        "electrolyte_drink",
        2
      ],
      "tags": [
        "Fuel-Crafting"
      ]
    },
    {
      "id": "craft_caffeine_gel",
      "title": "Koffeingel entwickeln",
      "icon": "⚡",
      "duration": 68,
      "description": "Aggressiver Rennfuel mit bewusstem Risiko.",
      "xp": {
        "nutrition": 240,
        "productDevelopment": 55
      },
      "costs": {
        "carbs": 3,
        "electrolytes": 1,
        "botanical": 1
      },
      "item": [
        "caffeine_gel",
        2
      ],
      "requirements": {
        "skill": [
          "nutrition",
          8
        ]
      },
      "tags": [
        "Fuel-Crafting",
        "Intensiv"
      ]
    },
    {
      "id": "craft_recovery_shake",
      "title": "Regenerationsshake herstellen",
      "icon": "🥛",
      "duration": 42,
      "description": "Erholung für harte Trainingsblöcke.",
      "xp": {
        "nutrition": 150,
        "recovery": 55
      },
      "costs": {
        "carbs": 2,
        "botanical": 1
      },
      "item": [
        "recovery_shake",
        2
      ],
      "tags": [
        "Regeneration"
      ]
    },
    {
      "id": "craft_sealant",
      "title": "Renn-Dichtmilch abfüllen",
      "icon": "◍",
      "duration": 48,
      "description": "Defektprävention für wichtige Rennen.",
      "xp": {
        "mechanics": 145,
        "materials": 65
      },
      "costs": {
        "sealant": 2,
        "polymer": 1
      },
      "item": [
        "tire_sealant",
        2
      ],
      "tags": [
        "Werkstatt"
      ]
    },
    {
      "id": "build_carbon_wheels",
      "title": "Carbonlaufräder aufbauen",
      "icon": "◯",
      "duration": 170,
      "description": "Allround-Laufradsatz mit Aero- und Handling-Balance.",
      "xp": {
        "mechanics": 430,
        "materials": 260,
        "aerodynamics": 160
      },
      "costs": {
        "carbon_fiber": 5,
        "resin": 3,
        "metal_parts": 3
      },
      "item": [
        "carbon_wheels",
        1
      ],
      "requirements": {
        "skill": [
          "mechanics",
          10
        ],
        "facility": [
          "workshop",
          2
        ]
      },
      "tags": [
        "High-End",
        "Laufräder"
      ]
    },
    {
      "id": "build_disc_wheel",
      "title": "Scheibenrad-Prototyp bauen",
      "icon": "◉",
      "duration": 230,
      "description": "Maximale Aerodynamik mit deutlichem Seitenwindrisiko.",
      "xp": {
        "mechanics": 520,
        "materials": 330,
        "aerodynamics": 390,
        "productDevelopment": 160
      },
      "costs": {
        "carbon_fiber": 8,
        "resin": 5,
        "ceramic": 1,
        "blueprint": 2
      },
      "item": [
        "disc_wheel",
        1
      ],
      "requirements": {
        "skill": [
          "aerodynamics",
          14
        ],
        "facility": [
          "lab",
          2
        ]
      },
      "tags": [
        "Prototyp",
        "Aero"
      ]
    },
    {
      "id": "build_power_meter",
      "title": "Leistungsmesser kalibrieren",
      "icon": "⚡",
      "duration": 145,
      "description": "Sensorik, Elektronik und mechanische Präzision verbinden.",
      "xp": {
        "mechanics": 280,
        "productDevelopment": 230,
        "racecraft": 80
      },
      "costs": {
        "electronics": 4,
        "metal_parts": 2,
        "data_chip": 1
      },
      "item": [
        "power_meter",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          10
        ],
        "facility": [
          "lab",
          1
        ]
      },
      "tags": [
        "Sensorik"
      ]
    },
    {
      "id": "craft_stable_shoe",
      "title": "Stabilen Carbon-Racer bauen",
      "icon": "👟",
      "duration": 190,
      "description": "Schneller Schuh mit mehr Stabilität für ermüdete Beine.",
      "xp": {
        "materials": 260,
        "productDevelopment": 370,
        "technique": 80
      },
      "costs": {
        "foam": 5,
        "textile_fiber": 4,
        "carbon_fiber": 3,
        "blueprint": 1
      },
      "item": [
        "stable_race_shoe",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          12
        ],
        "facility": [
          "lab",
          2
        ]
      },
      "tags": [
        "Schuhentwicklung"
      ]
    },
    {
      "id": "build_adaptive_cockpit",
      "title": "Adaptives Cockpit entwickeln",
      "icon": "⌁",
      "duration": 330,
      "description": "Endgame-Prototyp aus Sensorik, Aerodynamik und Ergonomie.",
      "xp": {
        "productDevelopment": 820,
        "aerodynamics": 520,
        "materials": 340,
        "mechanics": 260
      },
      "costs": {
        "carbon_fiber": 10,
        "resin": 5,
        "electronics": 5,
        "titanium": 2,
        "data_chip": 3,
        "blueprint": 4
      },
      "item": [
        "adaptive_cockpit",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          22
        ],
        "facility": [
          "lab",
          4
        ]
      },
      "tags": [
        "Legendär",
        "Prototyp"
      ]
    },
    {
      "id": "build_allweather_wheels",
      "title": "Allwetter-Laufräder entwickeln",
      "icon": "◯",
      "duration": 360,
      "description": "Aero, Seitenwindkontrolle und Zuverlässigkeit auf Endgame-Niveau.",
      "xp": {
        "productDevelopment": 760,
        "aerodynamics": 600,
        "materials": 420,
        "mechanics": 340
      },
      "costs": {
        "carbon_fiber": 12,
        "resin": 6,
        "ceramic": 3,
        "titanium": 2,
        "data_chip": 2,
        "blueprint": 4
      },
      "item": [
        "allweather_wheels",
        1
      ],
      "requirements": {
        "skill": [
          "aerodynamics",
          24
        ],
        "facility": [
          "lab",
          4
        ]
      },
      "tags": [
        "Legendär",
        "Laufräder"
      ]
    },
    {
      "id": "craft_smart_bottle",
      "title": "Smartes Trinksystem montieren",
      "icon": "💧",
      "duration": 125,
      "description": "Aero-Halterung, Sensorik und Versorgung in ein stabiles System integrieren.",
      "xp": {
        "mechanics": 260,
        "aerodynamics": 180,
        "productDevelopment": 130,
        "nutrition": 80
      },
      "costs": {
        "polymer": 3,
        "electronics": 2,
        "carbon_fiber": 2,
        "blueprint": 1
      },
      "item": [
        "smart_bottle_system",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          9
        ],
        "facility": [
          "lab",
          1
        ]
      },
      "tags": [
        "Prototyp",
        "Versorgung"
      ]
    },
    {
      "id": "craft_stable_wheels",
      "title": "Stabile Carbonlaufräder laminieren",
      "icon": "◯",
      "duration": 210,
      "description": "Tiefe Felgen mit kontrollierbarer Seitenwindcharakteristik entwickeln.",
      "xp": {
        "materials": 330,
        "aerodynamics": 280,
        "mechanics": 220,
        "productDevelopment": 180
      },
      "costs": {
        "carbon_fiber": 6,
        "resin": 4,
        "ceramic": 2,
        "blueprint": 2
      },
      "item": [
        "stable_carbon_wheels",
        1
      ],
      "requirements": {
        "skill": [
          "materials",
          12
        ],
        "facility": [
          "workshop",
          2
        ]
      },
      "tags": [
        "Prototyp",
        "High-End"
      ]
    },
    {
      "id": "craft_recovery_kit",
      "title": "Regenerations-Schlafset packen",
      "icon": "☾",
      "duration": 48,
      "description": "Ein standardisiertes Erholungspaket für Trainingslager und Rennreisen.",
      "xp": {
        "recovery": 170,
        "organization": 85
      },
      "costs": {
        "textile_fiber": 2,
        "botanical": 1
      },
      "item": [
        "recovery_sleep_kit",
        2
      ],
      "requirements": {
        "skill": [
          "recovery",
          5
        ]
      },
      "tags": [
        "Regeneration"
      ]
    },
    {
      "id": "craft_coach_tablet",
      "title": "Coach-Computer konfigurieren",
      "icon": "⌚",
      "duration": 155,
      "description": "Sensorik, Datenchip und Pacing-Logik zu einem mobilen Analysegerät verbinden.",
      "xp": {
        "productDevelopment": 250,
        "aerodynamics": 100,
        "organization": 170,
        "racecraft": 120
      },
      "costs": {
        "electronics": 4,
        "data_chip": 2,
        "polymer": 2,
        "blueprint": 1
      },
      "item": [
        "coach_tablet",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          11
        ],
        "facility": [
          "lab",
          2
        ]
      },
      "tags": [
        "Prototyp",
        "Daten"
      ]
    },
    {
      "id": "craft_dynasty_bike",
      "title": "Dynasty-Prototyp finalisieren",
      "icon": "🚴",
      "duration": 420,
      "description": "Die besten Erkenntnisse aus Material, Aero, Mechanik und Renndaten in ein Einzelstück überführen.",
      "xp": {
        "productDevelopment": 650,
        "aerodynamics": 500,
        "mechanics": 480,
        "materials": 420
      },
      "costs": {
        "carbon_fiber": 12,
        "resin": 8,
        "titanium": 5,
        "ceramic": 4,
        "electronics": 4,
        "data_chip": 3,
        "blueprint": 5
      },
      "item": [
        "dynasty_bike",
        1
      ],
      "requirements": {
        "skill": [
          "productDevelopment",
          18
        ],
        "facility": [
          "lab",
          4
        ],
        "quest": "dynasty_blueprint"
      },
      "tags": [
        "Prototyp",
        "Legendär",
        "High-End"
      ]
    }
  ],
  "careerActions": [
    {
      "id": "club_appearance",
      "title": "Termin beim lokalen Verein",
      "icon": "🏠",
      "duration": 55,
      "description": "Fragen beantworten, Nachwuchs motivieren und Reputation sammeln.",
      "xp": {
        "media": 120,
        "sponsorship": 65
      },
      "reputation": 5,
      "fans": 14,
      "money": 35,
      "tags": [
        "Lokal"
      ],
      "calendarDays": 1
    },
    {
      "id": "sponsor_outreach",
      "title": "Sponsoren anschreiben",
      "icon": "🤝",
      "duration": 70,
      "description": "Kleine Partner suchen und den eigenen sportlichen Wert erklären.",
      "xp": {
        "sponsorship": 190,
        "media": 65
      },
      "reputation": 3,
      "fans": 6,
      "money": 70,
      "tags": [
        "Karriere"
      ],
      "calendarDays": 1
    },
    {
      "id": "route_scouting",
      "title": "Strecke erkunden",
      "icon": "🧭",
      "duration": 85,
      "description": "Neue Trainingsrouten, Materialien und Abkürzungen entdecken.",
      "xp": {
        "organization": 220,
        "racecraft": 60
      },
      "reputation": 2,
      "materials": {
        "carbs": [
          1,
          3
        ],
        "electrolytes": [
          0,
          2
        ],
        "polymer": [
          0,
          1
        ],
        "carbon_fiber": [
          0,
          1
        ]
      },
      "tags": [
        "Erkundung"
      ],
      "calendarDays": 1
    },
    {
      "id": "media_day",
      "title": "Medientag",
      "icon": "◉",
      "duration": 95,
      "description": "Fotos, Interview und ein leicht peinliches Sponsorenvideo.",
      "xp": {
        "media": 245,
        "sponsorship": 75,
        "mental": 35
      },
      "reputation": 6,
      "fans": 35,
      "money": 90,
      "requirements": {
        "reputation": 15
      },
      "tags": [
        "Medien"
      ],
      "calendarDays": 1
    },
    {
      "id": "training_camp",
      "title": "Trainingslager organisieren",
      "icon": "⛺",
      "duration": 125,
      "description": "Unterkunft, Strecken und Trainingspartner koordinieren.",
      "xp": {
        "organization": 330,
        "endurance": 75,
        "recovery": 55
      },
      "reputation": 5,
      "morale": 6,
      "requirements": {
        "skill": [
          "organization",
          5
        ]
      },
      "tags": [
        "Organisation"
      ],
      "calendarDays": 1
    },
    {
      "id": "supplier_visit",
      "title": "Materiallieferanten besuchen",
      "icon": "🏭",
      "duration": 115,
      "description": "Gute Rohstoffe erkennen und bessere Konditionen aushandeln.",
      "xp": {
        "materials": 180,
        "sponsorship": 110,
        "organization": 90
      },
      "materials": {
        "carbon_fiber": [
          1,
          3
        ],
        "resin": [
          1,
          2
        ],
        "textile_fiber": [
          1,
          4
        ],
        "foam": [
          1,
          3
        ]
      },
      "requirements": {
        "reputation": 40
      },
      "tags": [
        "Material",
        "Karriere"
      ],
      "calendarDays": 1
    },
    {
      "id": "fan_event",
      "title": "Community-Ausfahrt",
      "icon": "👥",
      "duration": 80,
      "description": "Gemeinsam fahren, Autogramme geben und niemanden am ersten Hügel abhängen.",
      "xp": {
        "media": 240,
        "cycling": 45,
        "mental": 35
      },
      "reputation": 8,
      "fans": 70,
      "morale": 8,
      "requirements": {
        "fans": 100
      },
      "tags": [
        "Fans"
      ],
      "calendarDays": 1
    },
    {
      "id": "race_application",
      "title": "Elite-Startplatz beantragen",
      "icon": "📨",
      "duration": 145,
      "description": "Resultate, Formulare und eine überraschend detaillierte Materialliste einreichen.",
      "xp": {
        "organization": 310,
        "sponsorship": 140,
        "media": 80
      },
      "reputation": 10,
      "seasonPoints": 12,
      "requirements": {
        "reputation": 120
      },
      "tags": [
        "Elite"
      ],
      "calendarDays": 1
    },
    {
      "id": "coach_analysis",
      "title": "Leistungsdiagnostik mit Coach",
      "icon": "📊",
      "duration": 95,
      "calendarDays": 1,
      "description": "Daten auswerten und Trainingsfehler erkennen.",
      "xp": {
        "racecraft": 180,
        "organization": 150,
        "technique": 100
      },
      "form": 4,
      "morale": 2,
      "money": -90,
      "requirements": {
        "reputation": 20
      },
      "tags": [
        "Coaching"
      ]
    },
    {
      "id": "brand_campaign",
      "title": "Markenkampagne produzieren",
      "icon": "📣",
      "duration": 125,
      "calendarDays": 1,
      "description": "Größere Reichweite gegen Zeit und etwas Würde.",
      "xp": {
        "media": 330,
        "sponsorship": 170
      },
      "reputation": 10,
      "fans": 90,
      "money": 240,
      "requirements": {
        "fans": 250
      },
      "tags": [
        "Medien"
      ]
    },
    {
      "id": "equipment_test",
      "title": "Hersteller-Produkttest",
      "icon": "🧪",
      "duration": 135,
      "calendarDays": 1,
      "description": "Prototypen testen und wertvolle Daten sichern.",
      "xp": {
        "sponsorship": 190,
        "productDevelopment": 170,
        "materials": 90
      },
      "reputation": 8,
      "money": 300,
      "materials": {
        "data_chip": [
          0,
          1
        ],
        "blueprint": [
          0,
          1
        ]
      },
      "requirements": {
        "reputation": 100
      },
      "tags": [
        "Industrie"
      ]
    },
    {
      "id": "international_press",
      "title": "Internationale Pressekonferenz",
      "icon": "🌐",
      "duration": 155,
      "calendarDays": 1,
      "description": "Große Reichweite, große Erwartungen und sehr kleine Wasserflaschen.",
      "xp": {
        "media": 480,
        "sponsorship": 210,
        "mental": 70
      },
      "reputation": 18,
      "fans": 240,
      "money": 520,
      "requirements": {
        "fans": 1200
      },
      "tags": [
        "International"
      ]
    },
    {
      "id": "supplier_network",
      "title": "Lieferantennetzwerk ausbauen",
      "icon": "🔗",
      "duration": 145,
      "calendarDays": 1,
      "description": "Bessere Rohstoffe und zuverlässigere Beschaffung.",
      "xp": {
        "organization": 300,
        "materials": 160,
        "sponsorship": 100
      },
      "money": -180,
      "materials": {
        "carbon_fiber": [
          1,
          2
        ],
        "electronics": [
          0,
          2
        ],
        "titanium": [
          0,
          1
        ]
      },
      "requirements": {
        "skill": [
          "organization",
          10
        ]
      },
      "tags": [
        "Beschaffung"
      ]
    },
    {
      "id": "rival_scouting",
      "title": "Rivalen analysieren",
      "icon": "⚔",
      "duration": 90,
      "calendarDays": 1,
      "description": "Stärken, Schwächen und Lieblingsausreden dokumentieren.",
      "xp": {
        "racecraft": 300,
        "mental": 120,
        "media": 60
      },
      "reputation": 4,
      "requirements": {
        "reputation": 45
      },
      "tags": [
        "Rivalen"
      ]
    },
    {
      "id": "community_clinic",
      "title": "Triathlon-Workshop geben",
      "icon": "🎓",
      "duration": 120,
      "calendarDays": 1,
      "description": "Wissen teilen, Fans gewinnen und die eigene Technik reflektieren.",
      "xp": {
        "media": 230,
        "technique": 120,
        "sponsorship": 90
      },
      "reputation": 15,
      "fans": 140,
      "money": 180,
      "requirements": {
        "fans": 500
      },
      "tags": [
        "Community"
      ]
    },
    {
      "id": "target_race_analysis",
      "title": "Zielrennen analysieren",
      "icon": "🎯",
      "duration": 68,
      "description": "Strecke, Klima, Konkurrenz und eigenen Build als zusammenhängenden Rennplan bewerten.",
      "xp": {
        "racecraft": 190,
        "organization": 160,
        "mental": 65
      },
      "reputation": 3,
      "fans": 5,
      "tags": [
        "Planung",
        "Rennvorbereitung"
      ],
      "calendarDays": 1
    },
    {
      "id": "performance_documentary",
      "title": "Trainingsdokumentation produzieren",
      "icon": "🎥",
      "duration": 115,
      "description": "Eine glaubwürdige Folge über Rückschläge, Werkstatt und Fortschritt veröffentlichen.",
      "xp": {
        "media": 270,
        "sponsorship": 120,
        "mental": 55
      },
      "reputation": 8,
      "fans": 85,
      "money": 110,
      "requirements": {
        "fans": 250
      },
      "tags": [
        "Medien",
        "Story"
      ],
      "calendarDays": 2
    }
  ],
  "rivals": {
    "lena_wave": {
      "name": "Lena „Wave“ Hartmann",
      "icon": "🌊",
      "archetype": "Schwimmrakete",
      "quote": "Das Rennen beginnt nicht erst auf dem Rad.",
      "strengths": [
        "Schwimmen",
        "Starts"
      ],
      "weakness": "Lange Läufe",
      "bonus": {
        "swimming": 2.5
      }
    },
    "max_watt": {
      "name": "Max Wattner",
      "icon": "⚡",
      "archetype": "Rad-Berserker",
      "quote": "Pacing ist das Problem meines zukünftigen Ichs.",
      "strengths": [
        "Radfahren",
        "Kraft"
      ],
      "weakness": "Pacing",
      "bonus": {
        "cycling": 3
      }
    },
    "sara_split": {
      "name": "Sara Split",
      "icon": "⏱",
      "archetype": "Taktikerin",
      "quote": "Ich habe deine letzten drei Rennen analysiert.",
      "strengths": [
        "Renntaktik",
        "Wechsel"
      ],
      "weakness": "Unruhiges Wasser",
      "bonus": {
        "racecraft": 3
      }
    },
    "tom_tempo": {
      "name": "Tom Tempo",
      "icon": "🏃",
      "archetype": "Schlussläufer",
      "quote": "Wir sehen uns beim Halbmarathon.",
      "strengths": [
        "Laufen",
        "Mental"
      ],
      "weakness": "Technische Radstrecken",
      "bonus": {
        "running": 3
      }
    },
    "noa_nofear": {
      "name": "Noa No-Fear",
      "icon": "🔥",
      "archetype": "Extremathlet",
      "quote": "Hitze ist auch nur Wetter mit PR-Abteilung.",
      "strengths": [
        "Hitze",
        "Ausdauer"
      ],
      "weakness": "Wechsel",
      "bonus": {
        "endurance": 3
      }
    },
    "victor_vector": {
      "name": "Victor Vector",
      "icon": "➤",
      "archetype": "Materialperfektionist",
      "quote": "Dein Flaschenhalter kostet mindestens zwei Watt.",
      "strengths": [
        "Aerodynamik",
        "Material"
      ],
      "weakness": "Spontane Änderungen",
      "bonus": {
        "aerodynamics": 3
      }
    },
    "emil_ice": {
      "name": "Emil Frost",
      "icon": "❄",
      "archetype": "Kältespezialist",
      "quote": "Warm wird es spätestens bergauf.",
      "strengths": [
        "Kälte",
        "Ausdauer"
      ],
      "weakness": "Hitze"
    },
    "maya_miles": {
      "name": "Maya Miles",
      "icon": "🧭",
      "archetype": "Etappen-Taktikerin",
      "quote": "Das Rennen beginnt am zweiten Tag.",
      "strengths": [
        "Regeneration",
        "Taktik"
      ],
      "weakness": "Sprint"
    },
    "ben_burst": {
      "name": "Ben Burst",
      "icon": "⚡",
      "archetype": "Eliminator-Sprinter",
      "quote": "Pacing ist nur langsames Sprinten.",
      "strengths": [
        "Kraft",
        "Wechsel"
      ],
      "weakness": "Langdistanz"
    },
    "kira_kona": {
      "name": "Kira Kona",
      "icon": "🌋",
      "archetype": "Weltmeisterin",
      "quote": "Hitze ist eine Information, keine Ausrede.",
      "strengths": [
        "Hitze",
        "Mental"
      ],
      "weakness": "Kälte"
    }
  },
  "races": [
    {
      "id": "club_supersprint",
      "series": "Regional",
      "name": "Hohenlohe Vereins-Supersprint",
      "distance": "Supersprint",
      "location": "Vereinsbad & Feldrunde",
      "swim": "400 m",
      "bike": "10 km",
      "run": "2,5 km",
      "baseSeconds": 2500,
      "difficulty": 7,
      "fieldSize": 24,
      "entryFee": 25,
      "description": "Der erste echte Test. Kurze Wege, hektische Wechsel und ein Rivale mit viel zu teurem Helm.",
      "profile": "Schnell",
      "conditions": [
        "Ruhig",
        "Regen"
      ],
      "rival": "lena_wave",
      "rewards": {
        "money": 120,
        "reputation": 8,
        "fans": 10,
        "seasonPoints": 5
      },
      "fatigue": 18,
      "drops": [
        {
          "item": "elastic_laces",
          "chance": 0.18
        },
        {
          "item": "basic_goggles",
          "chance": 0.08
        }
      ],
      "requirements": [],
      "region": "home",
      "calendarDays": 2,
      "tier": 1
    },
    {
      "id": "city_sprint",
      "series": "Regional",
      "name": "Neuenstein City Sprint",
      "distance": "Sprintdistanz",
      "location": "Stadtsee & Innenstadt",
      "swim": "750 m",
      "bike": "20 km",
      "run": "5 km",
      "baseSeconds": 5200,
      "difficulty": 13,
      "fieldSize": 48,
      "entryFee": 55,
      "description": "Schnelle Radpassagen, enge Kurven und eine Wechselzone, die niemand logisch aufgebaut hat.",
      "profile": "Technisch",
      "conditions": [
        "Ruhig",
        "Regen",
        "Hitze"
      ],
      "rival": "sara_split",
      "rewards": {
        "money": 260,
        "reputation": 16,
        "fans": 28,
        "seasonPoints": 9
      },
      "fatigue": 25,
      "drops": [
        {
          "item": "giro_aerohead",
          "chance": 0.035
        },
        {
          "item": "zipp_404",
          "chance": 0.018
        },
        {
          "material": "blueprint",
          "chance": 0.13
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 1,
          "text": "1 Wettkampf finishen"
        },
        {
          "type": "skill",
          "id": "endurance",
          "value": 3,
          "text": "Ausdauer Level 3"
        }
      ],
      "region": "home",
      "calendarDays": 2,
      "tier": 1
    },
    {
      "id": "forest_cross",
      "series": "Regional",
      "name": "Waldkante Cross-Sprint",
      "distance": "Sprintdistanz",
      "location": "Naturpark",
      "swim": "600 m",
      "bike": "18 km",
      "run": "4,5 km",
      "baseSeconds": 5550,
      "difficulty": 15,
      "fieldSize": 42,
      "entryFee": 65,
      "description": "Unruhiger See, Schotterpassagen und ein Laufweg mit optimistischer Beschilderung.",
      "profile": "Cross",
      "conditions": [
        "Regen",
        "Unruhiges Wasser"
      ],
      "rival": "max_watt",
      "rewards": {
        "money": 300,
        "reputation": 19,
        "fans": 32,
        "seasonPoints": 10
      },
      "fatigue": 27,
      "drops": [
        {
          "item": "alloy_wheels",
          "chance": 0.12
        },
        {
          "material": "rubber",
          "chance": 0.5
        },
        {
          "material": "metal_parts",
          "chance": 0.4
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 2,
          "text": "2 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "technique",
          "value": 4,
          "text": "Technik Level 4"
        }
      ],
      "region": "forest",
      "calendarDays": 2,
      "tier": 1
    },
    {
      "id": "regional_standard",
      "series": "National",
      "name": "Regionalmeisterschaft Standard",
      "distance": "Standarddistanz",
      "location": "Kraichgau",
      "swim": "1,5 km",
      "bike": "40 km",
      "run": "10 km",
      "baseSeconds": 9800,
      "difficulty": 21,
      "fieldSize": 70,
      "entryFee": 110,
      "description": "Ausgewogene Strecke mit Wind, kurzen Anstiegen und deutlich stärkerem Feld.",
      "profile": "Hügelig",
      "conditions": [
        "Ruhig",
        "Seitenwind",
        "Hitze"
      ],
      "rival": "tom_tempo",
      "rewards": {
        "money": 550,
        "reputation": 30,
        "fans": 65,
        "seasonPoints": 16
      },
      "fatigue": 36,
      "drops": [
        {
          "item": "edge_1050",
          "chance": 0.032
        },
        {
          "item": "vaporfly_3",
          "chance": 0.028
        },
        {
          "material": "carbon_fiber",
          "chance": 0.22
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 3,
          "text": "3 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "racecraft",
          "value": 5,
          "text": "Renntaktik Level 5"
        },
        {
          "type": "reputation",
          "value": 25,
          "text": "25 Reputation"
        }
      ],
      "region": "metro",
      "calendarDays": 2,
      "tier": 2
    },
    {
      "id": "lake_standard",
      "series": "National",
      "name": "Alpenrand Standard",
      "distance": "Standarddistanz",
      "location": "Voralpensee",
      "swim": "1,5 km",
      "bike": "42 km",
      "run": "10 km",
      "baseSeconds": 10400,
      "difficulty": 24,
      "fieldSize": 78,
      "entryFee": 135,
      "description": "Kühles Wasser, längere Anstiege und eine schnelle Abfahrt zum Schluss.",
      "profile": "Bergig",
      "conditions": [
        "Ruhig",
        "Kälte",
        "Regen"
      ],
      "rival": "lena_wave",
      "rewards": {
        "money": 680,
        "reputation": 36,
        "fans": 78,
        "seasonPoints": 19
      },
      "fatigue": 39,
      "drops": [
        {
          "item": "sailfish_ultimate",
          "chance": 0.025
        },
        {
          "item": "roka_maverick",
          "chance": 0.02
        },
        {
          "material": "blueprint",
          "chance": 0.2
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 4,
          "text": "4 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "strength",
          "value": 5,
          "text": "Kraft Level 5"
        },
        {
          "type": "reputation",
          "value": 38,
          "text": "38 Reputation"
        }
      ],
      "region": "lakes",
      "calendarDays": 2,
      "tier": 2
    },
    {
      "id": "coastal_middle",
      "series": "International",
      "name": "Windkante 70.3",
      "distance": "Mitteldistanz",
      "location": "Nordseeküste",
      "swim": "1,9 km",
      "bike": "90 km",
      "run": "21,1 km",
      "baseSeconds": 18000,
      "difficulty": 31,
      "fieldSize": 95,
      "entryFee": 240,
      "description": "Langer Tag, starker Seitenwind und ein Ernährungsplan, der wirklich funktionieren muss.",
      "profile": "Flach & windig",
      "conditions": [
        "Seitenwind",
        "Regen"
      ],
      "rival": "victor_vector",
      "rewards": {
        "money": 1150,
        "reputation": 58,
        "fans": 150,
        "seasonPoints": 30
      },
      "fatigue": 52,
      "drops": [
        {
          "item": "canyon_speedmax",
          "chance": 0.022
        },
        {
          "item": "sailfish_ultimate",
          "chance": 0.03
        },
        {
          "material": "blueprint",
          "chance": 0.28
        },
        {
          "material": "carbon_fiber",
          "chance": 0.35
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 6,
          "text": "6 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "endurance",
          "value": 9,
          "text": "Ausdauer Level 9"
        },
        {
          "type": "skill",
          "id": "nutrition",
          "value": 5,
          "text": "Ernährung Level 5"
        },
        {
          "type": "reputation",
          "value": 70,
          "text": "70 Reputation"
        }
      ],
      "region": "coast",
      "calendarDays": 3,
      "tier": 2
    },
    {
      "id": "alpine_middle",
      "series": "International",
      "name": "Alpenkrone 70.3",
      "distance": "Mitteldistanz",
      "location": "Hochgebirge",
      "swim": "1,9 km",
      "bike": "94 km",
      "run": "21,1 km",
      "baseSeconds": 19400,
      "difficulty": 35,
      "fieldSize": 90,
      "entryFee": 280,
      "description": "Kühle Höhe, lange Pässe und ein Laufkurs, der das Wort „flach“ konsequent meidet.",
      "profile": "Bergig",
      "conditions": [
        "Kälte",
        "Regen",
        "Ruhig"
      ],
      "rival": "max_watt",
      "rewards": {
        "money": 1380,
        "reputation": 70,
        "fans": 190,
        "seasonPoints": 36
      },
      "fatigue": 58,
      "drops": [
        {
          "item": "cervelo_p_series",
          "chance": 0.022
        },
        {
          "item": "dt_swiss_arc",
          "chance": 0.025
        },
        {
          "material": "carbon_fiber",
          "chance": 0.45
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 8,
          "text": "8 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "strength",
          "value": 9,
          "text": "Kraft Level 9"
        },
        {
          "type": "reputation",
          "value": 95,
          "text": "95 Reputation"
        }
      ],
      "region": "alps",
      "calendarDays": 3,
      "tier": 3
    },
    {
      "id": "night_middle",
      "series": "International",
      "name": "Midnight City 70.3",
      "distance": "Mitteldistanz",
      "location": "Metropole bei Nacht",
      "swim": "1,9 km",
      "bike": "90 km",
      "run": "21,1 km",
      "baseSeconds": 17600,
      "difficulty": 36,
      "fieldSize": 110,
      "entryFee": 310,
      "description": "Lichter, enge Wendepunkte und ein Feld, das jede Kurve wie ein Finale behandelt.",
      "profile": "Technisch",
      "conditions": [
        "Ruhig",
        "Regen"
      ],
      "rival": "sara_split",
      "rewards": {
        "money": 1550,
        "reputation": 78,
        "fans": 240,
        "seasonPoints": 40
      },
      "fatigue": 57,
      "drops": [
        {
          "item": "edge_1050",
          "chance": 0.06
        },
        {
          "item": "prototype_trisuit",
          "chance": 0.018
        },
        {
          "material": "blueprint",
          "chance": 0.4
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 9,
          "text": "9 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "transitions",
          "value": 8,
          "text": "Wechsel Level 8"
        },
        {
          "type": "reputation",
          "value": 120,
          "text": "120 Reputation"
        }
      ],
      "region": "metro",
      "calendarDays": 3,
      "tier": 3
    },
    {
      "id": "island_long",
      "series": "Langdistanz",
      "name": "Vulkaninsel-Langdistanz",
      "distance": "Langdistanz",
      "location": "Vulkaninsel",
      "swim": "3,8 km",
      "bike": "180 km",
      "run": "42,2 km",
      "baseSeconds": 38000,
      "difficulty": 45,
      "fieldSize": 120,
      "entryFee": 520,
      "description": "Hitze, Wind, Lavafelder und ein Marathon nach 180 Kilometern Rad. Der erste Schritt Richtung Hawaii.",
      "profile": "Hitze & Wind",
      "conditions": [
        "Hitze",
        "Seitenwind",
        "Unruhiges Wasser"
      ],
      "rival": "noa_nofear",
      "rewards": {
        "money": 2600,
        "reputation": 120,
        "fans": 420,
        "seasonPoints": 65
      },
      "fatigue": 78,
      "drops": [
        {
          "item": "canyon_speedmax",
          "chance": 0.05
        },
        {
          "item": "sailfish_ultimate",
          "chance": 0.065
        },
        {
          "item": "volcanic_medal",
          "chance": 0.2
        },
        {
          "material": "blueprint",
          "chance": 0.45
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 10,
          "text": "10 Wettkämpfe finishen"
        },
        {
          "type": "wins",
          "value": 2,
          "text": "2 Wettkampfsiege"
        },
        {
          "type": "skill",
          "id": "endurance",
          "value": 15,
          "text": "Ausdauer Level 15"
        },
        {
          "type": "skill",
          "id": "mental",
          "value": 8,
          "text": "Mentale Stärke Level 8"
        },
        {
          "type": "reputation",
          "value": 160,
          "text": "160 Reputation"
        }
      ],
      "region": "islands",
      "calendarDays": 4,
      "tier": 3
    },
    {
      "id": "desert_long",
      "series": "Langdistanz",
      "name": "Desert Furnace",
      "distance": "Langdistanz",
      "location": "Wüstenregion",
      "swim": "3,8 km",
      "bike": "180 km",
      "run": "42,2 km",
      "baseSeconds": 39200,
      "difficulty": 50,
      "fieldSize": 125,
      "entryFee": 620,
      "description": "Trockene Hitze, endlose Geraden und Verpflegungsstationen, die plötzlich sehr weit auseinander wirken.",
      "profile": "Extreme Hitze",
      "conditions": [
        "Hitze"
      ],
      "rival": "noa_nofear",
      "rewards": {
        "money": 3200,
        "reputation": 145,
        "fans": 560,
        "seasonPoints": 78
      },
      "fatigue": 82,
      "drops": [
        {
          "item": "smart_hydration",
          "chance": 0.012
        },
        {
          "item": "metaspeed_sky",
          "chance": 0.045
        },
        {
          "material": "blueprint",
          "chance": 0.6
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 13,
          "text": "13 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "nutrition",
          "value": 12,
          "text": "Ernährung Level 12"
        },
        {
          "type": "skill",
          "id": "recovery",
          "value": 10,
          "text": "Regeneration Level 10"
        },
        {
          "type": "reputation",
          "value": 230,
          "text": "230 Reputation"
        }
      ],
      "region": "islands",
      "calendarDays": 4,
      "tier": 4
    },
    {
      "id": "continental_qualifier",
      "series": "Qualifikation",
      "name": "Continental Championship",
      "distance": "Langdistanz",
      "location": "Atlantikküste",
      "swim": "3,8 km",
      "bike": "180 km",
      "run": "42,2 km",
      "baseSeconds": 36500,
      "difficulty": 56,
      "fieldSize": 140,
      "entryFee": 760,
      "description": "Das Qualifikationsrennen: starkes Feld, wechselnder Wind und kein Raum für grobe Fehler.",
      "profile": "Meisterschaft",
      "conditions": [
        "Ruhig",
        "Seitenwind",
        "Regen",
        "Hitze"
      ],
      "rival": "victor_vector",
      "rewards": {
        "money": 4300,
        "reputation": 190,
        "fans": 900,
        "seasonPoints": 110
      },
      "fatigue": 86,
      "drops": [
        {
          "item": "cervelo_p_series",
          "chance": 0.06
        },
        {
          "item": "dt_swiss_arc",
          "chance": 0.065
        },
        {
          "item": "coach_notebook",
          "chance": 0.12
        },
        {
          "material": "blueprint",
          "chance": 0.75
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 16,
          "text": "16 Wettkämpfe finishen"
        },
        {
          "type": "wins",
          "value": 4,
          "text": "4 Wettkampfsiege"
        },
        {
          "type": "skill",
          "id": "endurance",
          "value": 20,
          "text": "Ausdauer Level 20"
        },
        {
          "type": "skill",
          "id": "racecraft",
          "value": 14,
          "text": "Renntaktik Level 14"
        },
        {
          "type": "reputation",
          "value": 340,
          "text": "340 Reputation"
        }
      ],
      "region": "coast",
      "calendarDays": 4,
      "tier": 4
    },
    {
      "id": "hawaii_worlds",
      "series": "Weltmeisterschaft",
      "name": "Triathlon-Weltmeisterschaft Hawaii",
      "distance": "Langdistanz",
      "location": "Hawaii",
      "swim": "3,8 km",
      "bike": "180 km",
      "run": "42,2 km",
      "baseSeconds": 35000,
      "difficulty": 64,
      "fieldSize": 160,
      "entryFee": 1200,
      "description": "Das große Ziel: Ozean, Hitze, Seitenwind und das stärkste Feld der Karriere.",
      "profile": "Legendär",
      "conditions": [
        "Hitze",
        "Seitenwind",
        "Unruhiges Wasser"
      ],
      "rival": "kira_kona",
      "rewards": {
        "money": 9000,
        "reputation": 420,
        "fans": 3500,
        "seasonPoints": 240
      },
      "fatigue": 92,
      "drops": [
        {
          "item": "hawaii_trophy",
          "chance": 1
        },
        {
          "item": "smart_hydration",
          "chance": 0.08
        },
        {
          "item": "custom_super_shoe",
          "chance": 0.06
        }
      ],
      "requirements": [
        {
          "type": "raceTop",
          "id": "continental_qualifier",
          "value": 8,
          "text": "Top 8 beim Continental Championship"
        },
        {
          "type": "wins",
          "value": 6,
          "text": "6 Wettkampfsiege"
        },
        {
          "type": "skill",
          "id": "endurance",
          "value": 26,
          "text": "Ausdauer Level 26"
        },
        {
          "type": "skill",
          "id": "mental",
          "value": 18,
          "text": "Mentale Stärke Level 18"
        },
        {
          "type": "reputation",
          "value": 600,
          "text": "600 Reputation"
        }
      ],
      "region": "kona",
      "calendarDays": 4,
      "tier": 5
    },
    {
      "id": "river_eliminator",
      "series": "Regional",
      "name": "Kocher Eliminator",
      "distance": "Supersprint",
      "location": "Kocherufer",
      "region": "home",
      "swim": "300 m",
      "bike": "8 km",
      "run": "2 km",
      "baseSeconds": 1900,
      "difficulty": 10,
      "fieldSize": 20,
      "entryFee": 35,
      "description": "Drei kurze Runden, schnelle Wechsel und keine Zeit für philosophisches Pacing.",
      "profile": "Schnell",
      "conditions": [
        "Ruhig",
        "Regen"
      ],
      "rival": "ben_burst",
      "rewards": {
        "money": 160,
        "reputation": 10,
        "fans": 18,
        "seasonPoints": 7
      },
      "fatigue": 20,
      "drops": [
        {
          "item": "race_belt",
          "chance": 0.22
        },
        {
          "material": "electrolytes",
          "chance": 0.35
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 1,
          "text": "1 Wettkampf finishen"
        }
      ],
      "tier": 1,
      "calendarDays": 2
    },
    {
      "id": "lake_aquathlon",
      "series": "Sonderformat",
      "name": "Bodensee Aquathlon",
      "distance": "Sprintdistanz",
      "location": "Bodensee",
      "region": "lakes",
      "swim": "1 km",
      "bike": "—",
      "run": "7 km",
      "baseSeconds": 4400,
      "difficulty": 18,
      "fieldSize": 55,
      "entryFee": 75,
      "description": "Kein Rad, dafür viel Schwimmen, schneller Wechsel und ein langer Lauf am Ufer.",
      "profile": "Aquathlon",
      "conditions": [
        "Ruhig",
        "Unruhiges Wasser",
        "Kälte"
      ],
      "rival": "lena_wave",
      "rewards": {
        "money": 330,
        "reputation": 22,
        "fans": 42,
        "seasonPoints": 12
      },
      "fatigue": 27,
      "drops": [
        {
          "item": "openwater_goggles",
          "chance": 0.06
        },
        {
          "material": "botanical",
          "chance": 0.35
        }
      ],
      "requirements": [
        {
          "type": "reputation",
          "value": 25,
          "text": "25 Reputation"
        }
      ],
      "tier": 2,
      "calendarDays": 2,
      "specialWeights": {
        "swim": 0.34,
        "bike": 0,
        "run": 0.58,
        "transitions": 0.08
      }
    },
    {
      "id": "metro_standard",
      "series": "National",
      "name": "Stuttgart City Standard",
      "distance": "Standarddistanz",
      "location": "Neckar & Innenstadt",
      "region": "metro",
      "swim": "1,5 km",
      "bike": "40 km",
      "run": "10 km",
      "baseSeconds": 9000,
      "difficulty": 25,
      "fieldSize": 120,
      "entryFee": 130,
      "description": "Schnelle Passagen, technische Wendepunkte und überraschend viele Zuschauer.",
      "profile": "Technisch",
      "conditions": [
        "Ruhig",
        "Hitze",
        "Regen"
      ],
      "rival": "tom_tempo",
      "rewards": {
        "money": 620,
        "reputation": 38,
        "fans": 95,
        "seasonPoints": 20
      },
      "fatigue": 34,
      "drops": [
        {
          "item": "balanced_aero_helmet",
          "chance": 0.045
        },
        {
          "item": "power_meter",
          "chance": 0.015
        },
        {
          "material": "electronics",
          "chance": 0.22
        }
      ],
      "requirements": [
        {
          "type": "finishes",
          "value": 5,
          "text": "5 Wettkämpfe finishen"
        },
        {
          "type": "skill",
          "id": "racecraft",
          "value": 7,
          "text": "Renntaktik Level 7"
        }
      ],
      "tier": 2,
      "calendarDays": 2
    },
    {
      "id": "alpine_duathlon",
      "series": "Sonderformat",
      "name": "Alpenpass Duathlon",
      "distance": "Mitteldistanz",
      "location": "Alpenpass",
      "region": "alps",
      "swim": "—",
      "bike": "75 km",
      "run": "18 km",
      "baseSeconds": 15000,
      "difficulty": 38,
      "fieldSize": 85,
      "entryFee": 210,
      "description": "Kein Schwimmen, dafür ein Radkurs, der jede falsche Übersetzung persönlich nimmt.",
      "profile": "Bergig",
      "conditions": [
        "Kälte",
        "Regen",
        "Ruhig"
      ],
      "rival": "max_watt",
      "rewards": {
        "money": 1050,
        "reputation": 65,
        "fans": 180,
        "seasonPoints": 34
      },
      "fatigue": 48,
      "drops": [
        {
          "item": "stable_race_shoe",
          "chance": 0.035
        },
        {
          "material": "titanium",
          "chance": 0.18
        },
        {
          "item": "rival_gloves",
          "chance": 0.012
        }
      ],
      "requirements": [
        {
          "type": "reputation",
          "value": 110,
          "text": "110 Reputation"
        },
        {
          "type": "skill",
          "id": "strength",
          "value": 10,
          "text": "Kraft Level 10"
        }
      ],
      "tier": 3,
      "calendarDays": 3,
      "specialWeights": {
        "swim": 0,
        "bike": 0.62,
        "run": 0.34,
        "transitions": 0.04
      }
    },
    {
      "id": "fjord_extreme",
      "series": "International",
      "name": "Fjord Extreme Triathlon",
      "distance": "Langdistanz",
      "location": "Nordischer Fjord",
      "region": "north",
      "swim": "3,8 km",
      "bike": "180 km",
      "run": "42,2 km",
      "baseSeconds": 41000,
      "difficulty": 61,
      "fieldSize": 95,
      "entryFee": 480,
      "description": "Kälte, Höhenmeter und ein Zielbogen, den man erst nach einem Berglauf verdient.",
      "profile": "Extrem",
      "conditions": [
        "Kälte",
        "Regen",
        "Unruhiges Wasser"
      ],
      "rival": "emil_ice",
      "rewards": {
        "money": 2800,
        "reputation": 150,
        "fans": 720,
        "seasonPoints": 75
      },
      "fatigue": 76,
      "drops": [
        {
          "item": "cold_wetsuit",
          "chance": 0.05
        },
        {
          "item": "allweather_wheels",
          "chance": 0.004
        },
        {
          "material": "blueprint",
          "chance": 0.3
        }
      ],
      "requirements": [
        {
          "type": "longFinishes",
          "value": 1,
          "text": "1 Langdistanz finishen"
        },
        {
          "type": "skill",
          "id": "mental",
          "value": 16,
          "text": "Mentale Stärke Level 16"
        }
      ],
      "tier": 4,
      "calendarDays": 4
    },
    {
      "id": "innovation_tt",
      "series": "Technologie",
      "name": "Innovation Campus Time Trial",
      "distance": "Standarddistanz",
      "location": "Testgelände",
      "region": "campus",
      "swim": "1 km",
      "bike": "50 km",
      "run": "8 km",
      "baseSeconds": 8500,
      "difficulty": 45,
      "fieldSize": 64,
      "entryFee": 260,
      "description": "Ein Rennen, das gleichzeitig Feldtest, Messe und Ego-Korrektur ist.",
      "profile": "Aero",
      "conditions": [
        "Ruhig",
        "Seitenwind"
      ],
      "rival": "victor_vector",
      "rewards": {
        "money": 1450,
        "reputation": 85,
        "fans": 230,
        "seasonPoints": 42
      },
      "fatigue": 39,
      "drops": [
        {
          "item": "precision_bearings",
          "chance": 0.04
        },
        {
          "material": "data_chip",
          "chance": 0.35
        },
        {
          "material": "ceramic",
          "chance": 0.25
        }
      ],
      "requirements": [
        {
          "type": "facility",
          "id": "lab",
          "value": 2,
          "text": "Entwicklungslabor Level 2"
        },
        {
          "type": "skill",
          "id": "aerodynamics",
          "value": 12,
          "text": "Aerodynamik Level 12"
        }
      ],
      "tier": 3,
      "calendarDays": 3
    },
    {
      "id": "island_stage",
      "series": "Etappenrennen",
      "name": "Island Triple",
      "distance": "Mitteldistanz",
      "location": "Vulkaninsel",
      "region": "islands",
      "swim": "1,9 km",
      "bike": "90 km",
      "run": "21,1 km",
      "baseSeconds": 20500,
      "difficulty": 50,
      "fieldSize": 110,
      "entryFee": 390,
      "description": "Drei Renntage ohne vollständige Erholung. Regeneration wird zur Disziplin Nummer vier.",
      "profile": "Etappe",
      "conditions": [
        "Hitze",
        "Seitenwind",
        "Ruhig"
      ],
      "rival": "maya_miles",
      "rewards": {
        "money": 1900,
        "reputation": 105,
        "fans": 410,
        "seasonPoints": 54
      },
      "fatigue": 66,
      "drops": [
        {
          "item": "aero_hydration",
          "chance": 0.05
        },
        {
          "material": "botanical",
          "chance": 0.45
        },
        {
          "material": "blueprint",
          "chance": 0.2
        }
      ],
      "requirements": [
        {
          "type": "reputation",
          "value": 230,
          "text": "230 Reputation"
        },
        {
          "type": "skill",
          "id": "recovery",
          "value": 12,
          "text": "Regeneration Level 12"
        }
      ],
      "tier": 4,
      "calendarDays": 5
    },
    {
      "id": "champions_cup",
      "series": "Elite",
      "name": "Champions Cup",
      "distance": "Standarddistanz",
      "location": "Rotierende Weltmetropole",
      "region": "metro",
      "swim": "1,5 km",
      "bike": "40 km",
      "run": "10 km",
      "baseSeconds": 7200,
      "difficulty": 68,
      "fieldSize": 45,
      "entryFee": 650,
      "description": "Ein kompaktes Elitefeld, keine schwache Disziplin und ein Preisgeld, das jeden Fehler sichtbar macht.",
      "profile": "Elite",
      "conditions": [
        "Ruhig",
        "Hitze",
        "Regen",
        "Seitenwind"
      ],
      "rival": "victor_vector",
      "rewards": {
        "money": 4200,
        "reputation": 210,
        "fans": 1200,
        "seasonPoints": 95
      },
      "fatigue": 44,
      "drops": [
        {
          "item": "champion_trisuit",
          "chance": 0.012
        },
        {
          "material": "blueprint",
          "chance": 0.5
        }
      ],
      "requirements": [
        {
          "type": "wins",
          "value": 8,
          "text": "8 Rennsiege"
        },
        {
          "type": "seasonPoints",
          "value": 500,
          "text": "500 Saisonpunkte"
        }
      ],
      "tier": 5,
      "calendarDays": 3
    }
  ],
  "sponsors": [
    {
      "id": "bike_shop",
      "name": "Kettenblatt Radladen",
      "icon": "🔧",
      "tier": "Lokal",
      "description": "Kleine Zahlungen, günstige Reparaturen und kein übertriebener Markenzwang.",
      "requirements": {
        "reputation": 12,
        "sponsorship": 2
      },
      "signingBonus": 150,
      "raceBonus": 25,
      "perk": "Werkstattaktionen dauern 10 % kürzer.",
      "effect": {
        "workshopSpeed": 0.9
      },
      "contract": {
        "counter": "race_finishes",
        "target": 3,
        "reward": {
          "money": 300,
          "reputation": 10,
          "fans": 30
        }
      }
    },
    {
      "id": "local_bank",
      "name": "Hohenlohe Direktbank",
      "icon": "🏦",
      "tier": "Regional",
      "description": "Solide Finanzierung gegen regelmäßige regionale Starts.",
      "requirements": {
        "reputation": 35,
        "sponsorship": 4
      },
      "signingBonus": 320,
      "raceBonus": 55,
      "perk": "Regionale Rennen zahlen 12 % mehr Preisgeld.",
      "effect": {
        "regionalMoney": 1.12
      },
      "contract": {
        "counter": "career_actions",
        "target": 4,
        "reward": {
          "money": 420,
          "reputation": 13,
          "fans": 50
        }
      }
    },
    {
      "id": "fuel_lab",
      "name": "EnduroFuel Lab",
      "icon": "🧪",
      "tier": "Performance",
      "description": "Unterstützt lange Rennen, erwartet aber regelmäßige Wettkampfstarts.",
      "requirements": {
        "reputation": 55,
        "sponsorship": 5,
        "nutrition": 4
      },
      "signingBonus": 380,
      "raceBonus": 70,
      "perk": "Fuel-Verbrauch wirkt im Rennen 25 % stärker.",
      "effect": {
        "fuelEffect": 1.25
      },
      "contract": {
        "counter": "race_finishes",
        "target": 5,
        "reward": {
          "money": 540,
          "reputation": 16,
          "fans": 70
        }
      }
    },
    {
      "id": "run_collective",
      "name": "Fast Finish Collective",
      "icon": "👟",
      "tier": "Performance",
      "description": "Laufsponsor mit Bonus für starke Schlussdisziplinen.",
      "requirements": {
        "reputation": 95,
        "sponsorship": 7,
        "running": 8
      },
      "signingBonus": 650,
      "raceBonus": 105,
      "perk": "Laufschuhe erhalten +10 % Wirkung.",
      "effect": {
        "runGear": 1.1
      },
      "contract": {
        "counter": "career_actions",
        "target": 3,
        "reward": {
          "money": 660,
          "reputation": 19,
          "fans": 90
        }
      }
    },
    {
      "id": "aero_works",
      "name": "Velocity Aero Works",
      "icon": "➤",
      "tier": "Premium",
      "description": "Technologiepartner mit starken Boni und klaren Materialvorgaben.",
      "requirements": {
        "reputation": 130,
        "sponsorship": 9,
        "aerodynamics": 7
      },
      "signingBonus": 900,
      "raceBonus": 160,
      "perk": "Aero-Ausrüstung erhält +8 % Wirkung.",
      "effect": {
        "aeroGear": 1.08
      },
      "contract": {
        "counter": "race_finishes",
        "target": 4,
        "reward": {
          "money": 780,
          "reputation": 22,
          "fans": 110
        }
      }
    },
    {
      "id": "global_endurance",
      "name": "Global Endurance Group",
      "icon": "🌐",
      "tier": "Elite",
      "description": "Internationaler Partner für Qualifikation und Weltmeisterschaft.",
      "requirements": {
        "reputation": 360,
        "sponsorship": 16,
        "media": 12
      },
      "signingBonus": 2400,
      "raceBonus": 420,
      "perk": "Internationale Rennen geben +15 % Reputation und Fans.",
      "effect": {
        "internationalCareer": 1.15
      },
      "contract": {
        "counter": "career_actions",
        "target": 5,
        "reward": {
          "money": 900,
          "reputation": 25,
          "fans": 130
        }
      }
    },
    {
      "id": "swim_collective",
      "name": "BlueLine Swim Collective",
      "icon": "🌊",
      "tier": "Spezialist",
      "description": "Freiwasser-Equipment und Boni für starke Schwimmleistungen.",
      "requirements": {
        "reputation": 80,
        "sponsorship": 6,
        "swimming": 7
      },
      "signingBonus": 550,
      "raceBonus": 80,
      "perk": "Schwimm-Ausrüstung wirkt 15 % stärker.",
      "effect": {
        "swimGear": 1.15
      },
      "contract": {
        "counter": "race_finishes",
        "target": 4,
        "reward": {
          "money": 500,
          "reputation": 20
        }
      }
    },
    {
      "id": "recovery_club",
      "name": "Re:Form Recovery",
      "icon": "☾",
      "tier": "Performance",
      "description": "Regeneration, Physio und klare Erwartungen an die Saisonplanung.",
      "requirements": {
        "reputation": 120,
        "sponsorship": 8,
        "recovery": 8
      },
      "signingBonus": 700,
      "raceBonus": 90,
      "perk": "Rennen verursachen 10 % weniger Ermüdung.",
      "effect": {
        "raceFatigue": 0.9
      },
      "contract": {
        "counter": "action_recovery_session",
        "target": 3,
        "reward": {
          "money": 650,
          "fans": 100
        }
      }
    },
    {
      "id": "tech_forge",
      "name": "Vector Engineering",
      "icon": "⚙",
      "tier": "Technologie",
      "description": "Unterstützt Prototypen und erwartet sichtbare Innovation.",
      "requirements": {
        "reputation": 180,
        "sponsorship": 10,
        "productDevelopment": 8
      },
      "signingBonus": 1000,
      "raceBonus": 110,
      "perk": "Werkstattqualität und seltene Materialausbeute steigen.",
      "effect": {
        "craftQuality": 0.12,
        "rareMaterial": 0.08
      },
      "contract": {
        "counter": "craft_total",
        "target": 5,
        "reward": {
          "money": 900,
          "materials": {
            "data_chip": 1,
            "carbon_fiber": 2
          }
        }
      }
    },
    {
      "id": "outdoor_brand",
      "name": "NorthPeak Endurance",
      "icon": "🏔",
      "tier": "International",
      "description": "Berge, Kälte und extreme Geschichten für eine starke Marke.",
      "requirements": {
        "reputation": 260,
        "sponsorship": 12,
        "mental": 10
      },
      "signingBonus": 1450,
      "raceBonus": 160,
      "perk": "Boni bei extremen und bergigen Rennen.",
      "effect": {
        "extremeRace": 1.04
      },
      "contract": {
        "counter": "international_finishes",
        "target": 2,
        "reward": {
          "money": 1400,
          "reputation": 45,
          "fans": 350
        }
      }
    }
  ],
  "quests": [
    {
      "id": "lost_transition_bag",
      "title": "Der verschwundene Wechselbeutel",
      "icon": "🎒",
      "story": "Ein Teamkollege hat seinen Wechselbeutel „sehr sicher“ verstaut. Übe zwei Wechsel und rekonstruiere seine hochkomplexe Logik.",
      "requirement": {
        "counter": "action_transition_drill",
        "target": 2,
        "label": "Wechseltraining abschließen"
      },
      "rewards": {
        "money": 90,
        "reputation": 6,
        "xp": {
          "transitions": 220,
          "organization": 100
        },
        "item": [
          "elastic_laces",
          1
        ]
      },
      "chain": "Vereinschaos",
      "chapter": 1
    },
    {
      "id": "wrong_wheels",
      "title": "Die falschen Laufräder",
      "icon": "◯",
      "story": "Der Mechaniker hat Scheibenräder für einen Schotterkurs geliefert. Baue ein Reparaturset, bevor noch jemand auf Ideen kommt.",
      "requirement": {
        "counter": "craft_craft_repair_kit",
        "target": 1,
        "label": "Reparaturset herstellen"
      },
      "rewards": {
        "money": 140,
        "reputation": 9,
        "xp": {
          "mechanics": 260,
          "materials": 110
        },
        "materials": {
          "carbon_fiber": 1,
          "polymer": 2
        }
      },
      "chain": "Vereinschaos",
      "chapter": 1
    },
    {
      "id": "crooked_buoys",
      "title": "Bojen nach Gefühl",
      "icon": "🔶",
      "story": "Der Veranstalter behauptet, die Bojen seien „ungefähr normgerecht“. Finishe drei Rennen und sammle genug Beweise.",
      "requirement": {
        "counter": "race_finishes",
        "target": 3,
        "label": "Wettkämpfe finishen"
      },
      "rewards": {
        "money": 250,
        "reputation": 18,
        "fans": 45,
        "xp": {
          "racecraft": 300,
          "media": 120
        },
        "item": [
          "legendary_beacon",
          1
        ]
      },
      "chain": "Vereinschaos",
      "chapter": 1
    },
    {
      "id": "gel_experiment",
      "title": "Das Gel mit überraschender Konsistenz",
      "icon": "🧪",
      "story": "Der neue Gel-Prototyp lässt sich wahlweise trinken, kauen oder als Dichtmittel verwenden. Produziere drei Chargen.",
      "requirement": {
        "counter": "craft_craft_gel",
        "target": 3,
        "label": "Energiegel herstellen"
      },
      "rewards": {
        "money": 220,
        "reputation": 12,
        "xp": {
          "nutrition": 420,
          "productDevelopment": 90
        },
        "materials": {
          "electrolytes": 4,
          "carbs": 5
        }
      },
      "chain": "Werkstatt & Karriere",
      "chapter": 1
    },
    {
      "id": "sponsor_video",
      "title": "Das absurd dynamische Werbevideo",
      "icon": "🎥",
      "story": "Der Sponsor wünscht „mehr Energie“. Niemand kann erklären, warum dabei ein Nebelgerät neben dem Rollentrainer steht.",
      "requirement": {
        "counter": "action_media_day",
        "target": 2,
        "label": "Medientage abschließen"
      },
      "rewards": {
        "money": 430,
        "reputation": 20,
        "fans": 120,
        "xp": {
          "media": 480,
          "sponsorship": 180
        }
      },
      "chain": "Werkstatt & Karriere",
      "chapter": 1
    },
    {
      "id": "secret_climb",
      "title": "Der Anstieg, den es angeblich nicht gibt",
      "icon": "⛰",
      "story": "Ein wortkarger Trainer schickt dich dreimal auf dieselbe Route und behauptet, beim vierten Mal sei sie kürzer.",
      "requirement": {
        "counter": "action_hill_repeats",
        "target": 3,
        "label": "Bergwiederholungen abschließen"
      },
      "rewards": {
        "money": 360,
        "reputation": 24,
        "xp": {
          "cycling": 520,
          "strength": 310,
          "mental": 130
        },
        "item": [
          "coach_notebook",
          1
        ]
      },
      "chain": "Werkstatt & Karriere",
      "chapter": 1
    },
    {
      "id": "prototype_problem",
      "title": "Prototyp 7B war fast perfekt",
      "icon": "⚙",
      "story": "Fast perfekt bedeutet in diesem Fall: schnell, leicht und nicht vollständig kompatibel mit der Realität. Baue einen Carbonspacer.",
      "requirement": {
        "counter": "craft_craft_carbon_spacer",
        "target": 1,
        "label": "Carbonspacer-Prototyp herstellen"
      },
      "rewards": {
        "money": 760,
        "reputation": 35,
        "xp": {
          "productDevelopment": 700,
          "materials": 340
        },
        "materials": {
          "blueprint": 2,
          "carbon_fiber": 3
        }
      },
      "chain": "Werkstatt & Karriere",
      "chapter": 1
    },
    {
      "id": "rivalry",
      "title": "Eine völlig freundschaftliche Rivalität",
      "icon": "⚔",
      "story": "Dein Rivale behauptet, das letzte Ergebnis sei wetterbedingt. Schlage Rivalen in vier Rennen und beende die Diskussion vorläufig.",
      "requirement": {
        "counter": "rivals_beaten",
        "target": 4,
        "label": "Rivalen schlagen"
      },
      "rewards": {
        "money": 950,
        "reputation": 55,
        "fans": 300,
        "xp": {
          "racecraft": 760,
          "mental": 420
        }
      },
      "chain": "Road to Hawaii",
      "chapter": 1
    },
    {
      "id": "road_to_hawaii",
      "title": "Road to Hawaii",
      "icon": "🌋",
      "story": "Die Qualifikation ist keine einzelne Prüfung, sondern eine lange Reihe guter Entscheidungen. Finishe eine Langdistanz.",
      "requirement": {
        "counter": "long_finishes",
        "target": 1,
        "label": "Langdistanz finishen"
      },
      "rewards": {
        "money": 1600,
        "reputation": 90,
        "fans": 600,
        "xp": {
          "endurance": 900,
          "organization": 500,
          "nutrition": 350
        },
        "materials": {
          "blueprint": 3
        }
      },
      "chain": "Road to Hawaii",
      "chapter": 1
    },
    {
      "id": "club_legend",
      "chain": "Vereinsmythen",
      "chapter": 1,
      "title": "Der Rahmen namens Erwin",
      "icon": "🚲",
      "story": "Im Lager steht ein Stahlrahmen, den angeblich drei Generationen Vereinsmeister gefahren haben. Finde ihn bei Lieferantenbesuchen.",
      "requirement": {
        "counter": "action_supplier_visit",
        "target": 2,
        "label": "Lieferantenbesuche"
      },
      "rewards": {
        "money": 260,
        "reputation": 14,
        "xp": {
          "organization": 220,
          "materials": 140
        },
        "item": [
          "old_timer_frame",
          1
        ]
      }
    },
    {
      "id": "sign_problem",
      "chain": "Vereinsmythen",
      "chapter": 2,
      "prerequisite": "club_legend",
      "title": "Das Schild zeigt eindeutig irgendwohin",
      "icon": "↩",
      "story": "Eine Trainingsgruppe ist seit 40 Minuten auf derselben Runde. Erkunde Strecken und finde die Ursache.",
      "requirement": {
        "counter": "action_route_scouting",
        "target": 4,
        "label": "Strecken erkunden"
      },
      "rewards": {
        "money": 380,
        "reputation": 22,
        "fans": 60,
        "xp": {
          "organization": 320,
          "racecraft": 160
        },
        "item": [
          "crooked_sign",
          1
        ]
      }
    },
    {
      "id": "first_prototype",
      "chain": "Werkstatt 2.0",
      "chapter": 1,
      "title": "Nicht serienreif, aber schnell",
      "icon": "⚙",
      "story": "Das Labor braucht Testdaten. Schließe drei Hersteller-Produkttests ab.",
      "requirement": {
        "counter": "action_equipment_test",
        "target": 3,
        "label": "Produkttests"
      },
      "rewards": {
        "money": 700,
        "reputation": 35,
        "xp": {
          "productDevelopment": 420,
          "materials": 230
        },
        "materials": {
          "data_chip": 2,
          "blueprint": 1
        }
      }
    },
    {
      "id": "power_truth",
      "chain": "Werkstatt 2.0",
      "chapter": 2,
      "prerequisite": "first_prototype",
      "title": "Watt lügen nicht, Sensoren manchmal",
      "icon": "⚡",
      "story": "Baue und kalibriere einen Leistungsmesser, bevor die Daten wieder „kreativ“ werden.",
      "requirement": {
        "counter": "craft_build_power_meter",
        "target": 1,
        "label": "Leistungsmesser bauen"
      },
      "rewards": {
        "money": 900,
        "reputation": 45,
        "xp": {
          "mechanics": 360,
          "racecraft": 280
        },
        "materials": {
          "ceramic": 1,
          "electronics": 2
        }
      }
    },
    {
      "id": "aero_argument",
      "chain": "Werkstatt 2.0",
      "chapter": 3,
      "prerequisite": "power_truth",
      "title": "Der Windkanal widerspricht dem Ego",
      "icon": "➤",
      "story": "Absolviere fünf Aero-Einheiten und akzeptiere, dass die schnellste Haltung nicht die coolste sein muss.",
      "requirement": {
        "counter": "action_aero_session",
        "target": 5,
        "label": "Aero-Einheiten"
      },
      "rewards": {
        "money": 1200,
        "reputation": 60,
        "xp": {
          "aerodynamics": 700,
          "technique": 300
        },
        "materials": {
          "blueprint": 2,
          "data_chip": 1
        }
      }
    },
    {
      "id": "rival_watts",
      "chain": "Rivalen",
      "chapter": 1,
      "title": "Der Wattkönig fordert Revanche",
      "icon": "⚔",
      "story": "Schlage Max Watt zweimal. Seine Analyse wird anschließend vermutlich sehr lang.",
      "requirement": {
        "counter": "rival_max_watt_wins",
        "target": 2,
        "label": "Max Watt schlagen"
      },
      "rewards": {
        "money": 700,
        "reputation": 42,
        "fans": 180,
        "xp": {
          "cycling": 420,
          "mental": 210
        },
        "item": [
          "rival_gloves",
          1
        ]
      }
    },
    {
      "id": "rival_stage",
      "chain": "Rivalen",
      "chapter": 2,
      "prerequisite": "rival_watts",
      "title": "Drei Tage, eine Diskussion",
      "icon": "🗓",
      "story": "Finishe das Island Triple und beweise, dass Regeneration mehr ist als Schlafen im Transferbus.",
      "requirement": {
        "counter": "race_finish_island_stage",
        "target": 1,
        "label": "Island Triple finishen"
      },
      "rewards": {
        "money": 1500,
        "reputation": 80,
        "fans": 400,
        "xp": {
          "recovery": 600,
          "organization": 350,
          "mental": 250
        }
      }
    },
    {
      "id": "sponsor_pressure",
      "chain": "Karriere",
      "chapter": 1,
      "title": "Authentizität, aber bitte markenkonform",
      "icon": "🤝",
      "story": "Erfülle zwei Sponsorverträge, ohne zu vergessen, warum du überhaupt Rennen fährst.",
      "requirement": {
        "counter": "sponsor_contracts",
        "target": 2,
        "label": "Sponsorverträge erfüllen"
      },
      "rewards": {
        "money": 1400,
        "reputation": 75,
        "fans": 500,
        "xp": {
          "sponsorship": 800,
          "media": 420
        }
      }
    },
    {
      "id": "community_story",
      "chain": "Karriere",
      "chapter": 2,
      "prerequisite": "sponsor_pressure",
      "title": "Die Karriere kommt nach Hause",
      "icon": "🎓",
      "story": "Gib drei Community-Workshops und werde zum lokalen Experten, den niemand nach der Sattelhöhe gefragt hat.",
      "requirement": {
        "counter": "action_community_clinic",
        "target": 3,
        "label": "Community-Workshops"
      },
      "rewards": {
        "money": 900,
        "reputation": 65,
        "fans": 650,
        "xp": {
          "media": 500,
          "technique": 280
        }
      }
    },
    {
      "id": "cold_truth",
      "chain": "Extreme Welt",
      "chapter": 1,
      "title": "Das Wasser ist nur objektiv kalt",
      "icon": "❄",
      "story": "Finishe den Fjord Extreme Triathlon.",
      "requirement": {
        "counter": "race_finish_fjord_extreme",
        "target": 1,
        "label": "Fjord Extreme finishen"
      },
      "rewards": {
        "money": 2400,
        "reputation": 130,
        "fans": 800,
        "xp": {
          "mental": 900,
          "endurance": 650,
          "recovery": 350
        },
        "item": [
          "cold_wetsuit",
          1
        ]
      }
    },
    {
      "id": "innovation_final",
      "chain": "Extreme Welt",
      "chapter": 2,
      "prerequisite": "cold_truth",
      "title": "Ein Cockpit für jede Ausrede",
      "icon": "⌁",
      "story": "Entwickle das adaptive Cockpit. Diesmal soll der Prototyp gleichzeitig schnell und benutzbar sein.",
      "requirement": {
        "counter": "craft_build_adaptive_cockpit",
        "target": 1,
        "label": "Adaptives Cockpit bauen"
      },
      "rewards": {
        "money": 3500,
        "reputation": 190,
        "fans": 900,
        "xp": {
          "productDevelopment": 1200,
          "aerodynamics": 800
        },
        "materials": {
          "blueprint": 3,
          "titanium": 2
        }
      }
    },
    {
      "id": "kona_legacy",
      "chain": "Road to Hawaii",
      "chapter": 2,
      "prerequisite": "road_to_hawaii",
      "title": "Mehr als nur ankommen",
      "icon": "🌺",
      "story": "Erreiche die Top 10 auf Hawaii und bringe eine vulkanische Komponente zurück.",
      "requirement": {
        "counter": "hawaii_top10",
        "target": 1,
        "label": "Top 10 auf Hawaii"
      },
      "rewards": {
        "money": 6000,
        "reputation": 400,
        "fans": 4000,
        "xp": {
          "racecraft": 1500,
          "mental": 1200,
          "endurance": 900
        },
        "item": [
          "kona_shell",
          1
        ]
      }
    },
    {
      "id": "kona_champion",
      "chain": "Road to Hawaii",
      "chapter": 3,
      "prerequisite": "kona_legacy",
      "title": "Die größte Ziellinie",
      "icon": "🏆",
      "story": "Gewinne die Weltmeisterschaft auf Hawaii.",
      "requirement": {
        "counter": "race_win_hawaii_worlds",
        "target": 1,
        "label": "Hawaii gewinnen"
      },
      "rewards": {
        "money": 15000,
        "reputation": 1200,
        "fans": 15000,
        "xp": {
          "swimming": 1000,
          "cycling": 2000,
          "running": 1700,
          "racecraft": 2000
        },
        "item": [
          "champion_trisuit",
          1
        ]
      }
    },
    {
      "id": "choose_target",
      "title": "Ein Ziel statt zehn Ideen",
      "icon": "🎯",
      "story": "Der Coach weigert sich, auf „irgendwann Hawaii“ zu planen. Lege erstmals ein konkretes Zielrennen fest.",
      "requirement": {
        "counter": "target_selected",
        "target": 1,
        "label": "Zielrennen auswählen"
      },
      "rewards": {
        "money": 120,
        "reputation": 8,
        "xp": {
          "organization": 180,
          "racecraft": 140
        }
      },
      "chain": "Performance Lab",
      "chapter": 1
    },
    {
      "id": "balanced_week",
      "title": "Die Woche, die tatsächlich zusammenpasst",
      "icon": "📊",
      "story": "Nicht jede harte Einheit ist Fortschritt. Schließe eine ausgewogene Trainingswoche ab.",
      "requirement": {
        "counter": "balanced_weeks",
        "target": 1,
        "label": "Ausgewogene Woche erreichen"
      },
      "rewards": {
        "money": 180,
        "reputation": 12,
        "xp": {
          "recovery": 180,
          "endurance": 170,
          "organization": 120
        },
        "item": [
          "recovery_sleep_kit",
          1
        ]
      },
      "chain": "Performance Lab",
      "chapter": 2,
      "prerequisite": "choose_target"
    },
    {
      "id": "decision_maker",
      "title": "Kein Plan überlebt den ersten Wetterbericht",
      "icon": "◇",
      "story": "Triff drei bewusste Entscheidungen in dynamischen Karriereereignissen.",
      "requirement": {
        "counter": "decisions_resolved",
        "target": 3,
        "label": "Entscheidungsereignisse lösen"
      },
      "rewards": {
        "money": 240,
        "reputation": 16,
        "fans": 35,
        "xp": {
          "racecraft": 220,
          "mental": 180
        }
      },
      "chain": "Performance Lab",
      "chapter": 3,
      "prerequisite": "balanced_week"
    },
    {
      "id": "race_rehearsed",
      "title": "Generalprobe mit echten Konsequenzen",
      "icon": "🎯",
      "story": "Absolviere eine komplette Rennsimulation und verwende die Erkenntnisse im Zielrennen.",
      "requirement": {
        "counter": "action_race_rehearsal",
        "target": 1,
        "label": "Rennsimulation abschließen"
      },
      "rewards": {
        "money": 320,
        "reputation": 20,
        "xp": {
          "racecraft": 280,
          "nutrition": 180,
          "transitions": 150
        },
        "item": [
          "coach_tablet",
          1
        ]
      },
      "chain": "Performance Lab",
      "chapter": 4,
      "prerequisite": "decision_maker"
    },
    {
      "id": "target_finished",
      "title": "Plan ausgeführt",
      "icon": "⚑",
      "story": "Finishe ein zuvor gesetztes Zielrennen. Das Ergebnis ist weniger wichtig als der geschlossene Prozess.",
      "requirement": {
        "counter": "target_races_finished",
        "target": 1,
        "label": "Zielrennen finishen"
      },
      "rewards": {
        "money": 480,
        "reputation": 32,
        "fans": 80,
        "xp": {
          "racecraft": 340,
          "mental": 240,
          "organization": 220
        }
      },
      "chain": "Performance Lab",
      "chapter": 5,
      "prerequisite": "race_rehearsed"
    },
    {
      "id": "market_sense",
      "title": "Nicht jedes Angebot ist ein Upgrade",
      "icon": "🛒",
      "story": "Nutze den rotierenden Markt dreimal, ohne dein Budget komplett zu zerlegen.",
      "requirement": {
        "counter": "market_purchases",
        "target": 3,
        "label": "Marktangebote kaufen"
      },
      "rewards": {
        "money": 220,
        "reputation": 10,
        "xp": {
          "sponsorship": 180,
          "materials": 140
        },
        "materials": {
          "blueprint": 1,
          "carbon_fiber": 2
        }
      },
      "chain": "Werkstatt 2.0",
      "chapter": 1
    },
    {
      "id": "mastered_gear",
      "title": "Nicht neu, sondern eingespielt",
      "icon": "⬡",
      "story": "Sammle 20 Einsätze mit deiner Ausrüstung. Vertrautheit ist ein echter Leistungsfaktor.",
      "requirement": {
        "counter": "gear_mastery_uses",
        "target": 20,
        "label": "Ausrüstungseinsätze sammeln"
      },
      "rewards": {
        "money": 260,
        "reputation": 14,
        "xp": {
          "mechanics": 220,
          "technique": 180
        },
        "item": [
          "transition_rack_pro",
          1
        ]
      },
      "chain": "Werkstatt 2.0",
      "chapter": 2,
      "prerequisite": "market_sense"
    },
    {
      "id": "dynasty_blueprint",
      "title": "Das Rad, das nur für dich existiert",
      "icon": "🚴",
      "story": "Verbinde zehn Upgrades, fünf Zielrennen und echte Renndaten zu einem finalen Prototyp-Bauplan.",
      "requirement": {
        "counter": "prototype_milestones",
        "target": 10,
        "label": "Prototyp-Meilensteine erreichen"
      },
      "rewards": {
        "money": 1200,
        "reputation": 80,
        "fans": 180,
        "xp": {
          "productDevelopment": 650,
          "aerodynamics": 450,
          "materials": 380
        },
        "materials": {
          "blueprint": 5,
          "data_chip": 3,
          "titanium": 3
        }
      },
      "chain": "Werkstatt 2.0",
      "chapter": 3,
      "prerequisite": "mastered_gear"
    }
  ],
  "materials": {
    "carbs": {
      "name": "Kohlenhydratmix",
      "icon": "▧",
      "value": 8
    },
    "electrolytes": {
      "name": "Elektrolyte",
      "icon": "✧",
      "value": 12
    },
    "rubber": {
      "name": "Gummi",
      "icon": "●",
      "value": 14
    },
    "metal_parts": {
      "name": "Metallteile",
      "icon": "◆",
      "value": 18
    },
    "polymer": {
      "name": "Polymer",
      "icon": "⬡",
      "value": 24
    },
    "carbon_fiber": {
      "name": "Carbonfaser",
      "icon": "▤",
      "value": 60
    },
    "resin": {
      "name": "Harz",
      "icon": "◐",
      "value": 35
    },
    "blueprint": {
      "name": "Bauplanfragment",
      "icon": "▱",
      "value": 110
    },
    "foam": {
      "name": "Dämpfungsschaum",
      "icon": "◌",
      "value": 28
    },
    "textile_fiber": {
      "name": "Textilfaser",
      "icon": "〰",
      "value": 20
    },
    "ceramic": {
      "name": "Keramiklager",
      "icon": "◉",
      "value": 75
    },
    "electronics": {
      "name": "Elektronikmodul",
      "icon": "▣",
      "value": 90
    },
    "titanium": {
      "name": "Titanbauteil",
      "icon": "◇",
      "value": 115
    },
    "botanical": {
      "name": "Pflanzenextrakt",
      "icon": "❧",
      "value": 34
    },
    "data_chip": {
      "name": "Testdaten-Chip",
      "icon": "⌁",
      "value": 135
    },
    "sealant": {
      "name": "Dichtmilch",
      "icon": "◍",
      "value": 22
    }
  },
  "shop": [
    {
      "type": "item",
      "id": "elastic_laces",
      "price": 95,
      "requirement": {
        "reputation": 5
      }
    },
    {
      "type": "item",
      "id": "repair_kit",
      "price": 85,
      "requirement": {
        "reputation": 0
      }
    },
    {
      "type": "item",
      "id": "training_wetsuit",
      "price": 420,
      "requirement": {
        "reputation": 18
      }
    },
    {
      "type": "item",
      "id": "alloy_wheels",
      "price": 520,
      "requirement": {
        "reputation": 25
      }
    },
    {
      "type": "item",
      "id": "gps_watch",
      "price": 610,
      "requirement": {
        "reputation": 40
      }
    },
    {
      "type": "item",
      "id": "cervelo_p_series",
      "price": 5200,
      "requirement": {
        "reputation": 180
      }
    },
    {
      "type": "item",
      "id": "vaporfly_3",
      "price": 760,
      "requirement": {
        "reputation": 90
      }
    },
    {
      "type": "material",
      "id": "carbs",
      "quantity": 3,
      "price": 30,
      "requirement": {
        "reputation": 0
      }
    },
    {
      "type": "material",
      "id": "electrolytes",
      "quantity": 2,
      "price": 35,
      "requirement": {
        "reputation": 0
      }
    },
    {
      "type": "material",
      "id": "carbon_fiber",
      "quantity": 1,
      "price": 145,
      "requirement": {
        "reputation": 65
      }
    },
    {
      "type": "material",
      "id": "blueprint",
      "quantity": 1,
      "price": 290,
      "requirement": {
        "reputation": 140
      }
    },
    {
      "type": "item",
      "id": "race_belt",
      "price": 70,
      "requirement": {
        "reputation": 0
      }
    },
    {
      "type": "item",
      "id": "basic_trisuit",
      "price": 290,
      "requirement": {
        "reputation": 15
      }
    },
    {
      "type": "item",
      "id": "road_bike",
      "price": 920,
      "requirement": {
        "reputation": 30
      }
    },
    {
      "type": "item",
      "id": "light_trainer",
      "price": 310,
      "requirement": {
        "reputation": 22
      }
    },
    {
      "type": "item",
      "id": "openwater_goggles",
      "price": 390,
      "requirement": {
        "reputation": 75
      }
    },
    {
      "type": "item",
      "id": "balanced_aero_helmet",
      "price": 860,
      "requirement": {
        "reputation": 120
      }
    },
    {
      "type": "item",
      "id": "aero_hydration",
      "price": 790,
      "requirement": {
        "reputation": 160
      }
    },
    {
      "type": "item",
      "id": "power_meter",
      "price": 1200,
      "requirement": {
        "reputation": 190
      }
    },
    {
      "type": "item",
      "id": "electrolyte_drink",
      "price": 35,
      "requirement": {
        "reputation": 0
      }
    },
    {
      "type": "item",
      "id": "recovery_shake",
      "price": 55,
      "requirement": {
        "reputation": 0
      }
    },
    {
      "type": "material",
      "id": "electronics",
      "quantity": 1,
      "price": 150,
      "requirement": {
        "reputation": 120
      }
    },
    {
      "type": "material",
      "id": "titanium",
      "quantity": 1,
      "price": 230,
      "requirement": {
        "reputation": 250
      }
    },
    {
      "type": "material",
      "id": "data_chip",
      "quantity": 1,
      "price": 260,
      "requirement": {
        "reputation": 220
      }
    },
    {
      "type": "material",
      "id": "botanical",
      "quantity": 2,
      "price": 85,
      "requirement": {
        "reputation": 55
      }
    },
    {
      "type": "material",
      "id": "sealant",
      "quantity": 2,
      "price": 60,
      "requirement": {
        "reputation": 25
      }
    },
    {
      "type": "item",
      "id": "recovery_sleep_kit",
      "price": 145,
      "requirement": {}
    },
    {
      "type": "item",
      "id": "carbon_repair_capsule",
      "price": 110,
      "requirement": {
        "reputation": 60
      }
    },
    {
      "type": "item",
      "id": "transition_rack_pro",
      "price": 860,
      "requirement": {
        "reputation": 120,
        "region": "metro"
      }
    },
    {
      "type": "item",
      "id": "all_day_racer",
      "price": 2050,
      "requirement": {
        "reputation": 300,
        "region": "campus"
      }
    },
    {
      "type": "item",
      "id": "openwater_compass_goggles",
      "price": 1700,
      "requirement": {
        "reputation": 260,
        "region": "lakes"
      }
    }
  ],
  "focuses": {
    "balanced": {
      "name": "Ausgewogen",
      "icon": "⚖",
      "description": "Keine Spezialisierung, dafür maximale Flexibilität.",
      "xpSkill": null,
      "race": {}
    },
    "shortCourse": {
      "name": "Kurzdistanz",
      "icon": "⚡",
      "description": "+10 % XP für Wechsel und Kraft; leichter Rennbonus auf kurzen Distanzen.",
      "xpSkills": [
        "transitions",
        "strength"
      ],
      "race": {
        "short": 1.025,
        "long": 0.99
      }
    },
    "longCourse": {
      "name": "Langdistanz",
      "icon": "∞",
      "description": "+10 % XP für Ausdauer und Ernährung; leichter Bonus auf Mittel- und Langdistanz.",
      "xpSkills": [
        "endurance",
        "nutrition"
      ],
      "race": {
        "short": 0.99,
        "long": 1.025
      }
    },
    "technician": {
      "name": "Technik & Material",
      "icon": "⚙",
      "description": "+10 % XP für Technik, Mechanik und Aerodynamik.",
      "xpSkills": [
        "technique",
        "mechanics",
        "aerodynamics"
      ],
      "race": {
        "technical": 1.02
      }
    },
    "publicFigure": {
      "name": "Karriereprofi",
      "icon": "◉",
      "description": "+12 % XP für Sponsoring und Medienpräsenz.",
      "xpSkills": [
        "sponsorship",
        "media"
      ],
      "race": {}
    }
  },
  "facilities": {
    "workshop": {
      "name": "Werkstatt",
      "icon": "🔧",
      "description": "Beschleunigt Werkstattaktionen und verbessert Materialausbeute.",
      "maxLevel": 4,
      "costs": [
        0,
        450,
        1200,
        2800,
        6500
      ]
    },
    "recovery": {
      "name": "Regenerationszentrum",
      "icon": "☾",
      "description": "Regenerationsaktionen wirken stärker und Rennen erzeugen weniger Ermüdung.",
      "maxLevel": 4,
      "costs": [
        0,
        520,
        1450,
        3400,
        7600
      ]
    },
    "media": {
      "name": "Medienraum",
      "icon": "🎥",
      "description": "Karriereaktionen erzeugen mehr Fans und Reputation.",
      "maxLevel": 4,
      "costs": [
        0,
        400,
        1100,
        2600,
        5900
      ]
    },
    "lab": {
      "name": "Entwicklungslabor",
      "icon": "⚗",
      "description": "Erhöht XP aus Materialkunde, Aerodynamik und Produktentwicklung.",
      "maxLevel": 4,
      "costs": [
        0,
        800,
        2100,
        4800,
        10500
      ]
    },
    "academy": {
      "name": "Trainingsakademie",
      "icon": "🎓",
      "description": "Erhöht Trainings-XP und schaltet einen zusätzlichen Perk-Slot frei.",
      "maxLevel": 4,
      "costs": [
        0,
        900,
        2400,
        5600,
        12000
      ]
    },
    "warehouse": {
      "name": "Materiallager",
      "icon": "📦",
      "description": "Verbessert Materialausbeute und senkt Einkaufspreise.",
      "maxLevel": 4,
      "costs": [
        0,
        650,
        1750,
        4200,
        9000
      ]
    }
  },
  "dailyMissionPool": [
    {
      "id": "swim",
      "title": "Wassergefühl",
      "icon": "🏊",
      "counter": "action_pool_technique",
      "target": 1,
      "reward": {
        "money": 55,
        "xp": {
          "swimming": 90
        }
      }
    },
    {
      "id": "ride",
      "title": "Kilometer sammeln",
      "icon": "🚴",
      "counter": "action_base_ride",
      "target": 1,
      "reward": {
        "money": 75,
        "xp": {
          "cycling": 110
        }
      }
    },
    {
      "id": "run",
      "title": "Laufbeine",
      "icon": "🏃",
      "counter": "action_easy_run",
      "target": 1,
      "reward": {
        "money": 60,
        "xp": {
          "running": 95
        }
      }
    },
    {
      "id": "transition",
      "title": "Keine Zeit verlieren",
      "icon": "↻",
      "counter": "action_transition_drill",
      "target": 1,
      "reward": {
        "money": 45,
        "xp": {
          "transitions": 100
        }
      }
    },
    {
      "id": "fuel",
      "title": "Verpflegung vorbereiten",
      "icon": "🧪",
      "counter": "craft_craft_gel",
      "target": 1,
      "reward": {
        "money": 65,
        "materials": {
          "carbs": 2,
          "electrolytes": 1
        }
      }
    },
    {
      "id": "recover",
      "title": "Erholung zählt",
      "icon": "☾",
      "counter": "action_recovery_session",
      "target": 1,
      "reward": {
        "money": 50,
        "xp": {
          "recovery": 100
        }
      }
    },
    {
      "id": "career",
      "title": "Karrierearbeit",
      "icon": "🤝",
      "counter": "action_sponsor_outreach",
      "target": 1,
      "reward": {
        "money": 85,
        "xp": {
          "sponsorship": 100
        }
      }
    },
    {
      "id": "race",
      "title": "Startnummer anlegen",
      "icon": "⚑",
      "counter": "race_finishes",
      "target": 1,
      "reward": {
        "money": 120,
        "reputation": 4
      }
    }
  ],
  "achievements": [
    {
      "id": "first_finish",
      "title": "Erster Schritt",
      "icon": "🏁",
      "description": "Finishe deinen ersten Wettkampf.",
      "requirement": {
        "type": "counter",
        "id": "race_finishes",
        "value": 1
      },
      "rewards": {
        "money": 150,
        "reputation": 5
      }
    },
    {
      "id": "first_win",
      "title": "Ganz oben",
      "icon": "🏆",
      "description": "Gewinne einen Wettkampf.",
      "requirement": {
        "type": "counter",
        "id": "race_wins",
        "value": 1
      },
      "rewards": {
        "money": 300,
        "fans": 40
      }
    },
    {
      "id": "rival_hunter",
      "title": "Rivalenjäger",
      "icon": "⚔",
      "description": "Schlage fünf Rivalen.",
      "requirement": {
        "type": "counter",
        "id": "rivals_beaten",
        "value": 5
      },
      "rewards": {
        "money": 500,
        "reputation": 25
      }
    },
    {
      "id": "ten_finishes",
      "title": "Erfahrene Startnummer",
      "icon": "🔟",
      "description": "Finishe zehn Wettkämpfe.",
      "requirement": {
        "type": "counter",
        "id": "race_finishes",
        "value": 10
      },
      "rewards": {
        "money": 800,
        "fans": 180
      }
    },
    {
      "id": "long_finisher",
      "title": "Langdistanz-Finisher",
      "icon": "∞",
      "description": "Finishe eine Langdistanz.",
      "requirement": {
        "type": "counter",
        "id": "long_finishes",
        "value": 1
      },
      "rewards": {
        "money": 1200,
        "reputation": 60
      }
    },
    {
      "id": "collector",
      "title": "Materiallager statt Wohnzimmer",
      "icon": "⬡",
      "description": "Entdecke 15 verschiedene Items.",
      "requirement": {
        "type": "collection",
        "value": 15
      },
      "rewards": {
        "money": 600,
        "materials": {
          "blueprint": 1
        }
      }
    },
    {
      "id": "mechanic",
      "title": "Eigene Hände, eigenes Problem",
      "icon": "🔧",
      "description": "Erreiche Fahrradmechanik Level 10.",
      "requirement": {
        "type": "skill",
        "id": "mechanics",
        "value": 10
      },
      "rewards": {
        "money": 700,
        "materials": {
          "carbon_fiber": 2
        }
      }
    },
    {
      "id": "allrounder",
      "title": "Echter Allrounder",
      "icon": "✦",
      "description": "Erreiche in Schwimmen, Radfahren und Laufen jeweils Level 10.",
      "requirement": {
        "type": "allSkills",
        "ids": [
          "swimming",
          "cycling",
          "running"
        ],
        "value": 10
      },
      "rewards": {
        "money": 900,
        "reputation": 40
      }
    },
    {
      "id": "quester",
      "title": "Nebensache mit Folgen",
      "icon": "📜",
      "description": "Schließe fünf Sidequests ab.",
      "requirement": {
        "type": "quests",
        "value": 5
      },
      "rewards": {
        "money": 750,
        "fans": 220
      }
    },
    {
      "id": "rich",
      "title": "Startgebühr gesichert",
      "icon": "💶",
      "description": "Besitze 5.000 €.",
      "requirement": {
        "type": "money",
        "value": 5000
      },
      "rewards": {
        "reputation": 30,
        "fans": 100
      }
    },
    {
      "id": "international",
      "title": "International bekannt",
      "icon": "🌐",
      "description": "Erreiche 400 Reputation.",
      "requirement": {
        "type": "reputation",
        "value": 400
      },
      "rewards": {
        "money": 1800,
        "fans": 500
      }
    },
    {
      "id": "world_champion",
      "title": "Weltmeister",
      "icon": "🌋",
      "description": "Gewinne die Weltmeisterschaft auf Hawaii.",
      "requirement": {
        "type": "raceWin",
        "id": "hawaii_worlds"
      },
      "rewards": {
        "money": 12000,
        "reputation": 1000,
        "fans": 10000
      }
    },
    {
      "id": "skill_25",
      "title": "Spezialist",
      "icon": "✦",
      "description": "Erreiche mit einem Skill Level 25.",
      "requirement": {
        "type": "anySkill",
        "value": 25
      },
      "rewards": {
        "money": 1400,
        "reputation": 70
      }
    },
    {
      "id": "all_15",
      "title": "Kompletter Athlet",
      "icon": "⚖",
      "description": "Erreiche mit allen 18 Skills mindestens Level 15.",
      "requirement": {
        "type": "allSkills",
        "ids": [
          "swimming",
          "cycling",
          "running",
          "transitions",
          "racecraft",
          "endurance",
          "strength",
          "technique",
          "recovery",
          "mental",
          "nutrition",
          "mechanics",
          "materials",
          "aerodynamics",
          "productDevelopment",
          "sponsorship",
          "media",
          "organization"
        ],
        "value": 15
      },
      "rewards": {
        "money": 4500,
        "reputation": 220,
        "fans": 1200
      }
    },
    {
      "id": "craft_20",
      "title": "Werkstattmeister",
      "icon": "🔧",
      "description": "Stelle 20 Gegenstände her.",
      "requirement": {
        "type": "counter",
        "id": "craft_total",
        "value": 20
      },
      "rewards": {
        "money": 1800,
        "materials": {
          "blueprint": 2,
          "titanium": 1
        }
      }
    },
    {
      "id": "regions",
      "title": "Weltreisender",
      "icon": "🧭",
      "description": "Besuche acht Regionen.",
      "requirement": {
        "type": "visitedRegions",
        "value": 8
      },
      "rewards": {
        "money": 2300,
        "reputation": 130
      }
    },
    {
      "id": "perk_build",
      "title": "Eigener Stil",
      "icon": "🧩",
      "description": "Aktiviere vier Perks gleichzeitig.",
      "requirement": {
        "type": "activePerks",
        "value": 4
      },
      "rewards": {
        "money": 800,
        "fans": 150
      }
    },
    {
      "id": "season_champion",
      "title": "Saisonchampion",
      "icon": "🏆",
      "description": "Gewinne eine Saisonwertung.",
      "requirement": {
        "type": "counter",
        "id": "season_titles",
        "value": 1
      },
      "rewards": {
        "money": 5000,
        "reputation": 300,
        "fans": 2500
      }
    },
    {
      "id": "max_facility",
      "title": "Professionelles Umfeld",
      "icon": "🏗",
      "description": "Baue eine Einrichtung auf Maximallevel aus.",
      "requirement": {
        "type": "facilityMax",
        "value": 1
      },
      "rewards": {
        "money": 2600,
        "reputation": 140
      }
    },
    {
      "id": "quest_master",
      "title": "Geschichtenjäger",
      "icon": "📚",
      "description": "Schließe 18 Quests ab.",
      "requirement": {
        "type": "quests",
        "value": 18
      },
      "rewards": {
        "money": 3500,
        "fans": 1800
      }
    },
    {
      "id": "collector_40",
      "title": "Ausrüstungsarchiv",
      "icon": "⬡",
      "description": "Entdecke 40 verschiedene Items.",
      "requirement": {
        "type": "collection",
        "value": 40
      },
      "rewards": {
        "money": 2400,
        "materials": {
          "blueprint": 3
        }
      }
    },
    {
      "id": "hundred_days",
      "title": "Hundert Karrieretage",
      "icon": "📅",
      "description": "Erreiche Karrieretag 100.",
      "requirement": {
        "type": "careerDay",
        "value": 100
      },
      "rewards": {
        "money": 2000,
        "reputation": 100
      }
    },
    {
      "id": "weekly_balance",
      "title": "Kontinuität schlägt Chaos",
      "icon": "📊",
      "description": "Drei ausgewogene Trainingswochen erreichen.",
      "requirement": {
        "type": "counter",
        "id": "balanced_weeks",
        "value": 3
      },
      "rewards": {
        "money": 350,
        "reputation": 18
      }
    },
    {
      "id": "decision_veteran",
      "title": "Unter Unsicherheit entschieden",
      "icon": "◇",
      "description": "Zehn dynamische Entscheidungen treffen.",
      "requirement": {
        "type": "counter",
        "id": "decisions_resolved",
        "value": 10
      },
      "rewards": {
        "money": 420,
        "fans": 70
      }
    },
    {
      "id": "goal_oriented",
      "title": "Zielorientiert",
      "icon": "🎯",
      "description": "Drei gesetzte Zielrennen finishen.",
      "requirement": {
        "type": "counter",
        "id": "target_races_finished",
        "value": 3
      },
      "rewards": {
        "money": 650,
        "reputation": 30
      }
    },
    {
      "id": "gear_master",
      "title": "Materialvertrauen",
      "icon": "⬡",
      "description": "100 Ausrüstungseinsätze sammeln.",
      "requirement": {
        "type": "counter",
        "id": "gear_mastery_uses",
        "value": 100
      },
      "rewards": {
        "money": 700,
        "materials": {
          "carbon_fiber": 3,
          "ceramic": 2
        }
      }
    },
    {
      "id": "dynasty_machine",
      "title": "Die eigene Maschine",
      "icon": "🚴",
      "description": "Den Endurance-Dynasty-Prototyp herstellen.",
      "requirement": {
        "type": "item",
        "id": "dynasty_bike",
        "value": 1
      },
      "rewards": {
        "reputation": 100,
        "fans": 250
      }
    }
  ],
  "equipmentSlots": {
    "bike": {
      "name": "Fahrrad",
      "icon": "🚴"
    },
    "wheels": {
      "name": "Laufräder",
      "icon": "◯"
    },
    "helmet": {
      "name": "Helm",
      "icon": "⛑"
    },
    "shoes": {
      "name": "Laufschuhe",
      "icon": "👟"
    },
    "goggles": {
      "name": "Schwimmbrille",
      "icon": "🥽"
    },
    "wetsuit": {
      "name": "Neoprenanzug",
      "icon": "🏊"
    },
    "suit": {
      "name": "Trisuit",
      "icon": "🥋"
    },
    "computer": {
      "name": "Computer",
      "icon": "⌚"
    },
    "hydration": {
      "name": "Versorgung",
      "icon": "💧"
    },
    "accessory": {
      "name": "Zubehör",
      "icon": "✦"
    }
  },
  "regions": {
    "home": {
      "name": "Hohenlohe",
      "icon": "🏡",
      "subtitle": "Vereine, Felder und der Anfang der Karriere",
      "description": "Günstige Trainingsbedingungen und regionale Rennen.",
      "travelCost": 0,
      "unlock": [],
      "bonuses": {
        "trainingGroups": [
          "Radfahren",
          "Laufen"
        ],
        "xp": 1.05
      },
      "shopDiscount": 0.05
    },
    "forest": {
      "name": "Naturpark",
      "icon": "🌲",
      "subtitle": "Trails, Schotter und versteckte Routen",
      "description": "Technik, Kraft und robuste Materialien stehen im Mittelpunkt.",
      "travelCost": 80,
      "unlock": [
        {
          "type": "finishes",
          "value": 2,
          "text": "2 Wettkämpfe finishen"
        }
      ],
      "bonuses": {
        "skills": [
          "technique",
          "strength"
        ],
        "xp": 1.1
      },
      "shopDiscount": 0
    },
    "metro": {
      "name": "Metropolregion",
      "icon": "🏙",
      "subtitle": "Medien, Sponsoren und schnelle Kurse",
      "description": "Karriereaktionen, Technikrennen und bessere Händler.",
      "travelCost": 140,
      "unlock": [
        {
          "type": "reputation",
          "value": 35,
          "text": "35 Reputation"
        }
      ],
      "bonuses": {
        "skills": [
          "media",
          "sponsorship"
        ],
        "xp": 1.12
      },
      "shopDiscount": 0
    },
    "lakes": {
      "name": "Seenland",
      "icon": "🏞",
      "subtitle": "Freiwasser und kontrollierte Ausdauer",
      "description": "Schwimmtraining und Open-Water-Items erhalten Vorteile.",
      "travelCost": 170,
      "unlock": [
        {
          "type": "skill",
          "id": "swimming",
          "value": 6,
          "text": "Schwimmen Level 6"
        }
      ],
      "bonuses": {
        "skills": [
          "swimming",
          "mental"
        ],
        "xp": 1.12
      },
      "shopDiscount": 0.02
    },
    "coast": {
      "name": "Atlantikküste",
      "icon": "🌊",
      "subtitle": "Wind, Wellen und Aerodynamik",
      "description": "Aero-Tests und Seitenwindkompetenz werden belohnt.",
      "travelCost": 320,
      "unlock": [
        {
          "type": "reputation",
          "value": 110,
          "text": "110 Reputation"
        }
      ],
      "bonuses": {
        "skills": [
          "aerodynamics",
          "racecraft"
        ],
        "xp": 1.13
      },
      "shopDiscount": 0
    },
    "alps": {
      "name": "Alpenzentrum",
      "icon": "🏔",
      "subtitle": "Höhe, Kraft und technische Abfahrten",
      "description": "Bergtraining, Kraft und mentale Widerstandsfähigkeit.",
      "travelCost": 360,
      "unlock": [
        {
          "type": "skill",
          "id": "endurance",
          "value": 10,
          "text": "Ausdauer Level 10"
        }
      ],
      "bonuses": {
        "skills": [
          "strength",
          "endurance",
          "technique"
        ],
        "xp": 1.12
      },
      "shopDiscount": 0
    },
    "islands": {
      "name": "Vulkaninseln",
      "icon": "🌋",
      "subtitle": "Hitze, Wind und Langdistanzkultur",
      "description": "Langdistanztraining und Verpflegung profitieren stark.",
      "travelCost": 520,
      "unlock": [
        {
          "type": "reputation",
          "value": 220,
          "text": "220 Reputation"
        },
        {
          "type": "finishes",
          "value": 10,
          "text": "10 Wettkämpfe finishen"
        }
      ],
      "bonuses": {
        "skills": [
          "endurance",
          "nutrition",
          "mental"
        ],
        "xp": 1.14
      },
      "shopDiscount": 0
    },
    "north": {
      "name": "Nordische Fjorde",
      "icon": "❄",
      "subtitle": "Kälte und extreme Ausdauer",
      "description": "Kaltwasser, mentale Stärke und zuverlässiges Material.",
      "travelCost": 620,
      "unlock": [
        {
          "type": "longFinishes",
          "value": 1,
          "text": "1 Langdistanz finishen"
        }
      ],
      "bonuses": {
        "skills": [
          "mental",
          "recovery",
          "materials"
        ],
        "xp": 1.14
      },
      "shopDiscount": 0
    },
    "campus": {
      "name": "Innovation Campus",
      "icon": "⚗",
      "subtitle": "Windkanal, Labor und Prototypen",
      "description": "High-End-Forschung und exklusive technische Rennen.",
      "travelCost": 750,
      "unlock": [
        {
          "type": "facility",
          "id": "lab",
          "value": 2,
          "text": "Labor Level 2"
        },
        {
          "type": "reputation",
          "value": 300,
          "text": "300 Reputation"
        }
      ],
      "bonuses": {
        "skills": [
          "materials",
          "aerodynamics",
          "productDevelopment"
        ],
        "xp": 1.18
      },
      "shopDiscount": 0
    },
    "kona": {
      "name": "Kona",
      "icon": "🌺",
      "subtitle": "Die größte Bühne",
      "description": "Nur Qualifizierte erreichen die Weltmeisterschaftsinsel.",
      "travelCost": 1400,
      "unlock": [
        {
          "type": "raceTop",
          "id": "continental_qualifier",
          "value": 5,
          "text": "Top 5 im Continental Qualifier"
        }
      ],
      "bonuses": {
        "skills": [
          "mental",
          "endurance",
          "racecraft"
        ],
        "xp": 1.15
      },
      "shopDiscount": 0
    }
  },
  "perks": {
    "calm_start": {
      "name": "Ruhiger Start",
      "icon": "🌊",
      "category": "Rennen",
      "description": "Open-Water- und Startprobleme werden seltener; +3 % Schwimmleistung.",
      "requirements": {
        "skill": [
          "mental",
          6
        ]
      },
      "effect": {
        "swim": 1.03,
        "pressureRisk": 0.75
      }
    },
    "fast_hands": {
      "name": "Schnelle Hände",
      "icon": "↻",
      "category": "Rennen",
      "description": "+8 % Wechselwirkung, besonders stark auf kurzen Distanzen.",
      "requirements": {
        "skill": [
          "transitions",
          7
        ]
      },
      "effect": {
        "transition": 1.08
      }
    },
    "negative_split": {
      "name": "Negative-Split-Plan",
      "icon": "📈",
      "category": "Rennen",
      "description": "Kontrollierte Strategien erhalten +4 % Laufleistung.",
      "requirements": {
        "skill": [
          "racecraft",
          10
        ]
      },
      "effect": {
        "safeRun": 1.04
      }
    },
    "iron_stomach": {
      "name": "Robuster Magen",
      "icon": "⚗",
      "category": "Rennen",
      "description": "Verpflegung wirkt stärker und Ernährungsprobleme werden seltener.",
      "requirements": {
        "skill": [
          "nutrition",
          10
        ]
      },
      "effect": {
        "fuel": 1.18,
        "nutritionRisk": 0.65
      }
    },
    "field_mechanic": {
      "name": "Feldmechaniker",
      "icon": "🔧",
      "category": "Rennen",
      "description": "Defektrisiko sinkt; Reparatursets kosten weniger Zeit.",
      "requirements": {
        "skill": [
          "mechanics",
          10
        ]
      },
      "effect": {
        "mechanicalRisk": 0.68
      }
    },
    "aero_discipline": {
      "name": "Aero-Disziplin",
      "icon": "➤",
      "category": "Rennen",
      "description": "+10 % Wirkung der Aero-Werte, aber etwas mehr Ermüdung.",
      "requirements": {
        "skill": [
          "aerodynamics",
          12
        ]
      },
      "effect": {
        "aero": 1.1,
        "raceFatigue": 1.04
      }
    },
    "heat_protocol": {
      "name": "Hitzeprotokoll",
      "icon": "☀",
      "category": "Rennen",
      "description": "Hitzeabzüge werden halbiert.",
      "requirements": {
        "skill": [
          "endurance",
          12
        ],
        "reputation": 120
      },
      "effect": {
        "heatPenalty": 0.5
      }
    },
    "comeback_engine": {
      "name": "Comeback-Motor",
      "icon": "◈",
      "category": "Rennen",
      "description": "Bei niedriger Moral bleibt die Rennleistung stabiler.",
      "requirements": {
        "skill": [
          "mental",
          12
        ]
      },
      "effect": {
        "lowMorale": 1.04
      }
    },
    "recovery_routine": {
      "name": "Regenerationsroutine",
      "icon": "☾",
      "category": "Training",
      "description": "Regenerationsaktionen wirken 20 % stärker.",
      "requirements": {
        "skill": [
          "recovery",
          8
        ]
      },
      "effect": {
        "recovery": 1.2
      }
    },
    "deliberate_practice": {
      "name": "Bewusstes Üben",
      "icon": "◎",
      "category": "Training",
      "description": "Technik- und Wechselaktionen geben 12 % mehr XP.",
      "requirements": {
        "skill": [
          "technique",
          9
        ]
      },
      "effect": {
        "trainingXpSkills": [
          "technique",
          "transitions"
        ],
        "trainingXp": 1.12
      }
    },
    "volume_engine": {
      "name": "Umfangsmotor",
      "icon": "∞",
      "category": "Training",
      "description": "Lange Aktionen kosten 10 % weniger Energie.",
      "requirements": {
        "skill": [
          "endurance",
          14
        ]
      },
      "effect": {
        "longEnergy": 0.9
      }
    },
    "material_whisperer": {
      "name": "Materialflüsterer",
      "icon": "⬢",
      "category": "Werkstatt",
      "description": "12 % Chance auf zusätzliche Materialien und höhere Produktqualität.",
      "requirements": {
        "skill": [
          "materials",
          10
        ]
      },
      "effect": {
        "materialBonus": 0.12,
        "craftQuality": 0.08
      }
    },
    "prototype_mind": {
      "name": "Prototypendenken",
      "icon": "⚙",
      "category": "Werkstatt",
      "description": "High-End-Crafting dauert 12 % kürzer.",
      "requirements": {
        "skill": [
          "productDevelopment",
          12
        ]
      },
      "effect": {
        "prototypeSpeed": 0.88
      }
    },
    "sponsor_loyalty": {
      "name": "Sponsorentreue",
      "icon": "🤝",
      "category": "Karriere",
      "description": "Sponsorboni und Vertragsbelohnungen steigen um 15 %.",
      "requirements": {
        "skill": [
          "sponsorship",
          10
        ]
      },
      "effect": {
        "sponsorReward": 1.15
      }
    },
    "media_instinct": {
      "name": "Medieninstinkt",
      "icon": "◉",
      "category": "Karriere",
      "description": "Karriereaktionen erzeugen 15 % mehr Fans.",
      "requirements": {
        "skill": [
          "media",
          9
        ]
      },
      "effect": {
        "fans": 1.15
      }
    },
    "local_network": {
      "name": "Lokales Netzwerk",
      "icon": "🧭",
      "category": "Karriere",
      "description": "Reisekosten sinken um 20 % und regionale Shops werden günstiger.",
      "requirements": {
        "skill": [
          "organization",
          10
        ]
      },
      "effect": {
        "travelCost": 0.8,
        "shopPrice": 0.95
      }
    }
  },
  "weeklyMissionPool": [
    {
      "id": "balanced_week",
      "title": "Ausgewogene Woche",
      "icon": "⚖",
      "requirements": [
        {
          "counter": "action_pool_technique",
          "target": 1
        },
        {
          "counter": "action_base_ride",
          "target": 1
        },
        {
          "counter": "action_easy_run",
          "target": 1
        }
      ],
      "reward": {
        "money": 420,
        "reputation": 12,
        "xp": {
          "endurance": 180
        }
      }
    },
    {
      "id": "race_week",
      "title": "Wettkampfwoche",
      "icon": "⚑",
      "requirements": [
        {
          "counter": "race_finishes",
          "target": 2
        }
      ],
      "reward": {
        "money": 650,
        "reputation": 24,
        "fans": 80
      }
    },
    {
      "id": "builder_week",
      "title": "Werkstattwoche",
      "icon": "🔧",
      "requirements": [
        {
          "counter": "craft_total",
          "target": 4
        }
      ],
      "reward": {
        "money": 500,
        "materials": {
          "carbon_fiber": 1,
          "blueprint": 1
        }
      }
    },
    {
      "id": "recovery_week",
      "title": "Belastung steuern",
      "icon": "☾",
      "requirements": [
        {
          "counter": "action_recovery_session",
          "target": 2
        },
        {
          "counter": "action_mobility_session",
          "target": 1
        }
      ],
      "reward": {
        "money": 360,
        "xp": {
          "recovery": 260,
          "technique": 100
        }
      }
    },
    {
      "id": "career_week",
      "title": "Sichtbar werden",
      "icon": "◉",
      "requirements": [
        {
          "counter": "career_actions",
          "target": 3
        }
      ],
      "reward": {
        "money": 560,
        "fans": 180,
        "reputation": 20
      }
    },
    {
      "id": "long_week",
      "title": "Langer Block",
      "icon": "∞",
      "requirements": [
        {
          "counter": "long_actions",
          "target": 2
        }
      ],
      "reward": {
        "money": 520,
        "xp": {
          "endurance": 300,
          "nutrition": 120
        }
      }
    }
  ],
  "randomEvents": [
    {
      "id": "coach_tip",
      "type": "training",
      "chance": 0.08,
      "title": "Trainerhinweis",
      "text": "Eine kleine technische Korrektur verbessert die Einheit.",
      "effect": {
        "bonusXp": 0.12
      }
    },
    {
      "id": "great_day",
      "type": "training",
      "chance": 0.05,
      "title": "Außergewöhnlicher Tag",
      "text": "Form, Rhythmus und Motivation greifen perfekt ineinander.",
      "effect": {
        "form": 3,
        "morale": 4
      }
    },
    {
      "id": "fatigue_warning",
      "type": "training",
      "chance": 0.06,
      "title": "Müdigkeitssignal",
      "text": "Du reduzierst rechtzeitig die Belastung und vermeidest größeren Schaden.",
      "effect": {
        "fatigue": -3,
        "bonusXp": -0.05
      }
    },
    {
      "id": "material_find",
      "type": "career",
      "chance": 0.08,
      "title": "Nützlicher Kontakt",
      "text": "Ein Partner stellt zusätzliche Materialien bereit.",
      "effect": {
        "material": "random",
        "quantity": 1
      }
    },
    {
      "id": "viral_clip",
      "type": "career",
      "chance": 0.045,
      "title": "Unerwartet viral",
      "text": "Ein kurzer Clip erreicht deutlich mehr Menschen als geplant.",
      "effect": {
        "fans": 120
      }
    },
    {
      "id": "perfect_craft",
      "type": "workshop",
      "chance": 0.055,
      "title": "Perfekte Charge",
      "text": "Das Ergebnis erreicht eine höhere Qualitätsstufe.",
      "effect": {
        "quality": 1
      }
    },
    {
      "id": "recycled_material",
      "type": "workshop",
      "chance": 0.08,
      "title": "Material gerettet",
      "text": "Ein Teil der eingesetzten Rohstoffe kann zurückgewonnen werden.",
      "effect": {
        "refund": 0.25
      }
    }
  ],
  "seasonTiers": [
    {
      "min": 0,
      "name": "Vereinsklasse",
      "reward": {
        "money": 300,
        "reputation": 5
      },
      "legacy": 0
    },
    {
      "min": 80,
      "name": "Regionalliga",
      "reward": {
        "money": 850,
        "reputation": 20,
        "fans": 60
      },
      "legacy": 1
    },
    {
      "min": 180,
      "name": "Nationale Serie",
      "reward": {
        "money": 1800,
        "reputation": 50,
        "fans": 180
      },
      "legacy": 2
    },
    {
      "min": 340,
      "name": "Internationale Tour",
      "reward": {
        "money": 3600,
        "reputation": 110,
        "fans": 500
      },
      "legacy": 3
    },
    {
      "min": 600,
      "name": "Elite Championship",
      "reward": {
        "money": 7000,
        "reputation": 240,
        "fans": 1600
      },
      "legacy": 5
    }
  ],
  "legacyUpgrades": {
    "learning": {
      "name": "Trainingswissen",
      "icon": "📘",
      "description": "+2 % XP pro Stufe.",
      "max": 5,
      "cost": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "recovery": {
      "name": "Belastungsbasis",
      "icon": "☾",
      "description": "Rennen erzeugen 2 % weniger Ermüdung pro Stufe.",
      "max": 5,
      "cost": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "finance": {
      "name": "Karrierenetzwerk",
      "icon": "💶",
      "description": "+3 % Geld aus Aktionen und Rennen pro Stufe.",
      "max": 5,
      "cost": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "scouting": {
      "name": "Talentauge",
      "icon": "◉",
      "description": "Seltene Drops werden leicht wahrscheinlicher.",
      "max": 5,
      "cost": [
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  "decisionEvents": [
    {
      "id": "storm_session",
      "type": "athlete",
      "chance": 0.055,
      "title": "Gewitterlinie voraus",
      "text": "Die geplante Radausfahrt trifft auf eine dunkle Wetterfront.",
      "choices": [
        {
          "label": "Sicher umdrehen",
          "description": "Weniger Trainingsreiz, dafür frische Beine und gute Planung.",
          "effect": {
            "energy": 4,
            "fatigue": -4,
            "morale": 1,
            "xp": {
              "organization": 90,
              "mental": 45
            }
          }
        },
        {
          "label": "Auf die Rolle wechseln",
          "description": "Solider Reiz ohne Risiko, aber mit zusätzlichem Aufwand.",
          "effect": {
            "fatigue": 2,
            "form": 2,
            "xp": {
              "cycling": 130,
              "racecraft": 55
            }
          }
        }
      ]
    },
    {
      "id": "coach_disagreement",
      "type": "athlete",
      "chance": 0.045,
      "title": "Zwei Coaches, drei Meinungen",
      "text": "Ein Trainer fordert mehr Intensität, der andere einen Ruhetag.",
      "choices": [
        {
          "label": "Daten entscheiden lassen",
          "description": "Analysiere Belastung und bleibe beim Plan.",
          "effect": {
            "form": 2,
            "xp": {
              "racecraft": 100,
              "recovery": 65
            }
          }
        },
        {
          "label": "Auf das Körpergefühl hören",
          "description": "Du reduzierst Belastung und stärkst die Eigenwahrnehmung.",
          "effect": {
            "fatigue": -6,
            "morale": 3,
            "xp": {
              "mental": 90,
              "technique": 45
            }
          }
        }
      ]
    },
    {
      "id": "rare_material_offer",
      "type": "workshop",
      "chance": 0.06,
      "title": "Material mit fragwürdiger Herkunft",
      "text": "Ein Händler bietet extrem leichte Carbonmatten ohne vollständige Dokumentation.",
      "choices": [
        {
          "label": "Seriös ablehnen",
          "description": "Keine Abkürzung, dafür Reputation und Zuverlässigkeit.",
          "effect": {
            "reputation": 5,
            "xp": {
              "materials": 100,
              "sponsorship": 45
            }
          }
        },
        {
          "label": "Nur eine Probe testen",
          "description": "Kostet Geld, kann aber wertvolle Erkenntnisse liefern.",
          "effect": {
            "money": -120,
            "materials": {
              "carbon_fiber": 2,
              "data_chip": 1
            },
            "xp": {
              "materials": 150,
              "productDevelopment": 75
            }
          }
        }
      ]
    },
    {
      "id": "prototype_failure",
      "type": "workshop",
      "chance": 0.05,
      "title": "Der Prototyp knackt",
      "text": "Beim Belastungstest entsteht ein Geräusch, das niemand hören wollte.",
      "choices": [
        {
          "label": "Zerlegen und lernen",
          "description": "Verlust akzeptieren und Daten sichern.",
          "effect": {
            "materials": {
              "data_chip": 1
            },
            "xp": {
              "productDevelopment": 160,
              "materials": 100
            }
          }
        },
        {
          "label": "Verstärken und weitertesten",
          "description": "Mehr Materialeinsatz, aber Chance auf einen robusten Aufbau.",
          "effect": {
            "materials": {
              "metal_parts": -1,
              "resin": -1
            },
            "xp": {
              "mechanics": 150,
              "productDevelopment": 80
            },
            "morale": 2
          }
        }
      ]
    },
    {
      "id": "viral_clip",
      "type": "career",
      "chance": 0.055,
      "title": "Ein Clip geht unerwartet viral",
      "text": "Ein ehrlicher Moment aus dem Training erreicht plötzlich sehr viele Menschen.",
      "choices": [
        {
          "label": "Die Reichweite nutzen",
          "description": "Mehr Fans und Sponsorinteresse, aber zusätzlicher Termindruck.",
          "effect": {
            "fans": 120,
            "reputation": 6,
            "fatigue": 3,
            "xp": {
              "media": 130,
              "sponsorship": 70
            }
          }
        },
        {
          "label": "Beim Sport bleiben",
          "description": "Weniger Reichweite, dafür glaubwürdige Positionierung.",
          "effect": {
            "fans": 45,
            "reputation": 10,
            "morale": 4,
            "xp": {
              "mental": 65,
              "media": 70
            }
          }
        }
      ]
    },
    {
      "id": "sponsor_conflict",
      "type": "career",
      "chance": 0.045,
      "title": "Sponsor oder optimales Setup?",
      "text": "Ein Partner möchte ein Produkt im Zielrennen sehen, obwohl dein eigenes Setup besser passt.",
      "choices": [
        {
          "label": "Vertrag erfüllen",
          "description": "Finanziell stark, sportlich ein kleiner Kompromiss.",
          "effect": {
            "money": 260,
            "fans": 30,
            "form": -1,
            "xp": {
              "sponsorship": 140
            }
          }
        },
        {
          "label": "Sportlich begründen",
          "description": "Risiko in der Beziehung, aber klare sportliche Linie.",
          "effect": {
            "reputation": 12,
            "money": -40,
            "xp": {
              "sponsorship": 80,
              "racecraft": 80,
              "mental": 55
            }
          }
        }
      ]
    },
    {
      "id": "rival_training_invite",
      "type": "athlete",
      "chance": 0.04,
      "title": "Ein Rivale lädt zum Training ein",
      "text": "Ein wiederkehrender Gegner schlägt eine gemeinsame harte Einheit vor.",
      "choices": [
        {
          "label": "Gemeinsam trainieren",
          "description": "Hoher Reiz, neue Erkenntnisse und mehr Ermüdung.",
          "effect": {
            "fatigue": 6,
            "form": 4,
            "xp": {
              "racecraft": 130,
              "cycling": 90,
              "running": 90
            },
            "counter": "rival_sessions"
          }
        },
        {
          "label": "Eigenen Plan schützen",
          "description": "Konsequente Vorbereitung und etwas weniger Drama.",
          "effect": {
            "morale": 3,
            "xp": {
              "organization": 100,
              "mental": 70
            }
          }
        }
      ]
    },
    {
      "id": "community_request",
      "type": "career",
      "chance": 0.05,
      "title": "Der Verein braucht Hilfe",
      "text": "Am gleichen Abend steht ein Sponsorentermin und ein Nachwuchstraining an.",
      "choices": [
        {
          "label": "Nachwuchs trainieren",
          "description": "Lokale Reputation und Coaching-Erfahrung.",
          "effect": {
            "reputation": 12,
            "fans": 35,
            "money": -60,
            "xp": {
              "media": 65,
              "mental": 45,
              "organization": 90
            }
          }
        },
        {
          "label": "Sponsorentermin wahrnehmen",
          "description": "Karrierefortschritt und finanzielle Stabilität.",
          "effect": {
            "money": 180,
            "fans": 20,
            "xp": {
              "sponsorship": 130,
              "media": 75
            }
          }
        }
      ]
    }
  ],
  "trainingTargets": {
    "balanced": {
      "swim": 70,
      "bike": 105,
      "run": 85,
      "strength": 38,
      "recovery": 45,
      "race": 35
    },
    "shortCourse": {
      "swim": 78,
      "bike": 92,
      "run": 82,
      "strength": 58,
      "recovery": 35,
      "race": 48
    },
    "longCourse": {
      "swim": 65,
      "bike": 135,
      "run": 105,
      "strength": 30,
      "recovery": 52,
      "race": 42
    },
    "craftAthlete": {
      "swim": 55,
      "bike": 88,
      "run": 70,
      "strength": 32,
      "recovery": 48,
      "race": 28
    },
    "publicFigure": {
      "swim": 58,
      "bike": 92,
      "run": 72,
      "strength": 34,
      "recovery": 50,
      "race": 32
    }
  }
};
