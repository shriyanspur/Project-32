const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ball;
var sling;
var backgroundImg;

var bg = "day.jpg";
var score = 0;


function preload() {
    getBackgroundImg();
}

function setup(){
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(650, 590, 2000, 20);
    ground2 = new Ground(650, 450, 280, 10);
    ground3 = new Ground(975, 250, 200, 10);

    wall = new Ground(-350, 290, 10, 580);

    ball = new Ball(185, 300, 20, 20);


    box1 = new Box(530, 425, 40, 40);
    box2 = new Box3(570, 425, 40, 40);
    box3 = new Box(610, 425, 40, 40);
    box4 = new Box3(650, 425, 40, 40);
    box5 = new Box(690, 425, 40, 40);
    box6 = new Box3(730, 425, 40, 40);
    box7 = new Box(770, 425, 40, 40);

    box8 = new Box2(570, 385, 40, 40);
    box9 = new Box6(610, 385, 40, 40);
    box10 = new Box2(650, 385, 40, 40);
    box11 = new Box6(690, 385, 40, 40);
    box12 = new Box2(730, 385, 40, 40);

    box13 = new Box3(610, 345, 40, 40);
    box14 = new Box(650, 345, 40, 40);
    box15 = new Box3(690, 345, 40, 40);

    box16 = new Box5(650, 305, 40, 40);


    box17 = new Box5(895, 225, 40, 40);
    box18 = new Box3(935, 225, 40, 40);
    box19 = new Box5(975, 225, 40, 40);
    box20 = new Box3(1015, 225, 40, 40);
    box21 = new Box5(1055, 225, 40, 40);

    box22 = new Box6(935, 185, 40, 40);
    box23 = new Box2(975, 185, 40, 40);
    box24 = new Box6(1015, 185, 40, 40);

    box25 = new Box(975, 145, 40, 40);


    sling = new SlingShot(ball.body, {x: 185, y: 300});
}

function draw(){
    if(backgroundImg) {
        background(backgroundImg);
    
        
        textSize(30);
        fill("yellow");
        text("Score : ", 10, 30);
        text(score, 110, 32);
    }


    Engine.update(engine);

    ground.display();
    ground2.display();
    ground3.display();

    wall.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();


    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();


    box13.display();
    box14.display();
    box15.display();

    box13.score();
    box14.score();
    box15.score();


    box16.display();

    box16.score();


    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();


    box22.display();
    box23.display();
    box24.display();

    box22.score();
    box23.score();
    box24.score();

    box25.display();

    box25.score();


    sling.display();

    ball.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    sling.fly();   
}

function keyPressed() {
    if (keyCode === 32) {
        sling.attach(ball.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour > 06 && hour < 18){
        bg = "day.jpg";
    }
    else {
        bg = "night.jpg";
    }

    backgroundImg = loadImage(bg);
}