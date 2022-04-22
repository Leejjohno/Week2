function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(50);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 60, 70);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(0, 150, 150);
	ellipse(175, 200, 80, 80);
	point(175, 200);
    fill(0, 150, 0);
	ellipse(325, 200, 80, 80);
	point(325, 200);
    
    //left screwball eye attempt
    noFill();
    beginShape();
    vertex(165, 160);
    vertex(175, 170);
    vertex(175, 180);
    vertex(185, 190);
    endShape();
    
    //right screwball eye attempt
    noFill();
    beginShape();
    vertex(335, 160);
    vertex(325, 170);
    vertex(325, 180);
    vertex(315, 190);
    endShape();

	//robots nose
	fill(255, 0, 0);
	ellipse(250, 250, 50, 50, 200, 200);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();