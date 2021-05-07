const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    plane =new Plane(600,380,1200,20)
    hammer = new Hammer(200,200)
    stone = new Stone(200,200,30,15)
    sand1 = new Sand(300,10,10)
    sand2 = new Sand(350,10,10)
    sand3 = new Sand(400,10,10)
    sand4 = new Sand(450,10,10)
    iron  = new Iron(500,100)
    rubber= new Rubber(1000,100,30)
}

function draw(){
background("yellow")
Engine.update(engine)
plane.display()
hammer.display()
stone.display()
sand1.display()
sand2.display()
sand3.display()
sand4.display()
iron.display()
rubber.display()
}