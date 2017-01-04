import React from 'react';
import ReactDOM from 'react-dom';
import './AudioTag.css';

class AudioTag extends React.Component {
  static propTypes = {
    autoplay: React.PropTypes.bool,
    preload: React.PropTypes.bool,
    source: React.PropTypes.string,
    loop: React.PropTypes.bool,
    volume: React.PropTypes.number,
    onTimeupdate: React.PropTypes.func,
    onError: React.PropTypes.func,
    onProgress: React.PropTypes.func,
    onEnded: React.PropTypes.func
  }


  static defaultProps = {
    autoplay: false,
    preload: true,
    source: "",
    loop: false,
    volume: .8,
    onTimeupdate: null,
    onError: null,
    onProgress: null,
    onEnded: null
  }

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.audioPlayListener = this.audioPlayListener.bind(this);
  }

  clickHandler() {
    this.audio.play();
  }

  audioPlayListener() {

  }

  componentDidMount() {
    const audio = this.audio = ReactDOM.findDOMNode(this.refs.audio);
  }

  render() {
    return (
      <audio
          ref="audio"
          preload={this.props.preload}
          volume={this.props.volume}
          controls={false}
          crossOrigin="anonymous"
          autoPlay={this.props.autoplay}
          loop={this.props.loop}
          src={this.props.source} />
    )
  }
}

export default AudioTag;