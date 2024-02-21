var nama = prompt("Aplikasi Pesan Tiket \nMasukkan nama Anda:");
nama = nama.charAt(0).toUpperCase() + nama.slice(1)
var umurInput = prompt("Masukkan umur Anda:");

if (!isNaN(umurInput)) {
    var umur = parseInt(umurInput);
    if (umur > 13) {
        var studio = prompt("Pilih studio (A/B/C):").toUpperCase();

        if (studio == 'A') {
            alert("Tiket " + nama + ", Studio A, Umur " + umur);
        } else if (studio == 'B') {
            alert("Tiket " + nama + ", Studio B, Umur " + umur);
        } else if (studio == 'C') {
            alert("Tiket " + nama + ", Studio C, Umur " + umur);
        } else {
            alert("Pilihan studio tidak valid.");
        }
    } else {
        alert("Maaf, Anda belum boleh masuk studio.");
    }
} else {
    alert("Umur harus berupa angka!");
}