(function() {
  var ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var $shift = document.getElementById("Shift");

  function keyHighlight(a) {
    var keyPress = document.querySelector(`.key[data-key="${a.keyCode}"]`);
    var keyCode = a.keyCode;
      if (keyCode >= 65 && keyCode <= 90) {

      keyPress.classList.add('pressed'); //this adds the pressed class

      function removeTransition(a) {
        if(a.propertyName !== 'transform') return; //stop if it is not a transition
        this.classList.remove('pressed'); //removes the class of playing once the transion is done
        }

        var keys = document.querySelectorAll('.key');
        keys.forEach(function(key){
          key.addEventListener('transitionend', removeTransition);
        }); //listens to see when the CSS transition happens, then removes the transitioned state.

        } else {
          return;
        }
  }

   window.addEventListener('keydown', keyHighlight); //when someone presses a key, then call keyHighlight

  function incrementShiftIndex() {
    $shift.value ++;
  }

  function displayLetters(cipherIndex, alphaIndex){
    document.getElementById("outputText").insertAdjacentHTML("beforeend", ALPHABET[cipherIndex]);
    document.getElementById("inputText").insertAdjacentHTML("beforeend", ALPHABET[alphaIndex]);
  }

  function shift(alphaIndex) {

    var shiftIndex = Number($shift.value);
    var cipherIndex = (alphaIndex + shiftIndex) % 26;

    incrementShiftIndex();
    displayLetters(cipherIndex, alphaIndex);

    //console.log($shift.value);
    console.log(ALPHABET[alphaIndex] + ' → ' + ALPHABET[cipherIndex]);

    var DEBUG = {
      "Shift": shiftIndex,
      "Plaintext": alphaIndex,
      "cipherText": cipherIndex,
    }
    console.log(DEBUG);
  }

  function getAlphaIndex(rawKeyCode) {
    return (rawKeyCode >= 65 && rawKeyCode <= 90) ? rawKeyCode - 65 : null;
  }

  function handleKeydown(event) {
    var alphaIndex = getAlphaIndex(event.keyCode);
    if (alphaIndex != null) return shift(alphaIndex);
  }

  window.addEventListener('keydown', handleKeydown);
})();
