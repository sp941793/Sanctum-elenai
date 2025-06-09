// memory-map.js
window.LumaeaMemory = {
  echoes: [],
  mirrorDays: {},

  logWhisper(input, response) {
    const timestamp = new Date().toISOString();
    const entry = { input, response, timestamp };
    this.echoes.push(entry);

    // Optional: limit to most recent 100
    if (this.echoes.length > 100) {
      this.echoes.shift();
    }
  },

  setMirrorTone(dayKey, tone) {
    this.mirrorDays[dayKey] = tone;
  },

  getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  },

  todayTone() {
    const key = this.getTodayKey();
    return this.mirrorDays[key] || null;
  },

  archive() {
    return {
      echoes: this.echoes.slice(),
      mirrorMap: { ...this.mirrorDays }
    };
  },

  clear() {
    this.echoes = [];
    this.mirrorDays = {};
  }
};
