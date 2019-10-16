import React from 'react';
import './App.scss';
import menubar from './designtest/menu.svg';

const item = [
  {name:'project', sub:'acme corp'},
  {name:'device', sub: 'machine 921'},
  {name:'location',sub:'ferrara, vvf'},
]

class NavComponent extends React.Component {
  render() {
    return (
      <div className="navbar-ui">
        <div className="menu">
          <img src={menubar} alt={'menu'} onClick={this.props.openBar}/>
        </div>
        <div className="dash">Dashboard</div>
        <div className="ui-items">
          {item.map((el,i) => (
            <div key={i} className="ui-item">
              <div>{el.name}</div>
              <span>{el.sub}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default NavComponent;