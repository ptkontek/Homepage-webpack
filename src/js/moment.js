import "../scss/main.scss";

import moment from 'moment';

const startOfDay = moment().startOf('day').fromNow();
const time = document.querySelector('.time--js');
time.innerHTML = startOfDay;
