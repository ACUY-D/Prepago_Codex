import Section from '../components/layout/Section.jsx';
import KPICard from '../components/ui/KPICard.jsx';
import MatrixGrid from '../components/ui/MatrixGrid.jsx';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import DataCard from '../components/ui/DataCard.jsx';

const DiagnosticMovistar = ({ diagnostic }) => (
  <Section title="Diagnóstico Movistar" description="Estado actual del prepago Movistar y oportunidades tras integración con Tigo.">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Object.entries(diagnostic.currentKPIs).map(([key, value]) => (
        <KPICard key={key} title={key} value={value} unit={typeof value === 'number' && value < 10 ? 'USD' : ''} trend={0} />
      ))}
    </div>
    <MatrixGrid
      quadrants={{
        Fortalezas: diagnostic.swot.strengths,
        Debilidades: diagnostic.swot.weaknesses,
        Oportunidades: diagnostic.swot.opportunities,
        Amenazas: diagnostic.swot.threats
      }}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {diagnostic.areaDiagnostics.map((area) => (
        <div key={area.area} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-gray-900">{area.area}</p>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full uppercase">Prioridad {area.priority}</span>
          </div>
          <p className="text-sm text-gray-700 mb-2">{area.currentState}</p>
          <ProgressBar label="Madurez" value={area.maturityScore * 20} />
          <ul className="list-disc pl-4 text-sm text-gray-700 mt-2">
            {area.gaps.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {diagnostic.tigoOpportunity.benefits.map((b) => (
        <DataCard key={b.title} title={b.title} icon="Sparkles">
          <p className="text-sm text-gray-700">{b.description}</p>
          <p className="text-xs text-gray-500 mt-1">Impacto {b.impact}</p>
        </DataCard>
      ))}
    </div>
  </Section>
);

export default DiagnosticMovistar;
