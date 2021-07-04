const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunsrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
    backgroundImg(backgroundImg)
}
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
 var responseJson = await response.json()
 console.log("Time",responseJson)

    // write code slice the datetime
    var datetime = responseJson.datetime
    var hour = datetime.slice()

   


    // add conditions to change the background images from sunrise to sunset
    if(time>=04 && time<06){
        bg="sunrise1.png"
    }
else if(time>=06 && time<08){
    bg="sunrise2.png"
}
else if(time>=08 && time<10){
    bg="sunrise3.png"
}
else if(time>=10 && time<12){
    bg="sunrise4.png"
}
else if(time>=12 && time<14){
    bg="sunrise5.png"
}
else if(time>=14 && time<16){
    bg="sunrise6.png"
}
else if(time>=16 && time<18){
    bg="sunset7.png"
}
else if(time>=18 && time<20){
    bg="sunset8.png"
}
else if(time>=20 && time<22){
    bg="sunset9.png"
}
else if(time>=22 && time<24){
    bg="sunset10.png"
}
else if(time>=24 && time<02){
    bg="sunset11.png"
}
else if(time>=02 && time<04){
    bg="sunset12.png"
}





    //load the image in backgroundImg variable here
backgroundImg= loadImage(bg)
console.log(backgroundImg)
}
