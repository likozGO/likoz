import React from 'react';
import {ListUser__Fetch} from './ListUser--Fetch'
import ListUser__View from './ListUser--View'
/*Логика работы:*/
/*Есть шаблон с Material UI таблицы*/
/*В ней содержаться данные*/
/*Мы получаем эти данные с бека каждый раз когда переходим на эту вкладку*/
/*Пока фетчим данные показывать какой то прелоадер забавный*/


/***ListUser__View = компонент таблицы***/
/***ListUser__Fetch = функия получения и добавления строчек в таблицу**/
export default class EnhancedTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: false
        }
    }

    componentDidMount() {
            ListUser__Fetch()
                .then(response => {
                    if(response === 'TableError') {
                        this.setState({error: true})
                        console.error(response)
                    }
                    this.setState({loading: false})
                })

    }

    render() {
        const {loading, error} = this.state;

        if (loading) {
            return (
                <div>loading</div>
            );
        } else if (error) {
            return (
                <div>ошибка</div>
            );
        } else {
            return (
                <div><ListUser__View/></div>
            );
        }
    }
}
