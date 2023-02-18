const h1 =document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');
const focus_img = document.querySelector('.img_fox');
btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const resultado = input1.value + input2.value;
    presult.innerText = 'resultado es igual a: ' + resultado;
}

focus_img.addEventListener('mouseover', new_img);

function new_img(){
focus_img.setAttribute('src', 'https://images.pexels.com/photos/851940/pexels-photo-851940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}

focus_img.addEventListener('mouseout', old_img);

function old_img(){
    focus_img.setAttribute('src', 'https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
}
