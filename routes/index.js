'use strict';

var fs = require('fs'),
    _  = require('lodash');

exports.index = function(req, res) {
  res.locals.title = '';
  res.locals.bodyClass = 'home';

  res.render('home');
};

exports.will = function(req, res) {
  res.locals.title = 'Meet Will';

  res.render('generic');
};

exports.megan = function(req, res) {
  res.locals.title = 'Meet Megan';

  res.render('generic');
};

exports.story = function(req, res) {
  res.locals.title = 'Our Story';

  res.render('generic');
};

exports.photos = function(req, res) {
  var absoluteThumbPath = '/images/content/photos/thumbs/',
      absoluteFullPath = '/images/content/photos/full/',
      relativePath = __dirname + '/../public' + absoluteThumbPath;

  fs.readdir(relativePath, function(err, files) {
    res.locals.photos = [];

    files = _.shuffle(files);

    files.forEach(function(file) {
      if (file.match(/\.jpg$/)) {
        res.locals.photos.push({
          thumbPath: absoluteThumbPath + file,
          fullPath: absoluteFullPath + file
        });
      }
    });

    res.locals.title = 'Photos';
    res.locals.bodyClass = 'photos';

    res.render('photos');
  });
};

exports.venue = function(req, res) {
  res.locals.title = 'Venue';

  res.render('generic');
};

exports.registry = function(req, res) {
  res.locals.title = 'Registry';

  res.render('generic');
};

exports.contact = function(req, res) {
  res.locals.title = 'Contact';

  res.render('generic');
};