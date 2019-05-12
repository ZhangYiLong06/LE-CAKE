function Car(){
    this.tbody = document.querySelector("tbody")
    console.log(this.tbody)
    this.url = "http://localhost/LE_CAKE/ajax/goods.php"
    // console.log(this.url)

    this.init()
    this.addEvent()
}
Car.prototype.init = function(){
    var that = this;
    ajaxGet(this.url).then(function(res){

        console.log(res)
        that.res = JSON.parse(res)
        console.log(that.res)
        that.getCookie()
    })
}
Car.prototype.getCookie = function(){
    this.goods = getCookie("goods")!="" ? JSON.parse(getCookie("goods")) : [];
    console.log(this.goods)
    this.display()
}
Car.prototype.display = function(){
    var str = ""
    for(var i=0;i<this.res.length;i++){
        for(var j=0;j<this.goods.length;j++){
            if(this.res[i].goodsId == this.goods[j].id){
                str += `<tr index="${this.goods[j].id}" style="text-align:center">
                            <td><img src="${this.res[i].src}" class="goods" style="width:100px"/></td>
                            <td>${this.res[i].name}</td>
                            <td>${this.res[i].price}</td>
                            <td><input type="number" min=1 value="${this.goods[j].num}" class="num"></td>
                            <td><em class="dele"  style="display:block;width:60px;height:30px;border-radius:6px;background:#99f;color:#fff;font:12px/30px "";margin:0 auto;>删除</em></td>
                        </tr>`;
            }
        }
    }
    this.tbody.innerHTML = str;
}
Car.prototype.addEvent = function(){
    var that = this;
    this.tbody.addEventListener("input",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "num"){
            that.num = target.value;
            that.id = target.parentNode.parentNode.getAttribute("index");
            that.changeCookie(function(i){
                that.goods[i].num = that.num
            })
        }
    })
    this.tbody.addEventListener("click",function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if(target.className == "dele"){
            that.id = target.parentNode.parentNode.getAttribute("index");
            target.parentNode.parentNode.remove();
            that.changeCookie(function(i){
                that.goods.splice(i,1)
            })
        }
    })
}
Car.prototype.changeCookie = function(callback){
    for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id == this.id){
            callback(i)
        }
    }
    setCookie("goods",JSON.stringify(this.goods))
}

// Car.prototype.removeCookie = function(){
//     for(var i=0;i<this.goods.length;i++){
//         if(this.goods[i].id == this.id){
//             this.goods.splice(i,1);
//         }
//     }
//     setCookie("goods",JSON.stringify(this.goods))
// }

new Car();
