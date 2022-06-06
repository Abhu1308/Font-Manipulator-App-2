nose_X=0;
nose_Y=0;
difference=0;
right_wristX=0;
left_wristx=0;

function preload() {

}

function setup() {
   canvas = createCanvas(500,500);
   canvas.position(700,250);
   camera = createCapture(VIDEO);
   camera.position(50,250);
   camera.size(500,500);
   
   posenet=ml5.poseNet(camera,modelLoaded);
   posenet.on('pose',gotPoses);
}

function draw() {
   background("grey");
   document.getElementById("span_1").innerHTML=difference+"px";
   fill("red");
   stroke("red");
   textSize(difference);
   text("Abhyudaya" , nose_X , nose_Y);
}

function modelLoaded() {
   console.log("Model Loaded Succesfully");
}

function gotPoses(results) {
   if (results.length > 0) {
      console.log(results);
      nose_X=results[0].pose.nose.x;
      nose_Y=results[0].pose.nose.y;
      right_wristX=results[0].pose.rightWrist.x;
      left_wristX=results[0].pose.leftWrist.x;
      difference=Math.floor(left_wristX - right_wristX);     
   }
}