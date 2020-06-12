import React from 'react';
import DashboardCard from './DashboardCard';
import './Dashboard.scss';

import PhotoUsers from './Dashboard/LinkUsers.png';
import PhotoShop from './Dashboard/LinkShop.png';
import PhotoStats from './Dashboard/LinkStats.png';
import PhotoBlog from './Dashboard/LinkBlog.png';
import PhotoLottery from './Dashboard/LinkLottery.png';

export default function Dashboard() {
  return (
    <>
      <div className="CardContainer">
        <DashboardCard
          cardPhoto={PhotoUsers}
          cardTitle="Users tab"
          cardText="Many different features with users like: list of users, statistics, etc."
        />
        <DashboardCard
          cardPhoto={PhotoShop}
          cardTitle="Shop tab"
          cardText="Shop? Why i make it..."
        />
        <DashboardCard
          cardPhoto={PhotoStats}
          cardTitle="Stats tab"
          cardText="Stats with different usless statistics"
        />
        <DashboardCard
          cardPhoto={PhotoBlog}
          cardTitle="Blog tab"
          cardText="Some my minds about day and to-do list"
        />
        <DashboardCard
          cardPhoto={PhotoLottery}
          cardTitle="Lottery tab"
          cardText="Different spins or some randomizers"
        />
      </div>
    </>
  );
}
