import Section from '../components/layout/Section.jsx';
import CountryCard from '../components/ui/CountryCard.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import DataCard from '../components/ui/DataCard.jsx';

const TigoBenchmark = ({ benchmark }) => (
  <Section title="Benchmarking Tigo" description="Lecciones de los mercados prepago donde Tigo lidera y su aplicabilidad en Uruguay.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {benchmark.countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
    <ComparisonTable
      headers={["Categoría", "Prácticas clave", "País referente"]}
      rows={benchmark.consolidatedBestPractices.map((bp) => [bp.category, bp.practices.join(', '), bp.topCountry])}
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {benchmark.successCases.map((sc) => (
        <DataCard key={sc.title} title={`${sc.title} (${sc.country})`} icon="Medal">
          <p className="text-sm text-gray-700"><span className="font-semibold">Desafío:</span> {sc.challenge}</p>
          <p className="text-sm text-gray-700"><span className="font-semibold">Solución:</span> {sc.solution}</p>
          <ul className="list-disc pl-4 text-sm text-gray-700 mt-1">
            {sc.results.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p className="text-xs text-gray-500 mt-1">Aplicabilidad UY: {sc.applicabilityUY}</p>
        </DataCard>
      ))}
    </div>
  </Section>
);

export default TigoBenchmark;
