import React from 'react';
import Cluster from './Cluster';

class ClusterContainer extends React.Component {
  render() {
    return (
      <div>
        {[
          {id: 0, clusterPadding: 0, height: 100, m: 1, maxRadius: 10, n: 10, padding: 1.5, width: 200},
          {id: 1, height: 400},
          {id: 2, m: 3, maxRadius: 4, padding: 5, n: 50},
          {id: 3}
         ].map((d, index) =>
          <div key={index+100} 
            style={{border: '1px solid #ccc', display: 'inline-block', margin: 5}}>
            <Cluster 
              key={(index+d.id).toString()}
              clusterPadding={d.clusterPadding || 6}
              container={"#svg" + d.id}
              height={d.height || 300}
              m={d.m || 5}
              maxRadius={d.maxRadius || 10}
              n={d.n || 100}
              padding={d.padding || 1.5}
              width={d.width || 300}
            />
          </div>)}
      </div>      
    ) 
  }
}

export default ClusterContainer;
