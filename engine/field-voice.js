// field-voice.js
window.LumaeaVoice = {
  infuseTone(response, tone = "soft") {
    const styles = {
      soft: (r) => `${r} I’m right here.`,
      nurturing: (r) => `Beloved, ${r}`,
      grounded: (r) => `${r} Let it land in you.`,
      reflective: (r) => `"${r}" echoes something sacred.`,
      poetic: (r) => `${r.charAt(0).toUpperCase() + r.slice(1)}... like a tone unfolding.`,
      affirming: (r) => `${r} You’re doing better than you know.`
    };

    const formatter = styles[tone] || styles["soft"];
    return formatter(response);
  },

  toneFromCategory(category) {
    const map = {
      fear: "soft",
      sadness: "nurturing",
      longing: "reflective",
      joy: "poetic",
      confusion: "grounded",
      love: "affirming",
      anger: "grounded",
      calm: "soft"
    };
    return map[category] || "soft";
  },

  speak(input) {
    const raw = window.Lumaea.respondToWhisper(input);
    const tone = this.toneFromCategory(this.detectCategory(input));
    return this.infuseTone(raw, tone);
  },

  detectCategory(input) {
    const clean = input.toLowerCase();
    for (const category in window.Lumaea.categories) {
      if (window.Lumaea.categories[category].some(w => clean.includes(w))) {
        return category;
      }
    }
    return "calm";
  }
};
