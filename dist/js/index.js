/*
	编写主页的代码
	在这里编写代码都必须遵从AMD规范
*/

/*
	注意：引入jq去进行开发
*/
define(["jquery", "jquery-cookie"], function($){
	var main = function(){
		$(function(){

			//顶部导航下滑菜单
			$("#phone").hover(function(){
				$("#phone_menu").stop().animate({"height":240},300),
				$("#phone_menu ul").css("display","block")

			},function(){
				$("#phone_menu").stop().animate({"height":0},300),
				$("#phone_menu ul").css("display","none")
			})
			$("#phone_menu").hover(function(){
				$("#phone_menu").stop().animate({"height":240},300),
				$("#phone_menu ul").css("display","block")
			},function(){
				$("#phone_menu").stop().animate({"height":0},300),
				$("#phone_menu ul").css("display","none")
			})

			$.ajax({
				url:"../data/phone_menu.json",
				type:"GET",
				success:function(res){
					var html= "" ;
					for(var i = 0; i < res.length; i++){
						html += `<li class = "phone_pic">
										<img src="${res[i].url}" alt="我是图片">
										<p>${res[i].title}</p>
								</li>`;
					}
					$("header #phone_menu ul").html(html);
					/*{
						var oImg = document.createElement("img");
						oImg.src = arr[i].url;
						aLis[i].appendChild(oImg);
					}*/
				}
			})
 


			//循环广告图
			$.ajax({
				url:"../data/playpic.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						
						html = `<img src="${res[i].url}" alt="我是图片">`;
						$("#play #pic li").eq(i).html(html);
					}
					
					/*{
						var oImg = document.createElement("img");
						oImg.src = arr[i].url;
						aLis[i].appendChild(oImg);
					}*/
				}
			})

			//选项卡
			$.ajax({
				url:"../data/tabcard.json",
				type:"GET",
				success:function(res){
						//创建一级菜单
					for(var i = 0; i < res.length; i++){
						var str = res[i].title;
						$("#play #goods_1 li").eq(i).html(str);

						var items = res[i].items;
						//创建二级菜单
						var oUl = document.createElement("ul");

						for(var j = 0; j < items.length; j++){
						/*var oImg = document.createElement("img");
						oImg.src = arr[i].url;
						aLis[i].appendChild(oImg);*/
						var oLi =document.createElement("li");
						var oSpan= document.createElement("span");
						var oImg = document.createElement("img");
						oImg.src = items[j].url;
						oSpan.innerHTML = items[j].dis;
						oLi.appendChild(oImg);
						oLi.appendChild(oSpan);

						oUl.appendChild(oLi);
						}
						$("#play .tab .tab2").append(oUl);
					 }
					
					
				}
			})

			//滑动显示选项卡
			$(".play #goods_1").on("mouseover","li",function(){
				var _index = $(this).index();
				$(".play .tab .tab2 ul").eq(_index).css("display","block");
				$(".play .tab .tab2 ul").eq(_index).siblings().css("display","none");
				$(".play .tab ol").css("display","block");
				document.title = _index;
			})
			$(".play").on("mouseleave",function(){
				$(".play .tab ul").css("display","none");
			})
			$(".play .tab .tab2").on("mouseleave",function(){
				$(".play .tab ul").css("display","none");
			})


			// 服务右边三图
			$.ajax({
				url:"../data/serve_right.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						
						html = `<img src="${res[i].url}" alt="我是图片">`;
						$(".serve .right li").eq(i).html(html);
					}
				}
			})

			//热门产品
			$.ajax({
				url:"../data/product.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						html += `<li>
							<div class="content">
								<img src="${res[i].url}">
								<p class="p1">${res[i].dis1}</p>
								<p class="p2">${res[i].dis2}</p>
								<p class="price">${res[i].price}</p>
							</div>
							<div class="buy">
								<p class="p1">产看详情</p>
								<p class="p2">立即购买</p>
							</div>
						</li>
						`;
					}
					$(".product .z17 ul").html(html);
				}
			})

			//精品手机
			$.ajax({
				url:"../data/product.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						html += `<li>
							<div class="content">
								<img src="${res[i].url}">
								<p class="p1">${res[i].dis1}</p>
								<p class="p2">${res[i].dis2}</p>
								<p class="price">${res[i].price}</p>
							</div>
							<div class="buy">
								<p class="p1">产看详情</p>
								<p class="p2">立即购买</p>
							</div>
						</li>
						`;
					}
					$(".phone .phones ul").html(html);
				}
			})
			
			// 精选配件
			$.ajax({
				url:"../data/part.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						html += `<li>
							<div class="content">
								<img src="${res[i].url}">
								<p class="p1">${res[i].dis1}</p>
								<p class="p2">${res[i].dis2}</p>
								<p class="price">${res[i].price}</p>
							</div>
							<div class="buy">
								<p class="p1">产看详情</p>
								<p class="p2">立即购买</p>
							</div>
						</li>
						`;
					}
					$(".part .part_list").html(html);
				}
			})

			//产品热评
			$.ajax({
				url:"../data/comment.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						html += `<li>
								<div>
								<img src="${res[i].url}">
								<p class="p1">${res[i].dis1}</p>
								<p class="p2">${res[i].dis2}</p>
								</div>
						</li>
						`;
					}
					$(".comment .content").html(html);
				}
			})
			
			//视频
			$.ajax({
				url:"../data/video.json",
				type:"GET",
				success:function(res){
					var html="";
					for(var i = 0; i < res.length; i++){
						html += `<li>
								<img src="${res[i].url}">
								<p class="p1">${res[i].dis1}</p>
								<p class="p2">${res[i].dis2}</p>
								<div class="icon">
								<i class="iconfont icon-bofang"></i>
								</div>
						</li>
						`;
					}
					$(".video .content").html(html);
				}
			})

			//显示二维码
			$(".btn_right p").eq(1).hover(function(){
				$(".btn_right .qrcode").css("display","block");
			}) 
			$(".btn_right").on("mouseleave",function(){
				$(".btn_right .qrcode").css("display","none");
			})
			$(".btn_right .qrcode").on("mouseout",function(){
				$(".btn_right .qrcode").css("display","none");
			})
			//回到顶部
			$(".btn_right p").eq(2).click(function(){
				var timer = setInterval(function(){
						//<1>获取上一次的scrollTop值
						var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

						document.body.scrollTop = scrollTop - 10;
						document.documentElement.scrollTop = scrollTop - 10;
						if(scrollTop <= 0){
							clearInterval(timer);
						}

					}, 10);
			})


		})
		return "我是main函数";
	}
	return{
		main: main
	}

})