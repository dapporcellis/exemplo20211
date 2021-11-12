const Usuario = require("../model/Usuario");
const { Op } = require("sequelize");

async function abreadd(req, res) {
  res.render("usuario/add.ejs", { msg: req.flash("msg") });
}

async function add(req, res) {
  const { nome, email, senha } = req.body;

  if (req.file != undefined) {
    var foto = req.file.filename;
  }

  await Usuario.create({ nome, email, senha, foto }).then((usuario) => {
    req.flash("msg", "O Usuario " + usuario.nome + " foi criado com sucesso!");
    res.redirect("/admin/usuario/add");

    //res.send("O Usuario " + usuario.nome + " foi criado com sucesso!");
  });
}

async function list(req, res) {
  const usuarios = await Usuario.findAll();
  res.render("usuario/list.ejs", { Usuarios: usuarios, msg: req.flash("msg") });
}

async function filtro(req, res) {
  const usuarios = await Usuario.findAll({
    where: {
      nome: {
        [Op.iLike]: "%" + req.body.pesquisar + "%",
      },
    },
  });
  res.render("usuario/list.ejs", { Usuarios: usuarios, msg: req.flash("msg") });
}

async function abreedit(req, res) {}

async function edit(req, res) {}

async function del(req, res) {
  Usuario.destroy({ where: { id: req.params.id } }).then((usuario) => {
    req.flash("msg", "O Usuario foi deletado com sucesso!");
    res.redirect("/admin/usuario");
  });
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedit,
  edit,
  del,
};
