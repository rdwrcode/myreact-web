import React from 'react';

import Personal from './Personal';
import Shipping from './Shipping';
import Billing from './Billing';

import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      
      name: '',
      email: '',
      
      shipping_line: '',
      shipping_city: '',
      shipping_zip: '',
      
      billing_line: '',
      billing_city: '',
      billing_zip: '',
    };
    this.goToNext = this.goToNext.bind(this);
  }
  
  goToNext() {
    const { step } = this.state;
    if (step !== 3) {
      this.setState({ step: step + 1 });
    } else {
      alert('Submitting');
      
      const values = {
        name: this.state.name,
        email: this.state.email,
        shipping: {
          line: this.state.shipping_line,
          city: this.state.shipping_city,
          zip: this.state.shipping_zip,
        },
        billing: {
          line: this.state.billing_line,
          city: this.state.billing_city,
          zip: this.state.billing_zip,
        },
      };
      // submit `values` to the server here.
      console.log(values);
    }
  };
  
  handleChange(field) {
    return (evt) => this.setState({ [field]: evt.target.value });
  }
  
  render() {
    switch (this.state.step) {
      case 1:
        return <Personal
          key="personal"
          onSubmit={this.goToNext}
          name={this.state.name}
          email={this.state.email}
          onChangeName={this.handleChange('name')}
          onChangeEmail={this.handleChange('email')}
        />;
      case 2:
        return <Shipping
          key="shipping"
          onSubmit={this.goToNext}
          shippingLine={this.state.shipping_line}
          shippingCity={this.state.shipping_city}
          shippingZip={this.state.shipping_zip}
          onChangeShippingLine={this.handleChange('shipping_line')}
          onChangeShippingCity={this.handleChange('shipping_city')}
          onChangeShippingZip={this.handleChange('shipping_zip')}
        />;
      case 3:
        return <Billing
          key="billing"
          onSubmit={this.goToNext}
          billingLine={this.state.billing_line}
          billingCity={this.state.billing_city}
          billingZip={this.state.billing_zip}
          onChangeBillingLine={this.handleChange('billing_line')}
          onChangeBillingCity={this.handleChange('billing_city')}
          onChangeBillingZip={this.handleChange('billing_zip')}
        />;
      default:
        return null;
    }
  }
}

export default Checkout;