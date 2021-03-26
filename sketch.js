const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var gameengine, gameworld
var polygonpic

function preload(){
    polygonpic = loadImage("hexagon.png")
}


function setup(){
    createCanvas(800,600);
    gameengine = Engine.create();
    gameworld = gameengine.world;

    polygon = Bodies.circle(50,200,20)
    World.add(gameworld,polygon)
    slingshot = new Slingshot(this.polygon,{x:50,y:200})


    ground = new Ground(600,500,1200,20);
    platform1 = new Ground(200,400,200,10)
    platform2 = new Ground(600,300,200,10)

    box1 = new Box(130,380,30,30)
    box2 = new Box(165,380,30,30)
    box3 = new Box(200,380,30,30)
    box4 = new Box(235,380,30,30)
    box5 = new Box(270,380,30,30)
    box6 = new Box(147,350,30,30)
    box7 = new Box(182,350,30,30)
    box8 = new Box(217,350,30,30)
    box9 = new Box(252,350,30,30)
    box10 = new Box(165,320,30,30)
    box11 = new Box(200,320,30,30)
    box12 = new Box(235,320,30,30)
    box13 = new Box(182,290,30,30)
    box14 = new Box(217,290,30,30)
    box15 = new Box(200,260,30,30)

    a1 = new Box(550,270,40,40)
    a2 = new Box(605,270,40,40)
    a3 = new Box(660,270,40,40)
    a4 = new Box(577,230,40,40)
    a5 = new Box(632,230,40,40)
    a6 = new Box(604,190,40,40)
}

function draw(){
    background(255);  
    Engine.update(gameengine)
    ground.display()
    platform1.display()
    platform2.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    a1.display()
    a2.display()
    a3.display()
    a4.display()
    a5.display()
    a6.display()

    imageMode(CENTER)
    image(polygonpic,polygon.position.x,polygon.position.y,40,40)
    slingshot.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}