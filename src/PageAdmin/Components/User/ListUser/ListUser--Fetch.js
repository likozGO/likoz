import React from 'react';
import {DEV_USER_API} from "../../../../const";
import axios from 'axios'

const headCells = [
    {id: 'username', numeric: false, disablePadding: false, label: 'Username'},
    {id: 'email', numeric: false, disablePadding: false, label: 'Email'},
    {id: 'password', numeric: false, disablePadding: false, label: 'Password'},
];

let rows = [];
async function UserList() {
    function createData(username, email, password) {
        return {username, email, password};
    }

    let response = await axios.get(DEV_USER_API + 'users');
    let data = response.data;


    if (data) { //*Когда всё загрузилось добавляем строчки по шаблону*//
        for (var i = 0; i < data.length; i++) {
            rows = [
                createData(data[i].username, data[i].email, data[i].password)
            ];
        }


    } else {
        console.log('Loading')
        // TODO Some handler loading
    }
}


export {UserList, headCells, rows};