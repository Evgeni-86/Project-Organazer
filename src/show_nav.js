import { job_low_tasks, job_medium_tasks, job_high_tasks, pers_low_tasks, 
    pers_medium_tasks, pers_high_tasks } from './tasks_in_nav.js';

const btn_text = ['КАТЕГОРИИ', 'ПРИОРИТЕТ', ''];
const chapter1 = [{type:'КАТЕГОРИИ', text:'РАБОТА'},
                    {type:'КАТЕГОРИИ', text:'ЛИЧНОЕ'}/* ,
                    {type:'КАТЕГОРИИ', text:'ЗАДАЧИ'} */];

const chapter2 = [{type:'ПРИОРИТЕТ', text:'РАБОТА'},
                    {type:'ПРИОРИТЕТ', text:'ЛИЧНОЕ'}];

/*****СОЗДАЕМ DOM навигация******************/
let i = 0;
function Button(class_name1, class_name2) {
    const btn = document.createElement('button');
    if (class_name1) { btn.classList.add(class_name1) };
    if (class_name2) { btn.classList.add(class_name2) };
    btn.textContent = btn_text[i];
    i++;
    return btn;
}

function Ul(chapter, class_name1, class_name2) {
        const ul = document.createElement('ul');
        ul.classList.add(class_name1);
        ul.classList.add(class_name2);

        chapter.forEach(element => {
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.textContent = element.text;
            li.classList.add('list');
            li.appendChild(div)
            ul.appendChild(li);

            if (element.type == 'ПРИОРИТЕТ' && element.text == 'РАБОТА') {
                const span1 = document.createElement('span');
                const span2 = document.createElement('span');
                const span3 = document.createElement('span');
                span1.textContent = job_low_tasks.length;
                span2.textContent = job_medium_tasks.length;
                span3.textContent = job_high_tasks.length;
                li.appendChild(span1);
                li.appendChild(span2);
                li.appendChild(span3);
            };

            if (element.type == 'ПРИОРИТЕТ' && element.text == 'ЛИЧНОЕ') {
                const span1 = document.createElement('span');
                const span2 = document.createElement('span');
                const span3 = document.createElement('span');
                span1.textContent = pers_low_tasks.length;
                span2.textContent = pers_medium_tasks.length;
                span3.textContent = pers_high_tasks.length;
                li.appendChild(span1);
                li.appendChild(span2);
                li.appendChild(span3);
            };
        });

    return ul;
};
/***************************************/
function Build_Nav(parant) {
    parant.appendChild(Button('nav_btn', 'nav_btn_shadow'));
    parant.appendChild(Ul(chapter1, 'ul_nav', 'ul_nav_hidden'));
    parant.appendChild(Button('nav_btn', 'nav_btn_shadow'));
    parant.appendChild(Ul(chapter2, 'ul_nav', 'ul_nav_hidden'));
}
