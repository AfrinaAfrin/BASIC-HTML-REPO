// Function to display a message
function showMessage() {
    // Create a new div element
    const messageDiv = document.createElement('div');
    
    // Set the text content of the div
    messageDiv.textContent = "Hello! You clicked the button!";
    
    // Apply some styles to the message div
    messageDiv.style.padding = "10px";
    messageDiv.style.backgroundColor = "#e7f7e7";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.marginTop = "20px";
    messageDiv.style.fontSize = "1.2em";
    
    // Append the message div to the body of the page
    document.body.appendChild(messageDiv);
}

// Creating a button programmatically
const button = document.createElement('button');
button.textContent = "Click Me!";
button.style.padding = "10px 20px";
button.style.fontSize = "1em";
button.style.cursor = "pointer";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";

// Adding event listener to button
button.addEventListener("click", showMessage);

// Appending the button to the body of the page
document.body.appendChild(button);
