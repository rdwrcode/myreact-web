import React from 'react';
import ClusterFun from './ClusterFun';

class Cluster extends React.Component {
  componentDidMount() {
    // all the d3 magic will happen
    // *AFTER* render - it will be added to the existing 
    // svg node
    ClusterFun(this.props);
  }
  render() {
    const {height, width} = this.props;
    const id = this.props.container.replace('#', '');
    return <svg id={id} height={height} width={width} />;
  }
}

export default Cluster;
