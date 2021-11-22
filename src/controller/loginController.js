const passport = require("../config/passport");

async function abrelogin(req, res) {
  res.render("index.ejs", { msg: req.flash("msg") });
}

async function sair(req, res) {
  req.logout();
  res.render("index.ejs", { msg: req.flash("msg") });
}

const logar = passport.authenticate("local", {
  successRedirect: "/admin/usuario",
  failureRedirect: "/admin",
  failureFlash: true,
});

module.exports = {
  abrelogin,
  logar,
  sair,
};
