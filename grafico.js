

var info = [1, 2, 3, 5, 8, 13]
var quadro = document.getElementById('grafico');
var ctx = quadro.getContext("2d")
var graphColor = 'rgb(125,0,255)'
var fillColor = 'rgb(125,0,255,0.5)'
var markColor = 'rgb(0,0,0,0.1)'
var zeroColor = 'rgb(50,255,50)'
window.onload = function () {
    
    
}

function makeGraph(canvasId,dataArray) {
    quadro = document.getElementById(canvasId);
    ctx = quadro.getContext("2d")
    var height = quadro.offsetHeight
    var width = quadro.offsetWidth
    const bigger = getBigger(dataArray) * 2;
    const minor = getMinor(dataArray) * 2
    var coef = bigger;
    if (bigger < Math.abs(minor)) {
        coef = Math.abs(minor)
    }
    quadro.setAttribute('width', width)
    quadro.setAttribute('height', height)
    ctx.clearRect(0, 0, width, height)
    if (minor < 0) {
        ctx.beginPath();
        ctx.strokeStyle = zeroColor;
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
    }
    ctx.strokeStyle = markColor;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round'
    //ctx.moveTo(0, height)
    ctx.fillStyle = fillColor
    var xIn = (width / (dataArray.length - 1))
    var yIn = height / (coef *1.25);
    for (var y = 0; y < dataArray.length; y++) {
        ctx.moveTo(y * xIn, height);
        ctx.lineTo(y * xIn, 0);
    }
    ctx.stroke();



    ctx.beginPath();
    ctx.strokeStyle = graphColor
    ctx.moveTo(0, height / 2 - dataArray[0] * yIn)

    for (var i = 0; i < dataArray.length; i++) {

        ctx.lineTo((i + 1) * xIn, height / 2 - dataArray[i + 1] * yIn)
    }

    ctx.lineTo(width, height)

    ctx.lineTo(0, height)
    ctx.lineTo(0, height / 2 - dataArray[0] * yIn)
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
function setGraphLineColor(color) {
    graphColor = color;
}