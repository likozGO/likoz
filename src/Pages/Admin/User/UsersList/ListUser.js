import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ListUserView from './ListUserView';

import { UserError, UserList, UserLoading } from '../UsersState/Action/UserList';
import { GET_USERS } from '../../../../Constants/CONST_ADMIN';

export default function EnhancedTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserLoading());
    axios.get(`${GET_USERS}`)
      .then((response) => {
        dispatch(UserLoading());
        dispatch(UserList(response.data));
      })
      .catch((error) => {
        dispatch(UserLoading());
        dispatch(UserError());
      });
  }, []);
  return (
    <ListUserView />
  );
}
