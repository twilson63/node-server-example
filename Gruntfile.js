module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dev: {
        src: ['app/foo.js', 'app/bar.js'],
        dest: 'public/js/app.js'
      }
    },
    jshint: {
      dev: {
        files: {
          src: ['app/foo.js', 'app/bar.js']
        }
      }
    },
    uglify: {
      dev: {
        src: 'public/js/app.js',
        dest: 'public/js/app.min.js'
      }
    },
    watch: {
      dev: {
        files: ['app/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify']
      }
    },
    connect: {
      server: {
        options: {
          keepalive: false,
          base: '.',
          port: 3000
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('default', ['jshint','concat']);
}