/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    webfont: {

      // Creates a stylesheet with embedded font
      embedded: {
        src: 'images/*.svg',
        dest: 'output/embedded/',
        options: {
          font: 'fxos-tv-icons',
          types: 'ttf',
          embed: 'ttf',
          ligatures: true,
          hashes: false,
          template: 'templates/fxos-tv-icons.css',
          htmlDemoTemplate: 'templates/index.html'
        }
      },

      // Creates font files
      files: {
        src: 'images/*.svg',
        dest: 'output/files/fonts/',
        destCss: 'output/files/',
        destHtml: 'output/files/',
        options: {
          font: 'fxos-tv-icons',
          types: 'ttf',
          template: 'templates/fxos-tv-icons.css',
          htmlDemoTemplate: 'templates/index.html',
          ligatures: true,
          hashes: false,
          autoHint: false,
          templateOptions: {
            baseClass: '',
            classPrefix: '',
            mixinPrefix: ''
          }
        }
      }
    },

    // Make sure that structure conforms to
    // other shared components (grunt-webfont
    // doesn't let us specify filenames).
    rename: {
      'css-embedded': {
        src: 'output/embedded/fxos-tv-icons.css',
        dest: 'fxos-tv-icons-embedded.css',
      },

      css: {
        src: 'output/files/fxos-tv-icons.css',
        dest: 'fxos-tv-icons.css',
      },

      fonts: {
        src: 'output/files/fonts',
        dest: 'fonts'
      },

      example: {
        src: 'output/files/fxos-tv-icons.html',
        dest: 'index.html'
      }
    },

    clean: {
      fonts: 'fonts',
      output: 'output'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-rename');

  grunt.registerTask('default', [
    'clean:fonts',
    'webfont:files',
    'webfont:embedded',
    'rename',
    'clean:output'
  ]);
};
