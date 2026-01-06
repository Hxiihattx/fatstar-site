const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

const textInput = document.getElementById("textInput");
const fontSizeInput = document.getElementById("fontSize");
const blurInput = document.getElementById("blurAmount");
const noiseInput = document.getElementById("noiseAmount");
const mirrorToggle = document.getElementById("mirrorToggle");
const flipToggle = document.getElementById("flipToggle");
const downloadBtn = document.getElementById("downloadBtn");

const presetButtons = document.querySelectorAll(".preset-btn");
const colorRows = document.querySelectorAll(".color-row");

const state = {
  text: "BRAT",
  fontSize: 280,
  blur: 4,
  noise: 6,
  mirror: false,
  flip: false,
  textColor: "#000000",
  background: "#ffffff",
};

const presets = {
  scribble: {
    text: "SCRIBBLE",
    textColor: "#111111",
    background: "#fafafa",
    blur: 2,
    noise: 8,
  },
  brat: {
    text: "BRAT",
    textColor: "#000000",
    background: "#8ACE00",
    blur: 4,
    noise: 10,
  },
  bratwhite: {
    text: "BRAT",
    textColor: "#ffffff",
    background: "#000000",
    blur: 6,
    noise: 12,
  },
  album: {
    text: "ALBUM",
    textColor: "#000000",
    background: "#f4f4f4",
    blur: 1,
    noise: 4,
  },
  sweat: {
    text: "SWEAT",
    textColor: "#111111",
    background: "#ffffff",
    blur: 8,
    noise: 14,
  },
};

function render(targetCtx = ctx, size = canvas.width) {
  const mid = size / 2;
  targetCtx.clearRect(0, 0, size, size);
  targetCtx.fillStyle = state.background;
  targetCtx.fillRect(0, 0, size, size);

  targetCtx.save();
  targetCtx.translate(mid, mid);
  targetCtx.scale(state.mirror ? -1 : 1, state.flip ? -1 : 1);
  targetCtx.filter = `blur(${state.blur}px)`;
  targetCtx.fillStyle = state.textColor;
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.font = `900 ${state.fontSize}px Inter, sans-serif`;
  targetCtx.fillText(state.text.toUpperCase(), 0, 0);
  targetCtx.restore();

  if (state.noise > 0) {
    applyNoise(targetCtx, size);
  }
}

function applyNoise(targetCtx, size) {
  const imageData = targetCtx.getImageData(0, 0, size, size);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const rand = (Math.random() - 0.5) * state.noise * 2;
    data[i] = Math.min(255, Math.max(0, data[i] + rand));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + rand));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + rand));
  }
  targetCtx.putImageData(imageData, 0, 0);
}

function updateState() {
  state.text = textInput.value || "BRAT";
  state.fontSize = Number(fontSizeInput.value);
  state.blur = Number(blurInput.value);
  state.noise = Number(noiseInput.value);
  state.mirror = mirrorToggle.checked;
  state.flip = flipToggle.checked;
  render();
}

textInput.addEventListener("input", updateState);
fontSizeInput.addEventListener("input", updateState);
blurInput.addEventListener("input", updateState);
noiseInput.addEventListener("input", updateState);
mirrorToggle.addEventListener("change", updateState);
flipToggle.addEventListener("change", updateState);

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const preset = presets[button.dataset.preset];
    if (!preset) return;
    state.text = preset.text;
    state.textColor = preset.textColor;
    state.background = preset.background;
    state.blur = preset.blur;
    state.noise = preset.noise;

    textInput.value = state.text;
    blurInput.value = state.blur;
    noiseInput.value = state.noise;

    presetButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    updateState();
  });
});

colorRows.forEach((row) => {
  row.addEventListener("click", (event) => {
    const target = event.target.closest(".color-gem");
    if (!target) return;
    const color = target.dataset.color;
    if (row.dataset.target === "text") {
      state.textColor = color;
    } else {
      state.background = color;
    }
    updateState();
  });
});

function downloadImage() {
  const exportCanvas = document.createElement("canvas");
  const exportSize = 2000;
  exportCanvas.width = exportSize;
  exportCanvas.height = exportSize;
  const exportCtx = exportCanvas.getContext("2d");
  render(exportCtx, exportSize);

  const link = document.createElement("a");
  link.download = "brat-cover.png";
  link.href = exportCanvas.toDataURL("image/png");
  link.click();
}

downloadBtn.addEventListener("click", downloadImage);

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    faqItems.forEach((btn) => btn.classList.remove("active"));
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

updateState();
