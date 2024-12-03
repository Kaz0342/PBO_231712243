// perabotan.js
import Produk from './produk.js';

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

export default Perabotan;
