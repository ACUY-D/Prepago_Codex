import { colors } from '../../utils/constants.js';

const RadarChartCard = ({ data, color = colors.movistar }) => {
  const { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, ResponsiveContainer } = window.Recharts;
  return (
    <div className="w-full h-64 bg-white">
      <ResponsiveContainer>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="80%">
          <PolarGrid />
          <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 11 }} />
          <Tooltip />
          <Radar name="Score" dataKey="value" stroke={color} fill={color} fillOpacity={0.2} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartCard;
