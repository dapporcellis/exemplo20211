const Usuario = require("../model/Usuario");

async function abreadd(req, res) {
  res.render("usuario/add.ejs", {});
}

async function add(req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  console.log(req.file);
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

module.exports = { abreadd, add, list, filtro, abreedit, edit, del };
