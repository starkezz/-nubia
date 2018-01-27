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
			$.ajax({
				url:"../data/list.json",
				type:"GET",
				success:function(res){
					var html= "" ;
					for(var i = 0; i < res.length; i++){
						html += `<li>
									<div class="pic_box">
										<img src="${res[i].url}" alt="">
									</div>
									<p class="dis">${res[i].dis}</p>
									<p class="price">${res[i].price}</p>
								</li>`;
					}
					$(".goods_list").html(html);
				}
			})
			


								










			
		//load函数底部
		})

		return "我是list.js函数";
	//list函数底部
	}
	return{
		main: main
	}
//最外层函数
})