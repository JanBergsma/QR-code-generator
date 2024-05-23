const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get("qr-code");

// eslint-disable-next-line no-undef
const qrcode = new QRCode(url);
const svg = qrcode.svg();

const svgImage = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

document.getElementById("qrcode").src = svgImage;

document.getElementById("download").href = svgImage;

document.getElementById("share").addEventListener("click", () => {
  const qrCode = document.getElementById("qrcode");
  const canvas = document.createElement("canvas");
  canvas.width = qrCode.naturalWidth;
  canvas.height = qrCode.naturalHeight;
  const context = canvas.getContext("2d");
  context.drawImage(qrCode, 0, 0);
  canvas.toBlob((blob) => {
    navigator.clipboard
      .write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ])
      .then(() => {
        console.log("Copied");
      });
  });
});
