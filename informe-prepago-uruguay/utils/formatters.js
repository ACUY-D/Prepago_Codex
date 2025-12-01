export const formatNumber = (value, decimals = 0) => {
  if (value === undefined || value === null) return '-';
  return value.toLocaleString('es-UY', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};

export const formatCurrency = (value, decimals = 1) => {
  if (value === undefined || value === null) return '-';
  return `$${value.toLocaleString('es-UY', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
};

export const formatPercentage = (value, decimals = 1) => {
  if (value === undefined || value === null) return '-';
  return `${value.toFixed(decimals)}%`;
};

export const getTrendColor = (trend) => {
  if (trend > 0) return 'text-green-500';
  if (trend < 0) return 'text-red-500';
  return 'text-gray-500';
};

export const getBadgeColor = (level) => {
  const map = { high: 'bg-red-100 text-red-700', medium: 'bg-yellow-100 text-yellow-700', low: 'bg-green-100 text-green-700' };
  return map[level] || 'bg-gray-100 text-gray-700';
};
