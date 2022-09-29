import './css/style.css';
import './css/iconsfonts.css';
import { ShowTasks, CheckTask, DelTask, DelTaskForever } from './show_tasks.js';
import { CalendarMonth, CalendarNext, CalendarPrev } from './calendar_month.js';
import { TasksInNav } from './tasks_in_nav.js';
import { AddTaskBtn, AddTask, DellChild } from './add_tasks.js';
import { WriteInArr } from './write_task.js';
import { TasksInMonth } from './tasks_in_month.js';
import { ShowCategory } from './show_category.js';
import { CalendarYear, CalendarPrevYear, CalendarNextYear } from './calendar_year.js';
import { OpenMonth, OpenMonthList } from './open_month_list.js';
import { FormValid } from './form_valid.js';

const nav = document.querySelector('.nav');
const calendar = document.querySelector('.calendar');
const tasks = document.querySelector('.tasks');
const months_list = document.querySelector('.months_list');
const nav_lists = document.querySelector('.ul_nav');//первый список навигации
const nav_lists_div = nav_lists.querySelectorAll('.list_check');//
/*******************************/
TasksInNav();//показать приоритет количество задач
/***Контент********************************/
calendar.appendChild(CalendarMonth()); //календарь месяц
months_list.style.display='none';//скроем правую панел при загрузке
/*****Открываем списки меню и ОТКРЫТЬ КАЛЕНДАРЬ НА ГОД**************/
nav.addEventListener('click', function (event) {
  if (event.target.closest('.nav_btn')) {

    if (event.target.id=='year_cal') {
      DellChild(calendar);
      DellChild(tasks);
      DellChild(months_list);
      months_list.style.display='none';
      calendar.appendChild(CalendarYear());
    }
    else {
      event.target.nextElementSibling.classList.toggle('ul_nav_hidden');
      event.target.classList.toggle('nav_btn_shadow');
    }
  }
});
/*************************************/
/*****Слушаем списки для вывода по категориям****/
nav_lists_div.forEach(element => {
  element.onclick = function() {
      //удалим выделения с кнопок меню
      nav_lists_div.forEach(elem => {
        elem.classList.remove('list_selected');  
      });
      element.classList.add('list_selected');    
      /***ЛОГИКА ДЛЯ ВЫВОДА ПО КАТЕГОРИЯМ****/
      ShowCategory(element);
  };
});
/****************************************/
/****Слушаем календарь (делегирование)*******************************/
//загрузка задач на выбраную дату
calendar.addEventListener('click', function (event) {
  if (event.target.closest('.day')) {
      let day = event.target.parentElement.id;
  //если календарь на текущий месяц найдем класс рамки
      let a = document.querySelector('.active_day');
      if(a) {
        a.classList.remove('active_day');//удаляем клас если есть
      }
      event.target.parentElement.classList.add('active_day');//рамка активного дня
      const month_cont = event.target.parentElement.parentElement.parentElement;
      const month_name = month_cont.querySelector('.month_name');
      const year = document.querySelector('.year_name');
      //если дочерние элементы уже есть, то удаляем
      DellChild(tasks);
      tasks.appendChild(ShowTasks(year.textContent, month_name.textContent, day));
  }
});
/*****ПЕРЕКЛЮЧЕНИЕ КАЛЕНДАРЕЙ*****************************/
calendar.addEventListener('click', function (event) {
  if (event.target.closest('.month')) {
    if (event.target.classList.contains('next')) {
      CalendarNext();//следующий месяц
    }
    if (event.target.classList.contains('prev')) {
      CalendarPrev();//предыдущий месяц
    }
  }

  if (event.target.closest('.year')) {
    if (event.target.classList.contains('next_year')) {
      console.log(event.target);
      CalendarNextYear();//следующий год
    }
    if (event.target.classList.contains('prev_year')) {
      console.log(event.target);
      CalendarPrevYear();//предыдущий год
    }
  }
});
/****************************************************/
/******СЛУШАЕМ ОТМЕТКУ О ВЫПОЛНЕНИИ***********/
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.check_btn')) {
      const day = document.querySelector('.active_day').textContent;
      const days = document.querySelector('.days');
      const month = document.querySelector('.month_name').textContent;
      const year = document.querySelector('.year_name').textContent;
      event.target.classList.toggle('check');
      let attr = event.target.parentElement.parentElement.getAttribute('id');
        CheckTask(attr);
        TasksInMonth(year, month, days)//обновим меткина календаре
        OpenMonthList(year);//обновляем метки в боковой панели
        DellChild(tasks);
        tasks.appendChild(ShowTasks(year, month, day));
  }
});
/**************************************/
/******СЛУШАЕМ ОТМЕТКУ УДАЛИТЬ***********/
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.del_btn')) {
      const days = document.querySelector('.days');
      const month = document.querySelector('.month_name').textContent;
      const year = document.querySelector('.year_name').textContent;
      event.target.classList.toggle('check');
      let attr = event.target.parentElement.parentElement.getAttribute('id');
      DelTask(attr);
  }
});
/**************************************/
/******СЛУШАЕМ УДАЛИТЬ ОТМЕЧЕНЫЕ НАВСЕГДА***********/
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.del_task_btn')) {
      const day = document.querySelector('.active_day').textContent;
      const days = document.querySelector('.days');
      const month = document.querySelector('.month_name').textContent;
      const year = document.querySelector('.year_name').textContent;
      event.target.classList.toggle('check');
      DelTaskForever(year, month, day);//удаляем заметки на день
      TasksInMonth(year, month, days);//обновим меткина календаре
      OpenMonthList(year);//обновляем метки в боковой панели
      DellChild(tasks);
      tasks.appendChild(ShowTasks(year, month, day));
  }
});
/**************************************/

/******СЛУШАЕМ КНОПКИ ДОБАВИТЬ ЗАМЕТКУ******************/
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.add_task_btn')) {
    /***открываем форму только если еще ее нет**/
    if (!event.target.parentElement.nextElementSibling) {
      tasks.firstChild.remove();//удалим кнопку
      const new_task = new AddTask();
      tasks.appendChild(new_task.newTask);
      //кнопка с новым классом для записи заметки
      let btn = AddTaskBtn();
      btn.textContent = 'сохранить задачу';
      btn.classList.add('write_task_btn');
      btn.setAttribute('type', 'submit');
      new_task.newTask.appendChild(btn);
      }
  }
});
//Кнопка для записи задачи
tasks.addEventListener('click', function (event) {
  if (event.target.closest('.write_task_btn')) {
    event.preventDefault();//отключим перезагрузку страницы
    const form = tasks.querySelector('form');
    const formData = new FormData(form);
    if (FormValid(formData)) {
      const days = document.querySelector('.days');
      const day = document.querySelector('.active_day').textContent;
      const month = document.querySelector('.month_name').textContent;
      const year = document.querySelector('.year_name').textContent;
      //получаем данные из формы
      const text = formData.get('text');
      const type = formData.get('type');
      const prior = formData.get('prior'); 
      const category = formData.get('category');
      WriteInArr(year, month, day, type, category, prior, text);
      TasksInMonth(year, month, days)//обновим меткина календаре
      OpenMonthList(year);//обновляем метки в боковой панели
      DellChild(tasks);
      tasks.appendChild(ShowTasks(year, month, day)); 
    };
  }
});
/****************************************************/
/********ОТКРЫТЬ МЕСЯЦ ИЗ ГОДА**********************/
calendar.addEventListener('click', function (event) {
  if (event.target.closest('.year_calendar')) {
    if (event.target.classList.contains('days')) {
      let target = event.target.parentElement;
      const target_month = target.querySelector('.month_name');
      const target_year = document.querySelector('.gen_year_name');//если весь кален
      months_list.style.display='';
      OpenMonthList(target_year.textContent);
      DellChild(tasks);
      OpenMonth(target_year.textContent, target_month.textContent);
    }
  }
});
/*********************************/
/*******СЛУШАЕМ ЛИСТ КАЛЕНДАРЕЙ СПРАВА**************** */
months_list.addEventListener('click', function (event) {
  if (event.target.closest('.months_list')) {
    if (event.target.classList.contains('days')) {
      let target = event.target.parentElement;
      const target_month = target.querySelector('.month_name');
      const target_year = document.querySelector('.year_name');
      DellChild(tasks);
      OpenMonth(target_year.textContent, target_month.textContent);    
    }
  }
});
