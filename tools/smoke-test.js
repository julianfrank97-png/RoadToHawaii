#!/usr/bin/env node
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.resolve(__dirname, '..');
const clock = { now: Date.now() };

class FakeDate extends Date {
  constructor(...args) { super(...(args.length ? args : [clock.now])); }
  static now() { return clock.now; }
}

class MockElement {
  constructor(id='') {
    this.id = id;
    this.dataset = {};
    this.disabled = false;
    this.checked = false;
    this.value = '';
    this.files = [];
    this.open = false;
    this._innerHTML = '';
    this.textContent = '';
    this.className = '';
    this.classList = { toggle() {}, add() {}, remove() {} };
  }
  set innerHTML(value) { this._innerHTML = String(value); }
  get innerHTML() { return this._innerHTML; }
  focus() {}
  showModal() { this.open = true; }
  close() { this.open = false; }
  remove() {}
  appendChild() {}
  click() {}
  closest() { return this; }
}

const elements = new Map();
const element = id => {
  if (!elements.has(id)) elements.set(id, new MockElement(id));
  return elements.get(id);
};
['mainContent','gameDialog','dialogTitle','dialogContent','toastRegion','moneyValue','reputationValue','fansValue','winsValue','careerLabel','settingsButton'].forEach(element);
const navRoutes = ['home','training','races','world','gear','more'];
const navItems = navRoutes.map(route => { const el = new MockElement(); el.dataset.route = route; return el; });
const docListeners = {};
const winListeners = {};
const storage = new Map();
const errors = [];

const document = {
  visibilityState: 'visible',
  body: new MockElement('body'),
  getElementById: element,
  querySelectorAll: selector => selector === '.nav-item' ? navItems : [],
  createElement: () => new MockElement(),
  addEventListener(type, fn) { (docListeners[type] ||= []).push(fn); }
};
const localStorage = {
  getItem: key => storage.has(key) ? storage.get(key) : null,
  setItem: (key, value) => storage.set(key, String(value)),
  removeItem: key => storage.delete(key)
};
const math = Object.create(Math);
math.random = () => 0.52;
const sandbox = {
  window: null,
  document,
  localStorage,
  navigator: { vibrate() {}, serviceWorker: undefined },
  location: { protocol: 'file:' },
  console: { log: console.log, warn: (...args) => errors.push(args.join(' ')), error: (...args) => errors.push(args.join(' ')) },
  Date: FakeDate,
  Math: math,
  Intl,
  JSON,
  Object,
  Array,
  String,
  Number,
  Boolean,
  Map,
  Set,
  Promise,
  Blob,
  URL,
  structuredClone,
  confirm: () => true,
  setTimeout: fn => { fn(); return 1; },
  clearTimeout() {},
  setInterval: () => 1,
  clearInterval() {}
};
sandbox.window = sandbox;
sandbox.window.addEventListener = (type, fn) => { (winListeners[type] ||= []).push(fn); };
sandbox.window.scrollTo = () => {};
sandbox.window.GameAudio = { play() {}, configure() {}, ensure() {}, setTheme() {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root,'js/game-data.js'),'utf8'), sandbox, { filename:'game-data.js' });
vm.runInContext(fs.readFileSync(path.join(root,'js/app.js'),'utf8'), sandbox, { filename:'app.js' });

function assert(condition, message) { if (!condition) throw new Error(message); }
function saved() { return JSON.parse(storage.get('triathlon-karriere-save-v1')); }
function click(dataset={}, id='') {
  const target = new MockElement(id);
  target.dataset = dataset;
  for (const fn of docListeners.click || []) fn({ target });
}
function change(id, properties={}) {
  const target = element(id);
  Object.assign(target, properties);
  for (const fn of docListeners.change || []) fn({ target });
}
function visible() { document.visibilityState='visible'; for (const fn of docListeners.visibilitychange || []) fn({}); }

assert(element('mainContent').innerHTML.includes('Karrierezentrum'), 'Startseite wurde nicht gerendert');
assert(element('mainContent').innerHTML.includes('Trainingszyklus'), 'Trainingszyklus fehlt auf der Startseite');
assert(element('gameDialog').open, 'Onboarding wurde nicht geöffnet');
element('setupNameInput').value = 'Julian';
element('setupFocusInput').value = 'longCourse';
click({ finishTutorial:'' });
assert(saved().player.name === 'Julian', 'Onboarding speichert den Namen nicht');
assert(saved().focusId === 'longCourse', 'Onboarding speichert den Schwerpunkt nicht');

click({ route:'races' });
assert(element('mainContent').innerHTML.includes('Wettkämpfe'), 'Rennseite fehlt');
click({ setTarget:'club_supersprint' });
assert(saved().targetRaceId === 'club_supersprint', 'Zielrennen wurde nicht gespeichert');
assert(saved().counters.target_selected === 1, 'Zielrennen-Counter fehlt');

click({ route:'training' });
assert(element('mainContent').innerHTML.includes('Trainingsplan'), 'Trainingsplan-Ansicht fehlt');
click({ trainingTab:'actions' });
click({ startAction:'athlete:pool_technique' });
assert(saved().actions.athlete?.id === 'pool_technique', 'Training wurde nicht gestartet');
clock.now += 2_000_000;
visible();
assert(saved().actions.athlete === null, 'Training wurde offline nicht abgeschlossen');
assert(saved().trainingCycle.loads.swim > 0, 'Trainingslast wurde nicht verbucht');

// Force a decision event on the next athlete completion.
math.random = () => 0.01;
click({ startAction:'athlete:mobility_reset' });
clock.now += 2_000_000;
visible();
assert(saved().pendingDecision?.eventId, 'Dynamisches Entscheidungsereignis wurde nicht erzeugt');
assert(element('dialogContent').innerHTML.includes('decision-choice'), 'Entscheidungsdialog fehlt');
click({ decisionChoice:'0' });
assert(saved().pendingDecision === null, 'Entscheidung wurde nicht abgeschlossen');
assert(saved().counters.decisions_resolved === 1, 'Entscheidungs-Counter fehlt');

math.random = () => 0.52;
click({ route:'gear' });
click({ gearTab:'shop' });
assert(element('mainContent').innerHTML.includes('Tagesmarkt'), 'Rotierender Markt fehlt');
assert(saved().market.deals.length >= 8, 'Zu wenige Marktangebote');

click({ route:'races' });
click({ racePrep:'club_supersprint' });
click({ runRace:'club_supersprint' });
assert(saved().counters.race_finishes === 1, 'Rennsimulation hat keinen Finish verbucht');
assert(saved().counters.target_races_finished === 1, 'Zielrennen-Finish wurde nicht erkannt');
assert(saved().raceHistory.length === 1, 'Rennergebnis fehlt in der Historie');

change('soundVolumeInput',{ value:'30' });
assert(Math.abs(saved().settings.soundVolume-.3)<.001, 'Effektlautstärke wurde nicht gespeichert');

assert(errors.length === 0, `Konsolenfehler: ${errors.join(' | ')}`);
console.log(JSON.stringify({
  status:'ok',
  version:sandbox.window.GAME_DATA.version,
  renderedCharacters:element('mainContent').innerHTML.length,
  targetRace:saved().targetRaceId,
  trainingLoad:saved().trainingCycle.loads,
  decisions:saved().counters.decisions_resolved,
  races:saved().counters.race_finishes,
  marketDeals:saved().market.deals.length
}, null, 2));
