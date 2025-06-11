
function toggleMusic() {
  const bg = document.getElementById("bgmusic");
  if (bg.paused) bg.play();
  else bg.pause();
}

const canvas = document.getElementById("dragonCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const x = canvas.width / 2 + Math.cos(angle) * 200;
  const y = canvas.height / 2 + Math.sin(angle) * 200;
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.shadowBlur = 30;
  ctx.shadowColor = "red";
  ctx.fill();
  angle += 0.01;
  requestAnimationFrame(animate);
}
animate();
