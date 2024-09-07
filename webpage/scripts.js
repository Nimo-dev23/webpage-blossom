function displayGreeting() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${name}! Welcome to Blossom Bouquets!`;
    document.getElementById('greeting').textContent = greetingMessage;
}

function submitFeedback() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (firstName && lastName && email && feedback) {
        alert(`Thank you, ${firstName} ${lastName}, for your feedback!`);
        document.getElementById('feedbackForm').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
}
