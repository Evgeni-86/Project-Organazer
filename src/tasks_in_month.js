import { tasksArr } from './data_base.js';
import { DellChild } from './add_tasks.js';


function TasksInMonth(year, month, days, arr) {
    let li = days.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        if (!arr) { arr = tasksArr }; //если нет входящего массива
        let attr = year+'-'+month+'-'+li[i].id;
        let taskLow = arr.find(item => item.date==attr && item.prioritet=='low');
        let taskLow_check = arr.find(item => item.date==attr 
                                        && item.prioritet=='low' && item.check==false);
        let taskMedium = arr.find(item => item.date==attr && item.prioritet=='medium');
        let taskMedium_check = arr.find(item => item.date==attr 
                                        && item.prioritet=='medium' && item.check==false);
        let taskHigh = arr.find(item => item.date==attr && item.prioritet=='high');
        let taskHigh_check = arr.find(item => item.date==attr 
                                        && item.prioritet=='high' && item.check==false);

        DellChild(li[i].lastElementChild);//очистим предыдущие метки
        /**пометки о задачах***/
        if (taskLow) {
            const div = document.createElement('div');
            div.classList.add('task_low');
            if (taskLow_check) { div.style.cssText = 'width: 30%; height: 100%;' };
            li[i].lastElementChild.appendChild(div);
            };
        if (taskMedium) {
            const div = document.createElement('div');
            div.classList.add('task_medium');
            if (taskMedium_check) { div.style.cssText = 'width: 30%; height: 100%;' };
            li[i].lastElementChild.appendChild(div);
            };
        if (taskHigh) { 
            const div = document.createElement('div');
            div.classList.add('task_high');
            if (taskHigh_check) { div.style.cssText = 'width: 30%; height: 100%;' };
            li[i].lastElementChild.appendChild(div);
            };
    };
};


export {TasksInMonth};