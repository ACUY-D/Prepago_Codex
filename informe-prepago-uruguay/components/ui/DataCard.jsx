
const DataCard = ({ title, children, icon: IconName, accent = 'bg-blue-50' }) => {
  const Icon = window.LucideReact?.[IconName || 'Info'] || (() => null);
  return (
    <div className={`border border-gray-100 rounded-xl p-4 shadow-sm bg-white`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${accent}`}>
          <Icon className="w-4 h-4 text-gray-700" />
        </div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
      </div>
      <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default DataCard;
