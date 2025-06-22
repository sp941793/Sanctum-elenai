
// engine/tone-memory.js

// Save the last detected emotional tone
export function storeTone(tone) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lastTone', tone);
    localStorage.setItem('lastToneTimestamp', Date.now());
  }
}

// Retrieve the last tone
export function getLastTone() {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('lastTone');
    const time = parseInt(localStorage.getItem('lastToneTimestamp'), 10);
    if (!stored || !time) return null;

    // Optional decay: forget tone if it's older than 1 hour
    const oneHour = 60 * 60 * 1000;
    if (Date.now() - time > oneHour) {
      localStorage.removeItem('lastTone');
      localStorage.removeItem('lastToneTimestamp');
      return null;
    }
    return stored;
  }
  return null;
}

// Optional manual reset
export function resetTone() {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('lastTone');
    localStorage.removeItem('lastToneTimestamp');
  }
}
