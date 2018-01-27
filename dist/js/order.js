/*
	编写主页的代码
	在这里编写代码都必须遵从AMD规范
*/

/*
	注意：引入jq去进行开发
*/
define(["jquery", "jquery-cookie"], function($){
	var order = function(){
		$(function(){
			//加载购物车中商品
			function load_sc(){
				$.ajax({
					url: "../data/z17.json",
					type: "get",
					success: function(res){
						//a:找出所有cookie数据
						
						//待解决！！
						// if(!$.cookie("goods")){
						// 	//要将购物车内的商品清空
						// 	$(".sc_right ul").html("");
						// 	return;
						// }

						var arr = eval($.cookie("goods"));
						var html = "";
						var sum = null;
						for(var i = 0; i < arr.length; i++){
							//用id当做下标取出数据
							var oPrice = arr[i].num * res[arr[i].id].price;
							sum += oPrice;
							html += `<tr>
										<th>
											<img src="${res[arr[i].id].pic1}"/>
										</th>
										<th>
											${res[arr[i].id].color}
										</th>
										<th>
											<span>￥</span>${res[arr[i].id].price}
										</th>
										<th>
											<div>
												<span class="order order${res[arr[i].id].id}">-</span>
												<input type="text" value="${arr[i].num}"/>
												<span class="order order${res[arr[i].id].id}">+</span>
											</div>
										</th>
										<th><span>￥</span>${oPrice}</th>
										<th>
											<p class="order_cl order_cl${res[arr[i].id].id}">X</p>
										</th>
									</tr>`		
						}
						$(".goods_box tbody").html(html);
						$(".order_sum1").html(sum);
						$(".order_sum2").html(sum);

					}	
				})
			}
				
			//页面载入时加载cookie
			load_sc();

			//增加减少按钮的实现
			$(".goods_box tbody").on("click",".order",function(){
				var str = $.cookie("goods");
				var arr = eval(str);

				// 点击的按钮对应的ID
				var btnId =this.className.substring(11);
				for(var i = 0; i < arr.length; i++){

					if(btnId == arr[i].id){
						switch($(this).html()){
							case "+":
								arr[i].num += 1;
								break;
							case "-":
								if(arr[i].num <=1){
									var tmp = confirm("您确定不购买该商品？");
									if(tmp){
										arr.splice(i,1);
										var cookieStr = JSON.stringify(arr);
										$.cookie("goods", cookieStr, {
											expires: 7
										});
										load_sc();
									}
								}else{
									arr[i].num -=1;
								}
								break;
							default:
								break;
						}
					}
				}
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {
					expires: 7
				});
				load_sc();

				goodsNum();
			})


			//关闭此商品按钮的实现
			$(".goods_box tbody").on("click",".order_cl",function(){
				var str = $.cookie("goods");
				var arr = eval(str);

				// 点击的按钮对应的ID
				var btnId =this.className.substring(17);
				for(var i = 0; i < arr.length; i++){
					if(btnId == arr[i].id){
						var tmp = confirm("您确定不购买该商品？");
						if(tmp){
							arr.splice(i,1);
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							});
							load_sc();
						}
					}
				}
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {
					expires: 7
				});
				load_sc();
				goodsNum();
			})

			//计算商品总数
			function goodsNum(){
				var str = $.cookie("goods");
				var arr = eval(str);
				var sum = null;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".goods_num").html(sum);
			}
			
			//页面载入时计算商品总数
			goodsNum();


		//load函数底部
		})

		return "我是order函数";
	//order函数底部
	}
	return{
		order: order
	}
//最外层函数
})