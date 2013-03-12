'use strict';

var locals = {};

exports.index = function(req, res) {
  locals.title = '';
  locals.bodyClass = 'home';

  res.render('home', locals);
};

exports.will = function(req, res) {
  locals.title = 'Meet Will';

  res.render('generic', locals);
};

exports.megan = function(req, res) {
  locals.title = 'Meet Megan';

  res.render('generic', locals);
};

exports.story = function(req, res) {
  locals.title = 'Our Story';

  res.render('generic', locals);
};

exports.photos = function(req, res) {
  locals.title = 'Photos';
  locals.bodyClass = 'photos';

  res.render('photos', locals);
};

exports.venue = function(req, res) {
  locals.title = 'Venue';

  res.render('generic', locals);
};

exports.registry = function(req, res) {
  locals.title = 'Registry';

  res.render('generic', locals);
};

exports.contact = function(req, res) {
  locals.title = 'Contact';

  res.render('generic', locals);
};