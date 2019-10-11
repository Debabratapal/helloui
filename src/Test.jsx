import React from 'react';
import './App.scss';
import NavComponent from './Nav.jsx';
import SidebarComponent from './Sidebar.jsx';
import TestDashboard from './Dashborad.jsx';

class TestComponent extends React.Component {

  render() {
    return (
      <div className="testing-ui">
        <NavComponent />
        <div style={{display:'flex'}}>
        <SidebarComponent />
        <TestDashboard />
        </div>
      </div>
    )
  }
}

export default TestComponent;