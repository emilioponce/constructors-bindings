import React, { PureComponent } from 'react';

class UnBoundComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  handleClick() {
    // SPOILER: 'this' is undefined !!
    console.log('active? ', this.state.active);
  }

  render() {
    return (
      <div
        style={{
          background: 'orange',
          width: '200px',
          margin: '20px',
          padding: '10px',
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
