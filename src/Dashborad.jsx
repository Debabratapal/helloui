import React from 'react';
import './App.scss';

const items =[
  {"a": "52", "b":"machine work", "c": '%'},
  {"a": "16", "b":"active operators",'c': ''},
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
            <div className="spc">{el.b}</div>
            <div className="spd">
              <div className="spe" style={{width: el.a+"%", background:'green'}}></div>
            </div>
          </div>
        ))}
        <div className="ui-items2">
          <div className="fst-part">
            <div className="spa">07:30:00</div>
            <div className="spb">11/09/2018</div>
            <div className="spc">STARTING TIME</div>
          </div>
          <div className="snd-part">
            <div className="spe">06:57:24</div>
            <div className="spf">Duration</div>
          </div>
        </div>
        <div className="ui-items">
          <span className="spa">100</span>
          <div className="spc">hardware prototyping</div>
          <div className="spd">
            <div className="spe" style={{width: 100+"%", background:'green'}}></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default TestDashboard;