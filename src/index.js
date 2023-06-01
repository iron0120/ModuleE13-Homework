import './style.css';
import * as math from './math';

const div_math = document.querySelector('.math');
div_math.innerHTML = 'Подгружаем модуль math<br>';
div_math.innerHTML += 'sum = ' + math.sum(4, 5) + '<br>';
div_math.innerHTML += 'multiply = ' + math.multiply(4);

console.log('ES6 Module! \n');
console.log(math.sum(4,5));
console.log(math.multiply(4));

// Получение данных с JSON сервера
const btn = document.querySelector('.jsonData-request');
const div_jsonData = document.querySelector('.jsonData-response');

function getJson() {
    fetch('http://localhost:3000/posts/')
        .then(response => response.json())
        .then(json => {
            div_jsonData.innerHTML = '';
            for (let item of json.values()) {
                console.log(item);
                div_jsonData.innerHTML += '<br>';
                for (let elem in item) {
                    console.log(elem, '=', item[elem]);
                    const newString = `<b>${elem} = ${item[elem]}</b><br>`;
                    div_jsonData.innerHTML += newString;
                }
            }
        })
        .catch(() => window.alert('Нет связи с json-server! Запустите сервер командой:\n json-server --watch database.json'));
}
btn.addEventListener('click', getJson);