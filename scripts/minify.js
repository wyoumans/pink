'use strict';

var compressor = require('node-minify'),
    fs         = require('fs'),
    less       = require('less');

console.log();
console.log("===== Beginning Minification =====");
console.log();

new compressor.minify({
  type: 'gcc',
  fileIn: 'public/javascripts/main.js',
  fileOut: 'public/javascripts/main.min.js',
  callback: function(err) {
    if (err) {
      console.log(err);
    }

    console.log();
    console.log("===== Ending Minification =====");
    console.log();

  }
});

var parser = new(less.Parser)({
  paths: [__dirname + '/../public/stylesheets'],
  filename: 'main.less'
});

parser.parse(fs.readFileSync(__dirname + '/../public/stylesheets/main.less', 'utf8'), function(err, tree) {
  fs.writeFileSync(__dirname + '/../public/stylesheets/main.min.css', tree.toCSS({
    compress: true
  }))
});
