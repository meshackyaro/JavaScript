let {Shape} = require("./shape");

class Rectangle extends Shape {
    constructor(name, side1, side2) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;

    }

    getArea() {
        let area = this.side1 * this.side2;
        return area;
    }
    isSquare() {
        return this.side1 === this.side2;
    //     if (this.side1 === this.side2) {
    //         return true;
    //     }
    //     return false;
    // }

}
}
let rectangle = new Rectangle("bungalow", 12, 12);
console.log(rectangle.getArea(), rectangle.isSquare());

//module.exports = Shape;