import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';

import { VictoryBar,VictoryChart } from 'Victory';

const row = d => {
  d.brand = +d.brand;
  return d;
};

const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('graph.csv', row).then(setData);
  }, []);
  
  return (
    <VictoryChart
      style={{tickLabels: {fontSize: 120} }}
      width='960'
      height='500'
      domainPadding={50}
      padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
    >
      <VictoryBar data={data} x="Brand" y="val_1" y="val_2" y="mark_val" />
    </VictoryChart>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);