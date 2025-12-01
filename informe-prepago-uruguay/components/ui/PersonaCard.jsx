import ScoreBar from './ScoreBar.jsx';

const PersonaCard = ({ segment }) => (
  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{segment.emoji}</span>
        <div>
          <p className="font-semibold text-gray-900">{segment.name}</p>
          <p className="text-sm text-gray-500">{segment.description}</p>
        </div>
      </div>
      <div className="text-right text-sm text-gray-600">
        <p className="font-semibold text-gray-900">{segment.marketShare}% del mercado</p>
        <p>ARPU índice {segment.arpuIndex}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
      <div className="space-y-1">
        <p><span className="font-semibold">Uso principal:</span> {segment.primaryUse}</p>
        <p><span className="font-semibold">Driver:</span> {segment.mainDriver}</p>
        <p><span className="font-semibold">Frecuencia recarga:</span> {segment.rechargeFrequency} /mes</p>
      </div>
      <div className="space-y-1">
        <p><span className="font-semibold">Ticket promedio:</span> ${segment.avgRechargeAmount}</p>
        <p><span className="font-semibold">Oportunidad:</span> {segment.opportunity}</p>
        <p><span className="font-semibold">Estrategia:</span> {segment.recommendedStrategy}</p>
      </div>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
      <div>
        <p className="font-semibold text-gray-700 mb-1">Características</p>
        <ul className="list-disc pl-4 space-y-1 text-gray-600">
          {segment.characteristics.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-gray-700 mb-1">Pain points</p>
        <ul className="list-disc pl-4 space-y-1 text-gray-600">
          {segment.painPoints.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
    <div className="mt-3">
      <ScoreBar
        label="Canales de recarga"
        scores={[
          { competitor: 'Digital', value: segment.channels.digital, color: '#00A19A' },
          { competitor: 'Físico', value: segment.channels.physical, color: '#019DF4' }
        ]}
      />
    </div>
  </div>
);

export default PersonaCard;
