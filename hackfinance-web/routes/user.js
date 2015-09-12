
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('index');
};
exports.register = function(req, res){
  res.render('users/register');
};
exports.signin = function(req, res){
  res.send("respond with a signin resource");
};
exports.signout = function(req, res){
  res.send("respond with a signout resource");
};