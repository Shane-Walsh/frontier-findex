import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Change: 3564, Stock: 3400 },
  { name: 'Tue', Change: 2376, Stock: 2398 },
  { name: 'Wed', Change: 8723, Stock: 4300 },
  { name: 'Thu', Change: 2376, Stock: 2908 },
  { name: 'Fri', Change: 2367, Stock: 4800 },
  { name: 'Sat', Change: 9858, Stock: 3800 },
  { name: 'Sun', Change: 3654, Stock: 4300 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
          <Line type="monotone" dataKey="Stock" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Change" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
