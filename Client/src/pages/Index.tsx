import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';

import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eagle Byte",
    "url": "https://eaglebyte.dev",
    "description": "Eagle Byte - Premium web and app development services by Kartik Parmar. We build powerful websites and applications that drive business growth.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://eaglebyte.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Home"
        description="Eagle Byte - Premium web and app development services in India. Founded by Kartik Parmar. We build powerful websites, mobile apps, and e-commerce solutions that drive business growth."
        keywords="Eagle Byte, EagleByte, eagle byt, Eagle Byt, Kartik Parmar, web development India, website developer Gujarat, app development, e-commerce solutions, best web development company India"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />

      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
