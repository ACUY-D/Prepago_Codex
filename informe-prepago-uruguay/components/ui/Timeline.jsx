
const Timeline = ({ items }) => (
  <div className="flex overflow-x-auto gap-4 pb-2">
    {items.map((item) => (
      <div key={item.quarter} className="min-w-[220px] border border-gray-100 rounded-xl p-3 bg-white shadow-sm">
        <p className="text-xs uppercase text-gray-500 font-semibold">{item.quarter}</p>
        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-4">
          {item.initiatives.map((init) => (
            <li key={init}>{init}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Timeline;
