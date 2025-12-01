import { colors } from '../../utils/constants.js';

const sections = [
  { id: 'executive-summary', label: '0. Resumen Ejecutivo' },
  { id: 'market-overview', label: '1. Panorama del Mercado' },
  { id: 'consumer-profile', label: '2. Consumidor Prepago' },
  { id: 'tigo-benchmark', label: '3. Benchmark Tigo' },
  { id: 'competitive-analysis', label: '4. Competencia' },
  { id: 'diagnostic', label: '5. Diagnóstico Movistar' },
  { id: 'strategy', label: '6. Estrategia' },
  { id: 'action-plan', label: '7. Plan de Acción' },
  { id: 'appendix', label: '8. Anexos' }
];

const Sidebar = ({ activeSection, onNavigate }) => (
  <nav className="sticky top-4 h-full bg-white border border-gray-100 rounded-xl shadow-sm p-4 w-64">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#019DF4] to-[#00A19A] flex items-center justify-center text-white font-bold">T</div>
      <div>
        <p className="text-xs text-gray-500">Movistar Uruguay</p>
        <p className="text-sm font-semibold text-gray-800">Informe Prepago</p>
      </div>
    </div>
    <div className="space-y-1">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-center gap-2 ${activeSection === section.id ? 'bg-[#019DF4]/10 text-[#019DF4] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeSection === section.id ? colors.movistar : colors.gray[300] }} />
          {section.label}
        </button>
      ))}
    </div>
  </nav>
);

export default Sidebar;
