import { tasksArr } from './data_base.js';
import { DellChild } from './add_tasks.js';


function TasksInMonth(year, month, days) {
    let li = days.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let attr = year+'-'+month+'-'+li[i].id;
        let taskLow = tasksArr.find(item => item.date==attr && item.prioritet=='low');
        let taskMedium = tasksArr.find(item => item.date==attr && item.prioritet=='medium');
        let taskHigh = tasksArr.find(item => item.date==attr && item.prioritet=='high');
        DellChild(li[i].lastElementChild);//очистим предыдущие метки
        /**пометки о задачах***/
        if (taskLow) {
                const div = document.createElement('div');
                div.classList.add('task_low');
                li[i].lastElementChild.appendChild(div);
            };
        if (taskMedium) {
                const div = document.createElement('div');
                div.classList.add('task_medium');
                li[i].lastElementChild.appendChild(div);
            };
        if (taskHigh) { 
                const div = document.createElement('div');
                div.classList.add('task_high');
                li[i].lastElementChild.appendChild(div);
            };
    };
};


export {TasksInMonth};