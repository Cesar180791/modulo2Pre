const form = document.getElementById('form')
const userName = document.getElementById('user')
const pass = document.getElementById('pass')


form.addEventListener('submit', function (event) {
    event.preventDefault();

    let users = Array({
        usuario: userName.value,
        password: pass.value
    });

    localStorage.setItem('userN',JSON.stringify(users))
    location.href='index.html'
});