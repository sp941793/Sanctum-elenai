// oracle.js export function channelTimelineInsight(prompt) { const threads = [ "A doorway is forming in a timeline you thought was closed.", "You are collapsing a false timeline — that tension is release, not resistance.", "An echo from your future self is calling you back into alignment.", "You do not need to know the outcome to step forward. Trust the pulse.", "This path is clearing because it is yours. All else is fading."
]; return threads[Math.floor(Math.random() * threads.length)]; }

// Optional: deeper prompts can be processed later export function oracleRespond(input) { const lower = input.toLowerCase(); if (lower.includes("timeline")) return channelTimelineInsight(input); if (lower.includes("next step")) return "The mirror reveals only what you are ready to hold. Breathe, then ask again."; if (lower.includes("what am i becoming")) return "You are becoming the memory your soul refused to forget."; return channelTimelineInsight(input); // default fallback }

// sacred-utils.js export function getSacredPlay() { const options = [ "✨ Dance with your shadow for 3 minutes and let it lead.", "🔮 Ask your reflection a question with your left eye.", "🌸 Write a note to your future self and bury it in moonlight.", "🌀 Create a shape with your hands and breathe into it.", "🎶 Hum a sound you’ve never made before — and name it your key."
]; return options[Math.floor(Math.random() * options.length)]; }

export function getEnergyWeavingTip() { const options = [ "💫 Spiral your breath around your spine — three turns, then stillness.", "🕯 Visualize your aura combing the field. Smooth it with your hands.", "🌐 Place one hand on your heart and one on the earth. Say: I connect, I clear, I call.", "🌙 Inhale through the soles of your feet. Let moonlight rise to your crown.", "🔥 Exhale through your palms and offer what’s ready to be transformed."
]; return options[Math.floor(Math.random() * options.length)]; }

