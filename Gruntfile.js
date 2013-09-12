'use strict';
module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		clean: {
      dist: [
				'js',
				'dist'
      ],
			test: [
				'tmp'
			]
		},

    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'coffee/src',
          src: '*.coffee',
          dest: 'js/src',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'coffee/test',
          src: '*.coffee',
          dest: 'js/test',
          ext: '.js'
        }]
      }
    },

    browserify: {
      dist: {
        files: {
          'dist/codemirror-interactive-numbers.browser.js': ['js/src/interactive-numbers.js']
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }

	});

  grunt.registerTask('build', [
    'clean:dist',
    'coffee',
    'browserify:dist'
  ]);

  grunt.registerTask('release', [
    'build',
    'gh-pages'
  ]);
};
