var nilaiSantri = [5,9,6,7,9,8,10,7,8]

var total = 0;
var bykNilai = nilaiSantri.length;

for(i = 0; i < bykNilai; i++){
    console.log(i)
    total += nilaiSantri[i]

}
document.write(total/bykNilai)