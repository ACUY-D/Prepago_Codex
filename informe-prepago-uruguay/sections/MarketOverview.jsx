import Section from '../components/layout/Section.jsx';
import KPICard from '../components/ui/KPICard.jsx';
import MarketShareChart from '../components/charts/MarketShareChart.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import TrendChart from '../components/charts/TrendChart.jsx';
import DataCard from '../components/ui/DataCard.jsx';

const MarketOverview = ({ market }) => (
  <Section title="Panorama del mercado" description="Tamaño, evolución y tendencias clave del mercado prepago uruguayo.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <KPICard title="Usuarios móviles" value={market.uruguayMarket.totalMobileUsers} unit="usuarios" trend={-0.5} icon="Users" />
      <KPICard title="Usuarios prepago" value={market.uruguayMarket.prepaidUsers} unit="usuarios" trend={market.uruguayMarket.yoyGrowth} icon="Smartphone" />
      <KPICard title="Penetración prepago" value={market.uruguayMarket.prepaidPercentage} unit="%" trend={market.uruguayMarket.yoyGrowth} icon="PieChart" />
      <KPICard title="Tamaño de mercado" value={market.uruguayMarket.marketSizeUSD / 1000000} unit="M USD" trend={1.5} icon="Banknote" />
      <KPICard title="ARPU promedio" value={market.uruguayMarket.avgARPU} unit="USD/mes" trend={-0.8} icon="Coins" />
      <KPICard title="Crecimiento YoY" value={market.uruguayMarket.yoyGrowth} unit="%" trend={market.uruguayMarket.yoyGrowth} icon="TrendingDown" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MarketShareChart data={market.uruguayMarket.operatorShares} />
      <ComparisonTable
        headers={["País", "Penetración prepago", "ARPU USD", "Tamaño prepago (M)"]}
        rows={[
          ["Uruguay", `${market.uruguayMarket.prepaidPercentage}%`, market.uruguayMarket.avgARPU, 180],
          ["Paraguay", "65%", 4.3, 150],
          ["Bolivia", "78%", 4.1, 170],
          ["Chile", "35%", 10.5, 220]
        ]}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TrendChart data={market.historicalData} dataKeys={[{ dataKey: 'prepaidUsers', label: 'Usuarios prepago' }, { dataKey: 'arpu', label: 'ARPU USD' }]} />
      <TrendChart data={market.voiceVsData} dataKeys={[{ dataKey: 'voice', label: 'Voz %' }, { dataKey: 'data', label: 'Datos %' }]} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {market.trends.map((trend) => (
        <DataCard key={trend.id} title={trend.title} icon={trend.icon}>
          <p className="text-sm text-gray-700">{trend.description}</p>
          <p className="text-xs text-gray-500 mt-1">Impacto {trend.impact.toUpperCase()} | Dirección {trend.direction}</p>
        </DataCard>
      ))}
    </div>
  </Section>
);

export default MarketOverview;
