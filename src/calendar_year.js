import { YearMonth } from './calendar_month.js';
import { DellChild } from './add_tasks.js';
import { monthName, DateNow} from './calendar_month.js';
import { TasksInMonth } from './tasks_in_month.js';


let nowDate = new Date();
let nowDateNumber = nowDate.getDate();//текущее число месяца
let nowMonth = nowDate.getMonth(); //Получаем текущий месяц(номер)
let nowYear = nowDate.getFullYear(); //Получаем текущий год


function Year() {

    this.year_cal = document.createElement('div');
    this.year_cal.classList.add('year_calendar');
    this.year = document.createElement('ul');
    this.year.classList.add('year');
    this.months = document.createElement('div');
    this.months.classList.add('months');
    this.year_li_1 = document.createElement('li');
    this.year_li_2 = document.createElement('li');
    this.year_li_3 = document.createElement('li');
    this.year_li_1.classList.add('prev_year');
    this.year_li_2.classList.add('next_year');
    this.year_li_3.classList.add('year_name');
    this.year.appendChild(this.year_li_1);
    this.year.appendChild(this.year_li_2);
    this.year.appendChild(this.year_li_3);
    this.year_cal.appendChild(this.year);
    this.year_cal.appendChild(this.months);
    /**Строим список дней недели и возвращаем обьект**/
    this.getElement = function () {
        return this.year_cal;
    };
    
};
const yearCalendar = new Year();//создаем обьект

function setYearCalendar(year) {
    for (let i = 0; i < 12; i++) {
        const month = YearMonth(nowYear, i);
        yearCalendar.months.appendChild(month);
    };
};

function CalendarYear() {
    yearCalendar.year_li_3.textContent = nowYear;
    yearCalendar.year_li_1.innerHTML = '<i class="prev_year fa-solid fa-angles-left"></i>';
    yearCalendar.year_li_2.innerHTML = '<i class="next_year fa-solid fa-angles-right"></i>';
    setYearCalendar();
    return yearCalendar.getElement();
}

function CalendarPrevYear() {
    const now_year = document.querySelector('.year_name');
    const months = document.querySelector('.months');
    DellChild(months);//очистим DOM с месяцами
    let new_year = Number(now_year.textContent);
    now_year.textContent = new_year - 1;
    for (let i = 0; i < 12; i++) {
        const new_month = YearMonth(new_year - 1, i);//готовый месяц
        months.appendChild(new_month);
    };
};

function CalendarNextYear() {
    const now_year = document.querySelector('.year_name');
    const months = document.querySelector('.months');
    DellChild(months);//очистим DOM с месяцами
    let new_year = Number(now_year.textContent);
    now_year.textContent = new_year + 1;
    for (let i = 0; i < 12; i++) {
        const new_month = YearMonth(new_year + 1, i);//готовый месяц
        months.appendChild(new_month);
    };
};


export {CalendarYear, CalendarPrevYear, CalendarNextYear};