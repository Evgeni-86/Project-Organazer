import { tasksArr } from './data_base.js';
import { TasksInMonth } from './tasks_in_month.js';

function ShowCategory(target) {
    let user_tasks;
    const days = document.querySelector('.days');
    const month = document.querySelector('.month_name').textContent;
    const year = document.querySelector('.year_name').textContent;
    if (target.parentElement.parentElement.previousElementSibling.textContent
        == 'КАТЕГОРИИ') { 
            /****ВЫБИРАЕМ ЗАПИСИ ПО ТИПУ******/
            if (target.textContent == 'ВСЕ ЗАМЕТКИ') {
                TasksInMonth(year, month, days)//обновим меткина календаре
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

    if (target.parentElement.parentElement.previousElementSibling.textContent
        == 'ПРИОРИТЕТ') { 
    };

};

export {ShowCategory};