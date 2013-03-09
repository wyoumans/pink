'use strict';

var locals = {};

exports.index = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = '';
  locals.bodyClass = 'home';

  res.render('home', locals);
};

exports.will = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Meet Will';

  res.render('generic', locals);
};

exports.megan = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Meet Megan';

  res.render('generic', locals);
};

exports.story = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Our Story';

  res.render('generic', locals);
};

exports.photos = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Photos';

  res.render('generic', locals);
};

exports.venue = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Venue';

  res.render('generic', locals);
};

exports.registry = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Registry';

  res.render('generic', locals);
};

exports.contact = function(req, res) {
  locals = getSharedLocals(req);
  locals.title = 'Contact';

  res.render('generic', locals);
};

function getSharedLocals(req) {
  return {
    path: req.path,
    bodyClass: 'generic',
    navigation: {
      left: [{
        title: 'Meet Will',
        href: '/will'
      }, {
        title: 'Meet Megan',
        href: '/megan'
      }, {
        title: 'Our Story',
        href: '/story'
      }, ],
      right: [{
        title: 'Photos',
        href: '/photos'
      }, {
        title: 'Venue',
        href: '/venue'
      }, {
        title: 'Registry',
        href: '/registry'
      }, {
        title: 'Contact',
        href: '/contact'
      }]
    }
  }
}