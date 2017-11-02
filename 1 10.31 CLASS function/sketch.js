var myShape;
var myShape2;
var myShape3;

function setup (){

	createCanvas(500,500);

var myColor = color(255,40,30);

//this is the instance mentioned below 
myShape = new Shape(250,120, 10, 5,100);
myShape2 = new Shape(10,90,6,8,30);
myShape3 = new Shape(60,150,14,13,80);


		//after you ad velocity you need to call animate 

	//put setup code here 
}

function draw (){
	background(255);
myShape.animate();
myShape.display(); 

myShape2.animate();
myShape2.display();

myShape3.animate();
myShape3.display();

	//put drawing here
	// but do make an object in draw, but you can display it here
}

//this below is a CONSTRUCTOR for the class 
function Shape (xPos, yPos, myXVel,myYVel,mySize, myRedVal){

//this above is a MyClass and this.x keeps it with the class only 	
	this.x = xPos; 
	this.y = yPos;
	this.xVel = myXVel;
	this.yVel = myYVel;
	this.r = myRedVal;

	this.size = mySize ;

	//this is to move and animate 
	this.animate = function (){
this.x = this.x + this.xVel; 
this.y = this.y + this.yVel; 


//this is how to do bouncy balls
if(this.x>width || this.x < 0){
	this.xVel *= -1;
}
if(this.y>height || this.y < 0){
	this.yVel *= -1;

	}
}

	this.display = function(){
		fill(0,0,150);
		ellipse(this.x,this.y, this.size, this.size);
		// can't just call x, y, size, size - you NEED this. this. etc wihin scope of class no confusion 
	}
	
};
//put }; to close class

// NOW YOU NEDD TO CALL THE CLASS AND BUILD OBJECT 2 STEPS

//1 is an instance - it's gonna be global in this case "mySHape^"