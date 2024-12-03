// Nama: Benedict Saviola
// Kelas: B
// NPM: 231712243

class Food {
    constructor(name) {
        this.name = name;
    }

    serve() {
        console.log(`Makanan ${this.name} siap disajikan.`);
    }
}

class Pizza extends Food {
    constructor() {
        super("Pizza");
    }

    serve() {
        console.log("Pizza disajikan dengan saus tomat.");
    }
}

class Burger extends Food {
    constructor() {
        super("Burger");
    }

    serve() {
        console.log("Burger disajikan dengan kentang goreng.");
    }
}

class FoodFactory {
    createFood(type) {
        const foodMap = {
            pizza: new Pizza(),
            burger: new Burger(),
        };
        return foodMap[type.toLowerCase()] || null; 
    }
}

const factory = new FoodFactory();

const pizza = factory.createFood("pizza");
const burger = factory.createFood("burger");

pizza.serve(); 
burger.serve(); 
