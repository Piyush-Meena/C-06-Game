let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
let CANVAS_SZ;
let RADIUS;
let N_SECTOR;
let N_WHEEL;
let ANGLE_STEP;
let RADIUS_STEP;

function setup() {
	const c = createCanvas(1, 1);
	colorMode(HSL, 1, 1, 1, 1);
	frameRate(0);
	windowResized();
	draw();
	c.mouseClicked(draw);
}

let timer;
function windowResized() {
	clearTimeout(timer);
	timer = setTimeout(updateCanvas, 100);
}

function updateCanvas() {
	resizeCanvas(windowWidth, windowHeight);
	RADIUS = Math.hypot(windowWidth, windowHeight) / 2;
	N_SECTOR = 20;
	N_WHEEL = 20;
	ANGLE_STEP = (Math.PI * 2) / N_SECTOR;
	RADIUS_STEP = RADIUS / N_WHEEL;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = RADIUS / 20;
	drawingContext.shadowBlur = 30;
	drawingContext.shadowColor = "#000a";
	draw();
}

function tile(w, s) {
	drawingContext.globalCompositeOperation = "xor";
	stroke(0, 0, 1, 1);
	strokeWeight((RADIUS_STEP * (w / N_WHEEL)) / 8 + 1);
	switch (int(random(2))) {
		case 0: {
			const p0 = pos(w, s);
			const p1 = pos(w + 1, s + 1);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
		case 1: {
			const p0 = pos(w, s + 1);
			const p1 = pos(w + 1, s);
			line(p0.x, p0.y, p1.x, p1.y);
			break;
		}
	}

	drawingContext.globalCompositeOperation = "lighter";
	s += random();
	const h = random(0.4) + 0.5;
	const l = random(0.4) + 0.2;
	switch (int(random(4))) {
		case 0:
		case 1:
		case 3: {
			if (w / N_WHEEL > 0.1) {
				const p0 = pos(w, s);
				const p1 = pos(nextWheel(w), s);
				const p2 = pos(nextWheel(w), nextSector(s));
				noStroke();
				fill(h, 1, l, 0.1);
				bezier(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
			}
			break;
		}
		case 2: {
			const p0 = pos(w, s);
			const p1 = pos(w, nextSector(s));
			const p2 = pos(nextWheel(w), nextSector(s));
			const mid = p0.copy().add(p2).div(2);
			if (w / N_WHEEL > 0.5) {
				noFill();
				stroke(h, 0.5, l);
				strokeWeight(RADIUS_STEP / 10);
				bezier(p0.x, p0.y, p1.x, p1.y, mid.x, mid.y, p2.x, p2.y);
				noStroke();
				fill(h, 0.5, l);
				circle(p0.x, p0.y, RADIUS_STEP);
			}
			break;
		}
	}
}

function pos(wheel, sector) {
	const r = RADIUS * pow(wheel / N_WHEEL, 2);
	const a = ANGLE_STEP * sector;
	const x = r * cos(a) + windowWidth / 2;
	const y = r * sin(a) + windowHeight / 2;
	return createVector(x, y);
}

function nextWheel(w) {
	return w + 12;
}

function nextSector(s) {
	return (s + 1 + random(11)) % N_SECTOR;
}

function draw() {
	clear();
	background(0);
	for (
		let i = 2;
		i < N_WHEEL;
		++i // r
	)
		for (
			let j = 0;
			j < N_SECTOR;
			++j // a
		)
			tile(i, j);
}
