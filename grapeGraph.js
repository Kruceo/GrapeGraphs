const info = [1, 2, 3, 5, 8, 13]
var canvas;
var ctx;
var graphColor = 'rgb(125,0,255)'
var fillColor = 'rgb(125,0,255,0.5)'
var markColor = 'rgb(0,0,0,0.1)'
var zeroColor = 'rgb(50,255,50)'

window.onload = function () {
    const allCanvas = document.querySelectorAll('canvas')
    for (let element of allCanvas) {
        if (element.getAttribute('makeGraph')) {
            var newData = []
            for(string of element.getAttribute('makeGraph').split(','))
            {
newData.push( Number.parseFloat(string))
            }
            makeGraph(element.getAttribute('id'), newData)
            
        }
    }
}

function makeGraph(canvasId, dataArray) {
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext("2d")

    if (canvas.getAttribute('GraphColor')) {
        graphColor = canvas.getAttribute('graphColor')
    }
    else {
        graphColor = 'rgb(125,0,255)'
    }
    if (canvas.getAttribute('fillColor')) {
        fillColor = canvas.getAttribute('fillColor')
    }
    else {
        fillColor = 'rgb(125,0,255,0.5)'
    }
    if (canvas.getAttribute('markColor')) {
        markColor = canvas.getAttribute('markColor')
    }
    else {
        markColor = 'rgb(0,0,0,0.1)'
    }
    if (canvas.getAttribute('zeroColor')) {
        zeroColor = canvas.getAttribute('zeroColor')
    }
    else {
        zeroColor = 'rgb(50,255,50)'
    }
    ctx.lineWidth = 1;
    ctx.lineJoin = 'round'
    var height = canvas.offsetHeight
    var width = canvas.offsetWidth

    
    const bigger = getBigger(dataArray) * 2;
    const minor = getMinor(dataArray) * 2
    var division = 1;
    var coef = bigger;
    if (bigger < Math.abs(minor)) {
        coef = Math.abs(minor)
    }
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    ctx.clearRect(0, 0, width, height)

    if (minor < 0) {
        ctx.beginPath();
        ctx.strokeStyle = zeroColor;
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        division = 2; 
    }
    ctx.beginPath();
    ctx.strokeStyle = markColor;
    //ctx.moveTo(0, height)
    ctx.fillStyle = fillColor
    var xIn = (width / (dataArray.length - 1))
    var yIn = height / (coef * 1.25) * (3 - division);
    for (var y = 0; y < dataArray.length; y++) {
        ctx.moveTo(y * xIn, height);
        ctx.lineTo(y * xIn, 0);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = graphColor;

    ctx.moveTo(0, height / division - dataArray[0] * yIn)
    for (var i = 0; i < dataArray.length; i++) {

        ctx.lineTo((i + 1) * xIn, height / division - dataArray[i + 1] * yIn)
    }
    ctx.lineTo(width, height)
    ctx.lineTo(0, height)
    ctx.lineTo(0, height / division - dataArray[0] * yIn)
    ctx.stroke();
    ctx.fill()
}
function getBigger(infoToSort) {
    var max = 0;
    for (var i = 0; i < infoToSort.length; i++) {
        if (infoToSort[i] > max) {
            max = infoToSort[i]
        }
    }
    return max
}
function getMinor(infoToSort) {
    var max = getBigger(infoToSort);
    for (var i = 0; i < infoToSort.length; i++) {
        if (infoToSort[i] < max) {
            max = infoToSort[i]
        }
    }
    return max
}