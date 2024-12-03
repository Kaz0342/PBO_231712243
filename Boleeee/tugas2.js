class Produk {
    constructor(namaProduk, harga, jumlahStok) {
        this.namaProduk = namaProduk;
        this.harga = harga;
        this.jumlahStok = jumlahStok;
    }

    beli() {
        this.jumlahStok++;
        console.log(`Produk ${this.namaProduk} telah dibeli!`);
    }

    jual() {
        this.jumlahStok--;
        console.log(`Produk ${this.namaProduk} telah dijual!`);
    }

    infoProduk() {
        console.log(`Nama Produk: ${this.namaProduk}, Harga: ${this.harga}, Stok: ${this.jumlahStok}`);
    }
}

class Kasir {
    constructor(nama, id) {
        this.nama = nama;
        this.id = id;
    }
}

class Pelanggan {
    constructor(nama) {
        this.nama = nama;
    }
}

class Toko {
    constructor(namaToko) {
        this.namaToko = namaToko;
        this.modal = 500000; 
    }

    infoToko() {
        console.log(`Nama Toko: ${this.namaToko}, Modal: ${this.modal}`);
    }
}

const produk1 = new Produk("Laptop", 10000000, 5);
const kasir1 = new Kasir("Vio", "2243");
const pelanggan1 = new Pelanggan("Mega");
const toko1 = new Toko("Toko Elektronik");

produk1.infoProduk();
toko1.infoToko();
produk1.beli();
produk1.jual();
