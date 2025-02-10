const cursor = document.querySelector(".cursor");
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  // Hide default cursor on mobile
  cursor.style.display = "block";

  document.addEventListener("touchmove", function (e) {
    let touch = e.touches[0];
    cursor.style.left = touch.clientX - 100 + "px";
    cursor.style.top = touch.clientY - 100 + "px";
  });
} else {
  // Desktop mouse movement
  window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX - 100 + "px";
    cursor.style.top = e.clientY - 100 + "px";
  });
}

// Remove Effect Button Click
document.getElementById("removeCss").addEventListener("click", function () {
  document.body.style.backgroundColor = "#fff"; // Change background to white
  cursor.style.display = "none"; // Hide cursor effect
  this.style.display = "none"; // Hide button after clicking
});
