class Produk {
    _namaProduk;
    _harga;
    _jumlahStok;

    constructor(namaProduk, harga, jumlahStok) {
        this._namaProduk = namaProduk;
        this._harga = harga;
        this._jumlahStok = jumlahStok;
    }

    #cekStok() {
        return this._jumlahStok > 0;
    }

    beli() {
        this._jumlahStok++;
        console.log(`Produk ${this._namaProduk} telah dibeli!`);
    }

    jual() {
        if (this.#cekStok()) {
            this._jumlahStok--;
            console.log(`Produk ${this._namaProduk} telah dijual!`);
        } else {
            console.log(`Stok produk ${this._namaProduk} sedang tidak tersedia!`);
        }
    }

    infoProduk() {
        console.log(`Produk: ${this._namaProduk}`);
        console.log(`Harga: ${this._harga}`);
        console.log(`Jumlah Stok: ${this._jumlahStok}`);
    }

    getHarga() {
        return this._harga;
    }
}

class Pelanggan {
    _namaPelanggan;

    constructor(namaPelanggan) {
        this._namaPelanggan = namaPelanggan;
    }

    getNama() {
        return this._namaPelanggan;
    }

    infoPelanggan() {
        console.log(`Nama Pelanggan: ${this._namaPelanggan}`);
    }
}

class Kasir {
    _nama;
    _id;
    _pelanggan;

    constructor(nama, id, pelanggan) {
        this._nama = nama;
        this._id = id;
        this._pelanggan = pelanggan;
    }

    infoKasir() {
        console.log(`Nama Kasir: ${this._nama}, ID: ${this._id}`);
        console.log(`Pelanggan: ${this._pelanggan}`);
    }

    setId(newId) {
        this._id = newId;
    }

    jualProduk(Produk, Pelanggan) {
        console.log(`Transaksi: oleh Pelanggan ${Pelanggan.getNama()}`);
        Produk.jual();
    }
}

class Toko {
    _namaToko;
    _modal;

    constructor(namaToko, modal) {
        this._namaToko = namaToko;
        this._modal = modal;
    }

    infoToko() {
        console.log(`Nama Toko: ${this._namaToko}`);
        console.log(`Modal: ${this._modal}`);
    }

    beliProduk(Produk) {
        this._modal -= Produk.getHarga();
        Produk.beli();
        console.log('Stok Produk telah ditambahkan!');
    }
}

class Sembako extends Produk {
    #jenis;

    constructor(nama, harga, jumlahStok) {
        super(nama, harga, jumlahStok);
        this.#jenis = "Sembako";
    }

    infoSembako() {
        this.infoProduk();
        console.log(`Jenis: ${this.#jenis}`);
    }
}

class Perabotan extends Produk {
    #jenis;

    constructor(namaProduk, harga, jumlahStok) {
        super(namaProduk, harga, jumlahStok);
        this.#jenis = "Perabotan";
    }

    infoPerabotan() {
        this.infoProduk();
        console.log(`Jenis: ${this.#jenis}`);
    }
}

let produk1 = new Produk("Pensil", 1000, 10);
let sembako1 = new Sembako("Beras", 50000, 20);
let perabotan1 = new Perabotan("Panci", 75000, 15);
let toko1 = new Toko("Toko Kawan", 500000);
let kasir1 = new Kasir("Sandi", 231712680, "Mega");
let pelanggan1 = new Pelanggan("Mega");

kasir1.infoKasir();
produk1.infoProduk();
toko1.infoToko();
pelanggan1.infoPelanggan();

kasir1.jualProduk(produk1, pelanggan1);
produk1.infoProduk();

sembako1.infoSembako();
perabotan1.infoPerabotan();
