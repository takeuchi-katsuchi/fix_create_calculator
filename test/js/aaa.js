'use strict'

{
    var firstnum = 0;
    var Arithmeric = '';
    const ArithmericList = {plus: '＋', minus: '－', multiply: '×', division: '÷'};
    const num = 10;
    const winner = Math.floor(Math.random() * num);
    const numbox = document.getElementById('numbox');
    const arithmetic = document.getElementById('arithmetic');
    const textbox = document.getElementById('textbox');
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.id = 'div' + i;
        div.textContent = i;
        div.classList.add('box');
        div.addEventListener('click', () => {
            if (isNaN(parseInt(textbox.value))) {
                textbox.value = i;
            } else {
                textbox.value = textbox.value + i;
            }
        });
        numbox.appendChild(div);
    }
    for (let [key, value] of Object.entries(ArithmericList)) {
        const div = document.createElement('div');
        div.id = key;
        div.textContent = value;
        div.classList.add('box');
        div.addEventListener('click', () => {
            firstnum = parseFloat(textbox.value);
            textbox.value = value;
            Arithmeric = key;
        });
        arithmetic.appendChild(div);
    }
    equol.addEventListener('click', () => {
        switch (Arithmeric) {
            case 'plus':
                calculator('add', firstnum, parseFloat(textbox.value)).then(function (result) {
                    Assignment(result)
                });
                break;
            case 'minus':
                calculator('subtraction', firstnum, parseFloat(textbox.value)).then(function (result) {
                    Assignment(result)
                });
                break;
            case 'multiply':
                calculator('multiplication', firstnum, parseFloat(textbox.value)).then(function (result) {
                    Assignment(result)
                });
                break;
            case 'division':
                calculator('division', firstnum, parseFloat(textbox.value)).then(function (result) {
                    Assignment(result)
                });
                break;
        }
    })

    function Assignment(x){
        textbox.value = x;
    }

    persent.addEventListener('click', () => {
        textbox.value = firstnum * parseFloat(textbox.value) / 100;
        switch (Arithmeric) {
            case 'plus':
                textbox.value = firstnum + parseFloat(textbox.value);
                break;
            case 'minus':
                textbox.value = firstnum - parseFloat(textbox.value);
                break;
        }
    })




    function calculator(operations, x, y) {
        return new Promise(function (resolve) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:8000/api/' + operations + '?first_params=' + x + '&second_params=' + y, true);
            xhr.responseType = 'json';

            xhr.onload = function () {
                var data = this.response;
                resolve(data);
            }
            xhr.send();
        });
    };
}