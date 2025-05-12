const coinInner = document.getElementById('coinInner');
const result = document.getElementById('result');
const flipBtn = document.getElementById('flipBtn');

function flipCoin() {
  flipBtn.disabled = true;
  result.textContent = 'Flipping...';

  const isHeads = Math.random() < 0.5;

  // Reset styles and prepare for animation
  coinInner.style.transition = 'none';
  coinInner.style.transform = 'rotateY(0deg)';
  void coinInner.offsetWidth; // Force reflow

  // Start animation
  setTimeout(() => {
    coinInner.style.transition = 'transform 2s ease-in-out';
    const rotations = 10 + Math.floor(Math.random() * 10);
    const angle = isHeads ? rotations * 360 : rotations * 360 + 180;
    coinInner.style.transform = `rotateY(${angle}deg)`;

    // After animation ends
    setTimeout(() => {
      result.textContent = isHeads ? '🪙 Heads!' : '🪙 Tails!';
      result.style.color = isHeads ? '#0078d4' : '#d40000';
      flipBtn.disabled = false;
    }, 2000);
  }, 100);
}

flipBtn.addEventListener('click', flipCoin);
