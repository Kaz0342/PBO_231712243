class OrderFactory {
    createOrder(type, orderId, details) {
        if (type === "DineIn") {
            return new DineInOrder(orderId, details);
        } else if (type === "TakeAway") {
            return new TakeAwayOrder(orderId, details);
        } else {
            throw new Error("Unknown order type");
        }
    }
}

class Order {
    constructor(type, orderId, details) {
        this.type = type;
        this.orderId = orderId;
        this.details = details;
    }
}

class DineInOrder extends Order {
    constructor(orderId, details) {
        super("DineIn", orderId, details);
    }
}

class TakeAwayOrder extends Order {
    constructor(orderId, details) {
        super("TakeAway", orderId, details);
    }
}

class OrderManager {
    constructor() {
        this.orders = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(order) {
        this.observers.forEach((observer) => observer.notify(order));
    }

    createOrder(order) {
        this.orders.push(order);
        console.log("Mendapatkan pesanan: Order {");
        console.log(`  type: '${order.type}',`);
        console.log(`  orderId: '${order.orderId}',`);
        console.log("  details:", order.details);
        console.log("}");
        this.notifyObservers(order);
    }

    getOrders() {
        return this.orders;
    }
}

class Chef {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} Mendapatkan pesanan: Order {`);
        console.log(`  type: '${order.type}',`);
        console.log(`  orderId: '${order.orderId}',`);
        console.log("  details:", order.details);
        console.log("}");
    }
}

class Cashier {
    constructor(name) {
        this.name = name;
    }

    notify(order) {
        console.log(`${this.name} Mendapatkan pesanan: Order {`);
        console.log(`  type: '${order.type}',`);
        console.log(`  orderId: '${order.orderId}',`);
        console.log("  details:", order.details);
        console.log("}");
    }
}

const factory = new OrderFactory();
const manager = new OrderManager();

const chef = new Chef("Chef Vio");
const cashier = new Cashier("Cashier Lisa");

manager.addObserver(chef);
manager.addObserver(cashier);

const order1 = factory.createOrder("DineIn", "001", {
    table: 5,
    items: ["Pasta", "Salad"],
});
const order2 = factory.createOrder("TakeAway", "002", {
    customerName: "John",
    items: ["Burger"],
});

manager.createOrder(order1);
manager.createOrder(order2);

const orders = manager.getOrders();
console.log(orders);
