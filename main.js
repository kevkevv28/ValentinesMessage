onload = () => {
  document.body.classList.remove("container");
  document.addEventListener("click", function () {
  let audio = document.getElementById("myaudio");
  if (audio) {
    audio.play().catch(error => console.log("Autoplay blocked:", error));
  }
}, { once: true }); // Ensures it runs only once

 
  setTimeout(function () {
    window.location.href = "lock.html"; // Change this to your desired page
  }, 70000); // 10000 milliseconds = 10 seconds
      
};
