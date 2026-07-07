import ContactHero from "./components/ContactHero";
import LocationSection from "./components/LocationSection";
import ContactMethods from "./components/ContactMethods";
import InquiryForm from "./components/InquiryForm";
import SocialLinksSection from "./components/SocialLinksSection";

export default function Contact() {
  return (
    <main className="bg-stone-50 text-stone-800">
      <ContactHero />
      <LocationSection />
      <ContactMethods />
      <InquiryForm />
      <SocialLinksSection />
    </main>
  );
}
