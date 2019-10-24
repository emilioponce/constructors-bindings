import React, { PureComponent } from 'react';

class ArrowComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick = () => {
    console.log('It is active? ', this.state.active);
  };

  render() {
    return (
      <div
        style={{
          background: '#FF00FF',
          width: '200px',
          margin: '20px',
          fontSize: '20px',
        }}
      >
        <div>Arrow Component</div>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ArrowComponent;
