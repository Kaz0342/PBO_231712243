class Hewan {
    suara() {
        console.log("Suara hewan");
    }
}

class Kucing extends Hewan {
    suara() {
        console.log("Kucing mengeong: Meow meow");
    }
    
    lari() {
        console.log("Hewan ini berlari dengan kecepatan 15 km/jam");
    }
}

class Anjing extends Hewan {
    suara() {
        console.log("Anjing menggonggong: Woof woof");
    }
    
    lari() {
        console.log("Hewan ini berlari dengan kecepatan 20 km/jam");
    }
}

class Burung extends Hewan {
    suara() {
        console.log("Burung berkicau: Tweet tweet");
    }
    
    lari() {
        console.log("Hewan ini terbang dengan kecepatan 100 km/jam");
    }
}

function tampilkanInfoHewan(hewan) {
    hewan.suara();
    hewan.lari();
}


const anjing_2243 = new Anjing();
const kucing_2243 = new Kucing();
const burung_2243 = new Burung();

tampilkanInfoHewan(anjing_2243);  
tampilkanInfoHewan(kucing_2243);  
tampilkanInfoHewan(burung_2243);  
