// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

class Size {
  //   constructor(width = 80, height = 60) {
  //     this.width = width;
  //     this.height = height;
  //   }
  //   resize(newWidth, newHeight) {
  //     this.width = newWidth;
  //     this.height = newHeight;
  //   }
  constructor(width = 80, height = 60) {
    this._width = width;
    this._height = height;
  }
  resize(newWidth, newHeight) {
    this._width = newWidth;
    this._height = newHeight;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}

class Position {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }
  move(newX, newY) {
    this._x = newX;
    this._y = newY;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
}

class ProgramWindow {
  constructor() {
    this._screenSize = new Size(800, 600);
    this._size = new Size();
    this._position = new Position();
  }
  resize(newSize) {
    // Calculate the maximum width and height based on position and screen size
    // Agak gak paham sama ini
    const maxWidth = this._screenSize.width - this.position.x;
    const maxHeight = this._screenSize.height - this.position.y;

    this.size._width = Math.min(Math.max(newSize.width, 1), maxWidth);

    this.size._height = Math.min(Math.max(newSize.height, 1), maxHeight);
  }

  // Jadi paham disini
  move(newPosition) {
    const maxMoveX = this._screenSize.width - this._size.width;
    const maxMoveY = this._screenSize.height - this._size.height;

    this._position._x = Math.min(Math.max(newPosition.x, 0), maxMoveX);

    this._position._y = Math.min(Math.max(newPosition.y, 0), maxMoveY);
  }
  get screenSize() {
    return this._screenSize;
  }
  get size() {
    return this._size;
  }
  get position() {
    return this._position;
  }
}

// The window should get a width of 400, a height of 300 and be positioned at x = 100, y = 150.
const changeWindow = (progWindow) => {
  progWindow.resize(new Size(400, 300));
  progWindow.move(new Position(100, 150));

  return progWindow;
};

module.exports = { Size, Position, ProgramWindow, changeWindow };
