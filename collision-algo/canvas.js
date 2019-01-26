var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.style.backgroundColor = 'orange';

var c = canvas.getContext('2d');

function Circle(x,y,radius,dx,dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function (){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,2*Math.PI);
        c.fill();
        c.fillStyle = 'blue';
        
    }
}

var circleArray = [];
    function init(){
    circleArray = [];
    for(var i = 0; i < 5; i++)    {
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    var r = 20;
    var dx = (Math.random()-0.5)*3;
    var dy = (Math.random()-0.5)*3;
    circleArray.push(new Circle(x,y,r,dx,dy));
    // circle.draw();
}}
init();

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].draw();
    }
}
animate();