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
