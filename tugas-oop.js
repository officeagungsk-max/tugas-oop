// Parent Class
class Mahasiswa {

    // Constructor
    constructor(nama, nim) {
        this.nama = nama;
        this.nim = nim;
        this.hadir = false;
    }

    // Method absensi
    absen() {
        this.hadir = true;
    }

    // Method tampil data
    tampilData() {

        console.log("Nama : " + this.nama);
        console.log("NIM  : " + this.nim);

        if (this.hadir) {
            console.log("Status : Hadir");
        } else {
            console.log("Status : Tidak Hadir");
        }

        console.log("-------------------");
    }
}

// Child Class (Inheritance)
class MahasiswaAktif extends Mahasiswa {

    constructor(nama, nim, jurusan) {

        // Mengambil constructor parent
        super(nama, nim);

        this.jurusan = jurusan;
    }

    // Method tambahan
    tampilJurusan() {
        console.log("Jurusan : " + this.jurusan);
    }
}


// Membuat Object
let mahasiswa1 = new MahasiswaAktif(
    "Agung",
    "22001",
    "Informatika"
);

let mahasiswa2 = new MahasiswaAktif(
    "Budi",
    "22002",
    "Sistem Informasi"
);


// Absensi
mahasiswa1.absen();


// Menampilkan data
mahasiswa1.tampilData();
mahasiswa1.tampilJurusan();

console.log("");

mahasiswa2.tampilData();
mahasiswa2.tampilJurusan();