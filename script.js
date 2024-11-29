// Select the HTML elements
const adviceParagraph = document.getElementById('advice');
const getAdviceButton = document.getElementById('getAdvice');

// Function to fetch and display advice
function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice') // Send a GET request
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      const advice = data.slip.advice; // Extract the "advice" property
      adviceParagraph.textContent = advice; // Update the paragraph text
    })
    .catch(error => {
      console.error('Error fetching advice:', error); // Handle errors
      adviceParagraph.textContent = 'Oops! Something went wrong. Try again.';
    });
}

// Add a click event to the button
getAdviceButton.addEventListener('click', fetchAdvice);
