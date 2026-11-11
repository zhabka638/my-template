// MongoDB. Консоль mongo, команда find, команда update.
//
// Этот файл — справочник по упражнениям с консолью MongoDB (модуль 3).
// Запросы выполняются в консоли mongosh после запуска MongoDB
// (brew services start mongodb-community) и подключения к базе learn.
//
// Перед упражнениями: создаём базу learn и коллекцию unicorns с 12 документами:
//
//   use learn
//   db.unicorns.insert({name: 'Horny', birthday: new Date(1992,2,13,7,47), loves: ['carrot','papaya'], weight: 600, color: 'black', vampires: 63});
//   db.unicorns.insert({name: 'Aurora', birthday: new Date(1991, 0, 24, 13, 0), loves: ['carrot', 'grape'], weight: 450, color: 'white', vampires: 43});
//   db.unicorns.insert({name: 'Unicrom', birthday: new Date(1973, 1, 9, 22, 10), loves: ['energon', 'redbull'], weight: 984, color: 'black', vampires: 182});
//   db.unicorns.insert({name: 'Roodles', birthday: new Date(1979, 7, 18, 18, 44), loves: ['apple'], weight: 575, color: 'black', vampires: 99});
//   db.unicorns.insert({name: 'Solnara', birthday: new Date(1985, 6, 4, 2, 1), loves:['apple', 'carrot', 'chocolate'], weight:550, color:'white', vampires:80});
//   db.unicorns.insert({name:'Ayna', birthday: new Date(1998, 2, 7, 8, 30), loves: ['strawberry', 'lemon'], weight: 733, color: 'white', vampires: 40});
//   db.unicorns.insert({name:'Kenny', birthday: new Date(1997, 6, 1, 10, 42), loves: ['grape', 'lemon'], weight: 690,  color: 'black', vampires: 39});
//   db.unicorns.insert({name: 'Raleigh', birthday: new Date(2005, 4, 3, 0, 57), loves: ['apple', 'sugar'], weight: 421, color: 'black', vampires: 2});
//   db.unicorns.insert({name: 'Leia', birthday: new Date(2001, 9, 8, 14, 53), loves: ['apple', 'watermelon'], weight: 601, color: 'white', vampires: 33});
//   db.unicorns.insert({name: 'Pilot', birthday: new Date(1997, 2, 1, 5, 3), loves: ['apple', 'watermelon'], weight: 650, color: 'black', vampires: 54});
//   db.unicorns.insert({name: 'Nimue', birthday: new Date(1999, 11, 20, 16, 15), loves: ['grape', 'carrot'], weight: 540, color: 'white'});
//   db.unicorns.insert({name: 'Dunx', birthday: new Date(1976, 6, 18, 18, 18), loves: ['grape', 'watermelon'], weight: 704, color: 'black', vampires: 165});

// Структура хранения: база состоит из коллекций, коллекция — из документов,
// документ — из пар поле/значение.
//   learn — база, unicorns — коллекция, {name, color, weight, ...} — документ.

// === 3.2 Команда FIND ===
// Условия: $or, $nor, $lt, $lte, $gt, $gte, $ne, $exists.
// Обращение к элементам массива: {loves:"watermelon"} — поиск по элементу массива.

// 1. Найти чёрных единорогов, которые весят больше 700
db.unicorns.find({ color: "black", weight: { $gt: 700 } });

// 2. Найти не чёрных единорогов, вес которых не меньше 701
db.unicorns.find({ color: { $ne: "black" }, weight: { $gte: 701 } });

// 3. Найти единорогов без статистики убитых вампиров (поля vampires нет)
db.unicorns.find({ vampires: { $exists: false } });

// 4. Найти белых единорогов, которые весят меньше 500
db.unicorns.find({ color: "white", weight: { $lt: 500 } });

// 5. Найти, сколько единорогов не весят 600
db.unicorns.find({ weight: { $ne: 600 } }).count();

// 6. Найти чёрных единорогов, которые любят арбузы или весят больше 900
db.unicorns.find({ color: "black", $or: [{ loves: "watermelon" }, { weight: { $gt: 900 } }] });

// 7. Найти, сколько единорогов любят яблоки или морковку
db.unicorns.find({ $or: [{ loves: 'apple' }, { loves: "carrot" }] }).count();

// 8. Найти, сколько единорогов не любят яблоки и не любят морковку
db.unicorns.find({ $nor: [{ loves: 'apple' }, { loves: 'carrot' }] });

// 9. Найти единорогов, которые любят виноград или лимон
db.unicorns.find({ $or: [{ loves: 'grape' }, { loves: "lemon" }] });

// 10. Найти единорогов, которые любят яблоки или убили вампиров не меньше 63
db.unicorns.find({ $or: [{ loves: "apple" }, { vampires: { $gte: 63 } }] });

// === 3.3 Команда UPDATE ===
// Условия: $set, $inc, $push, $pull, $mul.

// 11. Единорог Roodles похудел на 10
db.unicorns.update({ name: "Roodles" }, { $inc: { weight: -10 } });

// 12. Единорог Pilot убил ещё 2 вампиров
db.unicorns.update({ name: "Pilot" }, { $inc: { vampires: 2 } });

// 13. Единорог Aurora полюбил сахар
db.unicorns.update({ name: "Aurora" }, { $push: { loves: "sugar" } });

// 14. Добавить информацию, что Aurora привита (vaccinated: true)
db.unicorns.update({ name: "Aurora" }, { $set: { vaccinated: true } });

// 15. Проверить, какие единороги привиты
db.unicorns.find({ vaccinated: true });

// 16. Единорог Dunx разлюбил виноград
db.unicorns.update({ name: "Dunx" }, { $pull: { loves: "grape" } });

// 17. Вес единорога Aurora увеличился в два раза
db.unicorns.update({ name: "Aurora" }, { $mul: { weight: 2 } });

// === Базовые команды консоли mongo ===
//   show dbs                          список баз данных
//   use learn                          переключение на базу learn
//   db.getCollectionNames()            список коллекций базы
//   db.getName()                       в какой базе находимся
//   db.unicorns.count()                количество документов в коллекции
//   db.dropDatabase()                  удалить текущую базу
//   db.unicorns.find().sort({vampires:-1})   сортировка по убыванию
