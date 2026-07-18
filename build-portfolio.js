const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// 1. Update active page
let portfolioHtml = html.replace(
  '<div class="page-section active" id="page-home">',
  '<div class="page-section" id="page-home">'
);
portfolioHtml = portfolioHtml.replace(
  '<div class="page-section" id="page-portfolio">',
  '<div class="page-section active" id="page-portfolio">'
);

// 2. Update SEO Tags
portfolioHtml = portfolioHtml.replace(
  /<title>.*?<\/title>/,
  '<title>Our Interior Design Portfolio | Luxury Projects | R&D Dream Interior Decor</title>'
);

portfolioHtml = portfolioHtml.replace(
  /<meta name="description"[\s\S]*?\/>/,
  '<meta name="description" content="Explore our extensive portfolio of luxury interior design projects in Noida and Ghaziabad. View our stunning residential, commercial, and industrial interior transformations." />'
);

portfolioHtml = portfolioHtml.replace(
  /<meta name="keywords"[\s\S]*?\/>/,
  '<meta name="keywords" content="interior design portfolio, luxury interior projects, residential interiors, commercial interior design, noida interior projects, ghaziabad interiors, R&D Dream Interior Decor portfolio" />'
);

portfolioHtml = portfolioHtml.replace(
  /<meta property="og:title"[\s\S]*?\/>/,
  '<meta property="og:title" content="Our Interior Design Portfolio | Luxury Projects | R&D Dream Interior Decor" />'
);

portfolioHtml = portfolioHtml.replace(
  /<meta property="og:description"[\s\S]*?\/>/,
  '<meta property="og:description" content="Explore our extensive portfolio of luxury interior design projects in Noida and Ghaziabad." />'
);

portfolioHtml = portfolioHtml.replace(
  /<meta property="og:url"[\s\S]*?\/>/,
  '<meta property="og:url" content="https://www.rddecors.com/portfolio.html" />'
);

portfolioHtml = portfolioHtml.replace(
  /<link rel="canonical"[\s\S]*?>/,
  '<link rel="canonical" href="https://www.rddecors.com/portfolio.html">'
);

// Save portfolio page
fs.writeFileSync('portfolio.html', portfolioHtml, 'utf8');
console.log("portfolio.html generated successfully!");
