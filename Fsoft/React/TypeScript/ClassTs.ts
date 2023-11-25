//Examples 2
abstract class Animals {
    abstract makeSound(): void;
}
class Cat extends Animals {
    makeSound(): void {
        console.log("Meow Meow");
    }
}

//let myPet = new Animals();
let myCat: Cat = new Cat();
myCat.makeSound();
//Examples 1
class Menu {
    items: String[];
    pages: number;
    counter: number;

    constructor(item_list: Array<String>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
        this.counter = 0;
    }

    //Method
    list(): void {
        console.log("Today menu:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
//Create a new menu
var saturdayMenu = new Menu(["Pho", "Bun bo Hue", "Banh my", "Banh cuon"], 1);
console.log("MENU", saturdayMenu.items);

class Child extends Menu {
    constructor(item_list: Array<String>, total_pages: number) {
        super(item_list, total_pages);
    }
    //Method
    list(): void {
        console.log("Child menu:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
console.log("Child menu", new Child(["Pho", "Bun bo Hue", "Banh my", "Banh cuon"], 1).list());
