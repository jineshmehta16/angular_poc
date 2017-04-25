module.exports = function(grunt) {

  grunt.initConfig({
    concat:{
      js:{
        src:['app/*.js'],
        dest: 'dist/scripts.js'
      }
    },

    uglify: {
    dist: {
      files: [{
        src: 'dist/scripts.js',
        dest: 'dist/scripts.js'
      }]
    }
  },

  sass: {
  development: {
    options: {
        style: 'expanded',
        sourceMap: true
    },
    files: [{
      src: 'app/styles/styles.scss',
      dest: 'compiled/styles.css'
    }]
  },
    dist: {
      files: [{
        src: 'app/styles/styles.scss',
        dest: 'dist/styles.css'
      }]
  }
}

  });

//load plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  //grunt.loadNpmTasks('grunt-contrib-copy');


// task registration
  grunt.registerTask('default', ['sass:development' ]);
  grunt.registerTask('dist', ['concat:js' , 'uglify:dist' , 'sass:dist' ]);

};
