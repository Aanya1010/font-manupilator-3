function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet is Initialized!');
}

function gotPoses() {
if(results.length > 0);
{
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristx-rightWristX);
}
}



function draw() {
background('#6C91C2');
fill('FFE787');
textSize(difference);
text('Aanya', 50, 400);
}