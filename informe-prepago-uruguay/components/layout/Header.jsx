
const Header = ({ title, subtitle, date }) => (
  <header className="flex flex-col gap-1 mb-6">
    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Informe Ejecutivo - Prepago Uruguay</p>
    <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
    {subtitle && <p className="text-gray-600 max-w-4xl">{subtitle}</p>}
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <span>{date || 'Actualizado: Enero 2025'}</span>
      <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold uppercase">Confidencial</span>
    </div>
  </header>
);

export default Header;
