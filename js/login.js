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

	//登陆页面
			// 切换登陆方式
			$("#tab-email").click(function(){
				$(".log_mail").css("display","block");
				$(".log_name").css("display","none");
				$(".tab-btn").css("color","red");
				$(".cur").css("color","black");
			})
			$("#tab-mobile").click(function(){
				$(".log_name").css("display","block");
				$(".log_mail").css("display","none");
				$(".tab-btn").css("color","black");
				$(".cur").css("color","red");
			})

			$(".login_num").on("blur",function(){
				//用户名的检测
				//将误输入的空格清除
				var oValue = $(".login_num").val();
				oValue = oValue.replace(/ /ig,"");
				$(".login_num").val(oValue);
				//判断手机号码位数和前三位
				if(!oValue.length){
					$(".check_log_num").html("请填写信息");
				}else if(!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(oValue)){
					$(".check_log_num").html("手机号码格式错误");
				}else{
					$(".check_log_num").html("");
				}
			})


	//注册页面
			//
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

			//手机验证
			$(".phone_num").on("blur",function(){
				//用户名的检测
				//将误输入的空格清除
				var oValue = $(".phone_num").val();
				oValue = oValue.replace(/ /ig,"");
				$(".phone_num").val(oValue);
				//判断手机号码位数和前三位
				if(!oValue.length){
					$(".check_num").html("请填写信息");
				}else if(!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(oValue)){
					$(".check_num").html("手机号码格式错误");
				}else{
					$(".check_num").html("");
				}
			})
			// 密码验证
			$(".password").on("blur",function(){
				//<1>将误输入的空格清除
				var oValue = $(".password").val();
				oValue = oValue.replace(/ /ig,"");
				$(".password").val(oValue);

				if(!oValue.length){
					$(".check_pass").html("请填写信息");
				}else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(oValue)){
					$(".check_pass").html("密码为6-16个（数字、字母、符号至少包含两种）");
				}else{
					$(".check_pass").html("");
				}
			})
			//邮箱验证
			$(".mail_num").on("blur",function(){
				//用户名的检测
				//将误输入的空格清除
				var oValue = $(".mail_num").val();
				oValue = oValue.replace(/ /ig,"");
				$(".mail_num").val(oValue);
				//
				if(!oValue.length){
					$(".check_mail").html("请填写信息");
				}else if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(oValue)){
					$(".check_mail").html("邮箱地址格式错误");
				}else{
					$(".check_mail").html("");
				}
			})



		})

		return "我是main_login函数";
	}
	return{
		main: main
	}

})