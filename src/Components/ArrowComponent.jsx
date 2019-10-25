import React, { PureComponent } from 'react';

class ArrowComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  handleClick = () => {
    // 'this' has value.
    // Arrow functions have no execution context, so they do not have 'this',
    // They look at the upper level for this, where it is defined.
    console.log('active? ', this.state.active);
  };

  render() {
    return (
      <div
        style={{
          background: '#FF00FF',
          width: '200px',
          margin: '20px',
          padding: '10px',
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
