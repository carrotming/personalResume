var oBody = document.getElementById('starMove');
var dW = document.documentElement.clientWidth;
var dH = document.documentElement.clientHeight;
var countX = 0;
var countY = 0;
var timer = null;
timer = setInterval(function () {
    countX = parseInt(Math.random() * dW);
    countY = parseInt(Math.random() * dH);
    var delay = (Math.random() * 1.5);
    var scale = (Math.random() * 2);
    var aDiv = document.createElement('div');
    aDiv.setAttribute('class', 'star');
    oBody.appendChild(aDiv);
    aDiv.style.left = countX + 'px';
    aDiv.style.top = countY + 'px';
    aDiv.style.animationDelay = delay + 's';
    aDiv.style.webkitTransform = 'scale(' + scale + ')';
    if (oBody.children.length == 100) {
        clearInterval(timer);
    }
}, 100);