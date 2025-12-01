import RadarChartCard from '../charts/RadarChart.jsx';
import { colors } from '../../utils/constants.js';

const CompetitorCard = ({ competitor }) => (
  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div>
        <p className="text-sm text-gray-500">{competitor.parentCompany}</p>
        <p className="text-xl font-semibold" style={{ color: competitor.color }}>{competitor.name}</p>
        <p className="text-sm text-gray-600">{competitor.positioning}</p>
      </div>
      <div className="text-right text-sm text-gray-600">
        <p className="font-semibold">{competitor.marketSharePrepaid}% share prepago</p>
      </div>
    </div>
    <RadarChartCard
      data={Object.entries(competitor.scores).map(([k, v]) => ({ dimension: k, value: v }))}
      color={competitor.color || colors.claro}
    />
    <div className="grid grid-cols-2 gap-3 text-sm mt-3">
      <div>
        <p className="font-semibold text-gray-700">Fortalezas</p>
        <ul className="list-disc pl-4 text-gray-600 space-y-1">
          {competitor.strengths.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-gray-700">Debilidades</p>
        <ul className="list-disc pl-4 text-gray-600 space-y-1">
          {competitor.weaknesses.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
      <div>
        <p className="font-semibold text-gray-700">Amenazas para nosotros</p>
        <ul className="list-disc pl-4 text-gray-600 space-y-1">
          {competitor.threatsToUs.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-gray-700">Oportunidades frente a ellos</p>
        <ul className="list-disc pl-4 text-gray-600 space-y-1">
          {competitor.opportunitiesVsThem.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export default CompetitorCard;
