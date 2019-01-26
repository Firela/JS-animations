var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = 'white';

var c = canvas.getContext('2d');

// https://www.quora.com/anonymous/cdd8fe6da7484633ba4f745865547a15

// setInterval(function(){
//     for(let i = 0; i < 400; i++){
//         let x = Math.random()*window.innerWidth;
//         let y = Math.random()*window.innerHeight;
//         let r = Math.random()*20;
//         c.beginPath();
//         c.arc(x, y, r, 0, 2*Math.PI, false);
//         c.stroke();
//     }
// },500);

// for(let i = 0; i < 1000; i++){
//             let x = Math.random()*window.innerWidth;
//             let y = Math.random()*window.innerHeight;
//             let r = Math.random()*20;
//             c.beginPath();
//             var r1 = Math.random()*250;
//             var g1 = Math.random()*250;
//             var b1 = Math.random()*250;
//             c.arc(x, y, r, 0, 2*Math.PI, false);
//             // c.strokeStyle = 'rgb(r1,g1,b1)';
//             // c.strokeStyle='rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+','+Math.random()+')';﻿
//             c.strokeStyle = `rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254})`;
//             c.stroke();
//         }
// `rgb(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254})`
function randomIntFromRange(max,min){
    return Math.floor(Math.random()*(max-min)+min)
}
console.log(randomIntFromRange(5,10));  

var gravity1=0.9;
var gravity2=0.5;
var coloArray = [
        // 'cyan',
        'black',
        // 'rgb(172, 97, 172)',
        // 'white',
        'rgb(200, 37, 22)'
        // 'yellow',
    ];
var mouse = {
    x:0,
    y:0
};
var maxRadius = 70;
var minRadius = 0.1;

window.addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log('sdxs');
})
window.addEventListener('click',function again(){
    init();
    
})

function Circle(x,y,radius,dx,dy){
     this.x = x;
     this.y = y;
     this.radius = radius;
     this.dx = dx;
     this.dy = dy;
     this.r =radius;
     this.color = coloArray[Math.floor(Math.random()*coloArray.length)];

     this.draw = function(){
                c.beginPath();
                var r1 = Math.random()*250;
                var g1 = Math.random()*250;
                var b1 = Math.random()*250;
                c.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
                // c.strokeStyle = 'black';
                // c.stroke();
                c.fillStyle = this.color;
                c.fill();
                // console.log('heya');
      }
      this.update = function(){
                if(this.x +this.radius > canvas.width+this.dx || this.x < this.radius){
                    this.dx = -this.dx;
                    // console.log(this)
                }
                if(this.y+this.radius+this.dy > canvas.height || this.y < this.radius){
                    this.dy = -this.dy*0.95;
                }else{
                    if(this.color == 'black') this.dy += gravity1;
                    else this.dy += gravity2;
                }
                if(this.y +this.radius > canvas.height+5){
                    this.y -= this.radius;
                }
                // this.x += this.dx;
                this.y += this.dy;
                // console.log(this);
                // interactivity
                
                if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 ){
                if(this.radius < maxRadius){
                    this.x += 50;
                    if(this.x > canvas.width){
                        this.x -=200;

                    }
                }else if(this.radius > minRadius){
                    // this.y -= 50;
                }
                } else{
                    // while(this.radius != this.r){
                    //     this.radius += 1;
                    // }
                    this.radius = this.r;
                }
               
            
                
                this.draw(); 
      }
}
var circleArray = [];
    function init(){
    circleArray = [];
    for(var i = 0; i < 800; i++)    {
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var r = Math.random()*20;
    var dx = (Math.random()-0.5);
    var dy = (Math.random()-0.5);
    circleArray.push(new Circle(x+r,y+r,r,dx,dy));
    // circle.draw();
}}

init();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
animate();

