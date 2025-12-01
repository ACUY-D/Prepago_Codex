
const Section = ({ title, description, children }) => (
  <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {description && <p className="text-gray-600 text-sm max-w-3xl">{description}</p>}
      </div>
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

export default Section;
