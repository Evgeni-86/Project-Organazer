import { tasksArr } from './data_base.js';
import { AddTaskBtn, BtnAddTask } from './add_tasks.js';


/****ВЫБИРАЕМ ЗАПИСИ НА ДАТУ******/
function UserTasks(year, month, day) {
    const user_tasks = tasksArr.filter(function(e) {
            return (e.date == year+'-'+month+'-'+day);
    });
    return user_tasks;
}
/***************************************/

/*****СОЗДАЕМ КАТРОЧКУ*********************************/
class NewCard {
    constructor() {
        this.art = document.createElement('article');
        this.h = document.createElement('h3');
        this.p = document.createElement('p');
        this.div = document.createElement('div');
        this.del = document.createElement('button');
        this.del.classList.add('del_btn');
        this.del.textContent = 'Пометка на удаление';
        this.check = document.createElement('button');
        this.check.classList.add('check_btn');
        this.check.textContent = 'Выполнено';
        this.art.appendChild(this.h);
        this.art.appendChild(this.p);
        this.div.appendChild(this.del);
        this.div.appendChild(this.check);
        this.art.appendChild(this.div);
    }
    getElement() { return this.art };
}
/***************************************/

/*******************************/
function ShowTasks(year, month, day) {
    const cards = document.createElement('div');
        cards.setAttribute('id', 'date_task');
    const tasks = UserTasks(year, month, day);
        tasks.forEach(element => {
            const new_card = new NewCard();
            console.log(element);
            new_card.art.setAttribute('id', element.time);
            new_card.h.textContent = element.type.toUpperCase()+' '+element.category;
            new_card.p.textContent = element.text;
            if (element.prioritet=='low') {new_card.h.style.backgroundColor='#05cc47'};
            if (element.prioritet=='medium') {new_card.h.style.backgroundColor='#ff9c0b'};
            if (element.prioritet=='high') {new_card.h.style.backgroundColor='#e43526'};
            if (element.check==true) { new_card.check.classList.add('check') };
            if (element.del==true) { new_card.del.classList.add('check') };
            cards.appendChild(new_card.getElement());
        });
        /****кнопка для удаление отмеченых*****/
        if (cards.firstChild) {
        let btnDel = AddTaskBtn()
        btnDel.textContent = 'удалить отмеченные';
        btnDel.classList.add('del_task_btn');
        cards.appendChild(btnDel);
        };
        /*есть ли активная ячейка дня для показа кнопки добавить?*/
        cards.appendChild(BtnAddTask());
        /*********************************** */
        return cards;
}
/*******************************/

/******ИЗМЕНЯЕМ ОТМЕТКУ О ВЫПОЛНЕНИИ*********/
function CheckTask(attr) {
    let task = tasksArr.find(item => item.time == attr);
    task.check==false ? task.check=true : task.check = false;
};
/********************************************/
/******УДАЛИТЬ ЗАМЕТКУ*********/
function DelTask(attr) {
    let task = tasksArr.find(item => item.time == attr);
    if (task) {//если нашли заметку
        task.del = true;
    };
};
/********************************************/
/******УДАЛИТЬ ЗАМЕТКУ навсегда*********/
function DelTaskForever() {

    let new_tasksArr = tasksArr.filter(function(e) {return(e.del == false)});
    localStorage.base = JSON.stringify(new_tasksArr);
    tasksArr.length = 0;//обнуляем массив
    tasksArr.push(...new_tasksArr);//копируем массив

    console.log(tasksArr);
    console.log(new_tasksArr);
    console.log(localStorage.base); 
};
/********************************************/


export {ShowTasks, CheckTask, DelTask, DelTaskForever}