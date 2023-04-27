const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const passport = require("passport");
const authRoutes = require("./auth/auth.routes");
const authSetup = require("./auth/passport");
const session = require("express-session");
const csrf = require("csurf");
const isAuth = require("./util/is-auth");

// llamar constructor de express
const app = express();

app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

// configuramos ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(passport.initialize());
app.use(passport.session());

//CSRF Protection
const csrfProtection = csrf();
app.use(csrfProtection);
app.use((request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  next();
});

// const login = require('./routes/login.routes')
// app.use('/', login)

const googleRutas = require("./auth/auth.routes");
app.use("/auth/google/callback", googleRutas);

const home = require("./routes/usuarios.routes");
app.use("/home", isAuth, home);

const prueba = require("./routes/usuario.routes");
app.use("/usuario", prueba);

const signup = require("./routes/usuario.routes");
app.use("/", signup);

app.use((request, response, next) => {
  response.status(404);
  // send() envia la respuesta al cliente
  response.send("Lo sentimos, esta ruta no existe");
});

// puerto 3000
app.listen(3000);
