import moment from 'moment';
import result from './data.txt';
import './style.css';

console.log(result);
console.log('CSS загружен через Webpack!');
console.log('it`s work');


// Устанавливаем русскую локаль
import 'moment/locale/ru.js';
moment.locale('ru');

// Текущая дата и время
const now = moment();
console.log(now.format()); // 2025-04-15T12:00:00+03:00

// Форматирование
console.log(now.format('DD.MM.YYYY'));       // 15.04.2025
console.log(now.format('dddd, D MMMM YYYY')); // вторник, 15 апреля 2025

// Прибавить/Вычесть время
console.log(now.add(7, 'days').format('DD.MM.YYYY')); // 22.04.2025
console.log(now.subtract(1, 'month').format('DD.MM.YYYY')); // 15.03.2025

// Разница между датами
const deadline = moment('2025-05-01');
const daysLeft = deadline.diff(now, 'days');
console.log(`До дедлайна осталось ${daysLeft} дней`);