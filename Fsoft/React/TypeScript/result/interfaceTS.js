"use strict";
var person1 = { name: "Minh", age: 27 };
var person2 = { name: "Huyen", age: 25 };
//Examples 4
"use strict";
var printLabel = function (labelObject) {
    console.log("label: ".concat(labelObject.label, " - Size: ").concat(labelObject.size));
};
var object = { size: 100, label: "label size 100" };
printLabel(object);
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var circleArea = new Circle("red", 10);
console.log(circleArea.area());
//# sourceMappingURL=interfaceTS.js.map