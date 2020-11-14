var Piano = {
    init() {
        this.initData();
        this.getData();
        this.addEvent();
        
    },
    initData() {
        this.timer = null;
        this.ScreenWidth = document.documentElement.clientWidth;  //屏幕的宽度
        this.whiteLeft = 0;   //白键的位置
        this.wrapper = document.querySelector('.wrapper');
        this.playDown = false;
        this.FloatdivAll = [];  //存放所有的浮块
    },
    getData() {
        this.whiteWidth;
        this.Whitenumber = 0;   //白键的数量
        for (var key in MIDISound) {
            // console.log(key);
            // console.log(MIDISound[key]);
            if (!(key.length > 2)) {
                this.Whitenumber++;
            }
            this.renderPiano(key);
        }
        // console.log(Whitenumber);
    },
    renderPiano(key) {
        this.div = document.createElement('div');
        this.span = document.createElement('span');
        this.whiteWidth = this.ScreenWidth / 52;
        this.div.className = 'piano';
        if (key.length > 2) {
            // 是黑键
            this.div.classList.add('black');
            this.span.innerText = key;
            this.div.style.width = this.whiteWidth * 0.6 + 'px';
            this.div.style.left = this.whiteLeft * this.whiteWidth - (this.whiteWidth * 0.6/2) + 'px';
            this.div.setAttribute('key', key);
            this.div.appendChild(this.span);
        } else {
            // 是白键
            this.div.classList.add('white');
            this.div.style.width = this.whiteWidth + 'px';
            this.div.style.left = this.whiteLeft * this.whiteWidth + 'px';
            this.div.setAttribute('key', key);
            // console.log(whiteLeft,whiteWidth);
            this.span.innerText = key;
            this.div.appendChild(this.span);
            this.whiteLeft++;
        }
        this.wrapper.appendChild(this.div);
    },
    playpiano(key) {
        this.audio = new Audio(MIDISound[key]);
        // console.log(this.audio);
    },
    Play() {
        this.audio.volume = 1;
        this.audio.play();
        clearInterval(this.timer);
    },
    Stop() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.v = this.audio.volume - 0.02;
            if (this.v < 0) {
                this.audio.pause();
                clearInterval(this.timer);
            } else {
                this.audio.volume = this.v;
            }
        }, 50);
    },
    addEvent() {
        this.div = this.wrapper.getElementsByTagName('div');
        // console.log(this.div);
        for (let i = 0; i < this.div.length; i++) {
            this.div[i].onmousedown = () => {
                this.playDown = true;
                this.div[i].classList.add('active');
                let key = this.div[i].getAttribute('key');
                this.playpiano(key);
                this.Play();
                this.RanderFolat(this.div[i]);  //飞出的块
                this.FloatdivAllMove();
            }
            this.div[i].onmouseup = () => {
                this.playDown = false;
                this.div[i].classList.remove('active');
                this.Stop();
            }
            this.div[i].onmouseleave = () => {
                this.div[i].classList.remove('active');
            }
            this.div[i].onmouseenter = () => {
                if (this.playDown) {
                    this.div[i].classList.add('active');
                }
            }
            this.div[i].onmousemove = () => {
                if (this.playDown) {
                    let key = this.div[i].getAttribute('key');
                    this.playpiano(key);
                    this.Play();
                    this.RanderFolat(this.div[i]);  //飞出的块
                    this.FloatdivAllMove();
                }
            }
        }
    },
    getRandom(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    },
    RanderFolat(dom){
        this.FloatLeft = dom.offsetLeft;
        this.FloatTop = dom.offsetTop;
        this.FloatWidth = dom.offsetWidth;
        this.FloatHeight = this.getRandom(2,30);
        
        

        // 产生随机颜色
        this.FloatColor = `rgba(${ this.getRandom(0,255) },${ this.getRandom(0,255) },${ this.getRandom(0,255) },${ this.getRandom(5,10)/10 })`;


        console.log(this.FloatLeft,this.FloatWidth);
        this.Floatdiv = document.createElement('div');
        this.Floatdiv.style.backgroundColor=this.FloatColor;
        this.Floatdiv.style.position = 'absolute';
        this.Floatdiv.style.height = this.FloatHeight + 'px';
        this.Floatdiv.style.left = this.FloatLeft + 'px';
        this.Floatdiv.style.top = this.FloatTop - this.FloatHeight + 'px';
        this.Floatdiv.style.width = this.FloatWidth + 'px';
        this.FloatdivAll.push(this.Floatdiv);
        this.wrapper.appendChild(this.Floatdiv);
        console.log(this.FloatdivAll);
    },
    FloatdivAllMove(){  //所有浮块的移动
        this.FloatSpeed = this.getRandom(5,10);
        for(let i=0;i<this.FloatdivAll.length;i++){
            this.time = setInterval(()=>{
                // this.FloatSpeed -= 1;
                console.log(this.FloatSpeed);
                this.FloatdivAll[i].style.top = this.FloatdivAll[i].offsetTop - this.FloatSpeed + 'px';
                if(this.FloatdivAll[i].offsetTop - this.FloatSpeed < -this.wrapper.offsetTop+10){
                    this.FloatdivAll[i].remove();
                }
            },16)
        }
    }
}