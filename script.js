const canvas = document.getElementById('canvas');

const button2x2 = document.getElementById('2x2');
const button4x4 = document.getElementById('4x4');
const button8x8 = document.getElementById('8x8');
const button16x16 = document.getElementById('16x16');
const button32x32 = document.getElementById('32x32');
const button64x64 = document.getElementById('64x64');
const button128x128 = document.getElementById('128x128');
const button256x256 = document.getElementById('256x256');

button2x2.addEventListener('click', function () {changeCanvasSize(2);});
button4x4.addEventListener('click', function () {changeCanvasSize(4);});
button8x8.addEventListener('click', function () {changeCanvasSize(8);});
button16x16.addEventListener('click', function () {changeCanvasSize(16);});
button32x32.addEventListener('click', function () {changeCanvasSize(32);});
button64x64.addEventListener('click', function () {changeCanvasSize(64);});
button128x128.addEventListener('click', function () {changeCanvasSize(128);});
button256x256.addEventListener('click', function () {changeCanvasSize(256);});

const button_brush = document.getElementById('brush-button');
const button_eraser = document.getElementById('eraser-button');
const button_fill = document.getElementById('fill-button');
const button_start_over = document.getElementById('start-over-button');

button_brush.addEventListener('click', function () {selectBrush()});
button_eraser.addEventListener('click', function () {selectEraser()});
button_fill.addEventListener('click', function () {selectFill()});
button_start_over.addEventListener('click', function() {selectStartOver()});

const color1 = document.getElementById('red');
const color2 = document.getElementById('orange');
const color3 = document.getElementById('yellow');
const color4 = document.getElementById('yellowgreen');
const color5 = document.getElementById('green');
const color6 = document.getElementById('lightblue');
const color7 = document.getElementById('blue');
const color8 = document.getElementById('violet');
const color9 = document.getElementById('purple');
const color10 = document.getElementById('pink');
const color11 = document.getElementById('tan');
const color12 = document.getElementById('brown');
const color13 = document.getElementById('white');
const color14 = document.getElementById('lightgray');
const color15 = document.getElementById('gray');
const color16 = document.getElementById('black');

color1.addEventListener('click', function () {changeBrushColor('red')});
color2.addEventListener('click', function () {changeBrushColor('orange')});
color3.addEventListener('click', function () {changeBrushColor('yellow')});
color4.addEventListener('click', function () {changeBrushColor('yellowgreen')});
color5.addEventListener('click', function () {changeBrushColor('green')});
color6.addEventListener('click', function () {changeBrushColor('lightblue')});
color7.addEventListener('click', function () {changeBrushColor('blue')});
color8.addEventListener('click', function () {changeBrushColor('violet')});
color9.addEventListener('click', function () {changeBrushColor('purple')});
color10.addEventListener('click', function () {changeBrushColor('pink')});
color11.addEventListener('click', function () {changeBrushColor('tan')});
color12.addEventListener('click', function () {changeBrushColor('brown')});
color13.addEventListener('click', function () {changeBrushColor('white')});
color14.addEventListener('click', function () {changeBrushColor('lightgray')});
color15.addEventListener('click', function () {changeBrushColor('gray')});
color16.addEventListener('click', function () {changeBrushColor('black')});

const saveButton = document.getElementById('save-img-button');
saveButton.addEventListener('click', function () {saveImage()});

let canvasSize;
let brushColor = 'red';
let brushColorTemp = 'red';
let myPixelCollection;

function changeCanvasSize(size)
{
     canvasSize = size;

    while (canvas.firstChild)
    {
        canvas.lastElementChild.remove();
    }

    canvas.classList.remove('canvas-size-2');
    canvas.classList.remove('canvas-size-4');
    canvas.classList.remove('canvas-size-8');
    canvas.classList.remove('canvas-size-16');
    canvas.classList.remove('canvas-size-32');
    canvas.classList.remove('canvas-size-64');
    canvas.classList.remove('canvas-size-128');
    canvas.classList.remove('canvas-size-256');

    for (let i = 0; i < (size * size); i++)
    {
       const pixel = document.createElement('div');
       pixel.classList.add('pixel-id');

       if (size === 2)
       {
            canvas.classList.add('canvas-size-2');
       }

       else if (size === 4)
       {
            canvas.classList.add('canvas-size-4');
       }
       
       else if (size === 8)
       {
            canvas.classList.add('canvas-size-8');
       }

       else if (size === 16)
       {
            canvas.classList.add('canvas-size-16');
       }

       else if (size === 32)
       {
            canvas.classList.add('canvas-size-32');
       }

       else if (size === 64)
       {
            canvas.classList.add('canvas-size-64');
       }

       else if (size === 128)
       {
            canvas.classList.add('canvas-size-128');
       }

       else if (size === 256)
       {
            canvas.classList.add('canvas-size-256');
       }

       canvas.appendChild(pixel);
    }

    updatePixels();
}

function changeBrushColor(color)
{
    brushColor = color;
}

function updatePixels()
{
     myPixelCollection = canvas.getElementsByTagName('div');

     for (let i = 0; i < myPixelCollection.length; i++)
     {
          myPixelCollection[i].addEventListener('mousemove', () => {
               if (event.buttons === 1)
               {
                    myPixelCollection[i].classList.remove('brush-color-red');
                    myPixelCollection[i].classList.remove('brush-color-orange');
                    myPixelCollection[i].classList.remove('brush-color-yellow');
                    myPixelCollection[i].classList.remove('brush-color-yellowgreen');
                    myPixelCollection[i].classList.remove('brush-color-green');
                    myPixelCollection[i].classList.remove('brush-color-lightblue');
                    myPixelCollection[i].classList.remove('brush-color-blue');
                    myPixelCollection[i].classList.remove('brush-color-violet');
                    myPixelCollection[i].classList.remove('brush-color-purple');
                    myPixelCollection[i].classList.remove('brush-color-pink');
                    myPixelCollection[i].classList.remove('brush-color-tan');
                    myPixelCollection[i].classList.remove('brush-color-brown');
                    myPixelCollection[i].classList.remove('brush-color-white');
                    myPixelCollection[i].classList.remove('brush-color-lightgray');
                    myPixelCollection[i].classList.remove('brush-color-gray');
                    myPixelCollection[i].classList.remove('brush-color-black');

                    myPixelCollection[i].classList.add(`brush-color-${brushColor}`);
               }   
          });

          myPixelCollection[i].addEventListener('click', () => {
               myPixelCollection[i].classList.remove('brush-color-red');
               myPixelCollection[i].classList.remove('brush-color-orange');
               myPixelCollection[i].classList.remove('brush-color-yellow');
               myPixelCollection[i].classList.remove('brush-color-yellowgreen');
               myPixelCollection[i].classList.remove('brush-color-green');
               myPixelCollection[i].classList.remove('brush-color-lightblue');
               myPixelCollection[i].classList.remove('brush-color-blue');
               myPixelCollection[i].classList.remove('brush-color-violet');
               myPixelCollection[i].classList.remove('brush-color-purple');
               myPixelCollection[i].classList.remove('brush-color-pink');
               myPixelCollection[i].classList.remove('brush-color-tan');
               myPixelCollection[i].classList.remove('brush-color-brown');
               myPixelCollection[i].classList.remove('brush-color-white');
               myPixelCollection[i].classList.remove('brush-color-lightgray');
               myPixelCollection[i].classList.remove('brush-color-gray');
               myPixelCollection[i].classList.remove('brush-color-black');

               myPixelCollection[i].classList.add(`brush-color-${brushColor}`);
          });
     }
}

function selectBrush()
{
     brushColor = brushColorTemp;
}

function selectEraser()
{
     brushColorTemp = brushColor;
     brushColor = 'aliceblue';
}

function selectFill()
{
     myPixelCollection = canvas.getElementsByTagName('div');

     for (let i = 0; i < myPixelCollection.length; i++)
     {
          myPixelCollection[i].classList.remove('brush-color-red');
          myPixelCollection[i].classList.remove('brush-color-orange');
          myPixelCollection[i].classList.remove('brush-color-yellow');
          myPixelCollection[i].classList.remove('brush-color-yellowgreen');
          myPixelCollection[i].classList.remove('brush-color-green');
          myPixelCollection[i].classList.remove('brush-color-lightblue');
          myPixelCollection[i].classList.remove('brush-color-blue');
          myPixelCollection[i].classList.remove('brush-color-violet');
          myPixelCollection[i].classList.remove('brush-color-purple');
          myPixelCollection[i].classList.remove('brush-color-pink');
          myPixelCollection[i].classList.remove('brush-color-tan');
          myPixelCollection[i].classList.remove('brush-color-brown');
          myPixelCollection[i].classList.remove('brush-color-white');
          myPixelCollection[i].classList.remove('brush-color-lightgray');
          myPixelCollection[i].classList.remove('brush-color-gray');
          myPixelCollection[i].classList.remove('brush-color-black');

          myPixelCollection[i].classList.add(`brush-color-${brushColor}`);
     }
}

function selectStartOver()
{
     myPixelCollection = canvas.getElementsByTagName('div');

     for (let i = 0; i < myPixelCollection.length; i++)
     {
          myPixelCollection[i].classList.remove('brush-color-red');
          myPixelCollection[i].classList.remove('brush-color-orange');
          myPixelCollection[i].classList.remove('brush-color-yellow');
          myPixelCollection[i].classList.remove('brush-color-yellowgreen');
          myPixelCollection[i].classList.remove('brush-color-green');
          myPixelCollection[i].classList.remove('brush-color-lightblue');
          myPixelCollection[i].classList.remove('brush-color-blue');
          myPixelCollection[i].classList.remove('brush-color-violet');
          myPixelCollection[i].classList.remove('brush-color-purple');
          myPixelCollection[i].classList.remove('brush-color-pink');
          myPixelCollection[i].classList.remove('brush-color-tan');
          myPixelCollection[i].classList.remove('brush-color-brown');
          myPixelCollection[i].classList.remove('brush-color-white');
          myPixelCollection[i].classList.remove('brush-color-lightgray');
          myPixelCollection[i].classList.remove('brush-color-gray');
          myPixelCollection[i].classList.remove('brush-color-black');

          myPixelCollection[i].classList.add('standard-background-color');
     }
}

function saveImage()
{
     const divElement = document.getElementById('myDiv');

     html2canvas(canvas).then(function(canvas) {
     const dataURL = canvas.toDataURL('image/png');
     
     const link = document.createElement('a');
     link.href = dataURL;
     link.download = 'MASTERPIECE.png';
     link.click();
     });

}