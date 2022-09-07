/**очистим окно задачь**/
function DellChild(parant) {
    if (parant.firstChild) {
      parant.firstChild.remove();
      DellChild(parant);
    }
    else { return };
};

function AddTaskBtn() {
    const add_btn = document.createElement('button');
    return add_btn;
}

function BtnAddTask() {
    /****кнопка для добавления задачи если есть день выделен*****/
    const calendar = document.querySelector('.calendar');
    const day_activ = calendar.getElementsByClassName('.active_day');
    if (day_activ) {
        const btnAdd = AddTaskBtn()
        btnAdd.textContent = 'добавить задачу';
        btnAdd.classList.add('add_task_btn');
        return btnAdd;
    };
}

function AddTask() {
    this.newTask = document.createElement('form');
    this.div0 = document.createElement('div');
    this.div1 = document.createElement('div');
    this.div2 = document.createElement('div');
    this.div3 = document.createElement('div');
    this.newTask.classList.add('new_task');
    this.p_type = document.createElement('p');
    this.p_prioritet = document.createElement('p');
    this.p_category = document.createElement('p');
    this.p_text = document.createElement('p');
    this.br1 = document.createElement('br');
    this.br2 = document.createElement('br');
    this.br3 = document.createElement('br');
    this.br4 = document.createElement('br');
    this.br5 = document.createElement('br');

/***********************************************************/
    this.input_type_1 = document.createElement('input');
    this.input_type_1.type = 'radio';
    this.input_type_1.name = 'type';
    this.input_type_1.value = 'работа';
    this.input_type_1.id = 'input_type_1';
    this.lable1 = document.createElement('label');
    this.lable1.setAttribute('for', 'input_type_1');
    this.lable1.textContent = 'Работа';

    this.input_type_2 = document.createElement('input');
    this.input_type_2.type = 'radio';
    this.input_type_2.name = 'type';
    this.input_type_2.value = 'личное';
    this.input_type_2.id = 'input_type_2';
    this.input_type_2.checked = true;
    this.lable2 = document.createElement('label');
    this.lable2.setAttribute('for', 'input_type_2');
    this.lable2.textContent = 'Личное';
/***********************************************************/
    this.input_prior_1 = document.createElement('input');
    this.input_prior_1.type = 'radio';
    this.input_prior_1.name = 'prior';
    this.input_prior_1.value = 'high';
    this.input_prior_1.id = 'input_prior_1';
    this.lable3 = document.createElement('label');
    this.lable3.setAttribute('for', 'input_prior_1');
    this.lable3.textContent = 'Высокий';

    this.input_prior_2 = document.createElement('input');
    this.input_prior_2.type = 'radio';
    this.input_prior_2.name = 'prior';
    this.input_prior_2.value = 'medium';
    this.input_prior_2.id = 'input_prior_2';
    this.lable4 = document.createElement('label');
    this.lable4.setAttribute('for', 'input_prior_2');
    this.lable4.textContent = 'Средний';

    this.input_prior_3 = document.createElement('input');
    this.input_prior_3.type = 'radio';
    this.input_prior_3.name = 'prior';
    this.input_prior_3.value = 'low';
    this.input_prior_3.id = 'input_prior_3';
    this.input_prior_3.checked = true;
    this.lable5 = document.createElement('label');
    this.lable5.setAttribute('for', 'input_prior_3');
    this.lable5.textContent = 'Низкий';

/***************************************************** */
/*************КАТЕГОРИИ ЗАДАЧ*********************** */
    this.input_category_1 = document.createElement('input');
    this.input_category_1.type = 'radio';
    this.input_category_1.name = 'category';
    this.input_category_1.value = 'встречи';
    this.input_category_1.id = 'input_category_1';
    this.lable6 = document.createElement('label');
    this.lable6.setAttribute('for', 'input_category_1');
    this.lable6.textContent = 'Встреча';

    this.input_category_2 = document.createElement('input');
    this.input_category_2.type = 'radio';
    this.input_category_2.name = 'category';
    this.input_category_2.value = 'звонки';
    this.input_category_2.id = 'input_category_2';
    this.lable7 = document.createElement('label');
    this.lable7.setAttribute('for', 'input_category_2');
    this.lable7.textContent = 'Звонок';

    this.input_category_3 = document.createElement('input');
    this.input_category_3.type = 'radio';
    this.input_category_3.name = 'category';
    this.input_category_3.value = 'задачи';
    this.input_category_3.id = 'input_category_3';
    this.input_category_3.checked = true;
    this.lable8 = document.createElement('label');
    this.lable8.setAttribute('for', 'input_category_3');
    this.lable8.textContent = 'Задача';

/*********************************************** */
    this.text_area = document.createElement('textarea');
    this.text_area.name = 'text';
    this.p_text.innerHTML = '<p>Заметка</p>';
    this.p_text.appendChild(this.text_area);


    this.p_type.textContent = 'Тип заметки';
    this.p_prioritet.textContent = 'Приоритет';
    this.p_category.textContent = 'Категория';
/***************************************************** */

    this.div1.appendChild(this.p_type);
    this.div1.appendChild(this.input_type_1);
    this.div1.appendChild(this.lable1);
    this.div1.appendChild(this.br1);
    this.div1.appendChild(this.input_type_2);
    this.div1.appendChild(this.lable2);

    this.div2.appendChild(this.p_prioritet);
    this.div2.appendChild(this.input_prior_1);
    this.div2.appendChild(this.lable3);
    this.div2.appendChild(this.br2);
    this.div2.appendChild(this.input_prior_2);
    this.div2.appendChild(this.lable4);
    this.div2.appendChild(this.br3);
    this.div2.appendChild(this.input_prior_3);
    this.div2.appendChild(this.lable5);

    this.div3.appendChild(this.p_category);
    this.div3.appendChild(this.input_category_1);
    this.div3.appendChild(this.lable6);
    this.div3.appendChild(this.br4);
    this.div3.appendChild(this.input_category_2);
    this.div3.appendChild(this.lable7);
    this.div3.appendChild(this.br5);
    this.div3.appendChild(this.input_category_3);
    this.div3.appendChild(this.lable8);

    this.div0.appendChild(this.div1);
    this.div0.appendChild(this.div2);
    this.div0.appendChild(this.div3);
    this.newTask.appendChild(this.div0)

    this.newTask.appendChild(this.p_text);
}


export {AddTask, AddTaskBtn, DellChild, BtnAddTask};


