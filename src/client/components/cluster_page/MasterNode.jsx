import React, { Component } from 'react';

class MasterNode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { xScale, yScale } = this.props;

    if (!Number.isNaN(xScale) && !Number.isNaN(yScale)) {
      return (
        <svg
          width="94"
          height="93"
          xmlns="http://www.w3.org/2000/svg"
          x={xScale}
          y={yScale}
        >
          {/* Created with Method Draw - http://github.com/duopixel/Method-Draw/  */}
          <g>
            <title>background</title>
            <rect
              fill="none"
              id="canvas_background"
              height="95"
              width="96"
              y="-1"
              x="-1"
            />
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
              id="canvasGrid"
            >
              <rect
                fill="url(#gridpattern)"
                stroke-width="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              />
            </g>
          </g>
          <g>
            <title>Master</title>
            <path
              stroke="#326de6"
              id="svg_5"
              d="m3.422958,58.510029l8.631258,-37.350451l34.945698,-16.622537l34.945707,16.622537l8.631416,37.350451l-24.183869,29.952935l-38.786503,0l-24.183706,-29.952935z"
              fill-opacity="null"
              stroke-opacity="null"
              stroke-width="5"
              fill="#fff"
            />
          </g>
        </svg>
      );
    } else return <div />;
  }
}

export default MasterNode;
