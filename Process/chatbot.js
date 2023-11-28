const readline = require('readline');

const predefinedResponses = {
  'How are you?': 'I am good, thank you!',
  'What is your name?': 'I am a chatbot.',
  'Exit': 'Goodbye! Have a great day!',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function chat() {
  rl.question('You: ', (userInput) => {
    const response = predefinedResponses[userInput] || 'I did not understand that.';
    console.log(`Bot: ${response}`);

    if (userInput.toLowerCase() === 'exit') {
      rl.close();
    } else {
      chat();
    }
  });
}

console.log('Chatbot: Hello! Ask me anything or type "exit" to end the conversation.');
chat();
