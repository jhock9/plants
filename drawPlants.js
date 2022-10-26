// TODO to make more iterations, split this script into two .js files, 1 w/ function to draw the plants, another 1 with code for each plant
/* ideas
https://stock.adobe.com/images/cute-cactus-set-different-types-of-cacti-in-patterned-plant-pots-vector-illustrations-succulent-isolated-outlined-icon-collection/246193758
https://society6.com/product/summer-stack-abstract-plant-illustration_print
https://society6.com/product/abstract-art-minimal-plant_print
https://society6.com/product/abstract-agave-plant_print
https://society6.com/product/abstract-cactus-i_print?sku=s6-13457507p4a1v45
https://society6.com/product/abstract-cactus-ii_print?sku=s6-13457569p4a1v45
*/


let w = 500;
let h = w * 1.3;

function setup () {
  createCanvas(w, h);
  select('#canvasBorder').size(w * 1.15, h * 1.112);
  // TODO make canvas, plants responsive 
  
  // function windowResized () {
  //   let ww = windowWidth;
  //   let wh = windowHeight;
  //   if (wh >= 1.2 * ww) {
  //     // ww = windowWidth;
  //     wh = ww * 1.2;
  //   } else {
  //     ww = wh / 1.2;
  //     // wh = windowHeight;
  //   };
  //   resizeCanvas(ww, wh);
  // }
}

function draw () {
  // TODO make background tattered like parchment
  background(246, 239, 230);
  noStroke();
  
  // SUN
  push();
  // // slight rotate
  // angleMode(degrees);
  // rotate(-30, 0);
  // translate(9, -230);
  // // 90-degree rotate
  // angleMode(radians);
  // rotate(HALF_PI, 0);
  // translate(-10,-250);

  fill(255, 196, 86);
  arc(130, 120, 150, 150, PI, 0, CHORD); // light
  fill(248, 169, 84);
  arc(130, 120, 150, 150, 0, PI, CHORD); // dark
  pop();

  // CLOUDS
  // fill(233, 224, 207);
  // circle(287, 117, 15);
  // circle(305, 90, 6);
  // circle(330, 105, 22);
  // circle(335, 91, 15);
  // circle(355, 90, 37);
  // circle(410, 120, 42);

  // fill(255, 247, 226);
	// arc(265, 150, 45, 5, PI + TWO_PI, TWO_PI);
	// arc(265, 150, 45, 2, 0, PI);
	// arc(285, 140, 45, 5, PI + TWO_PI, TWO_PI);
	// arc(285, 140, 45, 2, 0, PI);
  // arc(288, 140, 25, 40, PI + TWO_PI, TWO_PI);
  // circle(275, 135, 10);
  // circle(310, 120, 40);
  // circle(333, 115, 15);
  // circle(375, 108, 15);
  // circle(390, 107, 20);
  // circle(400, 125, 30);
  // circle(440, 105, 8);

  // fill(240, 250, 255);
	// arc(280, 160, 45, 5, PI + TWO_PI, TWO_PI);
	// arc(278, 160, 13, 22, PI + TWO_PI, TWO_PI);
	// arc(290, 160, 20, 35, PI + TWO_PI, TWO_PI);
	// arc(300, 160, 20, 40, PI + TWO_PI, TWO_PI);
	// arc(350, 160, 80, 60, PI + TWO_PI, TWO_PI);
  // arc(400, 160, 40, 70, PI + TWO_PI, TWO_PI);
	// arc(435, 160, 40, 40, PI + TWO_PI, TWO_PI);
  // arc(455, 160, 20, 30, PI + TWO_PI, TWO_PI);
	// arc(460, 160, 45, 5, PI + TWO_PI, TWO_PI);
  // ellipse(337, 128, 35, 25);
  // circle(315, 140, 30);
  // circle(355, 110, 35);
  // circle(370, 130, 45);
  // circle(428, 135, 40);
  // circle(447, 142, 20);
  // circle(466, 154, 8);
  // arc(370, 160, 225, 5, 0, PI);
  // arc(365, 160, 25, 12, 0, PI);
	// arc(415, 160, 20, 15, 0, PI);


  // TALL-CACTUS
  fill(110, 172, 110);
  rect(180, 200, 120, 400, 100); // outer
  fill(143, 233, 143);
  rect(220, 200, 40, 400, 100); // inner

  // TALL CACTUS SPIKES
  stroke(205, 98, 95);
  strokeWeight(1.5);
  for (let y = 260; y < 540; y += 30) { 
    let x = 180; 
    line(x, y, x - 5, y - 5);
    line(x, y, x - 5, y + 5);
    x = 220;
    line(x, y, x - 5, y - 5);
    line(x, y, x - 5, y + 5);
    x = 260;
    line(x, y, x + 5, y + 5);
    line(x, y, x + 5, y - 5);
    x = 300; 
    line(x, y, x + 5, y + 5);
    line(x, y, x + 5, y - 5);
  }
  line(189, 230, 186, 222);
  line(189, 230, 182, 231);
  line(220, 204, 222, 196);
  line(220, 204, 213, 200);
  line(260, 204, 258, 196);
  line(260, 204, 267, 200);
  line(291, 230, 294, 222);
  line(291, 230, 298, 231);
  line(220, 230, 215, 225);
  line(220, 230, 215, 235);
  line(260, 230, 265, 235);
  line(260, 230, 265, 225);
  noStroke();

  // TRIANGLE-CACTUS
  fill(128, 202, 172);
  triangle(150, 400, 160, 540, 90, 540); // mid-right
  fill(166, 233, 199);
  triangle(75, 380, 160, 540, 90, 540); // mid-left
  fill(183, 217, 131);
  triangle(200, 420, 160, 540, 90, 540); // far-right
  fill(139, 195, 167);
  triangle(30, 450, 160, 540, 90, 540); // far-left

// TRIANGLE-CACTUS SPIKES
  fill(255)
  circle(65, 487, 6);
  circle(87, 502, 6);
  circle(98, 523, 6);
  circle(125, 527, 6);
  circle(90, 430, 6);
  circle(95, 475, 6);
  circle(105, 455, 6);
  circle(115, 490, 6);
  circle(137, 460, 6);
  circle(145, 430, 6);
  circle(138, 503, 6);
  circle(153, 523, 6);
  circle(160, 478, 6);
  circle(163, 500, 6);
  circle(180, 455, 6);


  // CIRCLE-CACTUS
//   fill(144, 187, 74);
//   ellipse(360, 480, 130, 180); // outer

//   fill(173, 225, 89);
//   ellipse(360, 480, 50, 180); // inner


  // ARC-CACTUS
  push();
  rotate(HALF_PI, 0);
  translate(120,-840);
  fill(173, 225, 89);
  arc(360, 480, 180, 130, 0, PI, CHORD); // light-1
  fill(153, 192, 83);
  arc(360, 480, 180, 130, PI, 0, CHORD); // dark-1
  fill(173, 225, 89);
  arc(360, 480, 180, 70, PI, 0, CHORD); // light-2
  fill(153, 192, 83);
  arc(360, 480, 180, 70, 0, PI, CHORD); // dark-2
  pop(); 

 // ARC-CACTUS SPIKES
  stroke(196, 134, 66);
  strokeWeight(1.5);
  line(340, 385, 350, 395); // left-out
  line(320, 400, 330, 410);
  line(305, 425, 315, 435);
  line(290, 455, 300, 465);
  line(290, 485, 300, 495);
  line(300, 520, 310, 530);
  line(345, 410, 355, 420); // left-in
  line(330, 425, 340, 435);
  line(320, 450, 330, 460);
  line(345, 450, 355, 460);
  line(340, 475, 350, 485);
  line(315, 480, 325, 490);
  line(345, 505, 355, 515);
  line(318, 508, 328, 518);
  line(340, 530, 350, 540);
  line(375, 410, 365, 420); // right-in
  line(390, 425, 380, 435);
  line(400, 450, 390, 460);
  line(375, 450, 365, 460);
  line(380, 475, 370, 485);
  line(405, 480, 395, 490);
  line(375, 505, 365, 515);
  line(402, 508, 392, 518);
  line(380, 530, 370, 540);
  line(380, 385, 370, 395); // right-out
  line(400, 400, 390, 410);
  line(415, 425, 405, 435);
  line(430, 455, 420, 465);
  line(430, 485, 420, 495);
  line(420, 520, 410, 530);
  noStroke();

 // POT
  fill(226, 134, 131);
  quad(60,540, 350, 540, 280, 649, 90, 649); // left
  fill(205, 98, 95);
  quad(350, 540, 440, 540, 410, 649, 280, 649); // right

   // PLOT MARKER
  // push();
  // stroke(255, 0, 0);
  // strokeWeight(5);
  // point(300,530);
  // pop();
}