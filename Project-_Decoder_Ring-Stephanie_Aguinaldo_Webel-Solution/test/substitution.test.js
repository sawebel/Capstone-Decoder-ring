// Write your tests here!
const substitutionModule = (function () {
    // you can add any code you want within this function scope
  
    function substitution(input, alphabet, encode = true) {
      // your solution code here
      if (!input || !alphabet || alphabet.length !== 26) return false;
      if (Array.from(new Set(alphabet)).length !== 26) return false;
      const abcs = "abcdefghijklmnopqrstuvwxyz";
      const newAlphabet = alphabet.split("");
      const lowerInput = input.toLowerCase();
      let placeholder = {}
      let decoding = {};
      let output = "";
      abcs.split("").forEach((letter, index) => {
        placeholder[letter] = newAlphabet[index];
        decoding[newAlphabet[index]] = letter;
      });
      if (!encode) placeholder = decoding;
      lowerInput.split("").forEach((input) => {
        output += input === " " ? " " : placeholder[input]
      });
      return output;
     
    }
  
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };