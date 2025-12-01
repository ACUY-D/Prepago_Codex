import { formatCurrency, formatNumber, formatPercentage, getTrendColor } from '../../utils/formatters.js';

const KPICard = ({ title, value, previousValue, unit, trend, period, icon: IconName, color }) => {
  const Icon = window.LucideReact?.[IconName || 'Activity'] || (() => null);
  const isPercentage = unit === '%';
  const formattedValue = unit?.includes('USD') ? formatCurrency(value, 1) : isPercentage ? formatPercentage(value, 1) : formatNumber(value, 1);
  const trendColor = getTrendColor(trend);

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-500">{title}</p>
        <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color || '#E0F2FE'}` }}>
          <Icon className="w-4 h-4 text-gray-700" />
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold text-gray-900">{formattedValue}</p>
          {previousValue && <p className="text-xs text-gray-500">Prev: {previousValue}</p>}
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 text-sm font-semibold ${trendColor}`}>
            <span>{trend > 0 ? '▲' : trend < 0 ? '▼' : '■'}</span>
            <span>{formatPercentage(Math.abs(trend))}</span>
            <span className="text-gray-400 text-xs">{period || 'vs YA'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPICard;
