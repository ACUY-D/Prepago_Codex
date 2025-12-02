import Section from '../components/layout/Section.jsx';
import Timeline from '../components/ui/Timeline.jsx';
import DataCard from '../components/ui/DataCard.jsx';
import ComparisonTable from '../components/ui/ComparisonTable.jsx';
import GaugeChart from '../components/charts/GaugeChart.jsx';

const ActionPlan = ({ plan }) => {
  const roadmapItems = Object.entries(plan.roadmap).map(([quarter, buckets]) => ({ quarter, initiatives: Object.values(buckets).flat() }));
  const budgetRows = Object.entries(plan.budget.byPillar).map(([pillar, values]) => [pillar, values.Q1, values.Q2, values.Q3, values.Q4]);
  return (
    <Section title="Plan de acción" description="Roadmap 2025 con quick wins, iniciativas prioritarias y presupuesto.">
      <Timeline items={roadmapItems} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plan.quickWins.map((qw) => (
          <DataCard key={qw.id} title={qw.title} icon="Zap">
            <p className="text-sm text-gray-700">{qw.description}</p>
            <p className="text-xs text-gray-500">Resp: {qw.responsible} | Inversión ${qw.investment}</p>
            <p className="text-xs text-gray-500">KPI: {qw.kpi} | Meta: {qw.target}</p>
            <p className="text-xs text-gray-500">Deadline: {qw.deadline}</p>
          </DataCard>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plan.detailedInitiatives.Q1.map((init) => (
          <DataCard key={init.id} title={init.title} icon="ListChecks">
            <p className="text-sm text-gray-700">{init.description}</p>
            <p className="text-xs text-gray-500">Responsable: {init.responsible}</p>
            <p className="text-xs text-gray-500">Equipo: {init.team.join(', ')}</p>
            <p className="text-xs text-gray-500">Timeline: {init.timeline.start} - {init.timeline.end}</p>
            <ul className="list-disc pl-4 text-xs text-gray-700 mt-1">
              {init.milestones.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </DataCard>
        ))}
      </div>
      <ComparisonTable headers={["Pilar", "Q1", "Q2", "Q3", "Q4"]} rows={budgetRows} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GaugeChart value={45} target={55} label="Recarga digital" />
        <GaugeChart value={3.0} target={2.6} label="Churn" />
        <GaugeChart value={9.0} target={10.5} label="ARPU" />
      </div>
      <DataCard title="Governance" icon="ClipboardList">
        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
          <li>{plan.governance.weeklyReview}</li>
          <li>{plan.governance.monthlyCommittee}</li>
          <li>{plan.governance.reportFormat}</li>
        </ul>
      </DataCard>
    </Section>
  );
};

export default ActionPlan;
