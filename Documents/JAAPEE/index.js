const responses = {
  "hello": "Hello! Ako si Javis.",
  "hi": "Hi din! Kumusta?",
  "kumusta": "Ayos lang ako! Ikaw, kumusta ka?",
  "salamat": "Walang anuman!",
  "thank you": "You're welcome!",
  "ano oras na": "Wala akong access sa oras ngayon, pero soon!",
  "sino ka": "Ako si Javis, sarili mong AI assistant.",
  "bye": "Paalam! Ingat ka."
};

function handleInput(input) {
  input = input.toLowerCase().trim();

 
  if (responses[input]) {
    return responses[input];
   } else if (input.includes("+")) {
  const parts = input.split("+");
  return Number(parts[0]) + Number(parts[1]);
} else if (input.includes("-")) {
  const parts = input.split("-");
  return Number(parts[0]) - Number(parts[1]);
} else if (input.includes("*")) {
  const parts = input.split("*");
  return Number(parts[0]) * Number(parts[1]);
} else if (input.includes("/")) {
  const parts = input.split("/");
  return Number(parts[0]) / Number(parts[1]);
} else { 
    return "Hindi ko pa alam yan.";
  }
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  readline.question("You: ", (userInput) => {
    if (userInput.toLowerCase() === "exit" || userInput.toLowerCase() === "bye") {
      console.log("Javis: Paalam!");
      readline.close();
      return;
    }

    console.log("Javis: " + handleInput(userInput));
    askQuestion();
  });
}

askQuestion();