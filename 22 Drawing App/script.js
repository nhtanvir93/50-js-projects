const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const colorPickerBtn = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const lineWidth = document.getElementById("line-width");

let size = 20;
let color = "black";
let x = null;
let y = null;
let drawingMode = false;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateLineWidth() {
  lineWidth.textContent = size;
}

canvas.addEventListener("mousedown", function (e) {
  drawingMode = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", function (e) {
  drawingMode = false;
  x = null;
  y = null;
});

canvas.addEventListener("mousemove", function (e) {
  if (drawingMode) {
    drawCircle(e.offsetX, e.offsetY);
    drawLine(x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

increaseBtn.addEventListener("click", function () {
  size += 5;
  if (size > 50) size = 50;
  updateLineWidth();
});

decreaseBtn.addEventListener("click", function () {
  size -= 5;
  if (size < 5) size = 5;
  updateLineWidth();
});

colorPickerBtn.addEventListener("change", function () {
  color = this.value;
});

clearBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
