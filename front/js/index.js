'use strict'
{
    var firstnum = 0;
    var Arithmeric = '';
    const ArithmericList = {plus: '＋', minus: '－', multiply: '×', division: '÷'};
    const num = 10;
    const winner = Math.floor(Math.random() * num);
    const numbox = document.getElementById('numbox');
    const arithmetic = document.getElementById('arithmetic');
    var textbox = document.getElementById('textbox');
    // 1〜9までの数字を作成
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.id = 'div' + i;
        div.textContent = i;
        div.classList.add('box');
        div.addEventListener('click', () => {
            if (isNaN(parseInt(textbox.value))) {
                textbox.value = i;
            }
        });
        numbox.appendChild(div);
    }
    //　四則記号を作成
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


    numbox.addEventListener('click', () => {
        if (isNaN(parseInt(textbox.value))) {
            textbox.value = i;
        } else {
            switch (Arithmeric) {
                case 'plus':
                    //4つの四則計算API
                    fourCalculator('add', firstnum, parseFloat(textbox.value)).then(function (result) {
                        Assignment(result)
                    });
                    break;
                case 'minus':
                    //4つの四則計算API
                    fourCalculator('subtraction', firstnum, parseFloat(textbox.value)).then(function (result) {
                        Assignment(result)
                    });
                    break;
                case 'multiply':
                    //１つにまとめたAPI
                    oneCalculator('multiplication', firstnum, parseFloat(textbox.value)).then(function (result) {
                        Assignment(result)
                    });
                    break;
                case 'division':
                    //１つにまとめたAPI
                    oneCalculator('division', firstnum, parseFloat(textbox.value)).then(function (result) {
                        Assignment(result)
                    });
                    break;
            }
        }
    })

   equol.addEventListener('click', () => {
        textbox.value = textbox.value
        }
    )

    function Assignment(x){
        textbox.value = x;
    }


    //4つの四則計算API
    function fourCalculator(operations, x, y) {
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

    //１つにまとめたAPI
    function oneCalculator(operations,x, y) {
        return new Promise(function (resolve) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:8000/oneapi?first_params=' + x + '&second_params=' + y + '&operater=' + operations, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                var data = this.response;
                console.log(data);
                resolve(data);
            }
            xhr.send();
        });
    };
}