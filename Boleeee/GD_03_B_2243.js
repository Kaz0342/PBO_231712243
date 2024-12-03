class Produk {
    #nama;
    constructor(nama,jumlah) {
        this.#nama = nama;
        this.jumlah = jumlah;
    }
    informasi() {
        console.log(`Produk BigMac ada sebanyak ${this.jumlah}`);
    }

    getterNama() {
        return this.#nama;
    }
}

class Makanan extends Produk {
    #expired
    constructor (expired, nama, jumlah ) {
        super(nama,jumlah);
        this.#expired = expired
    }
    waktuRusak() {
        console.log(` BigMac akan rusak pada tanggal ${this.#expired}`);
    }
}

class Minuman extends Produk {
    #rasa
    constructor (nama, rasa , jumlah) {
        super(nama,jumlah);
        this.#rasa = rasa
        this.nama = nama
    }
    rasaMinuman() {
        console.log(` Teh mempunyai rasa ${this.#rasa}`);
    }
}

const softdrink = new Minuman("Teh", "Melati", 3)
softdrink.informasi();
softdrink.rasaMinuman();
console.log("Minuman ini bernama " + softdrink.getterNama());

const burger = new Makanan("25 September 2024", "BigMac", 1);
burger.informasi();
burger.waktuRusak();
console.log("Makanan ini bernama " + burger.getterNama());

