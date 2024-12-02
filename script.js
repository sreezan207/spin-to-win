document.getElementById("spinBtn").addEventListener("click", spinWheel);

function spinWheel() {
  // Disable the button while spinning
  document.getElementById("spinBtn").disabled = true;

  // Reset the result text
  document.getElementById("result").textContent = "";

  // Random prize index
  const prizes = document.querySelectorAll('.slot');
  const randomIndex = Math.floor(Math.random() * prizes.length);
  
  // Spin the wheel (rotating the wheel)
  const wheel = document.getElementById("wheel");
  const randomDegree = 360 * 5 + (randomIndex * 60); // Spin for 5 full rotations + random stop
  
  // Add a smooth transition for spinning
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  // Once the wheel has finished spinning, show the prize
  setTimeout(() => {
    const prize = prizes[randomIndex].getAttribute("data-prize");
    document.getElementById("result").textContent = `You won: ${prize}`;
    // Enable the spin button again
    document.getElementById("spinBtn").disabled = false;
  }, 4000); // 4 seconds (duration of the animation)
}
