// Array of facts about you
const facts = [
    "I love coding in the early morning hours.",
    "My favorite comfort food is pasta.",
    "I enjoy watching the sunrise.",
    "I dream of traveling to Japan someday.",
    "I hit the gym three times a week!",
    "I have a fascination with airplanes.",
];

// Get the button and the half-sun container
const button = document.querySelector('.marquee-button');
const halfSun = document.querySelector('.halfsun');

// Function to generate a random fact
function generateFact() {
    // Pick a random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // Create a span element for the fact
    const factElement = document.createElement('span');
    factElement.textContent = randomFact;
    factElement.classList.add('fact-display');

    // Append the fact to the half-sun
    halfSun.appendChild(factElement);

    // Trigger fade-out after 3 seconds
    setTimeout(() => {
        factElement.classList.add('fade-out');
        factElement.addEventListener('transitionend', () => factElement.remove());
    }, 3000);
}

// Add click event listener to the button
button.addEventListener('click', generateFact);
