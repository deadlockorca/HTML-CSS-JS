"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Examples 2
var Animals = /** @class */ (function () {
    function Animals() {
    }
    return Animals;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow Meow");
    };
    return Cat;
}(Animals));
//let myPet = new Animals();
var myCat = new Cat();
myCat.makeSound();
//Examples 1
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
        this.counter = 0;
    }
    //Method
    Menu.prototype.list = function () {
        console.log("Today menu:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
//Create a new menu
var saturdayMenu = new Menu(["Pho", "Bun bo Hue", "Banh my", "Banh cuon"], 1);
console.log("MENU", saturdayMenu.items);
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(item_list, total_pages) {
        return _super.call(this, item_list, total_pages) || this;
    }
    //Method
    Child.prototype.list = function () {
        console.log("Child menu:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Child;
}(Menu));
console.log("Child menu", new Child(["Pho", "Bun bo Hue", "Banh my", "Banh cuon"], 1).list());
//# sourceMappingURL=ClassTs.js.map