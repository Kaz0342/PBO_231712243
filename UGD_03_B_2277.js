class Pohon {
    #nama
    #jumlah
    constructor(nama, jumlah){
        this.#nama = nama;
        this.#jumlah = jumlah;
    }
    infoPohon(){
        console.log(`Pohon ini mempunyai ${this.#nama} dan jumlahnya ${this.#jumlah}`);
    }

    infoJumlah(){
        console.log(`Jumlah dari pohon yang ini ${this.#jumlah}`);
    }

    getNama(){
        return this.#nama;
    }

    getJumlah(){
        return this.#jumlah;
    }
}

class Jambu extends Pohon {
    constructor(nama, jumlah, rasa){
        super(nama, jumlah);
        this.rasa = rasa;   
    }
    infoJambu(){
        console.log(`${this.getNama()} berjumlah ${this.getJumlah()}, dan rasa yang sedikit ${this.rasa}`);
    }
}

class Apel extends Pohon {
    constructor(nama, jumlah, bentuk){
        super(nama, jumlah);
        this.bentuk = bentuk;
    }
    infoApel(){
        console.log(`${this.getNama()} berbentuk ${this.bentuk} dan berjumlah ${this.getJumlah()} di keranjang.`);
    }
}

class Berlubang extends Jambu {
    #warna
    constructor(nama, jumlah, rasa, warna){
        super(nama, jumlah, rasa);
        this.#warna = warna;
    }

    lubangJambu(){
        console.log(`${this.getNama()} sebanyak ${this.getJumlah()} dimakan oleh ulat berwarna ${this.#warna}`);
    }
}

class Pecah extends Apel {
    #ukuran
    constructor(nama, jumlah, bentuk, ukuran){
        super(nama, jumlah, bentuk);
        this.#ukuran = ukuran;
    }
    ukuranApel(){
        console.log(`${this.getNama()} sebanyak ${this.getJumlah()} terbelah menjadi ${this.#ukuran}`);
    }
}

const pohon = new Berlubang("Jambu Air", 10, "manis", "Merah");
pohon.infoPohon();
pohon.infoJambu();
pohon.lubangJambu();
console.log(pohon.nama)
console.log(pohon.rasa)