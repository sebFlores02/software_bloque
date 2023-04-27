const express = require("express");
const passport = require("passport");

const router = express.Router();

const usuariosController = require("../controllers/usuario.controllers");

router.get("/login", usuariosController.get_login);

router.post("/login", usuariosController.post_login);

router.get("/", usuariosController.get_signup);

router.post("/", usuariosController.post_signup);

router.get("/logout", usuariosController.logout);

router.get("/", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render("index", { user: req.user });
  } else {
    res.render("login");
  }
});

module.exports = router;
