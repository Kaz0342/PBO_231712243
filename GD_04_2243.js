class Hewan {
    suara() {
        console.log("Hewan ini sedang bersuara.")
    }

    berjalan() {
        console.log("Hewan ini berjalan.")
    }
}

class Lele extends Hewan {
    suara () {
        console.log("lele sedang bersuara: blubub blubub")
    }

    berenang () {
        console.log("lele ini sedang berenang!")
    }
}
class Burung extends Hewan {
    suara () {
        console.log("Burung sedang bersuara: Cuit cuit!")
    }

    terbang() {
        console.log("Burung ini terbang!");
    }
}

const hewan = new Hewan();
const burung = new Burung();
const lele = new Lele();

hewan.suara();
hewan.berjalan();
console.log("===========================");
burung.suara();
burung.berjalan();
burung.terbang();
lele.suara();
lele.berenang();

