#!/usr/bin/env node
'use strict';

global.window = {};
require('../js/game-data.js');
const d = window.GAME_DATA;
const errors = [];
const warnings = [];
const ids = list => new Set(Array.isArray(list) ? list.map(x => x.id) : Object.keys(list || {}));
const skills = ids(d.skills), items = ids(d.items), materials = ids(d.materials), regions = ids(d.regions);
const races = ids(d.races), quests = ids(d.quests), facilities = ids(d.facilities), perks = ids(d.perks);
const rivals = ids(d.rivals);
const actions = [...d.athleteActions, ...d.workshopActions, ...d.careerActions];
const actionIds = ids(actions);
const pushUnknown = (set, value, context, kind) => { if (value && !set.has(value)) errors.push(`${context}: unbekannte ${kind}-ID '${value}'`); };

if (d.version !== '2.0.0') warnings.push(`Unerwartete Datenversion: ${d.version}`);
if (skills.size !== 18) errors.push(`Erwartet 18 Skills, gefunden ${skills.size}`);

function validateRequirement(req, context) {
  if (!req) return;
  if (req.type === 'skill') pushUnknown(skills, req.id, context, 'Skill');
  if (['raceTop', 'raceWin', 'raceFinish'].includes(req.type)) pushUnknown(races, req.id, context, 'Rennen');
  if (req.type === 'facility') pushUnknown(facilities, req.id, context, 'Einrichtung');
  if (req.type === 'quest') pushUnknown(quests, req.id, context, 'Quest');
  if (req.type === 'item') pushUnknown(items, req.id, context, 'Item');
}

for (const action of actions) {
  for (const skill of Object.keys(action.xp || {})) pushUnknown(skills, skill, `Aktion ${action.id}`, 'Skill');
  for (const mat of Object.keys(action.costs || {})) pushUnknown(materials, mat, `Aktion ${action.id}`, 'Material');
  for (const mat of Object.keys(action.materials || {})) pushUnknown(materials, mat, `Aktion ${action.id}`, 'Material');
  for (const item of Object.keys(action.itemCosts || {})) pushUnknown(items, item, `Aktion ${action.id}`, 'Item');
  if (action.item) pushUnknown(items, action.item[0], `Aktion ${action.id}`, 'Item');
  const req = action.requirements || {};
  if (req.skill) pushUnknown(skills, req.skill[0], `Aktion ${action.id}`, 'Skill');
  if (req.region) pushUnknown(regions, req.region, `Aktion ${action.id}`, 'Region');
  if (req.facility) pushUnknown(facilities, req.facility[0], `Aktion ${action.id}`, 'Einrichtung');
  if (req.quest) pushUnknown(quests, req.quest, `Aktion ${action.id}`, 'Quest');
}

for (const race of d.races) {
  pushUnknown(regions, race.region, `Rennen ${race.id}`, 'Region');
  if (race.rival) pushUnknown(rivals, race.rival, `Rennen ${race.id}`, 'Rivale');
  for (const rival of race.rivals || []) pushUnknown(rivals, rival, `Rennen ${race.id}`, 'Rivale');
  for (const req of race.requirements || []) validateRequirement(req, `Rennen ${race.id}`);
  if (race.rewards?.item) pushUnknown(items, race.rewards.item[0], `Rennen ${race.id}`, 'Item');
  for (const mat of Object.keys(race.rewards?.materials || {})) pushUnknown(materials, mat, `Rennen ${race.id}`, 'Material');
  for (const drop of race.drops || []) {
    if (drop.item) pushUnknown(items, drop.item, `Rennen ${race.id}`, 'Drop-Item');
    if (drop.material) pushUnknown(materials, drop.material, `Rennen ${race.id}`, 'Drop-Material');
  }
}

for (const [id, region] of Object.entries(d.regions)) for (const req of region.unlock || region.requirements || []) validateRequirement(req, `Region ${id}`);

for (const quest of d.quests) {
  if (quest.prerequisite) pushUnknown(quests, quest.prerequisite, `Quest ${quest.id}`, 'Quest');
  if (quest.rewards?.item) pushUnknown(items, quest.rewards.item[0], `Quest ${quest.id}`, 'Item');
  for (const skill of Object.keys(quest.rewards?.xp || {})) pushUnknown(skills, skill, `Quest ${quest.id}`, 'Skill');
  for (const mat of Object.keys(quest.rewards?.materials || {})) pushUnknown(materials, mat, `Quest ${quest.id}`, 'Material');
}

for (const [id, perk] of Object.entries(d.perks)) if (perk.requirements?.skill) pushUnknown(skills, perk.requirements.skill[0], `Perk ${id}`, 'Skill');

for (const [index, entry] of d.shop.entries()) {
  if (entry.type === 'item') pushUnknown(items, entry.id, `Shop-Eintrag ${index}`, 'Item');
  if (entry.type === 'material') pushUnknown(materials, entry.id, `Shop-Eintrag ${index}`, 'Material');
  if (!['item', 'material'].includes(entry.type)) errors.push(`Shop-Eintrag ${index}: unbekannter Typ '${entry.type}'`);
  if (entry.requirement?.region) pushUnknown(regions, entry.requirement.region, `Shop-Eintrag ${index}`, 'Region');
}

for (const achievement of d.achievements) {
  const r = achievement.requirement || {};
  if (r.type === 'skill') pushUnknown(skills, r.id, `Erfolg ${achievement.id}`, 'Skill');
  if (r.type === 'allSkills') for (const skill of r.ids || []) pushUnknown(skills, skill, `Erfolg ${achievement.id}`, 'Skill');
  if (r.type === 'raceWin') pushUnknown(races, r.id, `Erfolg ${achievement.id}`, 'Rennen');
  if (r.type === 'item') pushUnknown(items, r.id, `Erfolg ${achievement.id}`, 'Item');
}

for (const event of d.decisionEvents || []) {
  if (!event.choices?.length) errors.push(`Entscheidungsereignis ${event.id}: keine Auswahlmöglichkeiten`);
  for (const choice of event.choices || []) {
    for (const skill of Object.keys(choice.effect?.xp || {})) pushUnknown(skills, skill, `Entscheidungsereignis ${event.id}`, 'Skill');
    for (const material of Object.keys(choice.effect?.materials || {})) pushUnknown(materials, material, `Entscheidungsereignis ${event.id}`, 'Material');
    if (choice.effect?.item) pushUnknown(items, choice.effect.item[0], `Entscheidungsereignis ${event.id}`, 'Item');
  }
}

for (const [focus, target] of Object.entries(d.trainingTargets || {})) {
  for (const key of ['swim','bike','run','strength','recovery','race']) if (typeof target[key] !== 'number' || target[key] <= 0) errors.push(`Trainingsziel ${focus}: ungültiger Wert für ${key}`);
}

const duplicates = (list, label) => {
  const seen = new Set();
  for (const entry of list) {
    if (seen.has(entry.id)) errors.push(`${label}: doppelte ID '${entry.id}'`);
    seen.add(entry.id);
  }
};
duplicates(actions, 'Aktionen');
duplicates(d.races, 'Rennen');
duplicates(d.quests, 'Quests');
duplicates(d.achievements, 'Erfolge');
duplicates(d.decisionEvents || [], 'Entscheidungsereignisse');

const report = {
  version: d.version,
  counts: {
    skills: skills.size,
    items: items.size,
    actions: actionIds.size,
    races: races.size,
    rivals: rivals.size,
    sponsors: Array.isArray(d.sponsors) ? d.sponsors.length : Object.keys(d.sponsors || {}).length,
    quests: quests.size,
    regions: regions.size,
    perks: perks.size,
    achievements: d.achievements.length,
    materials: materials.size,
    decisionEvents: (d.decisionEvents || []).length
  },
  warnings,
  errors
};
console.log(JSON.stringify(report, null, 2));
process.exitCode = errors.length ? 1 : 0;
