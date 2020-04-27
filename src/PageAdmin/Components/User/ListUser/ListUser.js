import React from 'react';
import {UserList} from './ListUser--Fetch'
import ListUser__View from './ListUser--View'
/*Логика работы:*/
/*Есть шаблон с Material UI таблицы*/
/*В ней содержаться данные*/
/*Мы получаем эти данные с бека каждый раз когда переходим на эту вкладку*/
/*Пока фетчим данные показывать какой то прелоадер забавный*/


/***ListUser__View = собств. таблица***/
/***ListUser__Fetch = функия получения и добавления строчек в таблицу**/
export default class EnhancedTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            users: []
        }
    }

    componentDidMount() {
        UserList()
            .then((users) => {
                this.setState({
                    users,
                })
                this.setState({loading: false})
            })
    }

    render() {
        const { loading, users } = this.state;

            if (loading) {
                return (
                    <div>loading</div>
                );
            } else {
                return (
                    <div><ListUser__View/></div>
                );
            }


    }
}
