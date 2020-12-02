var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sassCompile", function () {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/styles"));
});

gulp.task("default", function () {
  return gulp.watch("src/sass/*/*.scss", gulp.series("sassCompile"));
});
