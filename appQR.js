function make() {
    const QR = document.getElementById("QR-Code");
    QR.innerText = '';
    const qrCode = new QRCode(QR, {
        text: document.getElementById('input').value,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    const button = document.createElement("button");
    button.innerText = "Download";
    button.id = "download";
    document.getElementById("QR").appendChild(button);
    button.addEventListener("click", () =>{
        download()
    })
}

function download() {
    const element = document.getElementById("QR-Code");

    // HTML2Canvas-Bibliothek verwenden, um das Element als Canvas-Objekt zu rendern
    html2canvas(element).then(function(canvas) {
        // Canvas-Objekt als PNG-Bilddaten-URL erhalten
        const imgData = canvas.toDataURL("image/png");

        // Link erstellen und herunterladen
        const link = document.createElement('a');
        link.download = 'myImage.png';
        link.href = imgData;
        link.click();
    });
}
