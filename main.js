function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(600,450);
    canvas.position(550,120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log ('posenet is initalized');
}

function draw() {
    background("white")
    document.getElementById("square_size").innerHTML = "Font Size of the Text Will Be = " + difference +"px";
    fill("purple");
    textSize(difference);
    text("Krishika",noseX,noseY)
}

    function gotPoses(results) {
        if (results.length > 0) {
            console.log (results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX + ",noseY =" + noseY);
            rightwristX = results[0].pose.rightWrist.x;
            leftwristX = results[0].pose.leftWrist.x;
            console.log("rightwristX= " + rightwristX + ",leftwristX =" + leftwristX);
            difference = leftwristX - rightwristX;
            console.log("difference =" + difference);
}

}
