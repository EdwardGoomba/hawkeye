const CameraStorage = () => {
  let state = {
    x: 0,
    y: 0
  };

  return {
    getY: function () {
      return state.y;
    },

    setY: function (value) {
      var cameraImage = document.getElementById("cameraView");
      state.y = value;
      cameraImage.style.top = (value + "px");
    },

    getX: function () {
      return state.x;
    },

    setX: function (value) {
      var cameraImage = document.getElementById("cameraView");
      state.x = value;
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

export const cameraStorage = CameraStorage();

export const move = (x, y) => {
  /* Move method allow you to change position of camera view
  *
  * @param {string} x - axis X coordinates
  * @param {string} y - axis Y coordinates
  *
  */
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
}
