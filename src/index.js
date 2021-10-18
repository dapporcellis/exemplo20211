const express = require("express");
const app = express();
const path = require("path");

//IMPORTAÇÃO DE ROTAS
const usuarioRoute = require("./routes/usuarioRoute");

require("./database/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin/usuario", usuarioRoute);

app.listen(3000, function (req, res) {
  console.log("Servidor funcionando na porta 3000!");
});
