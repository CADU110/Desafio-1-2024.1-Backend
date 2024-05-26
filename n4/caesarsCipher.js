function rot13(str) {
  var string = str.split('').map(char => {
    var regex = /[A-Z]/;
    if (regex.test(char)) {
      let asciiValue = char.charCodeAt(0);
      let final;
      if ((asciiValue - 13)-65 < 0) {
        final =(asciiValue-65)+78;
      } else {
        final = asciiValue - 13;
      }
      return String.fromCharCode(final);
    }
    return char;
  }).join('');
  console.log(string);

  return string;
}

rot13("SERR PBQR PNZC");
