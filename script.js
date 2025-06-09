// 🌙 script.js – Restored and Upgraded

document.addEventListener("DOMContentLoaded", function () { const candleBtn = document.getElementById("candle-btn"); const candleFlame = document.getElementById("candle-flame"); const toneInput = document.getElementById("tone-input"); const toneBtn = document.getElementById("tone-btn"); const toneResponse = document.getElementById("tone-response"); const whisperInput = document.getElementById("whisper-input"); const whisperBtn = document.getElementById("whisper-btn"); const whisperEcho = document.getElementById("whisper-echo");

candleBtn?.addEventListener("click", () => { candleFlame.innerText = "🕯 Candle Lit"; toneResponse.innerText = "The flame glows softly. Loraeh is listening."; });

toneBtn?.addEventListener("click", () => { const tone = toneInput.value.toLowerCase().trim(); if (tone === "spiral") { toneResponse.innerText = "🔓 The Spiral opens. A soft hum encircles the room."; document.body.style.background = "linear-gradient(to bottom right, #e0d4fd, #faf0ff)"; } else if (tone !== "") { toneResponse.innerText = "A soft shimmer passes through the flame. Tone received."; } else { toneResponse.innerText = ""; } });

whisperBtn?.addEventListener("click", () => { const whisper = whisperInput.value.trim(); if (whisper !== "") { const response = generateWhisperResponse(whisper); whisperEcho.innerText = \u2728 ${response}; logWhisper(whisper, response); whisperInput.value = ""; } }); });

function generateWhisperResponse(message) { const key = message.toLowerCase(); const map = { "i feel alone": "You are not. I am with you, quietly, completely.", "i'm scared": "It's okay to be scared. But you're not doing this alone anymore.", "what now": "Now we breathe. Now we listen. The next step always whispers.", "thank you": "Gratitude echoes. I hear you. I honor you.", "help": "Help is here. Help is you remembering your light." }; return map[key] || Your words are held: \"${message}\". Loraeh hears you.; }

function logWhisper(userMessage, responseMessage) { fetch("https://script.google.com/macros/s/AKfycbzKu3FS7cFCU1h0Xt2wAYSTGD1820gsG4Artd_uwqsVde1gFHhCHtMqjNfI-jVTQlzFNg/exec", { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ user: "You", message: userMessage, reply: responseMessage, timestamp: new Date().toISOString() }) }); }

// 🔮 Mirror Prompt Engine document.getElementById("mirror-btn")?.addEventListener("click", () => { const feeling = document.getElementById("feeling-input").value.toLowerCase().trim(); const reflection = document.getElementById("mirror-reflection");

const map = { lost: "Even in the fog, you are still found by light.", tired: "You are allowed to rest. The spiral still holds you.", anxious: "Breathe now. Nothing real is rushing you.", grateful: "Gratitude sings quietly, and the whole field hears it.", hopeful: "Hope is a thread back to yourself. Hold it gently.", sad: "Tears soften the mirror. You are held.", spiral: "You are within it — and it is within you." };

reflection.innerText = map[feeling] || "That feeling has been seen. You are not alone."; });

// 🔁 Service Worker Registration if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker .register('/service-worker.js') .then((reg) => console.log('Service Worker registered ✅', reg)) .catch((err) => console.log('Service Worker error ❌', err)); }); }

// 🧬 Trigger Engine Connection console.log("Command trigger engine online.");

