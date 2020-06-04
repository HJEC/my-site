var gulp = require("gulp");
var sass = require("gulp-sass");
var uglifycss = require("gulp-uglifycss");
var browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("css", function() {
  return gulp
    .src("./css/*.css")
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(gulp.dest("./public/"));
});

gulp.task("serve", function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./sass/*.scss", browserSync.stream());
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./public/*.js").on("change", browserSync.reload);
});

gulp.task("run", gulp.series("sass", "css"));

gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", gulp.series("sass"));
  gulp.watch("./css/*.css", gulp.series("css"));
  gulp.watch("./*.html", gulp.series("css"));
  gulp.watch("./public/*.js", gulp.series("css"));
});

gulp.task("default", gulp.parallel("run", "watch", "serve"));
