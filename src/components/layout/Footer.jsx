import React from "react";
import HelpContactCTA from "./HelpContactCTA";
import DestinationComparisonGuide from "./DestinationComparisonGuide";
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden font-sans tracking-wide">
      {/* 1. Need Help / CTA Section */}
      <HelpContactCTA />
      
      {/* 2. Free Destinations Comparison Guide */}
      <DestinationComparisonGuide />
      
      {/* 3. Main Footer Links & Social Channels */}
      <FooterNavigation />
    </footer>
  );
};

export default Footer;