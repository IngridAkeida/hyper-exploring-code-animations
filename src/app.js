import * as dat from 'dat.gui';

const gui = new dat.GUI();

const c = document.getElementById('canvas');
const ctx = c.getContext('2d');

const wave = {
  y: window.innerHeight / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
}

const bgColor = {
  r: 255,
  g: 255,
  b: 255,
  a: 1,
}

const strokeColor = {
  h: 255,
  s: 55,
  l: 255,
}

const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, window.innerHeight);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'amplitude', -300, 300);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.open();

const bgFolder = gui.addFolder('bgColor');
bgFolder.add(bgColor, 'r', 0, 255);
bgFolder.add(bgColor, 'g', 0, 255);
bgFolder.add(bgColor, 'b', 0, 255);
bgFolder.add(bgColor, 'a', 0, 1);
bgFolder.open();

const strokeFolder = gui.addFolder('strokeColor');
strokeFolder.add(strokeColor, 'h', 0, 255);
strokeFolder.add(strokeColor, 's', 0, 55);
strokeFolder.add(strokeColor, 'l', 0, 255);

c.width = window.innerWidth;
c.height = window.innerHeight;

//draw a line
// ctx.moveTo(0, 0);
// ctx.lineTo(window.innerWidth, window.innerHeight);
// ctx.stotrke();

// Draw a rectangle
// ctx.beginPath();
// ctx.rect(window.innerWidth / 2 - 100, window.innerHeight / 2 - 100, 100, 100);
// ctx.stroke();
// ctx.fillStyle = 'red';
// ctx.fill();

// ctx.font = '30px Arial';
// ctx.texAling = 'center';
// ctx.fillText('Hello World', window.innerWidth / 2 - 100, window.innerHeight / 2 - 100);

//put a image in canvas
// const img = document.querySelector('img');
// ctx.drawImage(img, 0, 0, 100, 100);
// console.log(c);

// create a sign function

let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = `rgba( ${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
  //clear the lines 
  //ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.beginPath();
  ctx.moveTo(0, wave.y);

  for (let i = 0; i < window.innerWidth; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
  }
  increment += wave.frequency;

  // ctx.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`;
  ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${
		strokeColor.s
	}%, ${strokeColor.l}%)`;

  ctx.stroke();
}

animate();
