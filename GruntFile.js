/**
 * http://usejsdoc.org/
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/gw/UnitTest*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    // Clean Build Path
    clean : {
		build : {
			src : ["build/"]
		}
	}
  });

  // Load Task Plug-in 加载任务插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register Tasks 注册任务列表。
  grunt.registerTask('build', "Builds editor content", ['clean:build', 'uglify:build']);

};