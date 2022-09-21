let dodaj = document.querySelector('#dodaj');

let usun = document.querySelector('#usun');

let p = document.querySelector('.p1')

dodaj.onclick = function () {
    p.innerText = 'jakis tekst'
}

usun.onclick = function () {
    p.innerText = ''
}