import Section from '../components/layout/Section.jsx';
import PersonaCard from '../components/ui/PersonaCard.jsx';
import FunnelChart from '../components/charts/FunnelChart.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import ComparisonBarChart from '../components/charts/ComparisonBarChart.jsx';

const ConsumerProfile = ({ consumers }) => (
  <Section title="El consumidor prepago" description="Segmentos principales, drivers de decisión y comportamiento de recarga.">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {consumers.segments.map((segment) => (
        <PersonaCard key={segment.id} segment={segment} />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FunnelChart data={consumers.journey.map((stage) => ({ stage: stage.stage, value: 100 - stage.painPoints.length * 10 }))} />
      <ComparisonTable
        headers={["Factor", "Importancia", "Movistar", "Claro", "Antel"]}
        rows={consumers.decisionFactors.map((f) => [f.factor, f.importance, f.movistar, f.claro, f.antel])}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ComparisonBarChart
        data={consumers.rechargeChannels.map((c) => ({ label: c.channel, porcentaje: c.percentage, tendencia: c.trend }))}
        keys={[{ dataKey: 'porcentaje', label: '% Uso' }, { dataKey: 'tendencia', label: 'Tendencia pp' }]}
      />
      <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
        <p className="text-lg font-semibold text-gray-900 mb-2">Insights de recarga</p>
        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
          <li>La recarga digital crece aceleradamente pero aún 62% recarga en canales físicos.</li>
          <li>Bonos progresivos por recurrencia digital pueden mover +5 pp en 90 días.</li>
          <li>Las redes de cobranza siguen clave para migración a Tigo Money.</li>
        </ul>
      </div>
    </div>
  </Section>
);

export default ConsumerProfile;
