const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var database;
var engine, world;
var tanker1,tanker2,tanker3,tanker4;
var ground;
var bgImage;
var flag=0;
var Pc;
var pcPlayerCount;
var pcPlayerAngle;
var pcLauncherPositionX,pcLauncherPositionY;
function preload() {
    bgImage=loadImage("assets/backgroundImage")
}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    database=firebase.database();
    world = engine.world;
    var ground = new Ground(400,400,20,200);
    
    if (flag=1){ 
    var tanker1= new tanker()
    var tanker2= new Npc()
    var tanker3= new Npc()
    var tanker4= new Npc()
    }
    if (flag=2){
        var tanker1= new tanker()
        var tanker2= new tanker()
        var tanker3= new Npc()
        var tanker4= new Npc()
        gameState= 0; 
        var pcPlayerCountRef = await database.ref('playerCount').once("value");
        if(pcPlayerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
    }
    if (flag=3){
        var tanker1= new tanker()
        var tanker2= new tanker()
        var tanker3= new tanker()
        var tanker4= new Npc()
        gameState=0;
        var pcPlayerCountRef = await database.ref('playerCount').once("value");
        if(pcPlayerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
    }
}
    if (flag=4){
        var tanker1= new tanker()
        var tanker2= new tanker()
        var tanker3= new tanker()
        var tanker4= new tanker()
        gameState=0;
        var pcPlayerCountRef = await database.ref('playerCount').once("value");
          if(pcPlayerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
    }
}


function draw(){
background(bgImage)
Engine.update(engine);
ground.display();
tanker1.display();
tanker2.display();
tanker3.display();
tanker4.display();
}
    }
static shoot(){
    if (keyIsDown(32)) {
        Matter.Body.setPosition(canonball.body, { x: launcherX-88 , y: launcherY-40 })
    }
    if (keyIsDown(32) && angle<-11) {
      Matter.Body.setPosition(canonball.body, { x: launcherX-120, y: launcherY-20 })
  }
  if (keyIsDown(32) && angle<-11 && angle>-20) {
    Matter.Body.setPosition(canonball.body, { x: launcherX-100 , y: launcherY-60 })
}
if (keyIsDown(32) && angle<-20 && angle>-30) {
  Matter.Body.setPosition(canonball.body, { x: launcherX-70 , y: launcherY-80 })
}
}
static npcShoot(){
    Matter.Body.setPosition(canonball.body, {x: tanker.launcherX , y: tanker.launcherY});
}
