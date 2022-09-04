import { YearMonth } from './calendar_month.js';
import { DellChild } from './add_tasks.js';
import { CalendarMonth } from './calendar_month.js';

function OpenMonthList(year) {
    const months = document.querySelector('.months_list');
    DellChild(months);
    for (let i = 0; i < 12; i++) {
        const month = YearMonth(year, i);
        months.appendChild(month);
    };
};

function OpenMonth(year, month) {
    const calendar = document.querySelector('.calendar');    
    DellChild(calendar);
    calendar.appendChild(CalendarMonth(year, month));
    //сделать активной ВСЕ ЗАМЕТКИ
    const ls = document.querySelectorAll('.list_check');
    ls.forEach(element => {
      element.classList.remove('list_selected');  
    });          
    const ul = document.querySelector('.ul_nav');//первый список навигации
    const div = ul.querySelector('.list_check');//первый div элемента списка
    div.classList.add('list_selected');
};


export {OpenMonth, OpenMonthList}