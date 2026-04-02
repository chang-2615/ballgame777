let score = 0;
let timeLeft = 10;
let moveInterval = 1000; // 공 이동 주기 (밀리초)
let moveTimer;

const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameArea = document.getElementById("game-area");

// 공 위치 랜덤 변경 함수
function moveBall() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;
  const ballSize = ball.offsetWidth;

  const randomX = Math.random() * (areaWidth - ballSize);
  const randomY = Math.random() * (areaHeight - ballSize);

  ball.style.left = randomX + "px";
  ball.style.top = randomY + "px";
}

// 공 클릭 시 점수 증가 + 속도 증가 + 순간이동
ball.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // 속도 0.1배씩 빨라짐
  moveInterval = moveInterval *