let gulp = require("gulp");
let connect = require("gulp-connect");

// 引入合并js插件
let concat = require("gulp-concat");

//引入压缩js插件
let uglify = require("gulp-uglify");

//引入sass插件
let sass = require("gulp-sass-china");

// 自动拷贝文件
gulp.task("index",()=>{
    gulp.src(["sass/details.css"]).pipe(gulp.dest("css")).pipe(connect.reload());
})

// 开启监听，监听某个文件发生变化，自动执行指令
gulp.task("watch",()=>{
    gulp.watch("sass/details.css",["index"])
    gulp.watch("sass/details.scss",["sass"])
})


gulp.task("sass",()=>{
    gulp.src("./sass/details.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(connect.reload());
})
