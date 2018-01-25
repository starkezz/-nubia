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
				var top = $(window).scrollTop();
				if(top > 100){
					$(".top").css("display","block");
					$(".top").animate({"height":60},1000);
				}else{
					$(".top").animate({"height":0},1000);
					$(".top").css("display","none");

				}

				
			})



		})

		return "我是z17.js函数";
	}
	return{
		main: main
	}

})