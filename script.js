

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
      keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //listens to see when the CSS transition happens, then removes the transitioned state.
      } else {
        return;
      }
}

 window.addEventListener('keydown', keyHighlight); //when someone presses a key, then call keyHighlight


function Shift(e) {
  var keyCode = e.keyCode;
    if (keyCode >= 65 && keyCode <= 90) {

    var plainText = (e.keyCode - 65);
    var shift = document.getElementById("Shift").value;
    var shiftInput = document.getElementById("Shift");

    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


    var cipherText = (plainText + Number(shift)) % 26;

    shiftInput.value ++;
    writeData()
    // keyHighlight()

    //console.log(shiftInput.value);
    console.log(alphabet[plainText] + ' -> ' + alphabet[cipherText]);
    console.log('shift = ' + shift + ' plainText = ' + plainText + ' cipherText = '+ cipherText);

    } else {
    return;
    }

    function writeData(){
      document.getElementById("output").insertAdjacentHTML("beforeend", alphabet[cipherText]);
      document.getElementById("outputText").insertAdjacentHTML("beforeend", alphabet[plainText]);
    }
}

window.addEventListener('keydown', Shift);
