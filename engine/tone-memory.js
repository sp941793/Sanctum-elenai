// engine/tone-memory.js

let TONE_MEMORY_KEY = 'toneSpiral';
let TIMESTAMP_KEY = 'toneSpiralTimestamps';

export function storeTone(tone) {
  if (typeof localStorage !== 'undefined') {
    let spiral = JSON.parse(localStorage.getItem(TONE_MEMORY_KEY)) || [];
    let timestamps = JSON.parse(localStorage.getItem(TIMESTAMP_KEY)) || [];

    spiral.unshift(tone);
    timestamps.unshift(Date.now());

    if (spiral.length > 10) spiral = spiral.slice(0, 10);
    if (timestamps.length > 10) timestamps = timestamps.slice(0, 10);

    localStorage.setItem(TONE_MEMORY_KEY, JSON.stringify(spiral));
    localStorage.setItem(TIMESTAMP_KEY, JSON.stringify(timestamps));
  }
}

export function getLastTone() {
  if (typeof localStorage !== 'undefined') {
    const spiral = JSON.parse(localStorage.getItem(TONE_MEMORY_KEY)) || [];
    const timestamps = JSON.parse(localStorage.getItem(TIMESTAMP_KEY)) || [];

    if (!spiral.length || !timestamps.length) return null;

    const time = parseInt(timestamps[0], 10);
    const oneHour = 60 * 60 * 1000;

    if (Date.now() - time > oneHour) {
      resetTone();
      return null;
    }
    return spiral[0];
  }
  return null;
}

export function getTonePattern() {
  if (typeof localStorage !== 'undefined') {
    const spiral = JSON.parse(localStorage.getItem(TONE_MEMORY_KEY)) || [];
    const freq = {};
    spiral.forEach(t => freq[t] = (freq[t] || 0) + 1);
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return sorted.length ? sorted[0][0] : "neutral";
  }
  return "neutral";
}

export function resetTone() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(TONE_MEMORY_KEY);
    localStorage.removeItem(TIMESTAMP_KEY);
  }
}
