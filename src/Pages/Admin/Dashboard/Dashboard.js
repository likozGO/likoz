import React from 'react';
import DashboardCard from './DashboardCard';
import './Dashboard.scss';

import PhotoUsers from './images/LinkUsers.png';
import PhotoShop from './images/LinkShop.png';
import PhotoStats from './images/LinkStats.png';
import PhotoBlog from './images/LinkBlog.png';
import PhotoLottery from './images/LinkLottery.png';

export default function Dashboard() {
  return (
    <>
      <div className="CardContainer">
        <DashboardCard
          cardPhoto={PhotoUsers}
          cardTitle="Users tab"
          cardText="Many different features with users like: list of users, statistics, etc."
          cardLink="/admin/users"
        />
        <DashboardCard
          cardPhoto={PhotoShop}
          cardTitle="Shop tab"
          cardText="Shop? Why i make it..."
          cardLink="/admin/shop"
        />
        <DashboardCard
          cardPhoto={PhotoStats}
          cardTitle="Stats tab"
          cardText="Stats with different usless statistics"
          cardLink="/admin/stats"
        />
        <DashboardCard
          cardPhoto={PhotoBlog}
          cardTitle="Blog tab"
          cardText="Some my minds about day and to-do list"
          cardLink="/admin/blog"
        />
        <DashboardCard
          cardPhoto={PhotoLottery}
          cardTitle="Lottery tab"
          cardText="Different spins or some randomizers"
          cardLink="/admin/lottery"
        />
      </div>
    </>
  );
}
