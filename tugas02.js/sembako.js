// sembako.js
import Produk from './produk.js';

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

export default Sembako;
