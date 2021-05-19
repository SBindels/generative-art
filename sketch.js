let phase = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  slider = createSlider(0,10,0)
}

function draw() {
  background(30);

  rotateX(frameCount / 2);
  rotateZ(frameCount / 4);
  noFill();
  stroke(255);

  for (var i = 0; i < 20; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 0, 255);
    var g = map(i, 0, 20, 0, 255);
    var b = map(cos(frameCount), -1, 1, 255, 0);

    stroke(r, g, b);



    beginShape();
      
      let noiseMax = slider.value();
      for (var j = 0; j < 360; j += 10) {
        
        let xoff = map(cos(j+phase),-1,1,0,10);
        let yoff = map(sin(j),-1,1,0,10);
        var rad = map(noise(xoff,yoff), 0, 1, 50, 200);
        var x = rad * cos(j);
        var y = rad * sin(j);
        var z = sin(frameCount * 2 + i * 30) * 50;

        vertex(x, y, z);
      }
    
    endShape(CLOSE);
      beginShape();
      for (var j = 0; j < 360; j += 10) {
        var rad = i * 10;
        var x = rad * cos(j);
        var y = rad * sin(j);
        var z = sin(frameCount * 4 + i * 10) * 50;

        vertex(x, y, z);
      }


      endShape(CLOSE);
      //noLoop();
      phase += 0.02;
    }
}
