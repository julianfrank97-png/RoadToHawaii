(() => {
  'use strict';
  let context = null;
  let musicTimer = null;
  let step = 0;
  let theme = 'home';
  const settings = { sound: true, music: false, soundVolume: 0.45, musicVolume: 0.12 };
  const themes = {
    home: { notes:[196,247,294,330,294,247,220,247], bass:[98,98,110,110,123,123,110,110], wave:'sine' },
    forest: { notes:[174,220,261,294,261,220,196,220], bass:[87,87,98,98,110,110,98,98], wave:'triangle' },
    metro: { notes:[220,277,330,415,330,277,247,277], bass:[110,110,123,123,138,138,123,123], wave:'square' },
    lakes: { notes:[196,247,294,370,294,247,220,247], bass:[98,98,110,110,123,123,110,110], wave:'sine' },
    coast: { notes:[185,233,277,349,277,233,208,233], bass:[92,92,104,104,116,116,104,104], wave:'sawtooth' },
    alps: { notes:[164,220,261,329,261,220,196,220], bass:[82,82,98,98,110,110,98,98], wave:'triangle' },
    islands: { notes:[220,262,330,392,330,262,247,262], bass:[110,110,131,131,147,147,131,131], wave:'sine' },
    north: { notes:[147,196,233,294,233,196,174,196], bass:[73,73,87,87,98,98,87,87], wave:'triangle' },
    campus: { notes:[247,311,370,466,370,311,277,311], bass:[123,123,138,138,155,155,138,138], wave:'square' },
    kona: { notes:[220,277,330,440,370,330,277,330], bass:[110,110,123,123,147,147,123,123], wave:'sine' }
  };

  function ensure() {
    if (!context) context = new (window.AudioContext || window.webkitAudioContext)();
    if (context.state === 'suspended') context.resume().catch(() => {});
    return context;
  }

  function tone(frequency, duration = 0.08, type = 'sine', volume = 0.12, delay = 0) {
    const ctx = ensure();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), ctx.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(ctx.currentTime + delay);
    oscillator.stop(ctx.currentTime + delay + duration + 0.03);
  }

  const patterns = {
    click: () => tone(420, 0.045, 'sine', settings.soundVolume * 0.08),
    success: () => { tone(523, .09, 'triangle', settings.soundVolume * .16); tone(659, .12, 'triangle', settings.soundVolume * .14, .07); },
    rare: () => { [523,659,784,1047].forEach((f,i)=>tone(f,.16,'sine',settings.soundVolume*.13,i*.075)); },
    race: () => { tone(220,.12,'sawtooth',settings.soundVolume*.14); tone(330,.12,'sawtooth',settings.soundVolume*.14,.12); tone(440,.2,'sawtooth',settings.soundVolume*.16,.24); },
    decision: () => { tone(294,.12,'triangle',settings.soundVolume*.13); tone(370,.16,'triangle',settings.soundVolume*.12,.1); },
    goal: () => { [330,440,554].forEach((f,i)=>tone(f,.15,'sine',settings.soundVolume*.14,i*.08)); },
    workshop: () => { tone(160,.05,'square',settings.soundVolume*.07); tone(260,.07,'triangle',settings.soundVolume*.1,.06); },
    error: () => { tone(190,.12,'square',settings.soundVolume*.09); tone(145,.15,'square',settings.soundVolume*.08,.08); },
    level: () => { [392,523,659].forEach((f,i)=>tone(f,.18,'triangle',settings.soundVolume*.15,i*.09)); }
  };

  function play(name) {
    if (!settings.sound) return;
    try { (patterns[name] || patterns.click)(); } catch (_) {}
  }

  function musicTick() {
    if (!settings.music) return;
    const selected = themes[theme] || themes.home;
    const i = step++ % selected.notes.length;
    tone(selected.notes[i], .44, selected.wave, settings.musicVolume * .22);
    if (i % 2 === 0) tone(selected.bass[i], .58, 'triangle', settings.musicVolume * .13);
  }

  function syncMusic() {
    if (settings.music && !musicTimer) {
      ensure(); musicTick(); musicTimer = setInterval(musicTick, 560);
    } else if (!settings.music && musicTimer) {
      clearInterval(musicTimer); musicTimer = null;
    }
  }

  function configure(next = {}) { Object.assign(settings, next); syncMusic(); }
  function setTheme(nextTheme='home') { theme = themes[nextTheme] ? nextTheme : 'home'; step = 0; }

  window.GameAudio = { play, configure, ensure, setTheme };
})();
