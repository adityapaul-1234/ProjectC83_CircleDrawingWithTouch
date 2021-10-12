canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

colour = "black";
line_width = 2;
radius = 40;

width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width <992){
    canvas.width = new_width;
    canvas.height = new_height;
}

var last_x;
var last_y;

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    radius = document.getElementById("Radius").value;
    colour = document.getElementById("colour").value;
    line_width = document.getElementById("line-width").value;

    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = line_width;
    ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
    ctx.stroke();
    

    last_x = current_x;
    last_y = current_y;
}

function erase(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function restore(){
    console.log("restoring");
    colour = "Black";
    console.log(colour);
    line_width = 2;
    console.log(line_width);
    radius = 40;
    console.log(radius);
    document.getElementById("Radius").value=radius;
    document.getElementById("colour").value=colour;
    document.getElementById("line-width").value=line_width;
}