import React from 'react';

class Billing extends React.Component {
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
        <h3>Billing</h3>
        <input
          type="text"
          placeholder="Address line"
          value={this.props.billingLine}
          onChange={this.props.onChangeBillingLine}
        />
        <input
          type="text"
          placeholder="City"
          value={this.props.billingCity}
          onChange={this.props.onChangeBillingCity}
        />
        <input
          type="text"
          placeholder="ZIP"
          value={this.props.billingZip}
          onChange={this.props.onChangeBillingZip}
        />
        
        <button>Checkout</button>
      </form>
    );
  }
}

export default Billing;