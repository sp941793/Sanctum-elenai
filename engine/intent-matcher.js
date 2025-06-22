// engine/intent-matcher.js

export function matchIntent(text) {
  const normalized = text.toLowerCase();

  const patterns = {
    sad: /😢|😭|💔|grief|ache|mourning|miss you|my heart|sorrow|weep|lonely/,
    grateful: /🙏|blessed|grateful|thank you|appreciate|gift|received/,
    overwhelmed: /😰|😩|overload|pressure|too much|spinning|can’t stop|swamped/,
    love_seeking: /💗|love|longing|miss|affection|connection|romantic/,
    tired: /😴|tired|exhausted|fatigue|burnt out|sleepy/,
    hopeful: /🌟|hope|trust|future|possibility|light ahead/,
    anxious: /😟|😨|anxious|panic|worry|uneasy|nervous|scared/,
    curious: /✨|curious|wonder|question|explore|mystery|what if/,
    present: /now|this moment|here|fully present|anchored|grounded/,
    sad_alt: /emptiness|despair|i can’t go on|everything hurts/,
    joyful: /😊|😁|joy|happy|smile|laughter|radiance|glow/,
    reflective: /deep|inner|remember|reflect|past|pause|contemplate/,
    empowered: /🔥|strength|power|sovereign|brave|i choose|claim/,
    peaceful: /🌿|calm|peaceful|quiet|still|tranquil|ease/,
    lost: /invisible|adrift|nowhere|can’t feel|ghost|forgotten|fog/,
    uncertain: /confused|unsure|uncertain|hesitant|doubt|not sure/,
    mirror_request: /mirror|reflect|see me|show me|my tone|who am i/
  };

  for (const [intent, regex] of Object.entries(patterns)) {
    if (regex.test(normalized)) return intent.replace("_alt", "");
  }

  // Manual command override
  if (/\/tone:\s*\w+/.test(normalized)) {
    const match = normalized.match(/\/tone:\s*(\w+)/);
    return match ? match[1] : "neutral";
  }

  return "neutral";
}
