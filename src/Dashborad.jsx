import React from 'react';
import './App.scss';
import logo5 from './designtest/5.svg';
import DownUi from './Downui.jsx';

const items =[
  {"a": "52", "b":"machine work", "c": '%'},
  {"a": "16", "b":"active operators",'c': '', d: logo5},
  {"a": "4", "b":"product discharge","c": '%'},
]
class TestDashboard extends React.Component {
  render() {
    return (
    <div className="dashboard-ui">
      <div className="ui-dash-bar">
        {items.map((el, i) => (
          <div className="ui-items" key={i}>
            <span className="spa">{el.a}</span><span className="spb">{el.c}</span>
            {el.d ? 
            <img className="spimg" src={logo5} alt='logo5' />
            : null
            }
            <div className="down">
            <div className="spc">{el.b}</div>
            <div className="spd">
              <div className="spe" style={{width: el.a+"%"}}></div>
            </div>
            </div>
          </div>
        ))}
        <div className="ui-items2">
          <div className="fst-part">
            <div className="spa">
              07:30:00
              <div className="spb">
                11/09/2018
              </div>
            </div>
            <div className="spc">STARTING TIME</div>
          </div>
          <div className="middle"></div>
          <div className="snd-part">
            <div className="spe">06:57:24</div>
            <div className="spf">Duration</div>
          </div>
        </div>
        <div className="ui-items">
          <span className="spa">100
          </span><span className="spb">%</span>
          <div className="down">
            <div className="spc">hardware prototyping</div>
            <div className="spd">
              <div className="spe" style={{width: 100+"%"}}></div>
            </div>
          </div>
        </div>
      </div>
      <DownUi/>
      <div className="timetable">
        <div className="fst-part">
          <div className="spa">Time Zone</div>
          <div className="spb">
            <div className="spc">07:30:00</div>
            <div className="spd">11/09/2018</div>
          </div>
        </div>
        <div className="scn-part">
          <div className="spa">06:56:54</div>
          <div className="spb">Duration</div>
        </div>
      </div>
    </div>
    )
  }
}

export default TestDashboard;