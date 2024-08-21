document.querySelector(".chinna").addEventListener("click", function () {
  // Delay before starting any animation to give the viewer time to read
  setTimeout(() => {
    // Set the opacity of chinna and chinnaBlack to 0 with some delay
    document.querySelector(".chinna").style.opacity = "0";
    document.querySelector(".chinnaBlack").style.opacity = "0";

    // Add the scale-down class after a delay to allow the opacity transition to finish
    setTimeout(() => {
      document.querySelector(".chinna").classList.add("scale-down");
      document.querySelector(".chinnaBlack").classList.add("scale-down");
    }, 100); // Adjust this delay as needed to give more time

    const peddaLogo = document.querySelector(".peddaLogo");

    // Bring the peddaLogo to the front and make it visible with a delay
    setTimeout(() => {
      peddaLogo.style.zIndex = "3";
      peddaLogo.style.opacity = "1";

      // After 3 seconds, make the peddaLogo fade out and send it back behind chinna and chinnaBlack
      setTimeout(() => {
        peddaLogo.style.opacity = "0";
        peddaLogo.style.zIndex = "-1";
      }, 3000); // Adjust this delay as needed (3000ms = 3 seconds)
    }, 1000); // Add delay before showing peddaLogo
  }, 500); // Delay before starting the animation sequence (500ms)
});

document.querySelector(".chinna").addEventListener("touchstart", function () {
  // Delay before starting any animation to give the viewer time to read
  setTimeout(() => {
    // Set the opacity of chinna and chinnaBlack to 0 with some delay
    document.querySelector(".chinna").style.opacity = "0";
    document.querySelector(".chinnaBlack").style.opacity = "0";

    // Add the scale-down class after a delay to allow the opacity transition to finish
    setTimeout(() => {
      document.querySelector(".chinna").classList.add("scale-down");
      document.querySelector(".chinnaBlack").classList.add("scale-down");
    }, 500); // Adjust this delay as needed to give more time

    const peddaLogo = document.querySelector(".peddaLogo");

    // Bring the peddaLogo to the front and make it visible with a delay
    setTimeout(() => {
      peddaLogo.style.zIndex = "3";
      peddaLogo.style.opacity = "1";

      // After 2 seconds, make the peddaLogo fade out and send it back behind chinna and chinnaBlack
      setTimeout(() => {
        peddaLogo.style.opacity = "0";
        peddaLogo.style.zIndex = "-1";
      }, 2000); // Adjust this delay as needed (2000ms = 2 seconds)
    }, 1000); // Add delay before showing peddaLogo
  }, 500); // Delay before starting the animation sequence (500ms)
});

document.addEventListener("DOMContentLoaded", () => {
  const chinnaBlack = document.querySelector(".chinnaBlack");

  // Trigger the animation after a slight delay to ensure the class is applied
  setTimeout(() => {
    chinnaBlack.classList.add("animate");
  }, 1000);
});
