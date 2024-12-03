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
    #warna;
    constructor(harga, merk, warna) {
        super(harga, merk);
        this.#warna = warna;
    }

    keterangan() {
        console.log(`Smartphone merk ${this.getMerk()} berwarna ${this.#warna}.`);
    }
}

class Laptop extends Elektronik {
    #warna;
    constructor(harga, merk, warna) {
        super(harga, merk);
        this.#warna = warna;
    }

    keterangan1() {
        console.log(`Laptop merk ${this.getMerk()} berwarna ${this.#warna}.`);
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
        console.log(`Laptop ini merupakan tipe ${this.#tipe}.`);
    }
}

const barang = new Elektronik(15000000, "Lenovo");
barang.informasi(); 
barang.diskonHarga(12000000); 

const hp = new VSmartphone(10000000, "Samsung", "Hitam", "Galaxy");
hp.keterangan();  
hp.diskonHarga(8000000);
hp.InfoVarian();

const lp = new TipeLaptop(20000000, "Asus", "Silver", "Gaming");
lp.keterangan1(); 
lp.diskonHarga(18000000);
lp.infoTipe();
