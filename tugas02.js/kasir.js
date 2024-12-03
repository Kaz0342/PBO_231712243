// kasir.js
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

export default Kasir;
