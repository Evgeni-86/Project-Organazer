import { tasksArr, WriteInLocalStorage } from './data_base.js';//Массив с задачами
import { TasksInNav } from './tasks_in_nav.js';//отображение приоритетов

/********ЗАПИСЬ ЗАМЕТКИ В МАССИВ************************/
function WriteInArr(year, month, day, type, category, prior, text) {
    let curData = new Date();
    let time = curData.getTime();

        const new_task = {
        type: type,
        category: category,
        date: year+'-'+month+'-'+day,
        prioritet: prior,
        text: text,
        time: time,
        check: false,
        del: false,
        };
    
    tasksArr.push(new_task);
    localStorage.base = JSON.stringify(tasksArr);

    TasksInNav();    
}
/*******************************************************/

export {WriteInArr}
