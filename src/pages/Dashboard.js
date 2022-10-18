import React from 'react'
import {DashboardSidebar, DashboardMain} from '../components/Components.js'
import "../css/Dashboard.css"

function Dashboard() {
  return (
    <div>
    <div className='Dashboard'>
      <DashboardSidebar/>
      <DashboardMain/>
    </div>
    </div>
  )
}

export default Dashboard
