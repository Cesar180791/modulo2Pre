///almacenamos la variable campos en la bd
campos = JSON.parse(localStorage.getItem("frm"));
 


////buscamos el id en la bd  
id = localStorage.getItem("idFrm");

//se muestran los valores en la tabla
document.getElementById("nombre").innerHTML = campos[id][0];
document.getElementById("correo").innerHTML = campos[id][1];
document.getElementById("telefono").innerHTML = campos[id][2];
document.getElementById("cantPers").innerHTML = campos[id][3];
document.getElementById("lugarVisitar").innerHTML = campos[id][4];
document.getElementById("fVisita").innerHTML = campos[id][5];
document.getElementById("fSalida").innerHTML = campos[id][6];