//-------------------------------------
// CREATE OVERLAY FOR #LOVEAPACHE BADGE
//-------------------------------------

twImg1 = new Image();
twImg1.src = "img/loveapache-badge/loveapache-badge-container.png";

twibbonImg = [twImg1];

function loadImage() {
  var input, file, fr, img, twibbon;
  if (typeof window.FileReader === "undefined") {
    write("The file API isn't supported on this browser yet.");
    return;
  }

  input = document.getElementById("imgfile");
  if (!input) {
    write("Um, couldn't find the imgfile element.");
  } else if (!input.files) {
    write(
      "This browser doesn't seem to support the `files` property of file inputs."
    );
  } else if (!input.files[0]) {
    write("Please select a file before clicking 'Load'");
  } else {
    file = input.files[0];
    fr = new FileReader();
    fr.onload = createImage;
    fr.readAsDataURL(file);
  }

  function createImage() {
    img = new Image();
    img.onload = imageLoaded;
    img.src = fr.result;
  }

  function imageLoaded() {
    var twibbons = ["twibbon_1"];
    var twibbonXY = [[0, 0]];
    var button = [];

    imgWidth = img.width;
    imgHeight = img.height;

    aspectRatio = imgWidth / imgHeight;

    newImgWidth = imgWidth < imgHeight ? 264 : 264 * aspectRatio;
    newImgHeight = imgHeight < imgWidth ? 264 : 264 / aspectRatio;

    dstX = newImgWidth > 264 ? ((newImgWidth - 264) / 2) * -1 : 0;
    dstY = newImgHeight > 264 ? ((newImgHeight - 264) / 2) * -1 : 0;

    // draw each of the operations
    for (var n = 0; n < twibbons.length; n++) {
      var canvas = document.getElementById("canvas_" + twibbons[n]);
      canvas.width = 400;
      canvas.height = 400;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        68,
        68,
        newImgWidth,
        newImgHeight
      );
      ctx.drawImage(
        twibbonImg[n],
        0,
        0,
        400,
        400,
        twibbonXY[n][0],
        twibbonXY[n][1],
        400,
        400
      );

      var dataURL = canvas.toDataURL();
      document.getElementById("img_" + twibbons[n]).src = dataURL;
    }
  }

  function write(msg) {
    var p = document.createElement("p");
    p.innerHTML = msg;
    document.body.appendChild(p);
  }
}
