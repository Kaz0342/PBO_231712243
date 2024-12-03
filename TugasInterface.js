const IHitungDiskon = (Base) =>
    class extends Base {
        hitungDiskon() {
            throw new Error(
                "Metode 'hitungDiskon()' harus diimplementasikan di kelas turunan."
            );
        }
    };

const IHitungPPN = (Base) =>
    class extends Base {
        hitungPPN() {
            throw new Error(
                "Metode 'hitungPPN()' harus diimplementasikan di kelas turunan."
            );
        }
    };

class Produk {
    constructor(nama, hargaPokok) {
        this.nama = nama;
        this.hargaPokok = hargaPokok;
    }

    hitungDiskon() {
        return this.hargaPokok * 0.1;
    }

    hitungPPN() {
        return this.hargaPokok * 0.11;
    }

    infoProduk() {
        const diskon = this.hitungDiskon();
        const ppn = this.hitungPPN();
        const hargaSetelahDiskon = this.hargaPokok - diskon;
        const hargaJual = hargaSetelahDiskon + ppn;

        console.log(`Nama Produk: ${this.nama}`);
        console.log(`Harga Produk: Rp${this.hargaPokok}`);
        console.log(`Diskon: Rp${diskon}`);
        console.log(`Harga Setelah Diskon: Rp${hargaSetelahDiskon}`);
        console.log(`PPN: Rp${ppn}`);
        console.log(`Harga Jual Akhir: Rp${hargaJual}`);
        console.log(`================================`);
    }
}

class ListProduk {
    constructor() {
        this.ListProduk = [];
    }

    tambahProduk(produk) {
        this.ListProduk.push(produk);
        console.log(`Produk ${produk.nama} telah ditambahkan`);
    }

    hapusProduk(nama) {
        const index = this.ListProduk.findIndex(produk => produk.nama === nama);
        if (index !== -1) {
            this.ListProduk.splice(index, 1); 
            console.log(`Produk ${nama} berhasil dihapus.`);
        } else {
            console.log(`Produk dengan nama ${nama} tidak ditemukan!`);
        }
    }

    tampilkanSemuaProduk() {
        if (this.ListProduk.length === 0) { 
            console.log("Tidak ada produk yang tersedia.");
        } else {
            this.ListProduk.forEach((produk, index) => {
                produk.infoProduk();
            });
        }
    }
}

const listProduk = new ListProduk();

const produk1 = new Produk("Laptop", 15000000);
const produk2 = new Produk("Smartphone", 5000000);

listProduk.tambahProduk(produk1);
listProduk.tambahProduk(produk2);

console.log("\nDaftar produk saat ini:");
console.log(`================================`);
listProduk.tampilkanSemuaProduk();

console.log("");
listProduk.hapusProduk("Smartphone");

console.log("\nDaftar produk setelah penghapusan:");
console.log(`================================`);
listProduk.tampilkanSemuaProduk();
