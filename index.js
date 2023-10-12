const messageComponents = {
    subjects: ["You", "Life", "Success", "Dreams", "Challenges"],
    verbs: ["can achieve", "will overcome", "inspire", "create", "reach"],
    objects: ["greatness", "anything", "endless possibilities", "your destiny", "your goals"],
  };

function generateRandomMessage() {
    const randomSubject = messageComponents.subjects[Math.floor(Math.random() * messageComponents.subjects.length)];
    const randomVerb = messageComponents.verbs[Math.floor(Math.random() * messageComponents.verbs.length)];
    const randomObeject = messageComponents.objects[Math.floor(Math.random() * messageComponents.objects.length)];
    return `${randomSubject} ${randomVerb} ${randomObeject}`;
}

const randomMessage = generateRandomMessage();
console.log(randomMessage);