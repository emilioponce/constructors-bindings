import React, { PureComponent } from 'react';

class UnBoundComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick() {
    // 'this' is undefined !!
    console.log('It is active? ', this.state.active);
  }

  render() {
    return (
      <div
        style={{
          background: 'orange',
          width: '200px',
          margin: '20px',
          fontSize: '20px',
        }}
      >
        <div>Unbound Component</div>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default UnBoundComponent;
