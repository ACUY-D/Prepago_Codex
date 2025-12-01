
const styles = {
  insight: 'bg-blue-50 text-blue-800 border-blue-100',
  warning: 'bg-yellow-50 text-yellow-800 border-yellow-100',
  opportunity: 'bg-green-50 text-green-800 border-green-100'
};

const Callout = ({ type = 'insight', title, description }) => (
  <div className={`border rounded-lg p-3 ${styles[type] || styles.insight}`}>
    <p className="font-semibold">{title}</p>
    <p className="text-sm">{description}</p>
  </div>
);

export default Callout;
