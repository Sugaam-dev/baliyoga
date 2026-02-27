import ContactHero from "./ContactHero";
import LocationSection from "./LocationSection";
import ContactMethods from "./ContactMethods";
import InquiryForm from "./InquiryForm";
import SocialLinksSection from "./SocialLinksSection";

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