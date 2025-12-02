import Sidebar from './components/layout/Sidebar.jsx';
import Header from './components/layout/Header.jsx';
import ExecutiveSummary from './sections/ExecutiveSummary.jsx';
import MarketOverview from './sections/MarketOverview.jsx';
import ConsumerProfile from './sections/ConsumerProfile.jsx';
import TigoBenchmark from './sections/TigoBenchmark.jsx';
import CompetitiveAnalysis from './sections/CompetitiveAnalysis.jsx';
import DiagnosticMovistar from './sections/DiagnosticMovistar.jsx';
import Strategy from './sections/Strategy.jsx';
import ActionPlan from './sections/ActionPlan.jsx';
import Appendix from './sections/Appendix.jsx';

const { useEffect, useState, useRef } = React;

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('executive-summary');
  const sectionRefs = useRef({});

  useEffect(() => {
    const loadData = async () => {
      const files = ['kpis', 'marketData', 'consumerSegments', 'tigoCountries', 'competitors', 'movistarDiagnostic', 'strategy', 'actionPlan'];
      const responses = await Promise.all(files.map((file) => fetch(`./data/${file}.json`).then((r) => r.json())));
      setData({
        kpis: responses[0],
        market: responses[1],
        consumers: responses[2],
        benchmark: responses[3],
        competition: responses[4],
        diagnostic: responses[5],
        strategy: responses[6],
        plan: responses[7]
      });
      setLoading(false);
    };
    loadData();
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const node = sectionRefs.current[id];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Cargando informe...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
        <main className="space-y-6">
          <Header title="Informe ejecutivo: Prepago móvil Uruguay" subtitle="Acciones para acelerar liderazgo Movistar (futuro Tigo Uruguay) en 2025" />
          <div id="executive-summary" ref={(el) => (sectionRefs.current['executive-summary'] = el)}>
            <ExecutiveSummary kpis={data.kpis} />
          </div>
          <div id="market-overview" ref={(el) => (sectionRefs.current['market-overview'] = el)}>
            <MarketOverview market={data.market} />
          </div>
          <div id="consumer-profile" ref={(el) => (sectionRefs.current['consumer-profile'] = el)}>
            <ConsumerProfile consumers={data.consumers} />
          </div>
          <div id="tigo-benchmark" ref={(el) => (sectionRefs.current['tigo-benchmark'] = el)}>
            <TigoBenchmark benchmark={data.benchmark} />
          </div>
          <div id="competitive-analysis" ref={(el) => (sectionRefs.current['competitive-analysis'] = el)}>
            <CompetitiveAnalysis competition={data.competition} />
          </div>
          <div id="diagnostic" ref={(el) => (sectionRefs.current['diagnostic'] = el)}>
            <DiagnosticMovistar diagnostic={data.diagnostic} />
          </div>
          <div id="strategy" ref={(el) => (sectionRefs.current['strategy'] = el)}>
            <Strategy strategy={data.strategy} />
          </div>
          <div id="action-plan" ref={(el) => (sectionRefs.current['action-plan'] = el)}>
            <ActionPlan plan={data.plan} />
          </div>
          <div id="appendix" ref={(el) => (sectionRefs.current['appendix'] = el)}>
            <Appendix />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
