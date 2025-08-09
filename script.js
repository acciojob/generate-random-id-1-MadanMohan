function makeid(l) {
  let result = '';
  
  for (let i = 0; i < l; i++) {
    // Pick either digit range or letter range
    let asciicode;
    if (Math.random() < 0.5) {
      // Digit 0-9
      asciicode = Math.floor(Math.random() * (57 - 48 + 1)) + 48;
    } else {
      // Uppercase A-Z
      asciicode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    }
    result += String.fromCharCode(asciicode);
  }
  
  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
