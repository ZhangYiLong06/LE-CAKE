function Goods(){
    this.box = document.querySelector("#cont");
    // console.log(this.box)
    this.url = "http://localhost/LE_CAKE/ajax/goods.php";

    this.init();
    this.addEvent();
}
Goods.prototype.init = function(){
    var that = this;
    ajaxGet(this.url).then(function(res){
        // console.log(res)
        // console.log( typeof res)
        that.res = JSON.parse(res)
        console.log(that.res)
        that.display()
    })
}
Goods.prototype.display = function(){
    var str = "";
    for(var i=0;i<this.res.length;i++){
        console.log(this.res[i])
        str += `<li class="teli">
                    <b><b><a href="details.html"><img src="${this.res[i].src}
                    "></a></b></b>
                    <div class="xinxi" index="${this.res[i].goodsId}">    
                        <div class="xinxi1">
                            <h3>${this.res[i].name}
                            </h3>
                            <p></p>
                        </div>
                        <p>${this.res[i].price}
                        </p>
                    <a class="add">加入购物车></a>
                    </div>           
                </li>`;
    }
    
    this.box.innerHTML = str;
}
Goods.prototype.addEvent = function(){
    var that = this;
    this.box.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "add"){
            that.id = target.parentNode.getAttribute("index");
            that.click = target.parentNode.onclick=function(){
                alert("添加成功")
            }
            that.setCookie()
        }
    })
}
Goods.prototype.setCookie = function(){
    this.goods = getCookie("goods");
    if(this.goods == ""){
        this.goods = [{
            id:this.id,
            num:1
        }];
    }else{
        var onoff = true;
        this.goods = JSON.parse(this.goods)
        // console.log(this.goods)
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                this.goods[i].num++;
                onoff = false;
                break;
            }
        }
        if(onoff){
            this.goods.push({
                id:this.id,
                num:1
            })
        }
    }
    setCookie("goods",JSON.stringify(this.goods))
}

new Goods();

    function ShowCountDown(year,month,day,divname)
    {
        var now = new Date();
        var endDate = new Date(year, month, day);
        var leftTime=endDate.getTime()-now.getTime();
        var dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
        var hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
        var mm = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟数
        var ss = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
        dd = checkTime(dd);
        hh = checkTime(hh);
        mm = checkTime(mm);
        ss = checkTime(ss);//小于10的话加0
        var cc = document.getElementById(divname);
        cc.innerHTML = "距离活动时间结束还有：" + hh + "小时" + mm + "分" + ss + "秒";
    }
    function checkTime(i)
    {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    window.setInterval(function(){ShowCountDown(2019,4,11,'countdown');}, 1000);

