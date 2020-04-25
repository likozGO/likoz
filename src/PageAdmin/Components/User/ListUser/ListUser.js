import React from 'react';

import {userList, rows} from './ListUser--Fetch';

import ListUser__View from './ListUser--View';


/*Логика работы:*/
/*Есть шаблон с Material UI таблицы*/
/*В ней содержаться данные*/
/*Мы получаем эти данные с бека каждый раз когда переходим на эту вкладку*/
/*Пока фетчим данные показывать какой то прелоадер забавный*/

/***ListUser__View = собств. таблица***/
/***ListUser__Fetch = функия получения и добавления строчек в таблицу**/

export default function EnhancedTable() {

    if (userList()) {
        return(
            <>
                    <ListUser__View/>
            </>
        );
    } else {
        return(
            <>
                    <span>Loading...</span>
            </>
        );
    }
}