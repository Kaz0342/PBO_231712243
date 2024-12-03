console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDERAWASIH");
console.log("_".repeat(50));

function calculateAge(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function validateData(studentData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const umur = calculateAge(studentData.tanggal); 
            if (!studentData.nama || !studentData.tanggal || !studentData.ktp) {
                reject("Invalid data");
            } else if (umur < 17) {
                reject("Student is too young");
            } else if (!/^\d{16}$/.test(studentData.ktp)) {
                reject("Invalid KTP number");
            } else {
                resolve("Valid");
            }
        }, 5000); 
    });
}

async function processData(studentData) {
    try {
        await validateData(studentData);
        console.log(`Student ${studentData.nama} has been successfully registered`);
    } catch (error) {
        console.log(`An error occurred: ${error}`);
    }
}

processData({ nama: "", tanggal: "2002-05-12", ktp: "1234567890123456" });
processData({ nama: "Fahmy", tanggal: "2010-07-15", ktp: "1234567890123456" });
processData({ nama: "Kevin", tanggal: "2004-03-10", ktp: "12345" });
processData({ nama: "Vio", tanggal: "2005-11-20", ktp: "2317122431234567" });
processData({ nama: "Kay", tanggal: "2001-08-15", ktp: "1122334455667788" });
