// produk.js
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

export default Produk;
