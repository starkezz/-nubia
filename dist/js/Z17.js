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
			
			$(window).on("scroll",function(){
				//顶部悬浮
				var top = $(window).scrollTop();
				if(top >= 100){
					$(".top").css("display","block");
					$(".top").animate({"height":60},500);
				}else{
					$(".top").css("display","none");
				}

				//left随着页面滚动设置位置
				if(top >= 127 && top < 620 ){
					
					$(".main_left").css({"position":"fixed","top":0});
				}else if(top >= 620){
					$(".main_left").css({"position":"absolute","bottom":0,"top":""});
				}else{
					$(".main_left").css({"position":""});
				}

				
			})
			//设置滚动事件之前的left位置
			var left_top = $(window).scrollTop();
			if(left_top >= 127 && left_top < 620 ){		
				$(".main_left").css({"position":"fixed","top":0});
				//$(".bigpic").css({"position":"fixed","top":0});
			}else if(left_top >= 620){
				$(".main_left").css({"position":"absolute","bottom":0});
			}else{
				$(".main_left").css({"position":""});
				//$(".bigpic").css({"position":""});
			}


			//获取到商品参数
			$.ajax({
				url:"../data/z17.json",
				type:"GET",
				success:function(res){
					// 获取到颜色
					$("#color1").html(res[0].color);
					$("#color2").html(res[1].color);
					//获取到小图
					$(".main_left ul li").eq(1).find("img").attr("src",res[0].pic2);
					$(".main_left ul li").eq(0).find("img").attr("src",res[0].pic1);
					$(".main_left ul li").eq(2).find("img").attr("src",res[0].pic3);
					$(".main_left ul li").eq(3).find("img").attr("src",res[0].pic4);
					//显示大图
					$(".main_left .pic1").attr("src",res[0].pic1);
					$(".main .bigpic img").attr("src",res[0].pic1);

					//点击切换图片
					$(".main_left ul li").eq(0).click(function(){
						$(".main_left .pic1").attr("src",res[0].pic1);
						$(".main .bigpic img").attr("src",res[0].pic1);
						$(".main_left ul li").eq(0).attr("class","active");
						$(".main_left ul li").eq(0).siblings().attr("class","");
					})
					$(".main_left ul li").eq(1).click(function(){
						$(".main_left .pic1").attr("src",res[0].pic2);
						$(".main .bigpic img").attr("src",res[0].pic2);
						$(".main_left ul li").eq(1).attr("class","active");
						$(".main_left ul li").eq(1).siblings().attr("class","");
					})
					$(".main_left ul li").eq(2).click(function(){
						$(".main_left .pic1").attr("src",res[0].pic3);
						$(".main .bigpic img").attr("src",res[0].pic3);
						$(".main_left ul li").eq(2).attr("class","active");
						$(".main_left ul li").eq(2).siblings().attr("class","");
					})
					$(".main_left ul li").eq(3).click(function(){
						$(".main_left .pic1").attr("src",res[0].pic4);
						$(".main .bigpic img").attr("src",res[0].pic4);
						$(".main_left ul li").eq(3).attr("class","active");
						$(".main_left ul li").eq(3).siblings().attr("class","");
					})

					//点击切换手机信息
					//黑金
					$("#color2").click(function(){
						$("#color2").attr("class","active");
						$("#color2").siblings().attr("class","");
						//获取小图
						$(".main_left ul li").eq(1).find("img").attr("src",res[1].pic2);
						$(".main_left ul li").eq(0).find("img").attr("src",res[1].pic1);
						$(".main_left ul li").eq(2).find("img").attr("src",res[1].pic3);
						$(".main_left ul li").eq(3).find("img").attr("src",res[1].pic4);
						//显示大图
						$(".main_left .pic1").attr("src",res[1].pic1);
						$(".main .bigpic img").attr("src",res[1].pic1);

						//顶部信息显示
						$(".top_color").html(res[1].color);
						$(".top_price").html(res[1].price);

						//点击切换图片
						$(".main_left ul li").eq(0).click(function(){
							$(".main_left .pic1").attr("src",res[1].pic1);
							$(".main .bigpic img").attr("src",res[1].pic1);
							$(".main_left ul li").eq(0).attr("class","active");
							$(".main_left ul li").eq(0).siblings().attr("class","");
						})
						$(".main_left ul li").eq(1).click(function(){
							$(".main_left .pic1").attr("src",res[1].pic2);
							$(".main .bigpic img").attr("src",res[1].pic2);
							$(".main_left ul li").eq(1).attr("class","active");
							$(".main_left ul li").eq(1).siblings().attr("class","");
						})
						$(".main_left ul li").eq(2).click(function(){
							$(".main_left .pic1").attr("src",res[1].pic3);
							$(".main .bigpic img").attr("src",res[1].pic3);
							$(".main_left ul li").eq(2).attr("class","active");
							$(".main_left ul li").eq(2).siblings().attr("class","");
						})
						$(".main_left ul li").eq(3).click(function(){
							$(".main_left .pic1").attr("src",res[1].pic4);
							$(".main .bigpic img").attr("src",res[1].pic4);
							$(".main_left ul li").eq(3).attr("class","active");
							$(".main_left ul li").eq(3).siblings().attr("class","");
						})

					})
					//极光蓝
					$("#color1").click(function(){
						$("#color1").attr("class","active");
						$("#color1").siblings().attr("class","");
						//获取小图
						$(".main_left ul li").eq(1).find("img").attr("src",res[0].pic2);
						$(".main_left ul li").eq(0).find("img").attr("src",res[0].pic1);
						$(".main_left ul li").eq(2).find("img").attr("src",res[0].pic3);
						$(".main_left ul li").eq(3).find("img").attr("src",res[0].pic4);
						//显示大图
						$(".main_left .pic1").attr("src",res[0].pic1);
						$(".main .bigpic img").attr("src",res[0].pic1);
						//顶部信息显示
						$(".top_color").html(res[0].color);
						$(".top_price").html(res[0].price);

						//点击切换图片
						$(".main_left ul li").eq(0).click(function(){
							$(".main_left .pic1").attr("src",res[0].pic1);
							$(".main .bigpic img").attr("src",res[0].pic1);
							$(".main_left ul li").eq(0).attr("class","active");
							$(".main_left ul li").eq(0).siblings().attr("class","");
						})
						$(".main_left ul li").eq(1).click(function(){
							$(".main_left .pic1").attr("src",res[0].pic2);
							$(".main .bigpic img").attr("src",res[0].pic2);
							$(".main_left ul li").eq(1).attr("class","active");
							$(".main_left ul li").eq(1).siblings().attr("class","");
						})
						$(".main_left ul li").eq(2).click(function(){
							$(".main_left .pic1").attr("src",res[0].pic3);
							$(".main .bigpic img").attr("src",res[0].pic3);
							$(".main_left ul li").eq(2).attr("class","active");
							$(".main_left ul li").eq(2).siblings().attr("class","");
						})
						$(".main_left ul li").eq(3).click(function(){
							$(".main_left .pic1").attr("src",res[0].pic4);
							$(".main .bigpic img").attr("src",res[0].pic4);
							$(".main_left ul li").eq(3).attr("class","active");
							$(".main_left ul li").eq(3).siblings().attr("class","");
						})

					})



				}
			})






			//设置cookie，添加到购物车
			$(".buy").click(function(){
				var which = $("#color1").attr("class");
				var id = null;
				if(which == "active"){
					id = 0;
				}else{
					id = 1;
				}
				
				var first = $.cookie("goods") == null ? true : false;
				if(first){ //第一次添加
					//设置cookie  [{id:id,num:1}]
					$.cookie("goods", "[{id:" + id + ",num:1}]", {
						expires: 7
					});
				}else{
					//c:判断之前是否有添加过该商品
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品

					//b:遍历所有的对象，判断id是否有相同的，如果有num++
					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num++;

							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
							same = true;
							break;
						}
					}

					//e:是否有相同的商品 新增商品 数量是1
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
				}

			})


			//放大镜
			
			$(".mark").mousemove(function(){
				$(".layer").css("display","block");
				$(".bigpic").css("display","block");			
			})
				
			$(".mark").mouseout(function(){
				$(".layer").css("display","none");
				$(".bigpic").css("display","none");
			})
			
			
			$(".mark").mousemove(function(ev){
				var e = ev || window.event;
				
				var l= e.pageX-$(".mark").offset().left - $(".layer").width()/2 ;
				
				var t= e.pageY-$(".mark").offset().top;
				if(l<0)
				{
					l=0;
				}
				else if(l >$(".mark").width()-$(".layer").width())
				{
					l=$(".mark").width()-$(".layer").width();
				}
				
				if(t<0)
				{
					t=0;
				}
				else if(t>$(".mark").height()-$(".layer").height())
				{
					t=$(".mark").height()-$(".layer").height();
				}
				
				$(".layer").css("left",l);
				$(".layer").css("top",t);
				
				var percentX=l/($(".mark").width()-$(".layer").width());
				var percentY=t/($(".mark").height()-$(".layer").height());
				
				var _left =- percentX * ($(".bigpic img").width()-$(".bigpic").width());
				var _top = -percentY * ($(".bigpic img").height()-$(".bigpic").height());
				$(".bigpic img").css("left",_left);
				$(".bigpic img").css("top",_top);
			})

			//立即购买闪烁
			$(".buy").mousedown(function(){
				$(".buy").css("color","black");
				$(".buy_ok").css("opacity",0.7);
			})
			$(".buy").mouseup(function(){
				$(".buy").css("color","white");
				$(".buy_ok").stop().animate({"opacity":0},500);
				$(".buy_ok").css("opacity",0.7);
				
			})












		})

		return "我是z17.js函数";
	}
	return{
		main: main
	}

})