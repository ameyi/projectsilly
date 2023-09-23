function preload(){
  mustacheman = loadImage('https://i.postimg.cc/65hrTbrs/mrmustacheman-Photo-Room.png')
}
function setup(){
   canvas = createCanvas(500, 500)
   canvas.center()
   video = createCapture(VIDEO)
   video.size(500, 500)
   video.hide()
   poseNet = ml5.poseNet(video, modelLoaded) 
   poseNet.on('pose', gotResults)
}
function draw(){
    image(video, 0, 0, 500, 500)
    //fill('#00FFFF')
    //stroke('#00FFFF')
    //circle(nosex, nosey, 20)
    image(mustacheman, nosex-50, nosey-10, 100, 100)
}
function takesnapshot(){
    save('ameya.png')
}
function modelLoaded(){
    console.log("model has been loaded")
}
nosex=0
nosey=0
mustacheman = ''
function gotResults(results){
  if(gotResults.length > 0){
    console.log(results)
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    console.log("nosex = "+ results[0].pose.nose.x)
    console.log("nosey = "+ results[0].pose.nose.y)
  }
}
