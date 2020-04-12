window.setTimeout("waktu()", 1000);

function waktu()
{
    var time = new Date();
    setTimeout("waktu()",1000);
    document.getElementById("jam").innerHTML = time.getHours();
    document.getElementById("menit").innerHTML = time.getMinutes();
    document.getElementById("detik").innerHTML = time.getSeconds();
}

let Baca = document.getElementsByClassName("Baca");
var i;
for(i=0; i<=Baca.length; i++)
{
    Baca[i].style.color = "Black";
}
