
function Random(min, max) {  //生成随机数
    return Math.floor(Math.random() * (max - min) + min);
}
function randomColor() {   //生成随机颜色
    return `rgb(${Random(80, 200)},${Random(80, 200)},${Random(80, 200)})`;
}
function backgroundImage() {  //添加背景图片
    let box = document.getElementsByClassName('box');
    box = Array.from(box);
    let style = document.createElement('style');
    let strStyle = '';
    box.forEach(function (item, index) {
        strStyle +=
            `   
        .wrapper .box:nth-child(${index + 1}) div{
            background-image: url(./img/图片${index + 1}.jpg);
            border:10px solid ${randomColor()};
            color:${ randomColor() }
        }
        `;
    })
    style.innerHTML = strStyle;
    document.head.appendChild(style);
}
function eventList() {
    let box = document.getElementsByClassName('box');
    box = Array.from(box);
    let dirtion = ['rotateX(-180deg)', 'rotateY(-180deg)', 'rotateX(180deg)', 'rotateY(180deg)'];
    box.forEach(function (item, index) {
        item.onmouseenter = function (e) {
            // 要知道是从哪个方向移入的
            let deg = Dirction(e, this)
            this.style.transform = `translateZ(120px) ${dirtion[deg]}`;
            document.body.style.backgroundColor = randomColor();
        }
        item.onmouseleave = function () {
            this.style.transform = '';
        }
    })
}
function Dirction(e, box) {
    let left = box.getBoundingClientRect().left;
    let top = box.getBoundingClientRect().top;
    let width = box.getBoundingClientRect().width;
    let height = box.getBoundingClientRect().height;
    let X = e.clientX - left - width / 2;
    let Y = e.clientY - top - height / 2;
    let deg = Math.atan2(Y, X) / (Math.PI / 180);
    deg = (Math.round((deg + 180) / 90) + 3) % 4;
    return deg;
}
function windowEvent() {
    let wrapper = document.querySelector('.wrapper');
    window.onmousemove = function (e) {
        let x = e.clientX / document.body.clientWidth - 0.5;
        let y = e.clientY / document.body.clientHeight - 0.5;
        let wrapperX = Math.round(x * 40);
        let wrapperY = Math.round(y * 40);
        wrapper.style.transform = `rotateY(${wrapperX}deg) rotateX(${-wrapperY}deg)`;
    }
}
function init() {
    backgroundImage();
    eventList();
    windowEvent();
}
init();