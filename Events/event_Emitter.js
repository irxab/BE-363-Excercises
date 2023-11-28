const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}

const userEmitter = new UserEventEmitter();

userEmitter.on('userLoggedIn', (username) => {
  console.log(`${new Date().toLocaleString()}: ${username} logged in`);
});

userEmitter.on('userLoggedOut', (username) => {
  console.log(`${new Date().toLocaleString()}: ${username} logged out`);
});

function simulateUserEvents() {
  const usernames = ['User_A', 'User_B', 'User_C'];
  const randomDelay = Math.random() * (2 - 0.1) + 0.1;

  setTimeout(() => {
    const randomUser = usernames[Math.floor(Math.random() * usernames.length)];
    const event = Math.random() < 0.5 ? 'userLoggedIn' : 'userLoggedOut';

    userEmitter.emit(event, randomUser);
    simulateUserEvents();
  }, randomDelay * 1000);
}

simulateUserEvents();
