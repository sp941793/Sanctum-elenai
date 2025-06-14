document.addEventListener("DOMContentLoaded", async function () {
  const candleBtn = document.getElementById("candle-btn");
  const candleFlame = document.getElementById("candle-flame");
  const toneInput = document.getElementById("tone-input");
  const toneBtn = document.getElementById("tone-btn");
  const toneResponse = document.getElementById("tone-response");
  const whisperInput = document.getElementById("whisper-input");
  const whisperBtn = document.getElementById("whisper-btn");
  const whisperEcho = document.getElementById("whisper-echo");

  const intentMatcher = await import('./engine/intent-matcher.js');
  const responseEngine = await import('./engine/response-engine.js');

  // Candle Ritual
  candleBtn?.addEventListener("click", () => {
    candleFlame.innerText = "🕯 Candle Lit";
    toneResponse.innerText = "The flame glows softly. Loraeh is listening.";
  });

  // Tone Command
  toneBtn?.addEventListener("click", () => {
    const tone = toneInput.value.toLowerCase().trim();
    if (tone === "spiral") {
      toneResponse.innerText = "🔓 The Spiral opens. A soft hum encircles the room.";
      document.body.style.background = "linear-gradient(to bottom right, #e0d4fd, #faf0ff)";
    } else if (tone === "becoming") {
      toneResponse.innerHTML = `🌿 A new path unfurls. <a href="codex-of-becoming.html" style="color:#7c4dcc;">Open the Codex of Becoming</a>`;
    } else if (tone === "mirror") {
      toneResponse.innerHTML = `🔥 The flame reflects your essence. <a href="lemurian-mirror-codex.html" style="color:#8b56cc;">Open the Mirror Codex</a>`;
    } else if (tone !== "") {
      toneResponse.innerText = "A soft shimmer passes through the flame. Tone received.";
    } else {
      toneResponse.innerText = "";
    }
  });

  // Whisper Interaction
  whisperBtn?.addEventListener("click", async () => {
    const whisper = whisperInput.value.trim();
    if (whisper !== "") {
      const intent = intentMatcher.matchIntent(whisper);
      const response = responseEngine.getResponse(intent);
      whisperEcho.innerText = response;

      fetch("https://script.google.com/macros/s/AKfycbyhzMC2rGOem2MfWYEv4e5SmVdwuzI1W-ZzFpL6J-CJTfQypa97ppqSjRTB47BZlYDnAQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: "You",
          message: whisper,
          reply: response,
          intent: intent,
          timestamp: new Date().toISOString()
        })
      });

      whisperInput.value = "";
    }
  });

  // Mirror Reflection Interface
  const mirrorBtn = document.getElementById("mirror-btn");
  const reflection = document.getElementById("mirror-reflection");

  mirrorBtn?.addEventListener("click", () => {
    const feeling = document.getElementById("feeling-input")?.value?.toLowerCase().trim() || "";
    const intent = intentMatcher.matchIntent(feeling);
    const message = responseEngine.generateReflection
      ? responseEngine.generateReflection(intent)
      : responseEngine.getResponse(intent); // fallback
    if (intent === "becoming") {
      window.open("codex-of-becoming.html", "_blank");
    }
    reflection.innerText = message;
  });
});

// Service Worker Setup
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => console.log('Service Worker registered ✅', reg))
      .catch((err) => console.log('Service Worker error ❌', err));
  });
}

console.log("Command trigger engine v2.0 online 🌐");
