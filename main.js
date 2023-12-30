NoseX = 0;
NoseY = 0;
function preload() {
Mustache = loadImg("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("Nose  X = " + NoseX);
        console.log("Nose  Y = " + NoseY);
    }
}

function modelLoaded() {
    console.log("PoseNet is initialized");

}

function draw() {
image(video, 0, 0, 300, 300);
image(Mustache, NoseX, NoseY, 100, 50);
}

function save_pic() {
    save('mewithamustache.png');
}