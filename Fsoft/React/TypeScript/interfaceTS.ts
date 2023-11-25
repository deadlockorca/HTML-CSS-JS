interface Person {
    name: string;
    age: number;
}
let person1: Person = { name: "Minh", age: 27};
let person2: Person = { name: "Huyen", age: 25};
//Examples 4
"use strict";

interface LabelObject {
  label: string;
  size: number;
}

const printLabel = (labelObject: LabelObject): void => {
  console.log(`label: ${labelObject.label} - Size: ${labelObject.size}`);
};

const object: LabelObject = { size: 100, label: "label size 100" };
printLabel(object);

interface Shape {
  color: string;
  radius: number;
  area(): number;
}

class Circle implements Shape {
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;
  }

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circleArea: Shape = new Circle("red", 10);
console.log(circleArea.area());
