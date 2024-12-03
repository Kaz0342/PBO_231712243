class IbangunDatar {
    luas() {
        throw new Error("Metode luas() harus diimplementasikan.");
    }

    keliling() {
        throw new Error("Metode keliling() harus diimplementasikan.")
    }
}

class Persegi extends IbangunDatar {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }

    luas() {
        return this.sisi * this.sisi;
    }

    keliling() {
        return 4 * this.sisi;
    }
}

class PersegiPanjang extends IbangunDatar {
    constructor(panjang, lebar) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }
    luas() {
        return this.panjang * this.lebar;
    }
    keliling() {
        return 2 * this.panjang * this.lebar;
    }
}


const persegi1 = new Persegi(5);
console.log("Luas Persegi:", persegi1.luas());
console.log("Keliling Persegi:", persegi1.keliling());

const PersegiPanjang1 = new PersegiPanjang(2243, 2243);
console.log("Luas Persegi Panjang : ", PersegiPanjang1.luas());
console.log("Keliling persegi Panjang :", PersegiPanjang1.keliling());