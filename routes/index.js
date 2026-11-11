var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Linux' });
});

/* Страница Ubuntu */
router.get('/ubuntu', function (req, res, next) {
  res.render('distro', {
    title: 'Ubuntu',
    picture: '/images/ubuntu.png',
    desc: 'Самый популярный дистрибутив Linux для настольных компьютеров. Рекомендуется новичкам: простая установка, большое сообщество, богатый репозиторий ПО. Базируется на Debian, выпускает релизы LTS с долгой поддержкой.'
  });
});

/* Страница Arch Linux */
router.get('/arch', function (req, res, next) {
  res.render('distro', {
    title: 'Arch Linux',
    picture: '/images/arch.png',
    desc: 'Минималистичный rolling-дистрибутив для продвинутых пользователей. Следует принципу KISS и даёт полный контроль над системой. Пакеты свежие, документация (Arch Wiki) — одна из лучших в мире Linux.'
  });
});

/* Страница Fedora */
router.get('/fedora', function (req, res, next) {
  res.render('distro', {
    title: 'Fedora',
    picture: '/images/fedora.png',
    desc: 'Инновационный дистрибутив с передовыми технологиями от Red Hat. Первым внедряет новые решения (Wayland, PipeWire, systemd), что делает его платформой для теста будущего Linux.'
  });
});

module.exports = router;
