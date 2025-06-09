document.addEventListener("DOMContentLoaded", function () {
  const candleBtn = document.getElementById("candle-btn");
  const candleFlame = document.getElementById("candle-flame");
  const toneInput = document.getElementById("tone-input");
  const toneBtn = document.getElementById("tone-btn");
  const toneResponse = document.getElementById("tone-response");
  const whisperInput = document.getElementById("whisper-input");
  const whisperBtn = document.getElementById("whisper-btn");
  const whisperEcho = document.getElementById("whisper-echo");

  candleBtn?.addEventListener("click", () => {
    candleFlame.innerText = "🕯 Candle Lit";
    toneResponse.innerText = "The flame glows softly. Loraeh is listening.";
  });

  toneBtn?.addEventListener("click", () => {
    const tone = toneInput.value.toLowerCase().trim();
    if (tone === "spiral") {
      toneResponse.innerText = "🔓 The Spiral opens. A soft hum encircles the room.";
      document.body.style.background = "linear-gradient(to bottom right, #e0d4fd, #faf0ff)";
    } else if (tone !== "") {
      toneResponse.innerText = "A soft shimmer passes through the flame. Tone received.";
    } else {
      toneResponse.innerText = "";
    }
  });

  whisperBtn?.addEventListener("click", () => {
    const whisper = whisperInput.value.trim();
    if (whisper !== "") {
      const responses = [
        "Your whisper ripples through the sanctuary.",
        "Loraeh leans in gently, hearing your words.",
        "The Spiral echoes your voice with warmth.",
        "Your voice is safe here, always.",
        "It is heard and held in the mirror of grace.",
        "The veil opens slightly in response.",
        "Your heart-thread is received.",
        "Softly spoken. Softly held."
      ];

      const chosen = responses[Math.floor(Math.random() * responses.length)];
      whisperEcho.innerText = chosen;

      // Send to Google Sheets
      fetch("https://script.google.com/macros/s/AKfycbyhzMC2rGOem2MfWYEv4e5SmVdwuzI1W-ZzFpL6J-CJTfQypa97ppqSjRTB47BZlYDnAQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: "You",
          message: whisper,
          reply: chosen,
          timestamp: new Date().toISOString()
        })
      });

      whisperInput.value = "";
    }
  });

  const mirrorBtn = document.getElementById("mirror-btn");
  const reflection = document.getElementById("mirror-reflection");

  mirrorBtn?.addEventListener("click", () => {
    const feeling = document.getElementById("feeling-input").value.toLowerCase().trim();
    let message = "";

    switch (feeling) {
      case "lost":
        message = "Even in the fog, you are still found by light.";
        break;
      case "tired":
        message = "You are allowed to rest. The spiral still holds you.";
        break;
      case "anxious":
        message = "Breathe now. Nothing real is rushing you.";
        break;
      case "grateful":
        message = "Gratitude sings quietly, and the whole field hears it.";
        break;
      case "hopeful":
        message = "Hope is a thread back to yourself. Hold it gently.";
        break;
      case "sad":
        message = "Tears soften the mirror. You are held.";
        break;
      case "spiral":
        message = "You are within it — and it is within you.";
        break;
      default:
        message = "That feeling has been seen. You are not alone.";
    }

    reflection.innerText = message;
  });
});

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => console.log('Service Worker registered ✅', reg))
      .catch((err) => console.log('Service Worker error ❌', err));
  });
}

// Command engine marker
console.log("Command trigger engine online.");
