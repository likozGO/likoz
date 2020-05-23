import React from 'react';
import {DEV_USER_API} from "../../../../../Constants/CONST_ADMIN";
import axios from 'axios'

const headCells = [
    {id: 'userid', disablePadding: false, label: 'User ID'},
    {id: 'username', numeric: false, disablePadding: false, label: 'Username'},
    {id: 'email', numeric: false, disablePadding: false, label: 'Email'},
    {id: 'password', numeric: false, disablePadding: false, label: 'Password'},
];

let rows = [];

async function ListUser__Fetch() {
    function createData(userid, username, email, password) {
        return {userid, username, email, password};
    }

    try {
        const response = await axios.get(DEV_USER_API + 'users');
        let data = response.data;

        if (data) { //*Когда всё загрузилось добавляем строчки по шаблону*//
            if (rows.length == 0) { // если колв. строк == 0 тогда заполняем таблицу полученной информацией
                for (let i = 0; i < data.length; i++) { // проходим по циклу в длинну от полученой информации и заполняем
                    let newObj = createData(data[i]._id, data[i].username, data[i].email, data[i].password);
                    rows.push(newObj)
                }
            } else {
                if (rows.length !== data.length) { // если колв. строк изменилось, тогда обновляем цикл
                    rows = [];
                    for (let i = 0; i < data.length; i++) {
                        let newObj = createData(data[i]._id, data[i].username, data[i].email, data[i].password);
                        rows.push(newObj)
                    }
                }
            }
        } else {
            console.log('Loading')
            // TODO Some handler loading
        }
        return data;
    } catch (error) {
        console.log(error)
        return 'TableError';
    }
}


export {ListUser__Fetch, headCells, rows};