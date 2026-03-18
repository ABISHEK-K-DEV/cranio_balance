import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import TherapyPage from '../components/TherapyPage'
import SupportSection from '../components/SupportSection'
import PractitionerSection from '../components/PractitionerSection'
import TestimonialSection from '../components/TestimonialSection'
import PricingSection from '../components/PricingSection'
import FaqSection from '../components/FaqSection'
import ContactCtaSection from '../components/ContactCtaSection'
import WhoForSection from '../components/WhoForSection'
import BenefitsSection from '../components/BenefitsSection'
import WhatsAppWidget from '../components/WhatsAppWidget'

function Pages() {
  return (
    <>
      <Navbar />

      <main>
        <HomePage />
        <TherapyPage />
        <BenefitsSection />
        <WhoForSection/>
        <SupportSection />
        <PractitionerSection />
        <TestimonialSection />
        <PricingSection />
        <FaqSection />
        <ContactCtaSection />
      </main>

      <Footer />
      
      <WhatsAppWidget />
    </>
  )
}

export default Pages
