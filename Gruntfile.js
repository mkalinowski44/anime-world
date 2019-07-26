module.exports = function(grunt) {
   require('load-grunt-tasks')(grunt);

   grunt.initConfig({
      watch: {
         scripts: {
            files: [
               'scss/**',
               'js/**',
               'img/**',
               'html/**'
            ],
            tasks: ['build']
         },
      },

      clean: {
         dist: "dist/"
      },

      targethtml: {
         dist: {
            files: [
               {
                  expand: true,
                  cwd: "html/",
                  src: "*.html",
                  dest: "dist/html/"
               }
            ]
         }
      },

      concat: {
         dist: {
            files: {
                  "dist/js/app.min.js": [
                     "js/materialize.js",
                     "js/jquery-slim.js",
                     "js/countUp.js",
                     "js/slick.js",

                     "js/app/utils.js",
                     "js/app/main.js",
                     "js/app/navigation.js",
                     "js/app/parallax.js",
                     "js/app/search.js",
                     "js/app/counters.js",
                     "js/app/sliders.js",
                     "js/app/sidebars.js",
                  ]
            }
         }
      },

      uglify: {
         dist: {
            files: [
                  {
                     expand: true,
                     cwd: "dist/js/",
                     src: "*.js",
                     dest: "dist/js/"
                  }
            ]
         }
      },

      sass: {
         options: {
            style: 'expanded'
         },
         dist: {
            files: {
               "css/main.css": "scss/main.scss"
            }
         }
      },

      autoprefixer: {
         options: {
            browsers: ['opera 12', 'ff 15', 'chrome 25']
         },
         css: {
            "src": "css/main.css",
            "dest": "css/main.css"
         },
      },

      cssmin: {
         dist: {
            files: {
                  "dist/css/main.min.css": "css/main.css"
            }
         }
      },

      htmlmin: {
         dist: {
            options: {
                  collapseWhitespace: true
            },
            files: [
                  {
                     expand: true,
                     cwd: "dist/html/",
                     src: "**",
                     dest: "dist/html/"
                  }
            ]
         }
      },

      copy: {
         dist: {
            files: [
                  {expand: true, cwd: "img/", src: "**", dest: "dist/img/"}
            ]
         }
      }
   });

   const fullBuild = [
      "clean",
      "targethtml",
      "concat",
      "uglify",
      "sass",
      "autoprefixer",
      "cssmin",
      "htmlmin",
      "copy"
   ];

   const fastBuild = [
      "sass",
      "autoprefixer",
   ]

   const isFast = 1;

   grunt.registerTask("build", (isFast ? fastBuild : fullBuild));

}