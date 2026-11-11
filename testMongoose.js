const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Distro = require('./models/distro.js').Distro;

// Сработает валидатор без обязательного поля nick:
//   ValidationError: Distro validation failed: nick: Path `nick` is required.
// Поэтому передаём обязательное поле nick.
var distro = new Distro({
  title: 'Ubuntu',
  nick: 'ubuntu'
});

distro.save().then(() => console.log('Сохранено')).catch(console.error);
