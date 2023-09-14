var PanjangInput = document.querySelector(".Panjang");
var lebarInput = document.querySelector(".lebar");
var luasButton = document.querySelector(".luas");
var Luas, Panjang, lebar;

function myfunction(){
    Panjang = PanjangInput.value;
    lebar = lebarInput.value;
    luas = Panjang*lebar;
    alert("luas persegi Panjang" + luas);
}