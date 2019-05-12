function Tab(){
    // 1.选元素
    this.li = document.querySelectorAll(".infor_r_t li")
    this.p = document.querySelectorAll(".infor_r_t p")

    // 初始自己定义的索引
    this.index = 0;

    // 2.绑事件
    this.init()
}
Tab.prototype.init = function(){
    var that = this;
    // 写事件的绑定
        for(var i=0;i<this.li.length;i++){
            this.li[i].xuhao = i;
            this.li[i].onclick = function(){
                // 3.计算要显示的元素的索引
                that.changeIndex(this)
            }
        }
}
Tab.prototype.changeIndex = function(ele){
    // 计算呗。。。
    this.index = ele.xuhao;
    // 4.隐藏所有
    this.hide()
}
Tab.prototype.hide = function(){
    // 隐藏所有的代码...
    for(var i=0;i<this.li.length;i++){
        this.li[i].className = "";
        this.p[i].style.display = "none";
    }
    // 5.显示计算之后的索引所代表的元素
    this.show()
}
Tab.prototype.show = function(){
    // 显示当前的代码。。
    this.li[this.index].className = "active";
    this.p[this.index].style.display = "block";
}


// 执行
new Tab();