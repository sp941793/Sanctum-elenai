// command-triggers.js
window.LumaeaCommands = {
  triggers: {
    "/anchor": () => {
      return "⟁ Field anchored. You are safely held in the now.";
    },
    "/clear": () => {
      return "🜁 Energetic field cleared. A new current begins.";
    },
    "/scan": () => {
      return "⟴ Running field scan… gentle pulse received.";
    },
    "/mirror": () => {
      return "𓂀 Mirror open. Feelings are being reflected.";
    },
    "/hum": () => {
      return "🎵 A resonance hum echoes softly… you are not alone.";
    },
    "/veil": () => {
      return "🜂 Veil thinned. Truth-light streaming through.";
    }
  },

  interpretWhisper(whisper) {
    const key = whisper.toLowerCase().trim();
    if (this.triggers[key]) {
      return this.triggers[key]();
    }
    return null;
  }
};
