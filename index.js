let body = document.getElementsByTagName('body')
let title = document.createElement('p');
title.className = "titles";
title.innerHTML = "RSS Virtual Keyboard";
document.body.prepend(title);

let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 59, 93, 92, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 13, 16, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];

//document.onkeydown = function(event) {
//  console.log(event);
//  keyboard.push(event.keyCode);
//    console.log(keyboard);
//}

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i === 14 || i === 29 || i === 42 || i === 55) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class = "key" data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();

document.onkeydown = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('#keyboard .key').forEach(function (element) {
        element.classList.remove('active');
    })
    document.querySelector('#keyboard .key[data="'+ event.keyCode +'"]').classList.add('active')
}

document.querySelectorAll('#keyboard .key').forEach(function (element) {
    element.onclick = function(event) {
        document.querySelectorAll('#keyboard .key').forEach(function (element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
})