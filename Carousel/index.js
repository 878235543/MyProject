


(function ($) {
    function Swiper(option, wrap) {  //wrap位当前的作用域
        this.itemList = option.itemList || [];
        this.len = this.itemList.length;
        this.Width = option.Width || $(wrap).width();
        this.Height = option.Height || $(wrap).height();
        this.theawy = option.theawy || 'animation',
            this.buttion = option.buttion || 'show',
            this.iSspan = typeof option.iSspan === 'undefined' ? true : option.iSspan,
            this.iSspanPostition = option.iSspanPostition || 'center',
            this.autoChange = typeof option.autoChange === 'undefined' ? true : option.autoChange,
            this.autoTime = typeof option.autoTime === 'undefined' ? 2000 : option.autoTime,
            this.liColor = option.liColor || 'black',  //如果没传默认是黄色
            this.wrap = wrap;  //当前作用域
        this.nowIndex = 0;
        this.timer = null;
    }
    Swiper.prototype.init = function () {
        this.createDom();
        this.renderStyle();
        this.bandEvent();
        if(this.autoChange === true){  //如果是自动轮播
            clearInterval(this.timer);
            this.CarouselTimer();
        }
    }

    // 创建结构
    Swiper.prototype.createDom = function () {  //渲染Dom
        let swiperWrapper = $('<div class="swiperWrapper"></div>');  //宽度为Wrapper宽度的包裹层
        let domList = $('<div class="domList"></div>');  //  宽度为this.itemList.length * width的包裹层
        let spanList = $('<div class="spanList"></div>');//包裹小点的包裹层
        let len = this.itemList.length;
        for (let i = 0; i < len; i++) {
            let liwraper = $('<div class="liwrapper"></div>');
            liwraper.append(this.itemList[i]).appendTo(domList);
            let span = $('<li></li>');
            spanList.append(span); //加入spanList包裹层
        }
        if (this.theawy === 'animation') {
            let liwraper = $('<div class="liwrapper"></div>');
            let listClone = $(this.itemList[0]).clone(true); //克隆第一个元素添加到末尾
            listClone.css({
                width: this.wrap.width(),
                height: this.wrap.height(),
                display: 'block',
            });
            liwraper.append(listClone).appendTo(domList);
        }
        let leftBtn = $('<div class="left_Btn Btn">&lt;</div>');
        let rightBtn = $('<div class="right_Btn Btn">&gt;</div>');
        swiperWrapper.append(domList)
            .append(spanList)
            .append(rightBtn)
            .append(leftBtn)
            .appendTo(this.wrap);  //把他添加到this.wrap里面

    }
    // 添加样式
    Swiper.prototype.renderStyle = function () {
        $('.domList', this.wrap).css({
            width: this.theawy === 'animation' ? (this.itemList.length + 1) * this.wrap.width() : this.wrap.width(),
            float: this.theawy === 'animation' ? 'left' : ' ',
        })
        for (let i = 0; i < this.itemList.length; i++) {
            this.itemList.css({
                width: this.theawy === 'animation' ? this.wrap.width() : '100%',
                height: this.wrap.height(),
                position: this.theawy === 'animation' ? ' ' : 'absolute',
            });
        }

        // 设置小点的样式
        if (this.iSspan === true) {
            $('.spanList', this.wrap).css({
                display: 'block'
            })
            if (this.iSspanPostition === 'left') {
                $('.spanList', this.wrap).css({
                    textAlign: 'left'
                })
            } else if (this.iSspanPostition === 'right') {
                $('.spanList', this.wrap).css({
                    textAlign: 'right'
                })
            } else {
                $('.spanList', this.wrap).css({
                    textAlign: 'center'
                })
            }
        } else if (this.iSspan === false) {
            $('.spanList', this.wrap).css({
                display: 'none'
            })
            console.log('5555');
        }

        // 设置buttion是否显示
        $('.Btn', this.wrap).css({
            display: this.buttion === 'show' ? 'block' : 'none'
        })

        // 控制按钮的显示和隐藏
        if (this.buttion === 'hover') {
            this.wrap.mouseover(() => {
                $('.Btn', this.wrap).css({
                    display: 'block'
                })
                console.log(this.wrap);
            });
            this.wrap.mouseout(() => {
                $('.Btn', this.wrap).css({
                    display: 'none'
                })
            });
        }


        // 初始化小点的样式
        $('.spanList li',this.wrap).eq(0).css({
            backgroundColor:this.liColor
        })
    }
    // 绑定事件
    Swiper.prototype.bandEvent = function () {
        $('.left_Btn', this.wrap).click(() => {
            clearInterval(this.timer);
            if (this.nowIndex === 0) {
                if (this.theawy === 'animation') {
                    $('.domList',this.wrap).css({
                        left: -this.len * this.wrap.width()
                    })
                }
                this.nowIndex = this.len - 1;
            } else {
                this.nowIndex--;
            }

            // console.log(this.nowIndex, this.len);
            this.changePage();
            this.CarouselTimer();
        });
        $('.right_Btn', this.wrap).click(() => {
            clearInterval(this.timer);
            if (this.theawy === 'animation') {
                if(this.nowIndex === this.len){
                    console.log('1111');
                    $('.domList',this.wrap).css({
                        left: 0
                    })
                    this.nowIndex = 0
                }
                this.nowIndex++;
            } else {
                if (this.nowIndex === this.len - 1) {
                    this.nowIndex = 0;
                } else {
                    this.nowIndex++;
                }
            }


            // console.log(this.nowIndex, this.len);
            this.changePage();
            this.CarouselTimer();
        });
        let self = this;
        $('.spanList li',this.wrap).mouseenter(function(){
            clearInterval(self.timer);
            self.nowIndex = $(this).index();
            self.changePage();
            console.log($(this).index());

        })
        $('.spanList li',this.wrap).mouseleave(()=>{
            this.CarouselTimer();
        })

    }
    // 轮播图的运动
    Swiper.prototype.changePage = function () {
        if(this.theawy === 'animation'){
            $('.domList', this.wrap).animate({
                left: -this.nowIndex * this.wrap.width()
            })
            let showindex = this.nowIndex;
            if(showindex ===this.len){
                showindex = 0;
            }
            $('.spanList li',this.wrap).css({
                backgroundColor:'transparent'
            }).eq(showindex).css({
                backgroundColor:this.liColor
            })

        }else{
            $('.domList .liwrapper',this.wrap).fadeOut().eq(this.nowIndex).fadeIn();
            $('.spanList li',this.wrap).css({
                backgroundColor:'transparent'
            }).eq(this.nowIndex).css({
                backgroundColor:this.liColor
            })
        }
    }
    // 设置轮播图的计时器
    Swiper.prototype.CarouselTimer = function(){
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            $('.right_Btn', this.wrap).trigger('click');
        },this.autoTime)
    }

    $.fn.extend({
        Carousel: function (option) {
            let swiper = new Swiper(option, this);
            swiper.init();
        }
    })




})($ || jQuery)