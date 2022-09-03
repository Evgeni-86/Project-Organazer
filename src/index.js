import './css/style.css';
import './css/iconsfonts.css';
import { ShowTasks, CheckTask } from './show_tasks.js';
import { PrintNav } from './show_nav.js';
import { CalendarMonth, CalendarNext, CalendarPrev } from './calendar_month.js';
import { TasksInNav } from './tasks_in_nav.js';
import { AddTaskBtn, AddTask, DellChild } from './add_tasks.js';
import { WriteInArr } from './write_task.js';
import { TasksInMonth } from './tasks_in_month.js';
import { ShowCategory } from './show_category.js';

const nav = document.querySelector('.nav');
const calendar = document.querySelector('.calendar');
const tasks = document.querySelector('.tasks');
/*******************************/
TasksInNav();//показать приоритет количество задач
/***Контент********************************/
calendar.appendChild(CalendarMonth()); //календарь месяц
/*****слушаем кнопки меню (делегирование)**************/
nav.addEventListener('click', function (event) {
  if (event.target.closest('.nav_btn')) {
    event.target.nextElementSibling.classList.toggle('ul_nav_hidden');
    event.target.classList.toggle('nav_btn_shadow');
};
});
/*************************************/

/*****Слушаем списки для изменения (делегирование)****/
nav.addEventListener('click', function (event) {
  if (event.target.closest('.list_check')) {
      const ls = document.querySelectorAll('.list_check');
      ls.forEach(element => {
        element.classList.remove('list_selected');  
      });          
      event.target.classList.toggle('list_selected');
      /***ЛОГИКА ДЛЯ ВЫВОДА ПО КАТЕГОРИЯМ****/
        console.log(event.target.textContent);
        ShowCategory(event.target);
      /******/
};
});
/****************************************/

/****Слушаем календарь (делегирование)*******************************/
/**загрузка задач на выбраную дату***/
calendar.addEventListener('click', function (event) {
  if (event.target.closest('.days')) {
    let day = event.target.parentElement.id;
/**если календарь на текущий месяц найдем класс рамки************/
    let a = document.querySelector('.active_day');
    if(a) {
      a.classList.remove('active_day');//удаляем клас если есть
    };
/******************************************************************************/
      event.target.parentElement.classList.add('active_day');//рамка активного дня
    const month = document.querySelector('.month_name');
    const year = document.querySelector('.year_name');
    //если дочерние элементы уже есть, то удаляем
    DellChild(tasks);
    /******************************/
    tasks.appendChild(ShowTasks(year.textContent, month.textContent, day));
    /****кнопка для добавления задачи*****/
    tasks.firstChild.appendChild(AddTaskBtn());
  };
});
/******************************************/
calendar.addEventListener('click', function (event) {
  if (event.target.closest('.month')) {
    if (event.target.classList.contains('next')) {
      CalendarNext();//следующий месяц
    };
    if (event.target.classList.contains('prep')) {
      CalendarPrev();//предыдущий месяц
    };
  };
});
/****************************************************/
/******СЛУШАЕМ ОТМЕТКУ О ВЫПОЛНЕНИИ***********/
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.check_btn')) {
    const days = document.querySelector('.days');
    const month = document.querySelector('.month_name').textContent;
    const year = document.querySelector('.year_name').textContent;

    event.target.parentElement.classList.toggle('check');
    let attr = event.target.parentElement.parentElement.parentElement.
      getAttribute('id');
      CheckTask(attr);
      TasksInMonth(year, month, days)//обновим меткина календаре
  };
});
/**************************************/
/******СЛУШАЕМ КНОПКИ ДОБАВИТЬ ЗАМЕТКУ******************/
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.add_task_btn')) {
    /***только если еще нет**/
    if (!event.target.parentElement.nextElementSibling) {
      tasks.firstChild.remove();//удалим кнопку
      const new_task = new AddTask();
      tasks.appendChild(new_task.newTask);
      let btn = AddTaskBtn();
      btn.classList.remove('add_task_btn');
      btn.classList.add('write_task_btn');//кнопка с новым классом
      btn.setAttribute('type', 'submit');
      new_task.newTask.appendChild(btn);
      };
  };
});
//Кнопка для записи задачи
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.write_task_btn')) {
    event.preventDefault();//отключим перезагрузку
    const days = document.querySelector('.days');
    const form = tasks.querySelector('form');
    const day = document.querySelector('.active_day').textContent;
    const month = document.querySelector('.month_name').textContent;
    const year = document.querySelector('.year_name').textContent;
    const formData = new FormData(form);
    const text = formData.get('text');
    const type = formData.get('type');
    const prior = formData.get('prior'); 
    const category = formData.get('category');
    DellChild(tasks);
    WriteInArr(year, month, day, type, category, prior, text);
    TasksInMonth(year, month, days)//обновим меткина календаре
  };
});
/****************************************************/
