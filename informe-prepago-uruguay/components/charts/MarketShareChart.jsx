import { colors } from '../../utils/constants.js';

const MarketShareChart = ({ data }) => {
  const { PieChart, Pie, Cell, Tooltip, Legend } = window.Recharts;
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <PieChart width={360} height={240}>
        <Pie data={data} dataKey="share" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || colors.chartColors[index % colors.chartColors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MarketShareChart;
