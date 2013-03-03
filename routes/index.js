exports.index = function(req, res) {
  res.render('index', {
    title: 'yay'
  });
};

exports.will = function(req, res){
  res.render('generic', {
    title: 'Meet Will'
  });
};

exports.megan = function(req, res){
  res.render('generic', {
    title: 'Meet Megan'
  });
};

exports.story = function(req, res){
  res.render('generic', {
    title: 'Our Story'
  });
};

exports.photos = function(req, res){
  res.render('generic', {
    title: 'Photos'
  });
};

exports.venue = function(req, res){
  res.render('generic', {
    title: 'Venue'
  });
};

exports.registry = function(req, res){
  res.render('generic', {
    title: 'Registry'
  });
};

exports.contact = function(req, res){
  res.render('generic', {
    title: 'Contact'
  });
};