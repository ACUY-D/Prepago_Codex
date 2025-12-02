import Section from '../components/layout/Section.jsx';
import DataCard from '../components/ui/DataCard.jsx';

const Appendix = () => (
  <Section title="Anexos" description="Fuentes, metodología y contacto para seguimiento del plan.">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DataCard title="Fuentes" icon="BookOpen">
        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
          <li>Regulador URSEC 2024</li>
          <li>GSMA Mobile Economy LATAM 2024</li>
          <li>Reportes públicos Movistar, Antel, Claro</li>
        </ul>
      </DataCard>
      <DataCard title="Metodología" icon="Beaker">
        <p className="text-sm text-gray-700">Estimaciones basadas en tendencias URSEC, benchmarks Tigo y supuestos de adopción digital.</p>
      </DataCard>
      <DataCard title="Contacto" icon="Mail">
        <p className="text-sm text-gray-700">Andrés - Responsable de Negocio Prepago</p>
        <p className="text-sm text-gray-700">Digital Services Manager B2B</p>
      </DataCard>
    </div>
  </Section>
);

export default Appendix;
