import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { GET_USERS } from '../../../Constants/CONST_ADMIN';

const RowsContext = createContext();

const RowsProvider = (props) => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${GET_USERS}`)
      .then((response) => {
        setLoading(false);
        setRows(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <RowsContext.Provider value={[[rows, setRows], [error, setError], [loading, setLoading]]}>
      {props.children}
    </RowsContext.Provider>
  );
};

export { RowsProvider, RowsContext };
