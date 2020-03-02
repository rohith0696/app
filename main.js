
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');

const result = document.querySelector('#result');

btn.addEventListener("click",fun);

function fun()
{
    result.textContent = 'Your Name is '+name1.value+' '+name2.value;
}
const num1 = document.querySelector('#num1');

const result1 = document.querySelector('#result1');

btn1.addEventListener("click",calculate);

function calculate()
{
    const cal =Math.PI*(num1.value*num1.value);
    result1.textContent = 'Area is '+Math.round(cal*100.0)*100.0;
}