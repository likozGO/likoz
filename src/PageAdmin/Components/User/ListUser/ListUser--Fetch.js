import React from 'react';
import {ListUserFetchFunction} from "./ListUser--FetchFunction";
import {DEV_USER_API} from "../../../../const";


const headCells = [
    {id: 'username', numeric: false, disablePadding: false, label: 'Username'},
    {id: 'email', numeric: false, disablePadding: false, label: 'Email'},
    {id: 'password', numeric: false, disablePadding: false, label: 'Password'},
];

let rows = [];


const userList = () => {
    function createData(username, email, password) {
        return {username, email, password};
    }

    try {
        const [data, loading] = ListUserFetchFunction(
            DEV_USER_API + 'users'
        );
        if (!loading) { //*Когда всё загрузилось добавляем строчки по шаблону*//
            // for (let i = 0; i < data.length; i++) {
            rows = [
                createData(data[0].username, data[0].email, data[0].password)
            ]

            // }
            return true

        } else {
            console.log('Loading')
            // TODO Some handler loading
        }
    } catch (e) {
        return e;
    }

}


export {userList, headCells, rows};