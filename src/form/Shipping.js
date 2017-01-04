import React from 'react';

class Shipping extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
        <h3>Shipping</h3>
        <input
          type="text"
          placeholder="Address line"
          value={this.props.shippingLine}
          onChange={this.props.onChangeShippingLine}
        />
        <input
          type="text"
          placeholder="City"
          value={this.props.shippingCity}
          onChange={this.props.onChangeShippingCity}
        />
        <input
          type="text"
          placeholder="ZIP"
          value={this.props.shippingZip}
          onChange={this.props.onChangeShippingZip}
        />
        
        <button>Next</button>
      </form>
    );
  }
}

export default Shipping;