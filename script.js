function copyIP() {
  const ip = "play.strawberrysmp.net";
  navigator.clipboard.writeText(ip).then(() => {
    const msg = document.getElementById("copy-msg");
    msg.style.display = "inline";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
}
