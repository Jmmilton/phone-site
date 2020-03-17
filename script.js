const circle = document.getElementById('circle');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let rotateValue = circle.style.transform;
let rotateSum;

function rotDown() {
  rotateSum = `${rotateValue}rotate(90deg)`;
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

function rotUp() {
  rotateSum = `${rotateValue}rotate(-90deg)`;
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

upBtn.addEventListener('click', rotUp);
downBtn.addEventListener('click', rotDown);
document.addEventListener('keydown', checkKey);

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '38') {
    rotUp(); // up arrow
  } else if (e.keyCode == '40') {
    rotDown(); // down arrow
  }
  e.preventDefault();
}
