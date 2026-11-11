var express = require('express');
var router = express.Router();
var Distro = require('../models/distro').Distro;

/* GET /distros — список всех дистрибутивов */
router.get('/', function (req, res, next) {
  res.send('Маршрутизатор дистрибутивов Linux');
});

/* GET /distros/:nick — страница конкретного дистрибутива из базы данных */
router.get('/:nick', async function (req, res, next) {
  var distros = await Distro.find({ nick: req.params.nick });
  console.log(distros);
  if (!distros.length) return next(new Error('Нет такого дистрибутива в базе данных'));
  var distro = distros[0];
  res.render('distro', {
    title: distro.title,
    picture: distro.avatar,
    desc: distro.desc
  });
});

module.exports = router;
