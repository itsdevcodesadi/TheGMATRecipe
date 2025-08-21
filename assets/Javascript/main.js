const countdownElement = document.getElementById("countdown");
const endDate = new Date();
endDate.setDate(endDate.getDate() + 28); // 28 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "<strong>Offer Expired!</strong>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
      <div>${days}<span>Days</span></div>
      <div>${hours}<span>Hours</span></div>
      <div>${minutes}<span>Min</span></div>
      <div>${seconds}<span>Sec</span></div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();








/******  Subscribers Counting  */

let count = 0;
let target = 2847;
let counter = setInterval(() => {
  count += 23;
  if(count >= target){
    count = target;
    clearInterval(counter);
  }
  document.getElementById("count").innerText = count.toLocaleString();
}, 20);