import React, { PureComponent } from 'react';

class BoundComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { active: true };
    // to bind 'this' into the function handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 'this' is defined
    console.log('active? ', this.state.active);
  }

  render() {
    return (
      <div
        style={{
          background: '#22FFF2',
          width: '200px',
          margin: '20px',
          padding: '10px',
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
