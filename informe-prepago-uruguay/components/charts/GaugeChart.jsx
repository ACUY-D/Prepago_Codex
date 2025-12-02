import { colors } from '../../utils/constants.js';

const GaugeChart = ({ value, label, target }) => {
  const { RadialBarChart, RadialBar, Legend } = window.Recharts;
  const data = [
    { name: label, value, fill: colors.tigo },
    { name: 'Objetivo', value: target || 100, fill: colors.gray[200] }
  ];
  return (
    <div className="flex flex-col items-center">
      <RadialBarChart width={180} height={180} innerRadius="60%" outerRadius="90%" barSize={14} data={data} startAngle={180} endAngle={0}>
        <RadialBar minAngle={15} background clockWise dataKey="value" />
      </RadialBarChart>
      <p className="text-sm text-gray-700 -mt-6 font-semibold">{value}%</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
};

export default GaugeChart;
