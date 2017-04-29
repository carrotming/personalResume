function Round(json) {
    this._init(json);
}
Round.prototype = {
    _init: function (json) {
        var json = json || {};
        this.id = json.id;
        this.x = json.x;
        this.y = json.y;
        this.r = 60;
        this.color = json.color;
        ballArr.push(this);
        this.dx = _.random(-5, 5);
        this.dy = _.random(-5, 5);
        this.dr = _.random(3, 8);
    },
    create: function () {
        var oDiv = document.getElementById(this.id)
        var div = document.createElement('div');
        oDiv.appendChild(div);
        div.style.left = this.x + 'px'
        div.style.top = this.y + 'px'
        div.style.position = 'absolute';
        div.style.borderRadius = '50%'
        div.style.backgroundColor = this.color;

        div.style.width = this.r + 'px';
        div.style.height = this.r + 'px';

    },
    update: function () {
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;
        if (this.r < 0) {
            this.r = 0;
            ballArr = _.without(ballArr, this);
        }
    }
};
var box = document.getElementById('box1');
var ballArr = [];
var getRandomColor = function () {
    return 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + Math.random() + ')'
}
box.onmousemove = function (ev) {
    var ev = ev || window.event;
    new Round({id: 'box1', x: ev.clientX, y: ev.clientY, color: getRandomColor()})
}
setInterval(function () {
    for (var i = 0; i < box.children.length; i++) {
        box.removeChild(box.children[i]);
    }
    for (var j = 0; j < ballArr.length; j++) {
        ballArr[j].create();
        ballArr[j].update();
    }
}, 30);





