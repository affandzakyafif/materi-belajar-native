
       var ulangi = confirm("Apakah anda mau mengulang?");
        var terserah = 5;

        while (ulangi) {
            terserah++;
            ulangi = confirm("Apakah mau mengulang?");
        }

        document.write("Perulangan sudah dilakuakn sebanyak " + terserah + " kali");




const info = {
    name: 'Spencer',
    perusahaan: 'Handlebar Labs',
};
info.job = 'Mengajar'; // Ini benar-benar valid 
const role = ['Siswa', 'Guru'];
role.push('Pengembang'); // Baik untuk pergi!
