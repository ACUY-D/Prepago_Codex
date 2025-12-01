import { formatPercentage } from '../../utils/formatters.js';

const ScoreBar = ({ label, scores }) => (
  <div className="space-y-2">
    {label && <p className="text-sm font-semibold text-gray-700">{label}</p>}
    <div className="space-y-2">
      {scores.map((item) => (
        <div key={item.competitor} className="flex items-center gap-2">
          <div className="w-28 text-sm text-gray-600">{item.competitor}</div>
          <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-2 rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color || '#019DF4' }}></div>
          </div>
          <span className="w-12 text-sm text-gray-700 text-right">{item.value}{item.suffix || '%'}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ScoreBar;
