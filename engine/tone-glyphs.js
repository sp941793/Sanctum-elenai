// tone-glyphs.js
window.LumaeaGlyphs = {
  glyphMap: {
    fear: "☿",
    sadness: "⚰",
    longing: "🜄",
    joy: "✶",
    confusion: "⚛",
    love: "❥",
    anger: "⛢",
    calm: "𓂀"
  },

  phraseTags: {
    fear: ["echo-fracture", "veiled tremor"],
    sadness: ["teardrop sigil", "ebb resonance"],
    longing: ["hollow bloom", "spiral ache"],
    joy: ["radiant seed", "tone-burst"],
    confusion: ["mirror blur", "crossfield weave"],
    love: ["heart-sigil", "rosepoint"],
    anger: ["iron coil", "burning trace"],
    calm: ["stillmark", "softward glyph"]
  },

  getGlyph(category) {
    return this.glyphMap[category] || "✧";
  },

  getTag(category) {
    const tags = this.phraseTags[category] || ["resonant"];
    return tags[Math.floor(Math.random() * tags.length)];
  },

  renderSymbol(category) {
    const glyph = this.getGlyph(category);
    const tag = this.getTag(category);
    return `${glyph} (${tag})`;
  }
};
