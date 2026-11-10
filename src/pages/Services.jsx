import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import DevelopmentProcess from "../components/services/DevelopmentProcess";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
return ( <main className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">


  {/* Hero Section */}
  <ServicesHero />

  {/* Services Section */}
  <ServicesList />

  {/* Development Workflow */}
  <DevelopmentProcess />

  {/* Contact CTA */}
  <ServicesCTA />

</main>


);
};

export default Services;
