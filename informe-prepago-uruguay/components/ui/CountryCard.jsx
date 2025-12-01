import Badge from './Badge.jsx';

const CountryCard = ({ country }) => (
  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{country.flag}</span>
        <div>
          <p className="font-semibold text-gray-900">{country.name}</p>
          <p className="text-xs text-gray-500">Posición prepago: #{country.position}</p>
        </div>
      </div>
      <Badge label={`${country.replicabilityScore}/5 replicabilidad`} level={country.replicabilityScore >= 4 ? 'high' : 'medium'} />
    </div>
    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
      <p><span className="font-semibold">Share prepago:</span> {country.prepaidMarketShare}%</p>
      <p><span className="font-semibold">ARPU:</span> ${country.arpu}</p>
      <p><span className="font-semibold">Usuarios prepago:</span> {country.prepaidUsers.toLocaleString('es-UY')}</p>
      <p><span className="font-semibold">Operadores:</span> {country.totalOperators}</p>
    </div>
    <div className="mt-3">
      <p className="font-semibold text-gray-700">Mejores prácticas</p>
      <ul className="list-disc pl-4 text-gray-600 space-y-1 text-sm">
        {country.bestPractices.map((bp) => (
          <li key={bp.practice}><span className="font-semibold">{bp.category}:</span> {bp.practice} ({bp.impact})</li>
        ))}
      </ul>
    </div>
    <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Aprendizaje:</span> {country.keyLearning}</p>
  </div>
);

export default CountryCard;
