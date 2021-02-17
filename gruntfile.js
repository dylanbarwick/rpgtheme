module.exports = function(grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          './css/styles.css': './sass/styles.scss'
        }
      }
    },

    pure_grids: {
      responsive: {
        dest: "sass/layout/_purecssresponsivegrid.scss",
        options: {
          units: 12, // 12-column grid
          mediaQueries: {
            sm: 'screen and (min-width: 35.5em)', // 568px
            md: 'screen and (min-width: 48em)',   // 768px
            lg: 'screen and (min-width: 64em)',   // 1024px
            xl: 'screen and (min-width: 80em)'    // 1280px
          }
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  // PureCSS grids.
  grunt.loadNpmTasks('grunt-pure-grids');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'pure_grids']);

};
