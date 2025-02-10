onload = () => {
  document.body.classList.remove("container");
  document.getElementById("playButton").click();
 
  setTimeout(function () {
    window.location.href = "lock.html"; // Change this to your desired page
  }, 70000); // 10000 milliseconds = 10 seconds
      
};
