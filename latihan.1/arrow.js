const pondokprogramer = (santri,alamat) =>{
    return `nama santri ${santri}! alamat ${alamat}?`;

};
document.write(pondokprogramer('affan','kretek'))


document.write("<br>")

const biodata = {
    nama : 'affan',
    asal : {
        kota : 'baturaja',
        daerah : 'sumatra selatan'
    },
};

const Santri = {
    ...biodata, 
    nama : 'affan',
}
console.log(Santri)
