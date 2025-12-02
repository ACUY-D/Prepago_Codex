
const ProgressBar = ({ label, value, color = '#00A19A' }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm text-gray-700">
      <span>{label}</span>
      <span className="font-semibold">{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-2 rounded-full" style={{ width: `${value}%`, backgroundColor: color }}></div>
    </div>
  </div>
);

export default ProgressBar;
