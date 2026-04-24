let canvas, ctx;
let drawing = false;
let startX, startY;
let currentTool = "rectangle";

export function initCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", endDraw);
}

export function setCurrentTool(tool) {
  currentTool = tool;
}

function startDraw(e) {
  drawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
}

function endDraw(e) {
  if (!drawing) return;
  drawing = false;

  const width = e.offsetX - startX;
  const height = e.offsetY - startY;

  ctx.beginPath();

  if (currentTool === "rectangle") {
    ctx.rect(startX, startY, width, height);
  } else if (currentTool === "circle") {
    const radius = Math.sqrt(width * width + height * height);
    ctx.arc(startX, startY, radius, 0, Math.PI * 2);
  }

  ctx.stroke();
}

export function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function downloadImage() {
  const link = document.createElement("a");
  link.download = "design.png";
  link.href = canvas.toDataURL();
  link.click();
}
