module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
          dest: "."
        }],
        options: {
          module: "commonjs",
          noLib: true,
          target: "es6",
          sourceMap: false
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/\*\*/\*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
        tasks: ["ts", "tslint"]
      }
    },

    apidoc: {
        myapp: {
            src: "src/",
            dest: "apidoc/"
        }
    }    
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks('grunt-apidoc');

  grunt.registerTask("default", [
    "ts",
    "tslint"
  ]);

};