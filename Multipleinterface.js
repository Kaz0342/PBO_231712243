const IHitungLuas = (Base) =>
    class extends Base {
        luas() {
            throw new Error(
                "Metode 'luas() harus diimplementasikan di kelas turunan."
            )
        }
    }

const IHitungKeliling = (Base) =>
    class extends Base {
        keliling() {
            throw new Error(
                "Metode 'keliling() harus diimplementasikan di kelas turunan."
            )
        }
    }

class Persegi extends IHitungKeliling(IHitungLuas(Object)) {
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

class PersegiPanjang extends IHitungKeliling(IHitungLuas(Object)) {
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


const persegi = new Persegi (5);
console.log("Luas Persegi: ", persegi.luas());
console.log("Keliling Persegi", persegi.keliling());

const PersegiPanjang1 = new PersegiPanjang(2243, 2243);
console.log("Luas Persegi Panjang : ", PersegiPanjang1.luas());
console.log("Keliling persegi Panjang :", PersegiPanjang1.keliling());
