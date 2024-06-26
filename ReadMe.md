# QR code generator

This challenge provides an excellent opportunity to practice your JavaScript skills by creating a simple QR code generator application that requires the use of an external library.

## User stories

- Create a QR code generator app that matches the given design.
- Use HTML to create the basic structure.
- Add inputs, buttons,.. according to the design.
- Use vanilla JavaScript to add interactivity.
- Users can enter a URL.
- User can see a QR quote after selecting the QR code button.
- User can download QR quote image by selecting download button.
- User can copy Quote to the clipboard by selecting Share button.
- The page should be responsive on different screen sizes.
- Deploy the solution and submit Repository URL and Demo URL.

Did use [qrcode-svg](https://papnkukn.github.io/qrcode-svg/)

Use on a HTML page with JavaScript

```html
<!doctype html>
<html>
  <body>
    <div id="container"></div>
    <script src="lib/qrcode.js"></script>
    <script>
      var qrcode = new QRCode("Hello World!");
      var svg = qrcode.svg();
      document.getElementById("container").innerHTML = svg;
    </script>
  </body>
</html>
```
