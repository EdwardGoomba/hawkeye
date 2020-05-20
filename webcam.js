/*
 * WebCam Simulator
 *
 *
 *
 * */

if (!window.WebCam) {
  /**
   *
   * WebCam
   * @constructor
   */
  window.WebCam = (function () {
    var webCamContainer = document.createElement("div");
    webCamContainer.style = "width: 600px; height: 400px; position: relative; overflow: hidden;";
    var cameraView = document.createElement("img");
    cameraView.style = "position: absolute; left: 0px; top: 0px; width: auto;";
    cameraView.src = "http://runningios.com/screamingbox/new-york.jpg";
    cameraView.id = "cameraView";
    webCamContainer.appendChild(cameraView);


    /**
     *
     * Internal state storage
     * @constructor
     */
    var CameraStorage = function () {
      var State = {
        x: 0,
        y: 0
      };

      return {
        getY: function () {
          return State.y;
        },

        setY: function (value) {
          var cameraImage = document.getElementById("cameraView");
          State.y = value;
          cameraImage.style.top = (value + "px");
        },

        getX: function () {
          return State.x;
        },

        setX: function (value) {
          var cameraImage = document.getElementById("cameraView");
          State.x = value;
          cameraImage.style.left = (value + "px");
        },

        useCamera: function (url) {
          cameraView.src = url;
        },

        isAllowedY: function (y) {
          return ((-400 < y) && (y <= 0));
        },

        isAllowedX: function (x) {
          return ((-800 < x) && (x <= 0));
        }


      }
    };


    var cameraStorage = new CameraStorage();


    return {
      /* Move method allow you to change position of camera view
       *
       * @param {string} x - axis X coordinates
       * @param {string} y - axis Y coordinates
       *
       */
      move: function (x, y) {
        var currentY = cameraStorage.getY();
        var nextY = parseInt(currentY + y);

        if (cameraStorage.isAllowedY(nextY)) {
          cameraStorage.setY(nextY);
        } else {
          console.log("not allowed");
        }

        var currentX = cameraStorage.getX();
        var nextX = parseInt(currentX - x);

        if (cameraStorage.isAllowedX(nextX)) {
          cameraStorage.setX(nextX);
        } else {
          console.log("not allowed");
        }
      },

      /* Set source image for WebCam
       *
       * @param {object} source - representation of camera
       *
       */
      setSource: function (source) {
        cameraStorage.useCamera(source);
      },


      /* Get the camera view DOM node
       *
       * return camera view DOM node
       *
       */
      getCameraNode: function () {
        return webCamContainer;
      }
    };
  })();
}
