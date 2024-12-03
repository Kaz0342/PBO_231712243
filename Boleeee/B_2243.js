class Kucing {
    constructor(nama, warna) {
    this.nama = nama;
    this.warna = warna;
    }
    bersuara() {
    console.log(`${this.nama} mengeluarkan suara "Meow!"`);
    }

    perkenalan() {
    console.log(`Halo, nama saya ${this.nama} dan saya berwarna ${this.warna}`);
    }
}
    const kucing1 = new Kucing("Tom", "hitam");
    const kucing2 = new Kucing("Jerry", "putih");

    console.log(`---------------------`)
    console.log(`[1]`);
    kucing1.perkenalan();
    kucing2.perkenalan();

    function buatMobil(roda, mesin, merek) {
        return {
            roda,
            mesin,
            merek,
            jumlahRoda() {
                return roda;
            },
            ccMesin() {
                return mesin;
            },
            detailMobil() {
                return `Merek: ${merek}, Jumlah Roda: ${roda}, Kapasitas Mesin: ${mesin}`;
            }
        };
    }
    
    console.log(`---------------------`)
    console.log(`[2]`);

    const mobil2 = buatMobil(4, '1500cc', 'Toyota');
    console.log(mobil2.detailMobil());

    const prototipeMobil = {
        jumlahRoda() {
          return this.roda;
        },
        ccMesin() {
          return this.mesin;
        }
      };
      
      const mobil3 = Object.create(prototipeMobil);
      mobil3.roda = 4;
      mobil3.mesin = '900cc';
      mobil3.warna = 'merah'; 
      
      mobil3.deskripsi = function() { 
        return `Mobil ini berwarna ${this.warna}, memiliki ${this.jumlahRoda()} roda, dan kapasitas mesin ${this.ccMesin()}.`;
      };
      
    console.log(`---------------------`)
    console.log(`[3]`);

    console.log(mobil3.jumlahRoda()); 
    console.log(mobil3.ccMesin());    
    console.log(mobil3.deskripsi());
      
    