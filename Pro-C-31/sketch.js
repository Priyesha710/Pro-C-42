const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var walkingAnimation;
var maxDrops = 100;
var drops = [];
var personSprite;
var umbrellaObj;
var thndrsprt1, thndrsprt2;
var thunderAnimation1, thunderAnimation2;
function preload() {
    walkingAnimation = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
    thunderAnimation1 = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/4.png");
    thunderAnimation2 = loadAnimation("images/thunderbolt/2.png","images/thunderbolt/3.png");
}

function setup() {
    createCanvas(800, 800);
    userEngine = Engine.create();
    userWorld = userEngine.world;
    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0,800),random(0,800)));
    }
    personSprite = createSprite(400,600,40,50);
    personSprite.addAnimation("walking",walkingAnimation);
    personSprite.scale = 0.5;
    umbrellaObj = new Umbrella(400,510);
    thndrsprt1 = createSprite(200,60,20,20);
    thndrsprt1.addAnimation("thunder", thunderAnimation1);
    thndrsprt1.scale = 0.6;
    thndrsprt2 = createSprite(600,60,20,20);
    thndrsprt2.addAnimation("thundering",thunderAnimation2);
    thndrsprt2.scale = 0.6;
}

function draw() {
    background("black");
    thndrsprt1.visible = false;
    thndrsprt2.visible = false;
    Engine.update(userEngine);
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    if(frameCount%80 > 70){
        thndrsprt1.visible = true;
        thndrsprt2.visible = true;
    }

    drawSprites();
}

