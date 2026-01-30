//-------------------------------------
// CREATE OVERLAY FOR POWEREDBY BADGE
//-------------------------------------

poweredBy1 = new Image();
poweredBy1.src = "img/poweredBy-badge/poweredByOverlay.png";

poweredByImg = [poweredBy1];

function loadPoweredByImage() {
  var input, file, fr, img, poweredBy;
  if (typeof window.FileReader === "undefined") {
    write("The file API isn't supported on this browser yet.");
    return;
  }

  input = document.getElementById("poweredByImgFile");
  if (!input) {
    write("Um, couldn't find the poweredByImgFile element.");
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
    var poweredBys = ["poweredBy_1"];
    var poweredByXY = [[0, 0]];
    var button = [];

    imgWidth = img.width;
    imgHeight = img.height;

    aspectRatio = imgWidth / imgHeight;

    newImgWidth = imgWidth < imgHeight ? 275 : 275 * aspectRatio;
    newImgHeight = imgHeight < imgWidth ? 275 : 275 / aspectRatio;

    dstX = newImgWidth > 275 ? ((newImgWidth - 275) / 2) * -1 : 0;
    dstY = newImgHeight > 275 ? ((newImgHeight - 275) / 2) * -1 : 0;

    // draw each of the operations
    for (var n = 0; n < poweredBys.length; n++) {
      var canvas = document.getElementById("canvas_" + poweredBys[n]);
      canvas.width = 400;
      canvas.height = 400;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        65,
        65,
        newImgWidth,
        newImgHeight
      );
      ctx.drawImage(
        poweredByImg[n],
        0,
        0,
        400,
        400,
        poweredByXY[n][0],
        poweredByXY[n][1],
        400,
        400
      );

      var dataURL = canvas.toDataURL();
      document.getElementById("img_" + poweredBys[n]).src = dataURL;
    }
  }

  function write(msg) {
    var p = document.createElement("p");
    p.innerHTML = msg;
    document.body.appendChild(p);
  }
}
