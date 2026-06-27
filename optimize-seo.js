const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Inject JSON-LD Schema (LocalBusiness and FAQPage)
const localBusinessSchema = `
  <!-- God-Level Structured Data / JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.rddecors.com/#localbusiness",
        "name": "R&D Dream Studio",
        "image": "https://www.rddecors.com/PHOTO-2026-04-29-21-58-17-removebg-preview.png",
        "logo": "https://www.rddecors.com/PHOTO-2026-04-29-21-58-17-removebg-preview.png",
        "url": "https://www.rddecors.com/",
        "telephone": "+918766212012",
        "email": "info@rddecors.com",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office Number 1, Tyagi Market Sehani Khurd Ghukna, Raj Nagar Extension",
          "addressLocality": "Ghaziabad",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201003",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.6730,
          "longitude": 77.4429
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        },
        "sameAs": [
          "https://www.instagram.com/rdderaminteriors?igsh=MXZ3NmtmcHd1M2dxZA==",
          "https://www.facebook.com/share/1AzVot6x5F/",
          "https://www.youtube.com/@Rddreaminteriordecor",
          "https://x.com/Rddreamint35872"
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Noida"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Ghaziabad"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Greater Noida"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Delhi NCR"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.rddecors.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does R&D Dream design homes to handle Ghaziabad's dust and weather?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ghaziabad experiences high dust levels and extreme seasonal temperatures. To counter this, we design closed modular wardrobes and kitchens instead of open shelving, use anti-dust and easy-to-clean polyurethane (PU) finishes, and recommend double-glazed weather-sealed UPVC windows for balconies. We also seamlessly integrate premium concealed air purifiers and ventilation units into false ceilings to keep your indoor air clean."
            }
          },
          {
            "@type": "Question",
            "name": "Can we install smart home automation in high-rise apartments in Raj Nagar Extension or Indirapuram?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. We specialize in retrofit automation solutions that install directly behind your existing switchboards without any wall chipping or structural damage. This allows you to control lighting, appliances, and security while fully complying with society maintenance and builder guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle power fluctuations and outages for smart devices in Ghaziabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To protect your smart home system from NCR's frequent power fluctuations, we install high-quality surge protectors and load balancers at the main DB board. Our systems are fully compatible with local double-battery home inverters and society backup generators, ensuring that your automation nodes automatically restore their last state smoothly when the power returns."
            }
          },
          {
            "@type": "Question",
            "name": "How does Ghaziabad's hard water quality affect plumbing and modular designs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ghaziabad's high TDS hard water causes scaling and corrosion. We tackle this by integrating inline centralized water softeners, using heavy-duty CPVC/PPR piping from trusted brands, and specifying scaling-resistant matte/brushed finishes for kitchen and bathroom faucets. Our modular kitchens also feature water-resistant multi-ply marine plywood to prevent any damage from moisture."
            }
          },
          {
            "@type": "Question",
            "name": "What is your typical timeline for delivering a turnkey interior design project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard turnkey luxury interior and automation setup takes between 45 to 60 days from blueprint approval to final handover. Because our Head Office is locally situated in Raj Nagar Extension, Ghaziabad, we deploy dedicated on-site project managers who perform daily audits, preventing delays and ensuring premium quality control."
            }
          },
          {
            "@type": "Question",
            "name": "Do you assist in securing builders' or RWAs' approvals for interior work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Before starting execution in any gated society (such as ATS, Mahagun, or Landcraft), we provide a complete set of technical drawings, including detailed MEP (Mechanical, Electrical, Plumbing) layouts, false ceiling structural details, and load requirements, to help you get quick NOCs from the building maintenance office."
            }
          }
        ]
      }
    ]
  }
  </script>
`;

// Remove previous schemas if any, then insert right before </head>
html = html.replace(/<!-- God-Level Structured Data \/ JSON-LD -->[\s\S]*?<\/script>/g, '');
html = html.replace('</head>', `${localBusinessSchema}\n</head>`);


// 2. Automate Image Alt Tags
// Let's replace the port-item images dynamically to make them keyword rich
// Regex matches:
// <div class="port-item"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*>[\s\S]*?<div class="port-cat">([^<]+)<\/div>[\s\S]*?<div class="port-title">([^<]+)<\/div>
// Let's do a replace using a replacer function:
const portItemRegex = /(<div class="port-item"[^>]*>[\s\S]*?<img[^>]+src=")([^"]+)("[^>]+alt=")([^"]*)("[^>]* class="port-img"[^>]*>[\s\S]*?<div class="port-cat">)([^<]+)(<\/div>[\s\S]*?<div class="port-title">)([^<]+)(<\/div>)/g;

html = html.replace(portItemRegex, (match, p1, src, p3, alt, p5, category, p7, title, p9) => {
  // Build a rich keyword alt tag
  const locationText = src.includes('commercial') ? 'Noida & Ghaziabad office' : 'Noida & Ghaziabad home';
  const cleanTitle = title.trim();
  const cleanCat = category.trim();
  const keywordAlt = `${cleanTitle} - ${cleanCat} Interior Design & Decor Project in Noida, Ghaziabad by R&D Dream`;
  
  return `${p1}${src}${p3}${keywordAlt}${p5}${category}${p7}${title}${p9}`;
});

// Ensure any other main images have descriptive alt tags
html = html.replace('alt="R&D Dream Interior Decor"', 'alt="R&D Dream Luxury Interior Design & Home Decor in Noida & Ghaziabad"');
html = html.replace('alt="Interior Detail"', 'alt="Luxury Home Interior details and customized finishes by R&D Dream"');

fs.writeFileSync('index.html', html, 'utf8');
console.log("Homepage SEO optimized successfully!");
