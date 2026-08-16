const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const startMarker = '  <!-- ══════════════════════════════════════════════ -->\r\n  <!-- HOME PAGE -->';
const endMarker = '  <!-- ══════════════════════════════════════════════ -->\r\n  <!-- CONSULTATION MODAL -->';

let startIndex = html.indexOf(startMarker);
let endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  const altStart = '  <!-- ══════════════════════════════════════════════ -->\n  <!-- HOME PAGE -->';
  const altEnd = '  <!-- ══════════════════════════════════════════════ -->\n  <!-- CONSULTATION MODAL -->';
  startIndex = html.indexOf(altStart);
  endIndex = html.indexOf(altEnd);
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
        <div class="blog-cat" style="font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem;">Sustainability</div>
        <h1 class="section-title" style="margin-bottom: 1.5rem; font-size: clamp(2rem, 5vw, 3.5rem);">Sustainable & Eco-Friendly Interior Design Trends <em>2026</em></h1>
        
        <div class="blog-meta" style="display: flex; gap: 2rem; color: var(--text-dim); font-size: 0.8rem; margin-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem;">
          <span><i class="far fa-calendar-alt"></i> July 18, 2026</span>
          <span><i class="far fa-clock"></i> 6 min read</span>
          <span><i class="far fa-user"></i> By R&D Dream Interior Decor</span>
        </div>
      </div>
    </section>

    <section style="padding: 0 5%; max-width: 1000px; margin: 0 auto 5rem;">
      <img loading="lazy" src="assets/projects/img53.jpg" alt="Eco-Friendly Interior Design" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; margin-bottom: 4rem;" />
      
      <div style="max-width: 800px; margin: 0 auto; color: var(--text-dim); line-height: 2; font-size: 1.05rem; font-weight: 300;">
        <p style="margin-bottom: 2rem;">In 2026, sustainable interior design is no longer just a niche movement—it is the baseline for modern luxury. Homeowners in Noida, Ghaziabad, and Delhi NCR are increasingly demanding spaces that are not only aesthetically breathtaking but also environmentally responsible.</p>
        
        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">1. Upcycled and Reclaimed Materials</h3>
        <p style="margin-bottom: 3rem;">The use of reclaimed wood, upcycled metals, and repurposed stone is trending heavily. These materials bring a unique character and history to a space that new materials cannot replicate, all while reducing the carbon footprint of your home's interior.</p>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">2. Biophilic Design Evolution</h3>
        <p style="margin-bottom: 3rem;">Biophilic design has evolved beyond just adding potted plants. In 2026, we are integrating living green walls, indoor water features, and maximizing natural light through strategic layout planning. This connection to nature has been proven to reduce stress and improve air quality.</p>
        
        <div style="padding: 2.5rem; background: rgba(201,162,39,0.05); border-left: 3px solid var(--gold); margin-bottom: 3rem;">
          <p style="font-family: var(--serif); font-size: 1.2rem; font-style: italic; color: var(--white); margin: 0;">"True luxury in 2026 means creating a space that cares for the environment as much as it cares for your comfort."</p>
        </div>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">3. Non-Toxic Finishes</h3>
        <p style="margin-bottom: 3rem;">There is a massive shift towards zero-VOC (Volatile Organic Compounds) paints, natural oil wood finishes, and organic textiles like hemp and organic cotton. Designing a healthy indoor environment is paramount for modern families.</p>

        <p style="margin-bottom: 2rem;">Ready to design a sustainable, luxurious home? Contact the experts at R&D Dream Interior Decor.</p>
        
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
          <p class="footer-about">We transform living spaces into extraordinary experiences. With over 10 years of design excellence and 500+ completed projects, R&D Dream Interior Decor is India's premier luxury interior design studio.</p>
        </div>
      </div>
    </footer>
  </div>\n`;

let newHtml = before + blogContent + after;

newHtml = newHtml.replace(
  /<title>.*?<\/title>/,
  '<title>Sustainable & Eco-Friendly Interior Design Trends 2026 | R&D Dream Interior Decor</title>'
);

newHtml = newHtml.replace(
  /<meta name="description"[\s\S]*?\/>/,
  '<meta name="description" content="Discover the latest sustainable and eco-friendly interior design trends for 2026. Learn how to create luxurious, green homes in Noida and Ghaziabad." />'
);

newHtml = newHtml.replace(
  /<meta name="keywords"[\s\S]*?\/>/,
  '<meta name="keywords" content="sustainable interior design, eco-friendly homes, 2026 interior trends, biophilic design, green interiors noida, R&D Dream Interior Decor" />'
);

newHtml = newHtml.replace(
  /<meta property="og:title"[\s\S]*?\/>/,
  '<meta property="og:title" content="Sustainable & Eco-Friendly Interior Design Trends 2026" />'
);

newHtml = newHtml.replace(
  /<meta property="og:description"[\s\S]*?\/>/,
  '<meta property="og:description" content="Discover the latest sustainable and eco-friendly interior design trends for 2026 in Noida and Ghaziabad." />'
);

newHtml = newHtml.replace(
  /<meta property="og:url"[\s\S]*?\/>/,
  '<meta property="og:url" content="https://www.rddecors.com/sustainable-eco-friendly-interior-design-2026.html" />'
);

newHtml = newHtml.replace(
  /<link rel="canonical"[\s\S]*?>/,
  '<link rel="canonical" href="https://www.rddecors.com/sustainable-eco-friendly-interior-design-2026.html">'
);

fs.writeFileSync('sustainable-eco-friendly-interior-design-2026.html', newHtml, 'utf8');
console.log("sustainable-eco-friendly-interior-design-2026.html generated successfully!");
