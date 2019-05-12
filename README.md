# top3
二升三项目
文件夹：
1.ajax文件夹：
	ajax.2.0 封装ajax函数，向后台（php）请求数据
	goods.php 写后台数据，接收到ajax请求以后发送数据到前端，通过JS渲染页面
2.css文件夹：
	public.css是一阶段打包的一个css公共样式，去除一些常见的标签默认属性，清除浮动
	car.css 是购物车页面的css样式
	details.css为商品详情页的样式
	index.css为首页的样式
	login.css为登录页面和注册页面的独立样式
	loginpublic.css为登录页面和注册页面的公共样式
	PublicStyle.css为所有页面的头部与底部以及侧边栏的公共样式
3.js文件夹
	cake.js  ajax向后台请求数据，渲染商品列表，点击商品后，商品信息存储到cookie!
		另外还有一个倒计时的功能，用来做限时抢购！
	car.js	向cookie请求数据，并且渲染到购物车页面
	javascripts.js 利用jQuery插件实现轮播图效果
	cookie.js封装cookie函数，包含存储cookie数据,删除cookie数据,和获取cookie数据
	jquery.banner.2.0.js 	jQuery轮播图插件
	jquery.js	jquery插件
	login.js jq方法实现的点击跳转
	selector.js  选项卡功能
4.images文件夹
	整个项目用到的所有图片，包括精灵图、banner图、插入图
4.六个html页面：
	index.html首页，details.html商品详情页，car.html购物车页面，login.html登录页面，	login.html注册页面,login.html手机验证登录页面


5.实现的功能：轮播图，二级导航，购物车，限时抢购，选项卡


