let input1 = document.getElementById('text');  // Input for message
let input2 = document.getElementById('delay');  // Input for delay time
let btn = document.getElementById('btn');  // Submit button
let output = document.getElementById('output');  // Output div

// Function to simulate the delay and show message
async function displayMessage() {
  let message = input1.value;  // Get the message from the input field
  let delay = parseInt(input2.value);  // Get the delay time in milliseconds
  
  // Check if both fields are filled
  if (message.length === 0 || isNaN(delay) || delay <= 0) {
    output.innerText = "Please provide valid inputs.";
    return;
  }

  // Await the delay
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message after the specified delay
  output.innerText = message;
}

// Add event listener for the button
btn.addEventListener("click", displayMessage);
