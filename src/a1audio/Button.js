import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    
    this.state = {
      isClicked: false,
      clickCount: 0
    };
  }

  render() {
    return (
      <button onClick={this.clickHandler}>
        {this.props.buttonText} - {this.state.clickCount}
      </button>
    );
  }

  clickHandler() {
    if(!this.state.isClicked) {
      this.setState({state: true});  
    }
    this.setState({clickCount: this.state.clickCount+1});
  }
}

export default Button;