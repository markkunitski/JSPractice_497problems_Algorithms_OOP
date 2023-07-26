class Rectangle {
    private _width: number;
    private _height: number;
    constructor(w: number, h: number) {
        this._width = w
        this._height = h
    }
    public get width() {
        return this._width
    }
    public set width(value: number) {
        if (value <= 0) {
            this._width = 1
        } else {
            this._width = value
        }
    }
    calcArea() {
        return this._width * this._height
    }
   
}
class romb extends Rectangle {
    private _angle: number;
    constructor(w: number, h: number, a: number) {
        super(w, h)
        this._angle = a
    }
    public get angle() {
        return this._angle
    }
}
const rec = new Rectangle(10, 2)
console.log(rec.width)
const r = new romb(1, 2, 3)

class MyClass {
    add(a: number | string, b: number | string): number | string {
      if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
      } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
      } else {
        throw new Error('Invalid argument types');
      }
    }
  }
  
  const myInstance = new MyClass();
  console.log(myInstance.add(1, 2)); 
  console.log(myInstance.add('1', '2')); 