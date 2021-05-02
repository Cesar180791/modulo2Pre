///array para guardar el array reservaciones ya con los datos llenado
var allReservaciones = [];

if(localStorage.getItem("frm")!= null){
   
    ///almacenamos el arreglo allReservaciones los db local
    allReservaciones = JSON.parse(localStorage.getItem("frm"));

    //mostramos los datos
    mostrar()
}




/////funcion para almacenar los datos en el localStorage
function registrarReservacion() {

    ///array de datos
    var reservaciones = [];

    //se asignas los valores de los inputs del formulario al arreglo
    reservaciones.push($("#nombre").val());
    reservaciones.push($("#correo").val());
    reservaciones.push($("#telefono").val());
    reservaciones.push($("#cantPersonas").val());
    reservaciones.push($("#lugarVisitar").val());
    reservaciones.push($("#fechaVisita").val());
    reservaciones.push($("#fechaSalida").val());

    ///se alamcena el array reservaciones dentro del array allReservaciones
    allReservaciones.push(reservaciones);
    //se convierte el arreglo allReservaciones a tipo JSON
    arJson = JSON.stringify(allReservaciones);

    ///se almacenan los datos en el localstorage
    localStorage.setItem("frm", arJson);
    limpiar();

   
}

////funcion para mostrar las reservaciones
function mostrar() {
    
    ///se toman los valores almacenados en la bd local decodificamos el array JSON
    campos = JSON.parse(localStorage.getItem("frm"));

    for (x = 0; x < campos.length; x++) {
        $("#tbReservaciones").append("<tr> <td>" + campos[x][0] + "</td> <td>" + campos[x][2] + "</td> <td>" + campos[x][4] + "</td><td><button onclick='detalle("+x+")'>Detalles Reservacion</button></td> </tr>");
    }                                                                                                                                                               
}                                                                                                                                                                                                       

function valida(){
    nombre = $("#nombre").val();
    correo = $("#correo").val();
    telefono = $("#telefono").val();
    cantPersonas = $("#cantPersonas").val();
    lugarVisitar = $("#lugarVisitar").val();
    fechaVisita = $("#fechaVisita").val();
    fechaSalida = $("#fechaSalida").val();

    /// se valida el nombre 
    if(nombre.length < 1){
        alert("Por Favor Ingrese su sombre de reservacion");
        return false;
    }

     /// se valida el correo 
     if(correo.length < 1){
        alert("Por Favor Ingrese su correo de reservacion");
        return false;
    }

     /// se valida el nombre 
     if(telefono.length < 1){
        alert("Por Favor Ingrese su telefono de reservacion");
        return false;
    }

    /// se valida el nombre 
    if(cantPersonas.length < 1){
        alert("Por Favor Ingrese su cantPersonas de reservacion");
        return false;
    }

    /// se valida el nombre 
    if(lugarVisitar.length < 1){
        alert("Por Favor Ingrese su lugarVisitar de reservacion");
        return false;
    }

    /// se valida el nombre 
    if(fechaVisita.length < 1){
        alert("Por Favor Ingrese su fechaVisita de reservacion");
        return false;
    }

    /// se valida el nombre 
    if(fechaSalida.length < 1){
        alert("Por Favor Ingrese su fechaSalida de reservacion");
        return false;
    }
}


function limpiar(){
    $("#nombre").val("");
    $("#correo").val("");
    $("#telefono").val("");
    $("#cantPersonas").val("");
    $("#lugarVisitar").val("");
    $("#fechaVisita").val("");
    $("#fechaSalida").val("");
}

function detalle(id){
     ///se almacenamos el id en una bd local
     localStorage.setItem("idFrm", id);

     ////abrimos una ventana  
     window.open("/home/fabricio/Escritorio/project/centroTuristicoCuevaPreModulo2/pagesAdmon/detallesReservacion.html")
}