const Usuario = require("../model/Usuario");
const passport = require("../config/passport");

async function abreadd(req, res) {
  res.render("usuario/add.ejs", {});
}

async function add(req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  if (req.file != undefined) {
    var foto = req.file.filename;
  }

  await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
    res.send("O Usuario " + usuario.nome + " foi criado com sucesso!");
  });
}

async function list(req, res) {
  const usuarios = await Usuario.findAll();
  res.render("usuario/list.ejs", { Usuarios: usuarios });
}

async function filtro(req, res) {}

async function abreedit(req, res) {}

async function edit(req, res) {}

async function del(req, res) {
  await Usuario.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/admin/usuario");
}

async function index(req, res) {
  res.render("index", { msg: req.flash("msg") });
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedit,
  edit,
  del,
  index,
};
