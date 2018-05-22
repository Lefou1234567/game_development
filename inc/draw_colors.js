"use strict";

let isStroking = true;
let isFilling = true;

function background(r=0, g=r, b=g, a=1, context=targetContext) {
	noStroke();
	fill(r, g, b, a);
	rect(0, 0, context.canvas.width, context.canvas.height, context);
}

function stroke(r=0, g=r, b=g, a=1, context=targetContext) {
	context.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
	isStroking = true;
}

function noStroke() {
	isStroking = false;
}

function strokeWeight(weight, context=targetContext) {
	context.lineWidth = weight;
}

function fill(r=0, g=r, b=g, a=1, context=targetContext) {
	context.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
	isFilling = true;
}

function noFill() {
	isFilling = false;
}

