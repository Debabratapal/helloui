import React from 'react';
import './App.scss';
import NavComponent from './Nav.jsx';
import SidebarComponent from './Sidebar.jsx';
import TestDashboard from './Dashborad.jsx';

class TestComponent extends React.Component {
  state = {
    open: true,
  }

  openBar = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="testing-ui">
        <NavComponent openBar={this.openBar}/>
        <div style={{display:'flex'}}>
        <SidebarComponent open={this.state.open}/>
        <TestDashboard />
        </div>
      </div>
    )
  }
}

export default TestComponent;