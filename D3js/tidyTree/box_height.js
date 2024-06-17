// Function to adjust textarea height based on content
function adjustTextareaHeight() {
  var textarea = document.getElementById('summary');
  textarea.style.height = 'auto'; // Reset height to auto to calculate the actual height needed
  textarea.style.height = (textarea.scrollHeight + 2) + 'px'; // Set new height based on scrollHeight + a little extra padding
}

// Listen for input events (like typing or pasting)
document.getElementById('summary').addEventListener('input', adjustTextareaHeight);

// Adjust height initially
adjustTextareaHeight();
