import Section from '../components/layout/Section.jsx';
import KPICard from '../components/ui/KPICard.jsx';
import Callout from '../components/ui/Callout.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';

const ExecutiveSummary = ({ kpis }) => (
  <Section title="Resumen Ejecutivo" description="Contexto competitivo de prepago en Uruguay y acciones prioritarias para capturar share en 2025.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kpis.marketKPIs.map((kpi) => (
        <KPICard key={kpi.id} title={kpi.title} value={kpi.value} unit={kpi.unit} trend={kpi.trend} period={kpi.period} icon="Activity" />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {kpis.keyFindings.map((item) => (
        <Callout key={item.title} type={item.type} title={item.title} description={item.description} />
      ))}
    </div>
    <div>
      <p className="text-lg font-semibold text-gray-900 mb-2">Recomendaciones prioritarias</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {kpis.topRecommendations.map((rec) => (
          <div key={rec.priority} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">#{rec.priority}</span>
              <span className="text-xs text-gray-500">Impacto {rec.impact} | Esfuerzo {rec.effort}</span>
            </div>
            <p className="font-semibold text-gray-900">{rec.title}</p>
            <p className="text-sm text-gray-700">{rec.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="text-lg font-semibold text-gray-900 mb-2">Impacto esperado</p>
      <ComparisonTable
        headers={["Métrica", "Actual", "Objetivo", "Plazo"]}
        rows={kpis.expectedImpact.map((item) => [item.metric, item.current, item.target, item.timeline])}
      />
    </div>
  </Section>
);

export default ExecutiveSummary;
