import React, { PureComponent } from 'react';

class BoundComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: false };
    // to bind 'this' into the function handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 'this' is defined
    console.log('It is active? ', this.state.active);
  }

  render() {
    return (
      <div
        style={{
          background: '#22FFF2',
          width: '200px',
          margin: '20px',
          fontSize: '20px',
        }}
      >
        <div>Bound Component</div>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

export default BoundComponent;
