
function moveFrame(dom, json, fn) {
    clearInterval(dom.timer)
    dom.timer = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            var currStyle;
            var target;
            var speed;
            // 判断输入的属性,获得当前初始化属性值
            if (attr == 'opacity') {
                currStyle = parseInt(parseFloat(getStyle(dom, attr) * 100)) || 100;
                target = parseInt(json[attr] * 100);
            } else if (attr == 'scrollTop') {
                currStyle = dom.scrollTop;
                target = parseInt(json[attr]);
            } else {
                currStyle = parseInt(getStyle(dom, attr)) || 0;
                target = parseInt(json[attr]);
            }
            //定义一个速度进行缓动动画 当目标值大于初始值时候 向上取整  反之 向下 原因就是要让 目标值刚刚好 因为计算中出现了乘法 和除法


            speed = (target - currStyle) * 0.2;

            target - currStyle > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);

            //判断当前的属性 让初始化的值慢慢等于目标值

            if (attr == 'opacity') {
                dom.style.opacity = (currStyle + speed) / 100;
                dom.style.filter = 'alpha(opacity:' + currStyle + speed + ')';
            } else if (attr == 'scrollTop') {
                dom.scrollTop = currStyle + speed;
            }else if('zIndex' == attr) { //
                dom.style[attr] = json[attr];
            }
            else {
                dom.style[attr] = currStyle + speed + 'px'
            }

            // 假如输入了多个属性 需要让每一个属性都达到目标值才停止计时器

            if (target != currStyle) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(dom.timer);
            //回调 当计时器停止后面需要执行的代码;
            if (fn) {
                fn();
            }
        }
    }, 30)
}

// 获取样式值

function getStyle(dom, attr) {
    return dom.currentStyle ? dom.currentStyle[attr] : window.getComputedStyle(dom, null)[attr];
}

//通过ID获取标签

function getId(dom) {
    return document.getElementById(dom);
}

//通过tag获取标签

function getTag(dom, tagName) {
    return dom.getElementsByTagName(tagName);
}

//通过类名获取标签

function getClass(dom, className) {
    if (dom.getElementsByClassName) {
        return dom.getElementsByClassName(className);
    } else {
        var arr = [];
        var result = document.getElementsByTagName('*');
        for (var i = 0; i < result.length; i++) {
            if (result[i].className == className) {
                arr.push(result[i]);
            }
        }
        return arr;
    }
}


// 获取屏幕的宽度和高度

function client() {
    if (window.innerWidth) { // ie9及其以上的版本、最新浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode == "CSS1Compat") { // w3c标准
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

/*
 *  获取scrollTop和scrollLeft
 */
function scroll() {
    if (window.pageYOffset !== null) { // ie9+  和 最新浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode == 'CSS1Compat') { // 非怪异浏览器
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

/*
 * 隐藏标签
 */
function hide(obj) {
    return obj.style.display = 'none';
}


/*
 * 显示标签
 */
function show(obj) {
    return obj.style.display = 'block';
}

//循环给节点添加操作

function each(dom, fn) {
    for (var i = 0; i < dom.length; i++) {
        fn(dom[i], i);
    }
}
/*
 * 判断浏览器
 */
function getOs() {
    var OsObject = "";
    if (isIE = navigator.userAgent.indexOf("MSIE") != -1) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") != -1) {
        return "Firefox";
    }
    if (isChrome = navigator.userAgent.indexOf("Chrome") != -1) {
        return "Chrome";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari";
    }
    if (isOpera = navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera";
    }
}