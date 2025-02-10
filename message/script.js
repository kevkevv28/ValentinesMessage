const cursor = document.querySelector(".cursor");

// Detect if it's a touchscreen device
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
  // Mouse movement effect (Only for desktop)
  window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.x - 100 + "px";
    cursor.style.top = e.y - 100 + "px";
  });
} else {
  // Hide cursor effect on mobile
  cursor.style.display = "none";
}

// Show button when clicked/tapped (for mobile)
document.getElementById("buttonWrapper").addEventListener("click", function () {
  document.getElementById("removeCss").style.opacity = "1";
  document.getElementById("removeCss").style.visibility = "visible";
});

// Remove effect when button is clicked
document.getElementById("removeCss").addEventListener("click", function () {
  document.body.style.backgroundColor = "#fff"; // Change background to white
  document.querySelector(".cursor").style.display = "none"; // Hide cursor effect
  this.style.display = "none"; // Hide button after clicking
});
