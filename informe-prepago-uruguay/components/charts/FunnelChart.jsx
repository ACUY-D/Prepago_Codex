import { colors } from '../../utils/constants.js';

const FunnelChartCard = ({ data }) => {
  const { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } = window.Recharts;
  return (
    <div className="w-full h-72 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <ResponsiveContainer>
        <FunnelChart>
          <Tooltip formatter={(value) => `${value}%`} />
          <Funnel dataKey="value" data={data} isAnimationActive fill={colors.movistar}>
            <LabelList dataKey="stage" position="right" fill="#374151" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelChartCard;
