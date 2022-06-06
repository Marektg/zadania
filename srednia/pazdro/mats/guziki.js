function pokaz($a) {
    var z = $a;
    console.log(z);
    var did = document.getElementById("r-" + z);
    var rid = document.createElement("img");
    rid.setAttribute('src', "roz/" + z + ".png");
    rid.setAttribute('class', 'img-fluid');
    did.appendChild(rid);
    var uid = document.getElementById("g" + z);
    uid.innerHTML = "Ukryj rozwiązanie";
    uid.setAttribute("onclick", "usun('" + z + "')");

   
}
function usun($a) {
    var z = $a;
    var did = document.getElementById("r-" + z);
    did.innerHTML = null;
    var uida = document.getElementById("g" + z);
    uida.innerHTML = "Rozwiązanie";
    uida.setAttribute("onclick", "pokaz('" + z + "')");
}