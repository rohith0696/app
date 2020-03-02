
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');

const result = document.querySelector('#result');

btn.addEventListener("click",fun);

function fun()
{
    result.textContent = 'Your Name is '+name1.value+' '+name2.value;
}
const radius = document.querySelector('#radius');

const result1 = document.querySelector('#result1');

btn1.addEventListener("click",calculate);

function calculate()
{
    const cal =Math.PI*radius.value*radius.value;
    result1.textContent = 'Area of circle is '+cal;
}