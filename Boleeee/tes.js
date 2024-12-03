class Kucing {
    constructor(nama, mata, warna) {
      this.nama = nama;
      this.mata = mata;
      this.warna = warna;
    }
  
    bersuara() {
      console.log(`${this.nama} mengeluarkan suara Meow!`);
    }
  
    kerja() {
      console.log(`${this.nama} lagi naik mobil`);
    }
  
    wajah() {
      console.log(`${this.nama} Punya mata ${this.mata}`);
    }
  
    bermain(kucingLain) {
      console.log(`${this.nama} sedang bermain dengan ${kucingLain.nama}`);
    }
  }
  
  const kucing1 = new Kucing("Tom", 2, "abu-abu");
  const kucing2 = new Kucing("Jerry", 2, "cokelat");
  const kucing3 = new Kucing("Bram", 4, "putih");
  
  kucing1.bersuara();
  kucing2.kerja();
  kucing3.wajah();
  kucing1.bermain(kucing2);
  