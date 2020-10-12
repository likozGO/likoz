import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ListUserViewBody from './ListUserViewBody';

import { ReduxAction, UserError, UserLoading } from './ReduxAction';
import { GET_USERS } from '../../../../Constants/CONST_ADMIN';

export default function EnhancedTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserLoading());
    axios.get(`${GET_USERS}`, {
      headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0NTJhYzI4ZDEzNzJmZmNjYjYxOTciLCJpYXQiOjE2MDE0NTg4NjN9.HKoAj9Txw4pQ0FBJf0m8SKN2_LVGkq3oYAS7KagR3sI' },
    })
      .then((response) => {
        dispatch(UserLoading());
        dispatch(ReduxAction(response.data));
      })
      .catch((error) => {
        dispatch(UserLoading());
        dispatch(UserError());
      });
  }, []);
  return (
    <ListUserViewBody />
  );
}
