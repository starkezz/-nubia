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
			// 切换登陆方式
			$("#tab-email").click(function(){
				$(".reg-phone").css("display","block");
				$(".reg-id").css("display","none");
				$(".tab-btn").css("color","red");
				$(".cur").css("color","black");
			})
			$("#tab-mobile").click(function(){
				$(".reg-id").css("display","block");
				$(".reg-phone").css("display","none");
				$(".tab-btn").css("color","black");
				$(".cur").css("color","red");
			})

			//切换注册方式
			$(".tab_email").click(function(){
				$(".en_email").css("display","block");
				$(".en_phone").css("display","none");
				$(".tab_email").css("color","red");
				$(".tab_phone").css("color","black");
			})
			$(".tab_phone").click(function(){
				$(".en_phone").css("display","block");
				$(".en_email").css("display","none");
				$(".tab_phone").css("color","red");
				$(".tab_email").css("color","black");
			})

		})

		return "我是main_login函数";
	}
	return{
		main: main
	}

})