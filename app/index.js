module.exports = {
  randomString(input) {
    // "app.randomString expect number greater than 0 as an input, and should return random string with the same length of the input number"
    // "app.randomString will produce 'null' if the input is not a number greater than 0"
    if (typeof input === "number" && input > 0) {
      const availableChar =
        "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
      let result = "";
      for (let i = 0; i < input; i++) {
        result += availableChar.charAt(
          Math.floor(Math.random() * availableChar.length)
        );
      }
      return result;
    } else {
      return false;
    }
  },
  reverser(input) {
    // "app.reverser expect string with length greater than 0 as an input, and should return the same string in reverse order"
    // "app.reverser will produce 'null' if the input is not a string with length greater than 0"
    if (typeof input === "string" && input.length > 0) {
      let reversed = "";
      for (const char of input) {
        reversed = char + reversed;
      }
      return reversed;
    } else {
      return false;
    }
  },
  isPalindrome(input) {
    // "app.isPalindrome expect string with length greater than 0 as an input, and should return 'true' if the input is palindrome regardless of lowercase or uppercase, and return 'false' if it isn't a palindrome"
    // "app.isPalindrome will also return 'false' if the input is not a string with length greater than 0"
    if (typeof input === "string" && input.length > 0) {
      const lowercaseInput = input.toLowerCase();
      const reversedInput = lowercaseInput
        .split("")
        .reverse()
        .join("");
      if (lowercaseInput === reversedInput) {
        return true;
      }
    }
    return false;
  },
  isABiggerThanB(input1, input2) {
    // "app.isABiggerThanB expect 2 numbers as input parameters, and should return 'true' only if the first parameter is bigger than the second parameter"
    // "app.isABiggerThanB will also return 'false' if one or both inputs are not valid numbers"
    if (typeof input1 === "number" && typeof input2 === "number") {
      if (input1 > input2) {
        return true;
      }
    }
    return false;
  },
  isEvenNumber(input) {
    // "app.isEvenNumber expect round number as an input, and should return 'true' if the input is an even number, or 'false' if it isn't"
    // "app.isEvenNumber will also return 'false' if the input is not a valid round number"
    if (typeof input === "number" && input % 1 === 0) {
      if (input % 2 === 0) {
        return true;
      }
    }
    return false;
  },
};
