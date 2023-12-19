const book1 = {
  title: "JS is the best",
  pages: 500,
  author: "Brendan Eich",
  publisher: "Oreilly",
};

const book2 = {
  title: "React is the best",
  pages: 700,
  author: "Facebook",
  publisher: "Oreilly",
};

// creating object literal

// === OOP ===
// classes are the blueprint

class Book {
  // defaults
  constructor(title, pages, author, publisher = "Packetpub") {
    // attributes - what nan object has
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.publisher = publisher;
  }
}

// create an instance
const myBook = new Book("test book", 300, "unknown", "somePublisher");
// console.log(myBook);

const anotherBook = new Book("MERN", 999, "DOJO");

// console.log(anotherBook);

// -------------------------------------------
// parent
class Human {
  constructor(name, power) {
    this.name = name;
    this.health = 100;
    this.power = power;
  }

  // method - ACTIONS

  eat() {
    console.log(`${this.name} is eating and their heakth is now +10`);
    this.health += 10;
    return this;
  }
}

const louis = new Human("Louis", 100, 50);
// louis.eat();
// console.log(louis.health);
// louis.eat().eat().eat();
// console.log(louis.health);

// --- Inheritance ---
// child
class superHuman extends Human {
  constructor(name, power, superPower) {
    super(name, power);
    this.superPower = superPower;
  }

  fly() {
    console.log(this.name + " flies away");
    this.health -= 25;
    return this;
  }

  displayStats() {
    console.log(
      `${this.name} has ${this.health} hp and ${this.power} power level`
    );
  }
  fight(villain) {
    if (villain instanceof superHuman) {
      console.log(`${this.name} is attacking ${villain.name}`);
      villain.health -= 50;
    } else {
      console.log("Can't do that !!!!");
    }
  }
}

const superMan = new superHuman("Clark", 9001, "Flying");
const Batman = new superHuman("Bruce", 5000, "Rich");
// console.log(superMan);

// superMan.fly();
// superMan.displayStats();

// superMan.fight(Batman);
// Batman.displayStats();
superMan.fight(louis);
