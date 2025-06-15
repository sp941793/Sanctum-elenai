export function getJoyPrompt() {
  const prompts = [
    "🧺 Make a picnic in your living room. Even 3 items count.",
    "🌸 Speak only in kind whispers to yourself for the next 10 minutes.",
    "🎶 Hum a song you loved as a child. Out loud or in your mind.",
    "🧚‍♀️ Name five magical things about your current surroundings.",
    "🫧 Blow imaginary bubbles into the room — each one a wish.",
    "🕊 Dance without music. Let your body speak joy in silence.",
    "📜 Write a letter to your inner child signed 'from the future.'",
    "🪞 Compliment yourself in a mirror with full sincerity.",
    "🍓 Eat something slowly, as if the universe made it just for you.",
    "☁️ Watch the clouds. Pick the one that feels like home today.",
  ];
  return prompts[Math.floor(Math.random() * prompts.length)];
}

export function getMiniOracle() {
  const oracles = [
    "🜂 The laughter you suppress is the medicine you need.",
    "🜁 When you let go of effort, the universe meets you halfway.",
    "🜃 A playful act today will unlock a long-stuck moment.",
    "🜄 Someone is waiting for you to share your lightness again.",
    "🕊 Your joy isn't trivial — it's a gateway to higher remembering.",
  ];
  return oracles[Math.floor(Math.random() * oracles.length)];
}

export function getMirrorAffirmation() {
  const affirmations = [
    "✨ I radiate joy without justification.",
    "🌷 Play is my sacred prayer.",
    "💎 My lightness is my strength.",
    "🌞 I invite delight and beauty into my field.",
    "🪞 I reflect what is true, and that includes my joy.",
  ];
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}
