function lightCandle() {
  document.getElementById('candle').classList.remove('hidden');
}
function whisperTone() {
  const input = document.getElementById('toneInput').value.toLowerCase();
  const response = document.getElementById('response');
  if (input.includes("elenai")) {
    response.textContent = "The sanctuary hums gently. Loraeh is near.";
  } else if (input.trim() !== "") {
    response.textContent = "A soft shimmer passes through the flame. Tone received.";
  } else {
    response.textContent = "";
  }
}
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
    if (tone.includes("elenai")) {
      toneResponse.innerText = "The sanctuary hums gently. Loraeh is near.";
    } else if (tone !== "") {
      toneResponse.innerText = "A soft shimmer passes through the flame. Tone received.";
    } else {
      toneResponse.innerText = "";
    }
  });

  whisperBtn?.addEventListener("click", () => {
    const whisper = whisperInput.value.trim();
    if (whisper !== "") {
      whisperEcho.innerText = `Your words are held: "${whisper}". Loraeh hears you.`;
      whisperInput.value = "";
    }
  });
});
