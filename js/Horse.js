window.onload = function() {
    var marqueeBox = document.getElementById("horse-box");
    var marquee = document.getElementById("horse");
    var marqueeCopy = document.getElementById("horse-1");

    marqueeCopy.innerHTML = marquee.innerHTML;

    function fun() {
        //从右向左
        if (marqueeBox.scrollLeft >= 700) {
            marqueeBox.scrollLeft = 0;
        } else {
            marqueeBox.scrollLeft++;
        }
    }

    var fun1 = setInterval(fun, 50);

    marqueeBox.onmouseover = function() {
        //鼠标经过时  清除定时器  停止图片的滚动
        clearInterval(fun1);
    };
    marqueeBox.onmouseout = function() {
        //鼠标离开后  继续滚动图片
        fun1 = setInterval(fun, 50);
    };
};