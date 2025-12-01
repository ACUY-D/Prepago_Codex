import { colors } from '../../utils/constants.js';

const ComparisonBarChart = ({ data, keys }) => {
  const { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } = window.Recharts;
  return (
    <div className="w-full h-72 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          {keys.map((key, idx) => (
            <Bar key={key.dataKey} dataKey={key.dataKey} name={key.label} fill={colors.chartColors[idx % colors.chartColors.length]} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonBarChart;
