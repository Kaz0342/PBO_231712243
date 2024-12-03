// main.js
import Sembako from './sembako.js';
import Perabotan from './perabotan.js';
import Pelanggan from './pelanggan.js';
import Kasir from './kasir.js';
import Toko from './toko.js';

// Membuat objek dan menggunakan kode
let sembako1 = new Sembako("Beras", 50000, 20);
let perabotan1 = new Perabotan("Panci", 75000, 15);
let pelanggan1 = new Pelanggan("Mega");
let kasir1 = new Kasir("Vio", 231712243, pelanggan1);
let toko1 = new Toko("Toko Kawan", 500000);

kasir1.infoKasir();
pelanggan1.infoPelanggan();
sembako1.infoSembako();
perabotan1.infoPerabotan();
