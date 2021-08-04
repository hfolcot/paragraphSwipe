'use strict';

const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

canvas1.width = canvas2.width = window.innerWidth;
canvas1.height = canvas2.height = window.innerHeight;

let mouseCursor = {
    x: 0,
    y: 0
}

let area;
let text1Lines = document.getElementById('p1').textContent.split('\n');
let text2Lines = document.getElementById('p2').textContent.split('\n');
let fontSize = 24;

const init = function () {
    canvas1.width = canvas2.width = window.innerWidth;
    canvas1.height = canvas2.height = window.innerHeight;
    ctx1.font = ctx2.font = 'bold ' + fontSize + 'px serif';
    ctx1.textAlign = ctx2.textAlign = 'center';
    ctx1.fillStyle = 'blue';
    ctx2.fillStyle = 'red';
    area = canvas1.getBoundingClientRect();
}
init();

document.addEventListener('mousemove', e => {
    mouseCursor.x = e.x - area.left;
    mouseCursor.y = e.y - area.top;
    text1Lines.forEach((line, i) => {
        ctx1.fillText(line, canvas.width / 2, canvas.height / 3 + (fontSize * i));

    })
    ctx1.clearRect(0, 0, mouseCursor.x, canvas.height);
    text2Lines.forEach((line, i) => {
        ctx2.fillText(line, canvas.width / 2, canvas.height / 3 + (fontSize * i));

    })
    ctx2.clearRect(mouseCursor.x, 0, canvas.width, canvas.height);
})

window.addEventListener('resize', e => {
    init();
})