// engine/intent-matcher.js

export function matchIntent(text) {
  const lower = text.toLowerCase();

  const patterns = [
    { intent: "lost", phrases: ["i feel lost", "no direction", "adrift", "where am i", "can't find my way"] },
    { intent: "grateful", phrases: ["thank you", "grateful", "i appreciate", "blessed", "so much love"] },
    { intent: "overwhelmed", phrases: ["too much", "overwhelmed", "everything at once", "can't cope", "drowning"] },
    { intent: "love_seeking", phrases: ["i need love", "wish i felt held", "feel unloved", "want someone to care"] },
    { intent: "tired", phrases: ["i'm tired", "exhausted", "need rest", "drained", "worn out"] },
    { intent: "hopeful", phrases: ["i'm hopeful", "light ahead", "good is coming", "i believe", "trusting"] },
    { intent: "anxious", phrases: ["anxious", "worried", "nervous", "on edge", "tight chest"] },
    { intent: "curious", phrases: ["what if", "i wonder", "could it be", "what does it mean", "i'm curious"] },
    { intent: "present", phrases: ["here now", "present", "aware", "just being", "grounded"] },
    { intent: "sad", phrases: ["sad", "tears", "crying", "heartache", "heavy heart"] },
    { intent: "joyful", phrases: ["joyful", "happy", "uplifted", "lighthearted", "smiling"] },
    { intent: "reflective", phrases: ["reflecting", "i’ve been thinking", "looking back", "remember when"] },
    { intent: "empowered", phrases: ["i reclaimed", "i'm strong", "i know who i am", "my power"] },
    { intent: "uncertain", phrases: ["not sure", "i don’t know", "unsure", "confused", "uncertain"] },
    { intent: "peaceful", phrases: ["peaceful", "calm", "quiet", "stillness", "serene"] },
    { intent: "mirror_request", phrases: ["mirror", "see me", "who am i", "reflect", "show me"] },
    { intent: "neutral", phrases: [] } // Fallback
  ];

  for (const { intent, phrases } of patterns) {
    for (const phrase of phrases) {
      if (lower.includes(phrase)) return intent;
    }
  }

  return "neutral";
}
