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
  console.error("Could not find markers");
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
        <div class="blog-cat" style="font-size: 0.65rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem;">Interior Trends</div>
        <h1 class="section-title" style="margin-bottom: 1.5rem; font-size: clamp(2rem, 5vw, 3.5rem);">Quiet Luxury: The Defining Interior Design Trend of <em>2026</em></h1>
        
        <div class="blog-meta" style="display: flex; gap: 2rem; color: var(--text-dim); font-size: 0.8rem; margin-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem;">
          <span><i class="far fa-calendar-alt"></i> June 1, 2026</span>
          <span><i class="far fa-clock"></i> 5 min read</span>
          <span><i class="far fa-user"></i> By R&D Dream Studio</span>
        </div>
      </div>
    </section>

    <section style="padding: 0 5%; max-width: 1000px; margin: 0 auto 5rem;">
      <img loading="lazy" src="assets/projects/img53.jpg" alt="Quiet Luxury Interior" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; margin-bottom: 4rem;" />
      
      <div style="max-width: 800px; margin: 0 auto; color: var(--text-dim); line-height: 2; font-size: 1.05rem; font-weight: 300;">
        <p style="margin-bottom: 2rem;">As we move through 2026, the interior design landscape has experienced a profound shift. The era of overt opulence, flashy logos, and maximalist clutter has gracefully stepped aside to make room for a more refined, sophisticated approach known as <strong>"Quiet Luxury."</strong></p>
        
        <p style="margin-bottom: 3rem;">At its core, quiet luxury is about intentionality. It's an aesthetic that whispers rather than shouts, relying on exceptional craftsmanship, bespoke customization, and materials that tell a story. Here is how you can incorporate this defining trend into your own spaces.</p>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">1. Warm Minimalism: The New Standard</h3>
        <p style="margin-bottom: 3rem;">Minimalism is no longer cold or clinical. <em>Warm minimalism</em> is the foundation of quiet luxury, characterized by layered textures, soft curves, and a color palette that brings warmth to a room. Think creamy off-whites, sandy tones, and deep, grounding browns. The focus is on editing the space—keeping only pieces that hold personal meaning or profound beauty.</p>

        <img loading="lazy" src="assets/projects/img54.jpg" alt="Warm Minimalism Bedroom" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; margin-bottom: 3rem;" />

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">2. Materials That Age Beautifully</h3>
        <p style="margin-bottom: 3rem;">True luxury is found in longevity. In 2026, we are seeing a massive demand for <strong>patina-rich finishes</strong>. Materials like unlacquered brass, honed marble, natural stone, and solid woods that develop character over time are highly sought after. These organic elements bring a tactile, sensorial experience that synthetic materials simply cannot replicate.</p>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">3. Bespoke Customization</h3>
        <p style="margin-bottom: 3rem;">When everything is mass-produced, the ultimate luxury is having something made exclusively for you. Custom millwork, tailored furniture designed specifically for your body and space, and integrated smart home features hidden behind seamless wood panels are the hallmarks of a bespoke, luxurious home. This tailored approach ensures your space is entirely unique.</p>
        
        <div style="padding: 2.5rem; background: rgba(201,162,39,0.05); border-left: 3px solid var(--gold); margin-bottom: 3rem;">
          <p style="font-family: var(--serif); font-size: 1.2rem; font-style: italic; color: var(--white); margin: 0;">"Quiet luxury isn't about how much you spend; it's about the feeling a space gives you when you walk in. It's the ultimate comfort wrapped in understated elegance."</p>
        </div>

        <h3 style="font-family: var(--serif); font-size: 1.8rem; color: var(--white); margin-bottom: 1.5rem; font-weight: 400;">4. Sensorial and Organic Luxe</h3>
        <p style="margin-bottom: 3rem;">Design in 2026 engages all the senses. From the satisfying weight of a solid bronze door handle to the acoustic dampening of a heavy boucle fabric, every detail is considered. <strong>Organic Luxe</strong> blends natural silhouettes and biophilic design with high-end execution, bringing the serenity of nature indoors.</p>

        <p style="margin-bottom: 2rem;">Ready to bring quiet luxury to your home? The design experts at R&D Dream Studio are here to turn your vision into a reality.</p>
        
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
          <a href="#" class="btn-gold" onclick="openModal()" style="font-size: 0.8rem; padding: 1.2rem 3rem;">Book a Free Design Consultation</a>
        </div>
      </div>
    </section>
    
    <footer>
      <div class="footer-bottom" style="background:var(--near-black);border-top:1px solid rgba(255,255,255,0.04);">
        <div style="display:flex;flex-direction:column;gap:5px;width:100%;text-align:center;padding:1.5rem 0;">
          <p>© 2026 R&D Dream. All rights reserved.</p>
          <p style="opacity: 0.7; font-size: 0.72rem;">Crafted with 🤎 by <a href="https://nexvoraweb.in"
              target="_blank" style="color:var(--white);text-decoration:none;font-weight:600;">NexvoraWeb</a></p>
        </div>
      </div>
    </footer>
  </div>
`;

// Fix the title in the head
let finalHtml = before + blogContent + after;
finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>Quiet Luxury Interior Design Trends 2026 | R&D Dream</title>');
finalHtml = finalHtml.replace(/content="Premium luxury interior design studio.*?"/, 'content="Discover the top luxury interior design trends for 2026, focusing on quiet luxury, warm minimalism, bespoke customization, and patina-rich finishes."');

// Change the canonical link
finalHtml = finalHtml.replace(/<link rel="canonical" href=".*?">/, '<link rel="canonical" href="https://www.rddecors.com/quiet-luxury-interior-design-2026.html">');

// Fix the showPage references since this is a separate page now
// We want the nav links to go back to index.html#section
finalHtml = finalHtml.replace(/onclick="showPage\('home'\)"/g, 'href="index.html"');
finalHtml = finalHtml.replace(/onclick="showPage\('about'\)"/g, 'href="index.html#page-about"');
finalHtml = finalHtml.replace(/onclick="showPage\('portfolio'\)"/g, 'href="index.html#page-portfolio"');
finalHtml = finalHtml.replace(/onclick="showPage\('blog'\)"/g, 'href="index.html#page-blog"');

fs.writeFileSync('quiet-luxury-interior-design-2026.html', finalHtml, 'utf8');
console.log("Blog post built successfully!");
