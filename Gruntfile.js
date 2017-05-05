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
      dest: 'compiled/styles/styles.css'
    }]
  },
    dist: {
      files: [{
        src: 'app/styles/styles.scss',
        dest: 'dist/styles/styles.css'
      }]
  }
},

copy: {
development: {
  files: [
    {
      cwd: 'app/view1',
      src: [ '**/*.*' ],
      dest: 'compiled/view1',
      expand: true
    },
    {
      cwd: 'app/view2',
      src: [ '**/*.*' ],
      dest: 'compiled/view2',
      expand: true
    },
    {
      expand: true,
      src: ['app/*'],
      dest: 'compiled',
      filter: 'isFile'
    }
  ],
},
},

  });

//load plugin
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');


// task registration
  grunt.registerTask('default', ['sass:development', 'copy:development' ]);
  grunt.registerTask('dist', ['concat:js' , 'uglify:dist' , 'sass:dist' ]);

};
