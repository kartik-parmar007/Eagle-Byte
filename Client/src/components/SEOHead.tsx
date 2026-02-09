import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead = ({
  title,
  description,
  keywords = "Eagle Byte, EagleByte, Eagle Byte Agency, Kartik Parmar, Kartik Parmar Developer, web development company India, custom software development, React developer Gujarat, MERN stack developer, freelance web developer India",
  canonicalUrl,
  ogImage = "/og-image.png",
  ogType = "website",
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Eagle Byte - Web & App Development`;
  const siteUrl = "https://eaglebyte.dev";

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eagle Byte",
    "alternateName": "EagleByte",
    "url": siteUrl,
    "logo": `${siteUrl}/LOGO.jpeg`,
    "founder": {
      "@type": "Person",
      "name": "Kartik Parmar",
      "jobTitle": "Founder & Lead Developer",
      "url": "https://www.linkedin.com/in/kartik-parmar-/",
      "sameAs": [
        "https://github.com/kartik-parmar007",
        "https://www.linkedin.com/in/kartik-parmar-/"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9773405142",
      "contactType": "customer service",
      "email": "kartikparmar.dev@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/kartik-parmar-/",
      "https://github.com/kartik-parmar007"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Gujarat"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kartik Parmar" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Eagle Byte" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Mobile Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#00e5ff" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
