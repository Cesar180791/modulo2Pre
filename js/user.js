const usernav = document.getElementById('user');
const close = document.getElementById('salir');

let userName = JSON.parse(localStorage.getItem('userN'));

if(userName != null){
    usernav.innerHTML = '<a href="#" id="salir" >'+userName[0].usuario+'</a>'
}else{
    usernav.innerHTML = '<a href="login.html" id="salir" >Iniciar sesion</a>'
}

close.addEventListener('click', function(){
    localStorage.clear('userN');
    location.href('login.html')
});

console.log(userName);