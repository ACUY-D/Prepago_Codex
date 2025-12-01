import Section from '../components/layout/Section.jsx';
import CompetitorCard from '../components/ui/CompetitorCard.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import ComparisonBarChart from '../components/charts/ComparisonBarChart.jsx';
import MatrixGrid from '../components/ui/MatrixGrid.jsx';

const CompetitiveAnalysis = ({ competition }) => (
  <Section title="Análisis competitivo" description="Posicionamiento relativo y brechas estratégicas frente a Claro y Antel.">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {competition.competitors.map((comp) => (
        <CompetitorCard key={comp.id} competitor={comp} />
      ))}
    </div>
    <ComparisonTable
      headers={["Dimensión", "Peso", "Movistar", "Claro", "Antel"]}
      rows={competition.comparisonMatrix.map((row) => [row.dimension, row.weight, row.movistar, row.claro, row.antel])}
    />
    <ComparisonBarChart
      data={competition.comparisonMatrix.map((row) => ({ label: row.dimension, Movistar: row.movistar, Claro: row.claro, Antel: row.antel }))}
      keys={[{ dataKey: 'Movistar', label: 'Movistar' }, { dataKey: 'Claro', label: 'Claro' }, { dataKey: 'Antel', label: 'Antel' }]}
    />
    <MatrixGrid
      quadrants={{
        'High Impact / Low Coverage': competition.marketGaps.filter((g) => g.opportunity === 'Alta').map((g) => g.gap),
        'High Impact / Current Coverage': competition.marketGaps.filter((g) => g.currentCoverage !== 'Ninguno').map((g) => g.gap),
        'Medium Impact': competition.marketGaps.filter((g) => g.opportunity === 'Media').map((g) => g.gap),
        'Riesgos': competition.competitors.flatMap((c) => c.threatsToUs)
      }}
    />
  </Section>
);

export default CompetitiveAnalysis;
