
const h1 =document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');


console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// h1.innerHTML='Patito';
// h1.getAttribute('class');
// h1.setAttribute('class', 'rojo');
//h1.classList.add('amarillo');
input.value='4566';

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/5713390/pexels-photo-5713390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);
pid.append(img);