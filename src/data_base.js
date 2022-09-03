let tasksArr = [
    {
        type: 'работа',
        category: 'встречи',
        date: '2022-август-1',
        text: 'Задача 1',
        time: 1,
        check: false,
        prioritet: 'low',
        GetId() {
            return(this.time);
        }
    },
    {
        type: 'работа',
        category: 'звонки',
        date: '2022-август-1',
        text: 'Задача 2',
        time: 2,
        check: false,
        prioritet: 'medium',
        GetId() {
            return(this.time);
        }
    },
    {
        type: 'личное',
        category: 'задачи',
        date: '2022-август-27',
        text: 'Задача 3',
        time: 3,
        check: false,
        prioritet: 'high',
        GetId() {
            return(this.time);
        }
    },
];

/****ТРЕТИЙ СПИСОК****/
let ul3 = [
    {
        name: 'з1',
        text: 'a',
    },
    {
        name: 'з2',
        text: 'b',
    },
    {
        name: 'з3',
        text: 'c',
    },
]

export {tasksArr, ul3}
