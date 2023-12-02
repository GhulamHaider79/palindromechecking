var userInput = prompt( "Enter a palindrome");

var len = userInput.length;

var msg = "it is a Palindrome"

for (var i = 0; i < len/2 ; i++){
    if (userInput[i] !== userInput[len - 1 - i])
      msg = "it is not Palindrome"
}
document.write(`${userInput} : ${msg}`);
