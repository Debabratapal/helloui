import React, {Component} from 'react';
import './App.scss';

class DownUi extends Component {
  render() {
    return (
      <div className="down-ui">
        <div className="fst-part">
          <div className="spa">Events</div>
          <div className="spf">
            <div className="spb">Alert events</div>
            <div className="spc">23</div>
            <div className="spd">in the past 30 days</div>
          </div>
        </div>
        <div className="scn-part">
          <table>
            <thead>
            <tr>
              <th>1st part</th>
              <th>2nt part</th>
              <th>3st part</th>
              <th>4st part</th>
            </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}

export default DownUi;