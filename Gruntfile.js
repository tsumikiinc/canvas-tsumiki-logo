module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      demo: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [
              '*'
            ],
            dest: 'demo/'
          },
        ]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      lint: {
        src: [
          './src/*.js'
        ]
      }
    },
    uglify: {
      options: {
        preserveComments: 'some',
      },
      min: {
        expand: true,
        cwd: './src/',
        src: [
          '*.js'
        ],
        dest: 'dest/',
        ext: '.min.js'
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      live: {
        files: [
          './src/*.js'
        ],
        tasks: ['jshint', 'copy']
      }
    },
    connect: {
      options: {
        port: 9006,
        base: './demo/'
      },
      server: {
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');



  grunt.registerTask('default', ['connect', 'watch']);

  // Minify
  grunt.registerTask('min', ['jshint', 'uglify']);

};
