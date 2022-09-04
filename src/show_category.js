import { tasksArr } from './data_base.js';
import { TasksInMonth } from './tasks_in_month.js';

function ShowCategory(target) {
    let user_tasks;

//Если открыт годовой календарь*********************************/
if (target.parentElement.parentElement.previousElementSibling.textContent
    == 'КАТЕГОРИИ') { 

    const gen_year = document.querySelector('.gen_year_name');
    if (gen_year) {
        const months = document.querySelectorAll('.month-calendar');
        months.forEach(element => {
            let month_name = element.querySelector('.month_name').textContent;
            let days_li = element.querySelector('.days');
            /****ВЫБИРАЕМ ЗАПИСИ ПО ТИПУ******/
            if (target.textContent == 'ВСЕ ЗАМЕТКИ') {
                TasksInMonth(gen_year.textContent, month_name, days_li)//обновим метки на календаре
            };         
            if (target.textContent == 'РАБОТА') {
                user_tasks = tasksArr.filter(function(e) {return(e.type == 'работа')});
                console.log(user_tasks);
                TasksInMonth(gen_year.textContent, month_name, days_li, user_tasks)//обновим меткина календаре
            };
            if (target.textContent == 'ЛИЧНОЕ') {
                user_tasks = tasksArr.filter(function(e) {return(e.type == 'личное')});
                TasksInMonth(gen_year.textContent, month_name, days_li, user_tasks)//обновим меткина календаре
            };
            if (target.textContent == 'ВСТРЕЧИ') {
                user_tasks = tasksArr.filter(function(e) {return(e.category == 'встречи')});
                TasksInMonth(gen_year.textContent, month_name, days_li, user_tasks)//обновим меткина календаре
            };
            if (target.textContent == 'ЗВОНКИ') {
                user_tasks = tasksArr.filter(function(e) {return(e.category == 'звонки')});
                TasksInMonth(gen_year.textContent, month_name, days_li, user_tasks)//обновим меткина календаре
            };
            if (target.textContent == 'ЗАДАЧИ') {
                user_tasks = tasksArr.filter(function(e) {return(e.category == 'задачи')});
                TasksInMonth(gen_year.textContent, month_name, days_li, user_tasks)//обновим меткина календаре
            };
            

        });
    }
/*************************************************************/
/*******Если открыт месячный календарь********************** */
else  { 
    const days = document.querySelector('.days');
    const month = document.querySelector('.month_name').textContent;
    const year = document.querySelector('.year_name').textContent;    
        /****ВЫБИРАЕМ ЗАПИСИ ПО ТИПУ******/
        if (target.textContent == 'ВСЕ ЗАМЕТКИ') {
            TasksInMonth(year, month, days)//обновим метки на календаре
        };         
        if (target.textContent == 'РАБОТА') {
            user_tasks = tasksArr.filter(function(e) {return(e.type == 'работа')});
            console.log(user_tasks);
            TasksInMonth(year, month, days, user_tasks)//обновим меткина календаре
        };
        if (target.textContent == 'ЛИЧНОЕ') {
            user_tasks = tasksArr.filter(function(e) {return(e.type == 'личное')});
            TasksInMonth(year, month, days, user_tasks)//обновим меткина календаре
        };
        if (target.textContent == 'ВСТРЕЧИ') {
            user_tasks = tasksArr.filter(function(e) {return(e.category == 'встречи')});
            TasksInMonth(year, month, days, user_tasks)//обновим меткина календаре
        };
        if (target.textContent == 'ЗВОНКИ') {
            user_tasks = tasksArr.filter(function(e) {return(e.category == 'звонки')});
            TasksInMonth(year, month, days, user_tasks)//обновим меткина календаре
        };
        if (target.textContent == 'ЗАДАЧИ') {
            user_tasks = tasksArr.filter(function(e) {return(e.category == 'задачи')});
            TasksInMonth(year, month, days, user_tasks)//обновим меткина календаре
        };
    };
};
};


export {ShowCategory};