import { ShowTasks } from "./show_tasks";
import { TasksInMonth } from './tasks_in_month.js';
import { DellChild, AddTaskBtn } from './add_tasks.js';

const tasks = document.querySelector('.tasks');
/*****СТРАНИЦАЯ С КАЛЕНДАРЕМ НА МЕСЯЦ*************************/
const days_arr = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
const monthName = ['январь','февраль','март','апрель','май',
'июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];

let nowDate = new Date();
let nowDateNumber = nowDate.getDate();//текущее число месяца
let nowMonth = nowDate.getMonth(); //Получаем текущий месяц(номер)
let nowYear = nowDate.getFullYear(); //Получаем текущий год

function Month () {
    this.month_cal = document.createElement('div');
    this.month_cal.classList.add('month-calendar');
    this.month = document.createElement('ul');
    this.weekdays = document.createElement('ul');
    this.days = document.createElement('ul');
    this.month.classList.add('month');
    this.weekdays.classList.add('weekdays');
    this.days.classList.add('days');
    this.month_li_1 = document.createElement('li');
    this.month_li_2 = document.createElement('li');
    this.month_li_1.classList.add('prev');
    this.month_li_2.classList.add('next');
    this.month_li_3 = document.createElement('li');
    this.month_li_4 = document.createElement('li');
    this.month_li_3.classList.add('month_name');
    this.month_li_4.classList.add('year_name');
    this.month.appendChild(this.month_li_1);
    this.month.appendChild(this.month_li_2);
    this.month.appendChild(this.month_li_3);
    this.month.appendChild(this.month_li_4);
    this.month_cal.appendChild(this.month);
    this.month_cal.appendChild(this.weekdays);
    this.month_cal.appendChild(this.days);    
    /**Строим список дней недели и возвращаем обьект**/
    this.getElement = function () {
        for (let i = 0; i <= 6; i++) {
            const li = document.createElement('li');
            li.textContent = days_arr[i];
            this.weekdays.appendChild(li);
        }
        return this.month_cal;
    };
};
const monthCalendar = new Month();//содаем обьект

function setMonthCalendar (year, month) {
    let daysText = '';
    /***количество дней в месяце**/
    let monthDays = new Date(year, month + 1, 0).getDate();
    /***номер текущего дня в неделе***/
    let monthPrefix = new Date(year, month, 0).getDay();

    if (monthPrefix > 0) {
        for (let i = 1; i <= monthPrefix; i++) {
            daysText += '<li><p></p><div></div></li>';
        }
    };
    for (let i = 1; i <= monthDays; i++) {
            daysText += '<li id='+i+' class="day"><p>'+i+'</p><div></div></li>';
    };
//*вернем два значения, контент и с откуда начинается нумерация
    return [daysText, monthPrefix];
}

function CalendarMonth(year, month) {//также показывает при нажати на месяц из списка
    let opening_year = nowYear;
    let opening_month = nowMonth;
    if (year && month) {
        opening_year = year;
        opening_month = monthName.indexOf(month);
    };
    monthCalendar.month_li_1.innerHTML = '<i class="prev fa-solid fa-angles-left"></i>';
    monthCalendar.month_li_2.innerHTML = '<i class="next fa-solid fa-angles-right"></i>';
    monthCalendar.month_li_3.textContent = monthName[opening_month];
    monthCalendar.month_li_4.textContent = nowYear;
    monthCalendar.days.innerHTML = setMonthCalendar(nowYear, opening_month)[0];
    DateNow(opening_year, opening_month);
    //пометки задач на календарь
    TasksInMonth(opening_year, monthName[opening_month], monthCalendar.days);
    //сделать активной ВСЕ ЗАМЕТКИ
    const ul = document.querySelector('.ul_nav');//первый список навигации
    const div = ul.querySelector('.list_check');//первый div элемента списка
    div.classList.add('list_selected');    
    DellChild(monthCalendar.weekdays);//удаляем название дней из обьекта
    //возвращаем обьект
    return monthCalendar.getElement();
}

//текущий день добавим ему класс и выведем задачи если месяц текущий
function DateNow(year, month, m_day) {
    let days;
    if (year==nowYear && month==nowMonth) {
        if (m_day) {  //показать текущий день в месяце на годовом календаре
            days = m_day.getElementsByTagName('li');
        } else {
            days = monthCalendar.days.getElementsByTagName('li');
        };
        let now_day = days[setMonthCalendar(year, month)[1] + nowDateNumber-1];
        now_day.classList.add('date_now', 'active_day');
        DellChild(tasks);
        tasks.appendChild(ShowTasks(year, monthName[month], now_day.id));       
    };
}

function CalendarPrev() {
    const month_name = document.querySelector('.month_name');
    const year_name = document.querySelector('.year_name');
    let curDate = new Date(year_name.textContent,
        monthName.indexOf(month_name.textContent));//новый обьект будет пока содержать текущую дату
    curDate.setMonth(curDate.getMonth()-1);//меняем месяц на предыдущий
    let month = curDate.getMonth();
    let year = curDate.getFullYear();
    monthCalendar.month_li_3.textContent = monthName[month];
    monthCalendar.month_li_4.textContent = year;
    monthCalendar.days.innerHTML = '';//очищаем календарь дни
    monthCalendar.days.innerHTML = setMonthCalendar(year, month)[0];
    /***очистим секцию списка дел*/
    DellChild(tasks);
    /***вернулись ли на текущий месяц то отметим дату выведем задачи и метки***/
    DateNow(year, month);
    TasksInMonth(year, monthName[month], monthCalendar.days);
}

function CalendarNext() {
    const month_name = document.querySelector('.month_name');
    const year_name = document.querySelector('.year_name');
    let curDate = new Date(year_name.textContent,
        monthName.indexOf(month_name.textContent));//новый обьект будет пока содержать текущую дату
    curDate.setMonth(curDate.getMonth()+1);//меняем месяц на следущий
    let month = curDate.getMonth();
    let year = curDate.getFullYear();
    monthCalendar.month_li_3.textContent = monthName[month];
    monthCalendar.month_li_4.textContent = year;
    monthCalendar.days.innerHTML = '';//очищаем календарь
    monthCalendar.days.innerHTML = setMonthCalendar(year, month)[0];
    DellChild(tasks);
    DateNow(year, month);
    TasksInMonth(year, monthName[month], monthCalendar.days);
}

/******МЕСЯЦ ДЛЯ ГОДОВОГО КАЛЕНДАРЯ******* */
function YearMonth(i_year, i_month) {
    const yearMonth = new Month();//содаем обьект месяц
    yearMonth.month_li_3.textContent = monthName[i_month];
    yearMonth.days.innerHTML = setMonthCalendar(i_year, i_month)[0];
    //текущий день
    DateNow(i_year, i_month, yearMonth.days);
    //пометки задач на календарь
    TasksInMonth(i_year, monthName[i_month], yearMonth.days);
    //возвращаем обьект
    DellChild(yearMonth.weekdays);//удаляем название дней
    return yearMonth.getElement();
}


export {monthName, CalendarMonth, CalendarPrev, CalendarNext, YearMonth, DateNow};