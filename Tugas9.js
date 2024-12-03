class MathHelper {
    static PHI = 3.14;
  
    static kelilingLingkaran(jariJari) {
      return 2 * this.PHI * jariJari;
    }
  
    static luasLingkaran(jariJari) {
      return this.PHI * jariJari * jariJari;
    }
  
    static luasPermukaanTabung(jariJari, tinggi) {
      return 2 * this.PHI * jariJari * (jariJari + tinggi);
    }
  
    static volumeTabung(jariJari, tinggi) {
      return this.PHI * jariJari * jariJari * tinggi;
    }
  }
  
console.log(`Keliling Lingkaran : ${MathHelper.kelilingLingkaran(7)}`);
console.log(`Luas Lingkaran : ${MathHelper.luasLingkaran(7)}`);
console.log(`Luas Permukaan Tabung : ${MathHelper.luasPermukaanTabung(7, 10)}`);
console.log(`Volume Tabung : ${MathHelper.volumeTabung(7, 10)}`);
  