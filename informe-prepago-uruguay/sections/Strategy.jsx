import Section from '../components/layout/Section.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import InitiativeCard from '../components/ui/InitiativeCard.jsx';
import MatrixGrid from '../components/ui/MatrixGrid.jsx';
import DataCard from '../components/ui/DataCard.jsx';

const Strategy = ({ strategy }) => (
  <Section title="Estrategia recomendada" description="Visión, objetivos y pilares para capturar liderazgo en prepago.">
    <DataCard title="Visión" icon="Eye">
      <p className="text-lg font-semibold text-gray-900">{strategy.vision}</p>
    </DataCard>
    <ComparisonTable
      headers={["Objetivo", "Métrica", "Actual", "12m", "24m"]}
      rows={strategy.strategicObjectives.map((obj) => [obj.objective, obj.metric, obj.current, obj.target12m, obj.target24m])}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {strategy.positioningOptions.map((option) => (
        <div key={option.id} className={`border rounded-xl p-4 shadow-sm ${option.recommended ? 'border-[#00A19A] bg-[#00A19A]/5' : 'border-gray-100 bg-white'}`}>
          <p className="text-xs text-gray-500 uppercase">{option.targetSegment}</p>
          <p className="text-lg font-semibold text-gray-900">{option.title}</p>
          <p className="text-sm text-gray-700">{option.statement}</p>
          <ul className="list-disc pl-4 text-sm text-gray-700 mt-2">
            {option.proofPoints.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <p className="text-xs text-gray-500 mt-1">Riesgos: {option.risks.join(', ')}</p>
          {option.recommended && <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Recomendado</span>}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {strategy.pillars.map((pillar) => (
        <div key={pillar.id} className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-gray-900">{pillar.name}</p>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{pillar.objective}</span>
          </div>
          <div className="space-y-2">
            {pillar.initiatives.map((init) => (
              <InitiativeCard key={init.id} initiative={init} pillar={pillar.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
    <MatrixGrid
      quadrants={{
        'Alto impacto / Bajo esfuerzo': strategy.prioritizationMatrix.highImpactLowEffort,
        'Alto impacto / Alto esfuerzo': strategy.prioritizationMatrix.highImpactHighEffort,
        'Bajo impacto / Bajo esfuerzo': strategy.prioritizationMatrix.lowImpactLowEffort,
        'Bajo impacto / Alto esfuerzo': strategy.prioritizationMatrix.lowImpactHighEffort
      }}
    />
  </Section>
);

export default Strategy;
