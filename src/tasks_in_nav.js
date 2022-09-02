import { tasksArr } from "./data_base.js";

let job_low_tasks;
let job_medium_tasks;
let job_high_tasks;
let pers_low_tasks;
let pers_medium_tasks;
let pers_high_tasks;
/******количество задач в список***************/
function TasksInNav() {

    job_low_tasks = tasksArr.filter(function(e) {
        return (e.type == 'работа' && e.prioritet == 'low'
        && e.check == false);
    });
    
    job_medium_tasks = tasksArr.filter(function(e) {
        return (e.type == 'работа' && e.prioritet == 'medium'
        && e.check == false);
    });
    
    job_high_tasks = tasksArr.filter(function(e) {
        return (e.type == 'работа' && e.prioritet == 'high'
        && e.check == false);
    });
    /**********************/
    pers_low_tasks = tasksArr.filter(function(e) {
        return (e.type == 'личное' && e.prioritet == 'low'
        && e.check == false);
    });
    
    pers_medium_tasks = tasksArr.filter(function(e) {
        return (e.type == 'личное' && e.prioritet == 'medium'
        && e.check == false);
    });
    
    pers_high_tasks = tasksArr.filter(function(e) {
        return (e.type == 'личное' && e.prioritet == 'high'
        && e.check == false);
    });
    
    const arr = [job_low_tasks, job_medium_tasks, job_high_tasks, pers_low_tasks, 
        pers_medium_tasks, pers_high_tasks];


    console.log(arr);
    const pri = document.querySelectorAll('.pri');  
        for (let i = 0; i < pri.length; i++) {
            pri[i].textContent = arr[i].length;
        };        
};
/********************************************/

export {job_low_tasks, job_medium_tasks, job_high_tasks, pers_low_tasks, 
    pers_medium_tasks, pers_high_tasks,TasksInNav};
