import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PopupAction } from '../../../../StateControl/Admin/Action/Popup';

export default function DashboardUser() {
  const isOpen = useSelector((state) => state.PopupReducer);
  const dispatch = useDispatch();

  return (
    <>
      Dashboard user
      {' '}
      <br />
      {isOpen ? 'Popup is active' : 'Popup is diactiveted'}
      <br />
      <button type="button" onClick={() => { dispatch(PopupAction()); }}>
        Popup
      </button>
    </>
  );
}
