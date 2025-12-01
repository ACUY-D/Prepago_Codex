import { colors } from '../../utils/constants.js';

const TrendChart = ({ data, dataKeys }) => {
  const { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } = window.Recharts;
  return (
    <div className="w-full h-72 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, idx) => (
            <Line key={key.dataKey} type="monotone" dataKey={key.dataKey} name={key.label} stroke={colors.chartColors[idx % colors.chartColors.length]} strokeWidth={2} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
