import React from 'react';
import ListUserView from './ListUserView';
import { RowsProvider } from './RowsContext';

export default function EnhancedTable() {
  return (
    <RowsProvider>
      <ListUserView />
    </RowsProvider>
  );
}
