"use strict";

module.exports = function() {
  return function(req, res, next) {

    res.locals.siteName = 'Will & Megan are getting married',

    res.locals.gaTrackingCode = process.env.GA_TRACKING_CODE || 'UA-XXXXXXXXXX-XX'

    res.locals.canonicalURL = req.protocol + '://' + req.get('host') + req.path;

    res.locals.path = req.path;

    res.locals.bodyClass = 'generic';

    res.locals.navigation = {
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
    };

    next();
  }
}