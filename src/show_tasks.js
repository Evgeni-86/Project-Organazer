import { tasksArr } from './data_base.js';

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
        this.del.textContent = 'Удалить';
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
            new_card.art.setAttribute('id', element.GetId());
            new_card.h.textContent = element.type.toUpperCase()+' '+element.category;
            new_card.p.textContent = element.text;
            if (element.prioritet=='low') {new_card.h.style.backgroundColor='#05cc47'};
            if (element.prioritet=='medium') {new_card.h.style.backgroundColor='#ff9c0b'};
            if (element.prioritet=='high') {new_card.h.style.backgroundColor='#e43526'};
            if (element.check==true) { new_card.check.classList.add('check') };
            cards.appendChild(new_card.getElement());
        });

    return cards;
}
/*******************************/

/******ИЗМЕНЯЕМ ОТМЕТКУ О ВЫПОЛНЕНИИ*********/
function CheckTask(attr) {
    let task = tasksArr.find(item => item.GetId() == attr);
    task.check==false ? task.check=true : task.check = false;
};
/********************************************/
/******УДАЛИТЬ ЗАМЕТКУ*********/
function DelTask(attr) {
    let task = tasksArr.find(item => item.GetId() == attr);
    tasksArr.splice(tasksArr.indexOf(task), 1);
    console.log(tasksArr);
};
/********************************************/

export {ShowTasks, CheckTask, DelTask}