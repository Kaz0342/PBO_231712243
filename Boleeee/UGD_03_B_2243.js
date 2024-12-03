class Elektronik {
    #harga;
    #merk;
    constructor(harga, merk) {
        this.#harga = harga;
        this.#merk = merk;
    }

    informasi() {
        console.log(`Merk barang ${this.#merk} dengan harga Rp${this.#harga}.`);
    }

    diskonHarga(hargaBaru) {
        this.#harga = hargaBaru;
        console.log(`Berharga diskon menjadi Rp${this.#harga}`);
    }

    getMerk() {
        return this.#merk;
    }

    getHarga() {
        return this.#harga;
    }
}

class Smartphone extends Elektronik {
    constructor(harga, merk, warna) {
        super(harga, merk);
        this.warna = warna;
    }

    keterangan() {
        console.log(`Smartphone merk ${this.getMerk()} berwarna ${this.warna}.`);
    }

    getWarna() {
        return this.warna;
    }
}

class Laptop extends Elektronik {
    constructor(harga, merk, warna) {
        super(harga, merk);
        this.warna = warna;
    }

    keterangan1() {
        console.log(`Laptop merk ${this.getMerk()} berwarna ${this.warna}.`);
    }
}

class VSmartphone extends Smartphone {
    #varian; 
    constructor(harga, merk, warna, varian) {
        super(harga, merk, warna);
        this.#varian = varian;
    }

    InfoVarian() {
        console.log(`HP ini merupakan varian ${this.#varian}.`);
    }
}

class TipeLaptop extends Laptop {
    #tipe; 
    constructor(harga, merk, warna, tipe) {
        super(harga, merk, warna);
        this.#tipe = tipe;
    }

    infoTipe() {
        console.log(`Laptop ini merupakan Laptop ${this.#tipe}.`);
    }
}

const Vsmart = new VSmartphone (10000000, "Samsung", "Hitam", "Galaxy")
Vsmart.informasi();
Vsmart.keterangan();
Vsmart.InfoVarian();
console.log(Vsmart.merk)
console.log(Vsmart.warna)