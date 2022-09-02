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
        this.check = document.createElement('div');
        this.check.classList.add('check_btn');
        this.check.innerHTML = 
        '<p>Выполнено</p><i class="fa-regular fa-circle-check"></i>';
        this.art.appendChild(this.h);
        this.art.appendChild(this.p);
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
            new_card.h.textContent = element.type.toUpperCase();
            new_card.p.textContent = element.text;
            if (element.prioritet=='low') {new_card.h.style.backgroundColor='#05cc47'};
            if (element.prioritet=='medium') {new_card.h.style.backgroundColor='#ff9c0b'};
            if (element.prioritet=='high') {new_card.h.style.backgroundColor='#e43526'};
            cards.appendChild(new_card.getElement());
        });

    return cards;
}
/*******************************/

/******ИЗМЕНЯЕМ ОТМЕТКУ О ВЫПОЛНЕНИИ*********/
function CheckTask(attr) {
    let task = tasksArr.find(item => item.GetId() == attr);
    console.log(task);
    task.check==false ? task.check=true : task.check = false;
    console.log(task);
};
/********************************************/

export {ShowTasks, CheckTask}