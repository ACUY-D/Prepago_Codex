
const MatrixGrid = ({ quadrants }) => (
  <div className="grid grid-cols-2 gap-2">
    {Object.entries(quadrants).map(([title, items]) => (
      <div key={title} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
        <p className="text-sm font-semibold text-gray-800 mb-2">{title}</p>
        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default MatrixGrid;
