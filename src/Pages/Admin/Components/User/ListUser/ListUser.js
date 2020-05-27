import React from 'react';
import { ListUser__Fetch } from './ListUserFetch';
import ListUser__View from './ListUserView';
/* Логика работы: */
/* Есть шаблон с Material UI таблицы */
/* В ней содержаться данные */
/* Мы получаем эти данные с бека каждый раз когда переходим на эту вкладку */
/* Пока фетчим данные показывать какой то прелоадер забавный */


/** *ListUser__View = компонент таблицы** */
/** *ListUser__Fetch = функия получения и добавления строчек в таблицу* */
export default class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    ListUser__Fetch()
      .then((response) => {
        if (response === 'TableError') {
          this.setState({ error: true });
        }
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return (
        <div>loading</div>
      );
    } if (error) {
      return (
        <div>ошибка</div>
      );
    }
    return (
      <div><ListUser__View /></div>
    );
  }
}
