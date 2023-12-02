var userInput = prompt("Enter a palindrome")
console.log(userInput);

var userInputLen = userInput.length;

var msg = ("it is a Palindrome");

for (var i = 0; i <userInputLen/2 ; i++){
    if (userInput[i] !== userInput[userInputLen - 1 - i])
      msg = "it is not Palindrome"
}
document.write(`${userInput} : ${msg}`);
