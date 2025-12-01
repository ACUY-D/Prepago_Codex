import { getBadgeColor } from '../../utils/formatters.js';

const Badge = ({ label, level }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeColor(level)}`}>{label}</span>
);

export default Badge;
