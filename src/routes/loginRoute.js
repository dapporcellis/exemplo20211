const express = require("express");
const routes = express.Router();
const usuarioController = require("../controller/usuarioController");
const passport = require("../config/passport");

routes.get("/", usuarioController.index);
//ADD
routes.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/admin/usuario",
    failureRedirect: "/admin",
    failureFlash: true,
  })
);

module.exports = routes;
