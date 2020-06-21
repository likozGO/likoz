import React from 'react';
import DashboardCard from './UsersDashboardCard';
import '../../Dashboard/Dashboard.scss';

import UsersList from './images/UsersList.png';
import UsersStats from './images/UsersStats.png';

export default function UserDashboard() {
  return (
    <div className="CardContainer">
      <DashboardCard
        cardPhoto={UsersList}
        cardTitle="Users"
        cardText="List of all user contain in site"
        cardLink="/admin/users/list"
      />
      <DashboardCard
        cardPhoto={UsersStats}
        cardTitle="Stats"
        cardText="Stats with graph and sorted data"
        cardLink="/admin/users/stats"
      />
    </div>
  );
}
