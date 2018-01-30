import React, { Component } from 'react';
import './About.css';
import sizeChart1 from './sizeChart1.png';

export default class SizeChart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="alineSize">
        <h2 className="sizeTitle">
          We want to ensure that you have the perfect fit for your perfect day.
        </h2>

        <div className="sizeFit">
          <h3>MEASURE YOUR BUST:</h3>
          <p2>
            Lift your arms, and wrap the measuring tape around <br />the fullest
            part of your bust. Where the measuring <br /> tape overlaps is the
            measurement that you should use.
          </p2>
          <h3>MEASURE YOUR HIPS:</h3>
          <p2>
            Measure at the fullest part of your bottom and thighs. <br /> See
            our size charts below. You may not line up <br /> with one size so
            choose a size with your largest measurement.
          </p2>
          <h3>MEASURE YOUR NATURAL WAIST:</h3>
          <p2>
            Wrap the measuring tape around your natural waist, <br /> which is
            approximately 2 inches above your belly button.
          </p2>
        </div>
        <div>
          <img className="chart" src={sizeChart1} />
        </div>
      </div>
    );
  }
}
