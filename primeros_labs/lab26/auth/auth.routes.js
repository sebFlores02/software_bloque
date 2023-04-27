const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/",
  passport.authenticate("google", { failureRedirect: "/" }),
  (request, response) => {
    response.redirect("/");
  }
);

router.get("/logout", (request, response) => {
  request.logout();
  response.redirect("/");
});

module.exports = router;
