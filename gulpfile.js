//	引入gulp
const gulp = require("gulp");

//	html
gulp.task("copy-html",() => {
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//	images拷贝图片
gulp.task("images",() => {
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

/*
	将 scss文件转成css文件
	生成两部分   min.css   .css
	需要安装  gulp-sass-china  gulp-minify-css  gulp-rename
 */
const scss = require("gulp-sass-china");
const minify = require("gulp-minify-css");
const rename = require("gulp-rename");
// 整理index.scss
gulp.task("scss-index",() => {
	return gulp.src("scss/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
// 整理login.scss
gulp.task("scss-login",() => {
	return gulp.src("scss/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
// 整理enroll.scss
gulp.task("scss-enroll",() => {
	return gulp.src("scss/enroll.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("enroll.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
// 整理z17.scss
gulp.task("scss-z17",() => {
	return gulp.src("scss/z17.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("z17.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
// 整理order.scss
gulp.task("scss-order",() => {
	return gulp.src("scss/order.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("order.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
// 整理list.scss
gulp.task("scss-list",() => {
	return gulp.src("scss/list.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minify())
	.pipe(rename("list.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})


/*
	拷贝js文件
 */
gulp.task("scripts",()=>{
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

/*
	拷贝data文件  整理数据源
 */
gulp.task("data",() => {
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

/*
	上述操作是整理文件，作为整体，建立一个项目的整体，让他们一起执行。
 */
gulp.task("build",["copy-html","images","scripts","data","scss-index","scss-login","scss-enroll","scss-z17","scss-order","scss-list"],()=>{
	console.log("编译成功");
})

/*
	gulp的监听
 */
gulp.task("watch",function(){
	/*
		两个参数
		第一个是监听文件的路径
		第二个是监听到变化之后，要去完成的任务
	 */
	gulp.watch("html/*.html",["copy-html"]);
	gulp.watch("images/**/*",["images"]);
	gulp.watch("js/*.js",["scripts"]);
	gulp.watch("data/*.json",["data"]);
	gulp.watch("scss/index.scss",["scss-index"]);
	gulp.watch("scss/login.scss",["scss-login"]);
	gulp.watch("scss/enroll.scss",["scss-enroll"]);
	gulp.watch("scss/z17.scss",["scss-z17"]);
	gulp.watch("scss/order.scss",["scss-order"]);
	gulp.watch("scss/list.scss",["scss-list"]);


	
})

/*
	启动服务器
	gulp-connect
 */
var connect = require("gulp-connect");

gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,
		livereload:true  //自动刷新
	})
})


gulp.task("default",["watch","server"]);