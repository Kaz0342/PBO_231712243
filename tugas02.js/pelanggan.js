// pelanggan.js
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

export default Pelanggan;
