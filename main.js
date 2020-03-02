
const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');

const result = document.querySelector('#result');

btn.addEventListener("click",fun);

function fun()
{
    result.textContent = 'Your Name is '+name1.value+' '+name2.value;
}