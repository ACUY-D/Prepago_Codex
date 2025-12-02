import Badge from './Badge.jsx';

const InitiativeCard = ({ initiative, pillar }) => (
  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <div>
        <p className="text-sm text-gray-500">{pillar}</p>
        <p className="font-semibold text-gray-900">{initiative.title}</p>
      </div>
      <Badge label={`Impacto ${initiative.impact}/5`} level={initiative.impact >= 4 ? 'high' : 'medium'} />
    </div>
    <p className="text-sm text-gray-700 mb-2">{initiative.description}</p>
    <div className="flex items-center gap-3 text-xs text-gray-600">
      <span className="px-2 py-1 bg-gray-100 rounded-full">Esfuerzo {initiative.effort}/5</span>
      <span className="px-2 py-1 bg-gray-100 rounded-full">Timeline {initiative.timeline}</span>
      {initiative.investment !== undefined && <span className="px-2 py-1 bg-gray-100 rounded-full">Inversión ${initiative.investment.toLocaleString('es-UY')}</span>}
    </div>
  </div>
);

export default InitiativeCard;
