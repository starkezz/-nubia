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
											${res[arr[i].id].price}
										</th>
										<th>
											<div>
												<span>-</span>
												<input type="text" value="${arr[i].num}"/>
												<span>+</span>
											</div>
										</th>
										<th>${oPrice}</th>
										<th>
											<p>X</p>
										</th>
									</tr>`		
						}
						$(".goods_box tbody").html(html);
						$(".order_sum1").html(sum);
						$(".order_sum2").html(sum);

					}	
				})
			
			
			






		})

		return "我是order函数";
	}
	return{
		order: order
	}

})