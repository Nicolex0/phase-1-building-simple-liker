// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", function () {
  const errorModal = document.getElementById("modal"); // Gets reference to error modal

  // Function to add a click event listener to all the empty hearts
  document.querySelectorAll(".like-glyph").forEach(function (heart) {
    heart.addEventListener("click", function () {
      mimicServerCall()
      .then(function () {
        heart.innerText = FULL_HEART; // Changes heart to full heart on success
        heart.classList.add("activated-heart");
      })
      .catch(function (error) {
      errorModal.classList.remove("hidden"); // Display error modal with message on failure
      errorModal.innerText = error;
      // Hide modal after 3 seconds
      setTimeout(function () {
        errorModal.classList.add("hidden");
      }, 3000);
      });
    });
  });

  document.querySelectorAll(".activated-heart").forEach(function (heart) {
    heart.addEventListener("click", function () {
      // Change heart back to emoty heart
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    });
  });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
