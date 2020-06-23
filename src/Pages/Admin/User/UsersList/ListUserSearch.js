import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { UserSearch } from '../../../../StateControl/Admin/Action/UserList';

export default function ListUserSearch() {
  const dispatch = useDispatch();
  const userSearch = useSelector((state) => state.UserReducer);
  const { UserSearch } = userSearch;

  const changeSearch = (e) => {
    console.log(e.target.value);
  };
  const dataSearch = () => {
    console.log(userSearch);
    console.log('clicked');
  };

  return (
    <>
      <Grid container spacing={1} alignItems="flex-end" style={{ flexWrap: 'nowrap', marginRight: '125px' }}>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Search" onInput={changeSearch} />
        </Grid>
        <Grid item>
          <Tooltip title="Example: Ivan">
            <IconButton aria-label="search" style={{ padding: '3px 5px' }}>
              <SearchIcon onClick={dataSearch} />
            </IconButton>
          </Tooltip>
        </Grid>

      </Grid>
    </>
  );
}
