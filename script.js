
const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrCode");
const downloadBtn = document.getElementById("downloadBtn")

generateBtn.addEventListener('click', () => {
    qrContainer.innerHTML=" ";
    downloadBtn.style.display = "none";

    const text = qrText.value.trim();
    if(!text) {
        alert("Please enter some text!")
        return;
    }

    const canvas = document.createElement("canvas");
    qrContainer.appendChild(canvas);

    QRCode.toCanvas(canvas, text, {width: 200}, (err) => {
        if (err) console.error(err);
        else downloadBtn.style.display = "inline-block";
    });
});

downloadBtn.addEventListener('click', () => {
    const canvas = qrContainer.querySelector("canvas");
    if(!canvas) return;

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
})