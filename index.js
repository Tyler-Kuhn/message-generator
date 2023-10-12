const subjects = ["You", "Life", "Success", "Dreams", "Challenges"];
const verbs = ["can achieve", "will overcome", "inspire", "create", "reach"];
const objects = ["greatness", "anything", "endless possiblities", "amazing things", "your destiny"];

function generateRandomMessage() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObeject = objects[Math.floor(Math.random() * objects.length)];
    return `${randomSubject} ${randomVerb} ${randomObeject}`;
}

const randomMessage = generateRandomMessage();
console.log(randomMessage);