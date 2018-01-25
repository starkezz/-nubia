console.log("载入成功");

/*
	设置需要引入的js文件
*/
require.config({
	paths:{
		//模块名字：模块路径
		"jquery":"jquery-1.11.3",  //遵从AMD规范
		"jquery-cookie":"jquery.cookie",
		"index":"index"
	},
	shim:{
		/*
			在实例的app中，还用到jquery以外的第三方库
			如果该类库不是一个标准AMD规范，我又不想去改代码
			需要通过下述方式定义该文件
		*/
		

		//设置依赖关系
		"jquery-cookie":["jquery"]

	}
})

//要去调用index.js中的main
require(["index"],function(index){
	console.log(index.main());
})


//调用fade.js 中的 fade函数
require(["fade"], function(fade){
	console.log(fade.fade());
})


//要去调用login.js中的main
require(["login"],function(login){
	console.log(login.main());
})

//要去调用Z17.js中的main
require(["z17"],function(z17){
	console.log(z17.main());
})
