function copyIP() {
  const ip = "play.strawberrysmp.org";
  navigator.clipboard.writeText(ip).then(() => {
    const msg = document.getElementById("copy-msg");
    msg.style.display = "inline";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
}
