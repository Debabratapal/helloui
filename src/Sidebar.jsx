import React from 'react';
import './App.scss';
import logo1 from './designtest/1.svg'
import logo2 from './designtest/2.svg'
import logo3 from './designtest/3.svg'
import logo4 from './designtest/4.svg'
import logo5 from './designtest/5.svg'
import logo6 from './designtest/6.svg'
import logo7 from './designtest/7.svg'
import logo8 from './designtest/8.svg'
import logo9 from './designtest/9.svg'
import logo10 from './designtest/10.svg'

let item = [
  {title: "platform", lot: [
    {name:'home', logo: logo1}, 
    {name:'machines', logo: logo2}, 
    {name:'plannings', logo: logo3}, 
    {name:'clients', logo: logo4}
  ]},
  {title: "settings", lot: [
    {name:'users',logo:logo5},
    {name:'export data',logo: logo6},
    {name:'settings',logo:logo7},
  ]},
  {title: "avdanced", lot: [
    {name:'flexybox config',logo:logo8}, 
    {name:'status',logo:logo9},
    {name:'shared folder', logo:logo10},
  ]},
]

class SidebarComponent extends React.Component {
  render() {
   
    let width = window.innerWidth;
    return (
      
      <div className='sidebar-ui' style={{display: this.props.open ? 'block': width>999 ? 'block':'none'}}>
        {item.map((el,i) => (
          <div key={i} className="ui-items">
            <div className="title">{el.title}</div>
            {el.lot.map((el2, j) => (
              <div key={j} className="ui-item-lot">
                <img src={el2.logo}  alt=""/> <span className="title2">{el2.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default SidebarComponent;