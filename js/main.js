'use strict';

const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let mouseCursor = {
    x: 0,
    y: 0
}
let area;
let text1 = document.getElementById('p1');
let text1Lines = text1.textContent.split('\n');
let text2 = document.getElementById('p2');
let text2Lines = text2.textContent.split('\n');

const init = function () {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    ctx1.font = 'bold 18px serif';
    ctx1.textAlign = 'center';
    ctx2.font = 'bold 18px serif';
    ctx2.textAlign = 'center';
    ctx2.fillStyle = 'red';
    area = canvas1.getBoundingClientRect();
}
init();

document.addEventListener('mousemove', e => {
    mouseCursor.x = e.x - area.left;
    mouseCursor.y = e.y - area.top;
    text1Lines.forEach((line, i) => {
        ctx1.fillText(line, canvas.width / 2, canvas.height / 3 + (18 * i));

    })
    ctx1.clearRect(0, 0, mouseCursor.x, canvas.height);
    text2Lines.forEach((line, i) => {
        ctx2.fillText(line, canvas.width / 2, canvas.height / 3 + (18 * i));

    })
    ctx2.clearRect(mouseCursor.x, 0, canvas.width, canvas.height);
})

window.addEventListener('resize', e => {
    init();
})