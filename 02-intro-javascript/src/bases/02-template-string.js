// Variables and constants
const name = "Alejandro";
const lastName = "Rendon";

const completeName = `${name} ${lastName}`;

console.log(completeName);

function getGreeting(name) {
  return "Hi " + name;
}

console.log(`This is a text: ${getGreeting(completeName)}`);
