var gulp = require("gulp");
var ts = require("gulp-typescript");
var apidoc = require('gapidoc');
var jsdoc = require('gulp-jsdoc3');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('apidoc', function(){
          apidoc.exec({
            src: "src/",
            dest: "docs/apis"
          });
});

gulp.task('codedoc', function (cb) {
    var config = require('./jsdoc.json');
    gulp.src(['jsdoc.md','./dist/src/**/*.js'], {read: false})
         .pipe(jsdoc(config, cb));
});

gulp.task('gendoc', ['apidoc','codedoc']);