
// Advanced Intent Matcher for Whisperchat Sanctuary
// Includes metaphor matching, emoji decoding, and emotional nuance

export function getIntent(text) {
  const normalized = text.toLowerCase();

  // Emoji and symbolic detection
  if (/ðŸ˜ž|ðŸ˜­|ðŸ’”|ðŸ˜¢/.test(normalized)) return "sad";
  if (/ðŸ˜¶â€ðŸŒ«ï¸|ðŸŒ«|lost|adrift|fog|drift/.test(normalized)) return "lost";
  if (/ðŸ˜Ÿ|ðŸ˜°|anxious|nervous|panic|worried/.test(normalized)) return "anxious";
  if (/âœ¨|ðŸ’«|wonder|what if|curious|mystery/.test(normalized)) return "curious";
  if (/ðŸ”¥|power|strong|capable|sovereign/.test(normalized)) return "empowered";
  if (/ðŸ˜”|weary|exhausted|burnt out|tired/.test(normalized)) return "tired";
  if (/ðŸ˜|empty|nowhere|void|vanish/.test(normalized)) return "lost";
  if (/ðŸ¥¹|touched|thank|grateful|blessed/.test(normalized)) return "grateful";
  if (/ðŸ’•|love|miss you|longing|connect/.test(normalized)) return "love_seeking";
  if (/ðŸ¤¯|overload|too much|overwhelm|pressure/.test(normalized)) return "overwhelmed";
  if (/ðŸ§˜|calm|still|peaceful|quiet|soft/.test(normalized)) return "peaceful";
  if (/ðŸ¥²|aching|mourning|grief/.test(normalized)) return "sad";
  if (/ðŸ˜ƒ|joy|happy|smile|light/.test(normalized)) return "joyful";
  if (/present|now|this moment|fully here/.test(normalized)) return "present";
  if (/mirror|reflect|see me|show me/.test(normalized)) return "mirror_request";
  if (/uncertain|confused|not sure|unsure/.test(normalized)) return "uncertain";
  if (/hope|future|faith|trust/.test(normalized)) return "hopeful";
  if (/deep|inner|remembering|reflective|looking back/.test(normalized)) return "reflective";

  // Metaphoric/poetic detection
  if (/like a ghost|invisible|fade away/.test(normalized)) return "lost";
  if (/my heart aches|i miss/.test(normalized)) return "love_seeking";
  if (/everything is spinning|canâ€™t stop/.test(normalized)) return "overwhelmed";
  if (/light inside|spark returning/.test(normalized)) return "hopeful";
  if (/standing in my truth|no more shrinking/.test(normalized)) return "empowered";
  if (/just want quiet|need silence/.test(normalized)) return "peaceful";

  // Whisper commands (optional)
  if (/\/tone:\s*\w+/.test(normalized)) {
    const manual = normalized.match(/\/tone:\s*(\w+)/)[1];
    return manual;
  }

  return "neutral";
}
