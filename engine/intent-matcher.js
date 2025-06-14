// engine/intent-matcher.js

export function matchIntent(text) {
  const lower = text.toLowerCase();

  const patterns = [
    { intent: "lost", phrases: ["i feel lost", "not sure where i am", "no direction", "can't find my way", "adrift"] },
    { intent: "grateful", phrases: ["thank you", "grateful", "i appreciate", "blessed", "so much love"] },
    { intent: "overwhelmed", phrases: ["too much", "i can't handle", "overwhelmed", "everything at once", "drowning"] },
    { intent: "love_seeking", phrases: ["i need love", "wish i felt held", "want someone to care", "feel unloved"] },
    { intent: "tired", phrases: ["i'm tired", "exhausted", "need rest", "drained", "worn out"] },
    { intent: "hopeful", phrases: ["i'm hopeful", "something good is coming", "i believe", "light ahead"] },
    { intent: "anxious", phrases: ["anxious", "nervous", "worried", "my chest feels tight", "on edge"] },
    { intent: "curious", phrases: ["what if", "i wonder", "could it be", "what does it mean"] },
    { intent: "present", phrases: ["here now", "in this moment", "aware", "just being", "i'm grounded"] },
    { intent: "sad", phrases: ["sad", "sorrow", "tears", "cry", "aching"] },
    { intent: "joyful", phrases: ["happy", "joyful", "light-hearted", "playful", "uplifted"] },
    { intent: "reflective", phrases: ["i’ve been thinking", "reflecting", "remember when", "looking back"] },
    { intent: "empowered", phrases: ["i know who i am", "i’m strong", "i reclaimed", "my power"] },
    { intent: "uncertain", phrases: ["i don’t know", "unsure", "conf
