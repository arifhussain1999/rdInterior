const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Find where the page sections start and end
const startMarker = '  <!-- ══════════════════════════════════════════════ -->\r\n  <!-- HOME PAGE -->';
const endMarker = '  <!-- ══════════════════════════════════════════════ -->\r\n  <!-- CONSULTATION MODAL -->';

let startIndex = html.indexOf(startMarker);
let endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  // try with \n only
  const altStart = '  <!-- ══════════════════════════════════════════════ -->\n  <!-- HOME PAGE -->';
  const altEnd = '  <!-- ══════════════════════════════════════════════ -->\n  <!-- CONSULTATION MODAL -->';
  startIndex = html.indexOf(altStart);
  endIndex = html.indexOf(altEnd);
}

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find markers in index.html");
  process.exit(1);
}

const before = html.substring(0, startIndex);
const after = html.substring(endIndex);

const blogContent = `  <!-- ══════════════════════════════════════════════ -->
  <!-- BLOG POST -->
  <!-- ══════════════════════════════════════════════ -->
  <div class="page-section active" id="page-blog-post">
    <div style="height:100px;background:var(--black);"></div>

    <section style="padding:4rem 5% 0; max-width: 900px; margin: 0 auto;">
      <a href="index.html" style="color:var(--gold); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; text-decoration: none;"><i class="fas fa-arrow-left"></i> Back to Home</a>
      
      <div style="margin-top: 3rem;">
        <div class="blog-cat" style="font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem;">Kitchen Design</div>
        <h1 class="section-title" style="margin-bottom: 1.5rem; font-size: clamp(2rem, 5vw, 3.5rem);">Vastu-Compliant Modular Kitchen Design: Layouts & Tips for Noida & Ghaziabad Homes</h1>
        
        <div class="blog-meta" style="display: flex; gap: 2rem; color: var(--text-dim); font-size: 0.8rem; margin-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem;">
          <span><i class="far fa-calendar-alt"></i> July 4, 2026</span>
          <span><i class="far fa-clock"></i> 6 min read</span>
          <span><i class="far fa-user"></i> By R&D Dream Interior Decor</span>
        </div>
      </div>
    </section>

    <section style="padding: 0 5%; max-width: 1000px; margin: 0 auto 5rem;">
      <img loading="lazy" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&q=80" alt="Vastu Compliant Modular Kitchen Noida" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; margin-bottom: 4rem;" />
      
      <div style="max-width: 800px; margin: 0 auto; color: var(--text-dim); line-height: 2; font-size: 1.05rem; font-weight: 300;">
        <p style="margin-bottom: 2rem;">In Indian homes, the kitchen is more than just a place to cook—it is a sacred hub of energy and sustenance, governed by the element of fire. Designing a kitchen that balances modern functionality with ancient Vastu Shastra principles is essential to foster health, happiness, and prosperity. For high-rise apartments and residences in Noida and Ghaziabad, custom modular kitchens offer the perfect solution to combine space efficiency with Vastu compliance.</p>
        
        <p style="margin-bottom: 3rem;">At <strong>R&D Dream Interior Decor</strong>, we specialize in high-end modular designs that integrate beautiful aesthetics with structural guidelines. Here is a comprehensive guide to planning your Vastu-compliant modular kitchen in Noida, Ghaziabad, and the Delhi NCR region.</p>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">1. The Optimal Kitchen Placement (The Southeast Corner)</h3>
        <p style="margin-bottom: 3rem;">According to Vastu Shastra, the kitchen must ideally be situated in the <strong>Southeast (Agneya) corner</strong> of your home, which is ruled by Agni, the Lord of Fire. If a Southeast placement is not structurally possible in your apartment layout, the Northwest corner is considered the next best alternative. You should strictly avoid placing the kitchen in the Northeast or Southwest corners, as these placements are believed to cause domestic stress and financial imbalances.</p>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">2. Positioning the Hob, Sink, and Appliances</h3>
        <p style="margin-bottom: 3rem;">A well-planned kitchen layout must respect the relationship between fire and water, which are opposing forces. Vastu recommends separating the cooking range (fire) from the sink (water) to maintain positive energy flow:</p>
        <ul style="list-style-type: none; margin-bottom: 3rem; padding-left: 0;">
          <li style="margin-bottom: 1rem;"><strong style="color:var(--gold);">The Cooking Hob:</strong> Place the cooking hob in the Southeast part of the kitchen. While cooking, the chef should ideally face East, which promotes positive vibrations.</li>
          <li style="margin-bottom: 1rem;"><strong style="color:var(--gold);">The Kitchen Sink:</strong> The sink and water source should be placed in the Northeast or North corner of the kitchen counter. Ensure the sink is kept a reasonable distance away from the hob.</li>
          <li style="margin-bottom: 1rem;"><strong style="color:var(--gold);">Electronic Appliances:</strong> Heavy appliances like refrigerators and microwave ovens should be positioned in the Southwest or South zones of the kitchen. Avoid placing them in the Northeast.</li>
        </ul>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">3. Layout Configurations: L-Shaped, U-Shaped, and Parallel</h3>
        <p style="margin-bottom: 3rem;">Choosing the right modular kitchen layout depends on your floor area, but Vastu principles can be integrated into all of them. The <strong>L-shaped layout</strong> is highly recommended as it naturally facilitates the classic working triangle while allowing fire (Southeast hob) and water (Northeast sink) to sit on perpendicular counters. For smaller apartments in Raj Nagar Extension or Indirapuram, a Parallel Kitchen keeps the cooking and cleaning zones separated on opposite sides, preventing clutter and cross-flows.</p>
        
        <div style="padding: 2.5rem; background: rgba(201,162,39,0.05); border-left: 3px solid var(--gold); margin-bottom: 3rem;">
          <p style="font-family: var(--serif); font-size: 1.2rem; font-style: italic; color: var(--white); margin: 0;">"A Vastu-compliant kitchen is designed to harmonize the elements of nature. By placing our appliances and elements correctly, we create a positive environment where cooking feels therapeutic."</p>
        </div>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">4. Selection of Colors and Materials</h3>
        <p style="margin-bottom: 3rem;">Colors have a significant impact on our psychological state and energy. Vastu advises against using dark colors like deep black, dark blue, or dark grey in the kitchen as they absorb light and reduce energy levels. Instead, choose vibrant, warm shades like soft orange, yellow, cream, or beige. Natural stone countertops like honed quartz or granite are excellent materials. Additionally, to combat the effects of hard water in Noida/Ghaziabad, we use premium water-resistant marine plywood with anti-scaling laminate finishes to ensure durability.</p>

        <p style="margin-bottom: 2rem;">Ready to upgrade your home with a stunning, customized, and Vastu-compliant modular kitchen? The design experts at R&D Dream Interior Decor are here to assist you.</p>
        
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
          <a href="#" class="btn-gold" onclick="openModal()" style="font-size: 0.8rem; padding: 1.2rem 3rem;">Book a Free Design Consultation</a>
        </div>
      </div>
    </section>
    
    <!-- FOOTER -->
    <footer>
      <div class="footer-main">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <img src="PHOTO-2026-04-29-21-58-17-removebg-preview.png" alt="R&D Dream Interior Decor" class="logo-img">
          </a>
          <p class="footer-about">We transform living spaces into extraordinary experiences. With over 10 years of
            design excellence and 500+ completed projects, R&D Dream Interior Decor is India's premier luxury interior design studio.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/rdderaminteriors?igsh=MXZ3NmtmcHd1M2dxZA==" class="social-link"
              target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/share/1AzVot6x5F/" class="social-link" target="_blank"><i
                class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/@Rddreaminteriordecor" class="social-link"><i
                class="fab fa-youtube"></i></a>
            <a href="https://x.com/Rddreamint35872" class="social-link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://wa.me/918766212012" class="social-link" target="_blank"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#portfolio">Portfolio</a></li>
            <li><a href="index.html#blog">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="index.html#services">3D Design Layouts</a></li>
            <li><a href="index.html#services">Modular Kitchen</a></li>
            <li><a href="index.html#services">Custom Furniture</a></li>
            <li><a href="index.html#services">False Ceiling</a></li>
            <li><a href="index.html#services">Painting Services</a></li>
            <li><a href="index.html#services">Electrical Work</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-links">
            <li><a href="index.html#location">Ghaziabad & Noida</a></li>
            <li><a href="tel:+918766212012">+91 87662 12012</a></li>
            <li><a href="tel:+919718652112">+91 97186 52112</a></li>
            <li><a href="mailto:Info@rddecors.com">Info@rddecors.com</a></li>
            <li><a href="#">Mon–Sat: 10AM–7PM</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div style="display:flex;flex-direction:column;gap:5px;width:100%;text-align:center;">
          <p>© 2026 R&D Dream Interior Decor. All rights reserved.</p>
          <p style="opacity: 0.7; font-size: 0.72rem;">Crafted with 🤎 by <a href="https://nexvoraweb.in"
              target="_blank" style="color:var(--white);text-decoration:none;font-weight:600;">NexvoraWeb</a></p>
        </div>
      </div>
    </footer>
  </div>
`;

// Fix titles, canonical and description
let finalHtml = before + blogContent + after;
finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>Vastu-Compliant Modular Kitchen Design Noida & Ghaziabad | R&D Dream Interior Decor</title>');
finalHtml = finalHtml.replace(/content="R&D Dream Interior Decor is the best luxury home.*?"/, 'content="Discover the best layout, color options, and materials for designing a Vastu-compliant modular kitchen in your Noida or Ghaziabad apartment. Get expert design tips today!"');

// Change the canonical link
finalHtml = finalHtml.replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://www.rddecors.com/vastu-modular-kitchen-design-noida-ghaziabad.html">');

// Add JSON-LD schema markup for BlogPosting just before </head>
const schemaMarkup = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vastu-Compliant Modular Kitchen Design: Layouts & Tips for Noida & Ghaziabad Homes",
    "description": "Discover the best layout, color options, and materials for designing a Vastu-compliant modular kitchen in your Noida or Ghaziabad apartment. Get expert design tips today!",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&q=80",
    "author": {
      "@type": "Organization",
      "name": "R&D Dream Interior Decor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "R&D Dream Interior Decor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rddecors.com/PHOTO-2026-04-29-21-58-17-removebg-preview.png"
      }
    },
    "datePublished": "2026-07-04",
    "mainEntityOfPage": "https://www.rddecors.com/vastu-modular-kitchen-design-noida-ghaziabad.html",
    "keywords": "vastu modular kitchen Noida, modular kitchen design Ghaziabad, best kitchen designer NCR, modular kitchen price Noida, vastu kitchen direction"
  }
  </script>
`;

finalHtml = finalHtml.replace('</head>', schemaMarkup + '\n</head>');

// Fix the showPage references since this is a separate page now
// We want the nav links to go back to index.html#section
finalHtml = finalHtml.replace(/onclick="showPage\('home'\)"/g, 'href="index.html"');
finalHtml = finalHtml.replace(/onclick="showPage\('about'\)"/g, 'href="index.html#page-about"');
finalHtml = finalHtml.replace(/onclick="showPage\('portfolio'\)"/g, 'href="index.html#page-portfolio"');
finalHtml = finalHtml.replace(/onclick="showPage\('blog'\)"/g, 'href="index.html#page-blog"');

fs.writeFileSync('vastu-modular-kitchen-design-noida-ghaziabad.html', finalHtml, 'utf8');
console.log("Kitchen Blog post built successfully!");
