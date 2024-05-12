const kontener = document.getElementById('kontener');
const przyciskRejestracji = document.getElementById('register');
const przyciskLogowania = document.getElementById('login');

przyciskRejestracji.addEventListener('click', () => {
    kontener.classList.add("aktywny");
});

przyciskLogowania.addEventListener('click', () => {
    kontener.classList.remove("aktywny");
});
