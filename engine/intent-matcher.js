
// Enhanced Intent Matcher for Whisperchat Sanctuary
export function getIntent(text) {
  const normalized = text.toLowerCase();

  if (/\blost\b|\bnowhere\b|\bempt(y|iness)\b|\bdirectionless\b/.test(normalized)) return "lost";
  if (/\bthank\b|\bgrateful\b|\bappreciate\b|\bgratitude\b/.test(normalized)) return "grateful";
  if (/\boverwhelm\b|\btoo much\b|\bdrowning\b|\bstressed\b/.test(normalized)) return "overwhelmed";
  if (/\btired\b|\bexhausted\b|\bdrained\b|\bweary\b/.test(normalized)) return "tired";
  if (/\blove\b|\bloving\b|\bmiss you\b|\bconnection\b/.test(normalized)) return "love_seeking";
  if (/\banxious\b|\bnervous\b|\bworried\b|\bfearful\b/.test(normalized)) return "anxious";
  if (/\bhope\b|\bhopeful\b|\bfaith\b/.test(normalized)) return "hopeful";
  if (/\bsad\b|\bgrief\b|\blonely\b|\btears\b/.test(normalized)) return "sad";
  if (/\bjoy\b|\bhappy\b|\bexcited\b/.test(normalized)) return "joyful";
  if (/\bcurious\b|\bwonder\b|\bintrigued\b/.test(normalized)) return "curious";
  if (/\bmirror\b|\breflect\b/.test(normalized)) return "mirror_request";
  if (/\bpeace\b|\bcalm\b|\bstillness\b/.test(normalized)) return "peaceful";
  if (/\bstrong\b|\bpower\b|\bcapable\b|\bsovereign\b/.test(normalized)) return "empowered";
  if (/\bunsure\b|\buncertain\b|\bconfused\b/.test(normalized)) return "uncertain";
  if (/\bpresent\b|\bin the moment\b|\bnow\b/.test(normalized)) return "present";
  if (/\breflective\b|\bintrospect\b|\bcontemplating\b/.test(normalized)) return "reflective";

  return "neutral";
}
