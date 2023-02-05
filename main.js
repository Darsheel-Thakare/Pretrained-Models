function preload(){

}

function setup(){
    canvas=createCanvas(500,350);
    canvas.position(150,150);
    video=createCapture(VIDEO)
    video.hide();
    
}

function draw(){
    image(video,120,50,275,250);
    fill("red")
    stroke("red")
    circle(50,50,80)
    circle(450,50,80)
    circle(50,300,80)
    circle(450,300,80)
    fill("yellow")
    stroke("yellow")
    rect(80,30,345,10)
    rect(80,310,345,10)
    rect(40,60,10,210)
    rect(440,60,10,210)
}

function take_snapshot(){
    save("student_name.png");

}
