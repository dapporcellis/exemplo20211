exports.autenticacao = function () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash(
      "msg",
      "Você precisa estar autenticado para acessar essa página!"
    );
    res.redirect("/admin");
  };
};
