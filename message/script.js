const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.x - 100 + "px";
  cursor.style.top = e.y - 100 + "px";
});

document.getElementById("removeCss").addEventListener("click", function () {
    document.body.style.backgroundColor = "#fff"; // Change background to white
    document.querySelector(".cursor").style.display = "none"; // Hide cursor effect
    this.style.display = "none"; // Hide button
});