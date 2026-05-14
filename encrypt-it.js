/*
 * Starter file 
 */
console.log("Window Loaded!");
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  function handleClick() {
    console.log("Button Clicked!");
    let textToEncrypt = document.getElementById("input-text").value;
    textToEncrypt = textToEncrypt.toLowerCase();

    let result = "";
    for (let i = 0; i < textToEncrypt.length; i++) {
      if (textToEncrypt[i] < "a" || textToEncrypt[i] > "z") {
        result += textToEncrypt[i];
      } else if (textToEncrypt[i] === "z") {
        result += "a";
      } else {
        let letter = textToEncrypt.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }

    document.getElementById("result").textContent = result;
  }

  function handleReset() {
    let textToClear = document.getElementById("input-text");
    textToClear.value = "";
    document.getElementById("result").textContent = "";
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
