import { formatNumber } from '../../utils/formatters.js';

const ComparisonTable = ({ headers, rows }) => (
  <div className="overflow-x-auto border border-gray-100 rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-3 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {rows.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {row.map((cell, i) => (
              <td key={`${idx}-${i}`} className="px-3 py-2 text-sm text-gray-700">{typeof cell === 'number' ? formatNumber(cell, 1) : cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
