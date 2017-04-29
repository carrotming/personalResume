var box = getId('box')
var oUl = getId('oUl')
var aLi = oUl.children;
var ctr = getId('ctr')
var left = getId('left')
var right = getId('right')
var json = [
    {width: 400, top: 60, left: -100, opacity: 0.6, z: 3},
    {width: 450, top: 80, left: 470, opacity: 0.8, z: 4},
    {width: 550, top: 100, left: 200, opacity: 1, z: 5},
    {width: 450, top: 80, left: 0, opacity: 0.8, z: 4},
    {width: 400, top: 60, left: 600, opacity: 0.6, z: 3},
    {width: 350, top: 40, left: 275, opacity: 0.4, z: 2},
];
layout();
function layout() {
    for (var i = 0; i < json.length; i++) {
        moveFrame(aLi[i], {
            width: json[i].width,
            top: json[i].top,
            left: json[i].left,
            opacity: json[i].opacity,
            zIndex: json[i].z
        })
    }
}
left.onclick = function () {
    json.push(json.shift())
    layout();
}
right.onclick = function () {
    json.unshift(json.pop());
    layout();
}