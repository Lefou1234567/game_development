		"use strict";

let targetContext;

function circle(centerX, centerY, radius, rotation=0, beginingAngle=0, endingAngle=2*Math.PI, counterclockwise=false, context=targetContext) {
	ellipse(centerX, centerY, radius, radius, rotation, beginingAngle, endingAngle, counterclockwise, context);
}

function ellipse(centerX, centerY, radiusX, radiusY, rotation=0, beginingAngle=0, endingAngle=2*Math.PI, counterclockwise=false, context=targetContext) {
	context.beginPath();
	context.ellipse(centerX, centerY, radiusX, radiusY, rotation, beginingAngle, endingAngle, counterclockwise);
	draw();
	context.closePath();
}

function rect(leftTopCornerX, leftTopCornerY, width, height, context=targetContext) {
	context.beginPath();
	context.rect(leftTopCornerX, leftTopCornerY, width, height);
	draw();
}

function line(x1, y1, x2, y2, context=targetContext) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	draw();
	context.closePath();
}

function polygone(points, context=targetContext) {
	context.beginPath();
	context.moveTo(points[0].x, points[0].y);

	for(let i = 1; i < points.length; i++) {
		context.lineTo(points[i].x, points[i].y);
	}
	context.lineTo(points[0].x, points[0].y);
	draw();
	context.closePath();
}

function draw(context=targetContext) {
	if(isStroking)
		context.stroke();
	if(isFilling)
		context.fill();
}

function image(img, dx, dy, dWidth=img.width, dHeight=img.height, sx=0, sy=0, sWidth=img.width, sHeight=img.height, context=targetContext) {
	context.drawImage(img, dx, dy, dWidth, dHeight);
}

function setContext(canvas, contextType) {
	targetContext = canvas.getContext(contextType);
}

