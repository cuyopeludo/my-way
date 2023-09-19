var x =0; 
var y =0;
var draw_circle ="";
var draw_rectangle ="";
var SpeechRecognition = window.webkitSpeechRecognition; var recognition = new SpeechRecognition();

function start(){

document.getElementById("stastu").innerHTML="HEY deja de ver eso porque ya se cargo";
recognition.start();


}



console.log("te invito a mi terremoto anual este 19 de septiembre en mexico trae tu boLillo NO FALTES")

recognition.onresult=function(event){
console.log(event);
var oo=event.results[0][0].transcript;
document.getElementById("stastu").innerHTML="si funciona"+oo;



}

function septup(){

    canvas=createCanvas(344,234);

canvas.center()

}






