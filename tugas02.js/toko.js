// toko.js
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

export default Toko;
