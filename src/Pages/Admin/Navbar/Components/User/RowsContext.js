import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { GET_USERS } from '../../../../../Constants/CONST_ADMIN';

const RowsContext = createContext();

const RowsProvider = (props) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get(GET_USERS)
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <RowsContext.Provider value={[rows, setRows]}>
      {props.children}
    </RowsContext.Provider>
  );
};


export { RowsProvider, RowsContext };
