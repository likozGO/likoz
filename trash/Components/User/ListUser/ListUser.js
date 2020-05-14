// import React from 'react';
// // import {ListUser__Fetch} from './ListUserFetch'
// import ListUser__View from './ListUserView'
// import axios from "axios";
// import {USER_GET_URL} from "../../../../const";
// /*Логика работы:*/
// /*Есть шаблон с Material UI таблицы*/
// /*В ней содержаться данные*/
// /*Мы получаем эти данные с бека каждый раз когда переходим на эту вкладку*/
// /*Пока фетчим данные показывать какой то прелоадер забавный*/
//
//
//
//
//
// /***ListUser__View = компонент таблицы***/
// /***ListUser__Fetch = функия получения и добавления строчек в таблицу**/
// export default class EnhancedTable extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             loading: true,
//             error: '',
//             data: []
//         }
//         this.getUser = this.getUser.bind(this);
//     }
//
//     getUser() {
//         axios.get(USER_GET_URL)
//             .then((response) => {
//                 this.setState({data: response.data})
//                 console.log(this.state.data)
//             })
//             .catch((err) => {
//                 this.setState({data: err})
//                 console.log(this.state.error)
//             })
//             .then(() => {
//                 this.setState({loading: false})
//             })
//     }
//
//
//
//     componentDidMount() {
//         this.getUser();
//
//     }
//
//
//     render() {
//
//         const {loading, error, data} = this.state;
//
//
//         if (loading) {
//             return (
//                 <div>loading</div>
//             );
//         } else if (error) {
//             return (
//                 <div>ошибка</div>
//             );
//         } else {
//             return (
//                 <div><ListUser__View users={data}/></div>
//             );
//         }
//     }
// }
