import os

images_dir = r"d:\Ecommerce\images"
os.makedirs(images_dir, exist_ok=True)

# 1. Logo SVG
logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="280" height="60">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#EA580C" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#F59E0B" flood-opacity="0.3"/>
    </filter>
  </defs>
  <!-- Icon -->
  <g transform="translate(6, 6)">
    <rect x="0" y="0" width="48" height="48" rx="14" fill="url(#logoGrad)" filter="url(#glow)"/>
    <!-- Clog silhouette / honeycomb sweet nest icon -->
    <path d="M13 25 C13 18, 18 14, 27 14 C35 14, 39 18, 40 23 C40 28, 38 31, 35 32 C32 33, 27 33.5, 23 33.5 L17 33.5 C14.5 33.5, 13 30, 13 25 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M16 25 C16 21, 20 18, 27 18" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" fill="none"/>
    <circle cx="23" cy="22" r="1.6" fill="#F59E0B" />
    <circle cx="28" cy="22" r="1.6" fill="#F59E0B" />
    <circle cx="33" cy="24" r="1.6" fill="#F59E0B" />
    <circle cx="20" cy="25" r="1.4" fill="#F59E0B" />
    <circle cx="25" cy="26" r="1.4" fill="#F59E0B" />
    <circle cx="36" cy="12" r="3.5" fill="#FEF3C7"/>
  </g>
  <!-- Brand text -->
  <text x="66" y="33" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#0F172A" letter-spacing="-0.5">Necter<tspan fill="#EA580C">Nest</tspan></text>
  <text x="67" y="47" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#64748B" letter-spacing="1.5">CLOUD COMFORT CLOGS</text>
</svg>"""

with open(os.path.join(images_dir, "logo.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg)

# 2. UPI QR Code SVG
qr_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350" width="300" height="350">
  <defs>
    <linearGradient id="bhimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#008080" />
      <stop offset="100%" stop-color="#0A5C64" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="296" height="346" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
  <!-- Top Bar -->
  <path d="M2 18 C2 9.16 9.16 2 18 2 L282 2 C290.84 2 298 9.16 298 18 L298 52 L2 52 Z" fill="url(#bhimGrad)"/>
  <text x="150" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">BHIM UPI / GPAY / PHONEPE</text>
  
  <!-- QR Box outline -->
  <rect x="30" y="72" width="240" height="200" rx="10" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
  
  <!-- Stylized QR Matrix Pattern -->
  <rect x="52" y="94" width="46" height="46" fill="none" stroke="#0F172A" stroke-width="6" rx="4"/>
  <rect x="64" y="106" width="22" height="22" fill="#0F172A" rx="2"/>
  
  <rect x="202" y="94" width="46" height="46" fill="none" stroke="#0F172A" stroke-width="6" rx="4"/>
  <rect x="214" y="106" width="22" height="22" fill="#0F172A" rx="2"/>
  
  <rect x="52" y="196" width="46" height="46" fill="none" stroke="#0F172A" stroke-width="6" rx="4"/>
  <rect x="64" y="208" width="22" height="22" fill="#0F172A" rx="2"/>

  <!-- Modules -->
  <g fill="#1E293B">
    <rect x="112" y="96" width="14" height="26" rx="2"/>
    <rect x="134" y="96" width="26" height="12" rx="2"/>
    <rect x="168" y="96" width="18" height="18" rx="2"/>
    <rect x="112" y="128" width="32" height="12" rx="2"/>
    <rect x="152" y="122" width="20" height="20" rx="2"/>
    <rect x="180" y="124" width="12" height="26" rx="2"/>
    
    <rect x="112" y="152" width="18" height="18" rx="2" fill="#EA580C"/>
    <rect x="138" y="148" width="28" height="26" rx="4" fill="#F59E0B"/>
    <rect x="174" y="154" width="16" height="14" rx="2" fill="#EA580C"/>
    
    <rect x="112" y="184" width="26" height="14" rx="2"/>
    <rect x="146" y="182" width="16" height="24" rx="2"/>
    <rect x="170" y="186" width="22" height="12" rx="2"/>
    <rect x="202" y="164" width="18" height="32" rx="2"/>
    <rect x="228" y="164" width="20" height="14" rx="2"/>
    <rect x="226" y="190" width="18" height="20" rx="2"/>

    <rect x="112" y="212" width="38" height="14" rx="2"/>
    <rect x="158" y="216" width="18" height="24" rx="2"/>
    <rect x="184" y="208" width="24" height="14" rx="2"/>
    <rect x="216" y="220" width="28" height="14" rx="2"/>
  </g>
  
  <text x="150" y="298" font-family="'Courier New', monospace" font-size="14" font-weight="700" fill="#0F172A" text-anchor="middle">necternest@upi</text>
  <text x="150" y="322" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#64748B" text-anchor="middle">Scan &amp; pay via any UPI app</text>
</svg>"""

with open(os.path.join(images_dir, "qr-code.svg"), "w", encoding="utf-8") as f:
    f.write(qr_svg)

# 3. Dynamic Clog SVG Generator
def generate_clog_svg(filename, title, color_main, color_dark, color_light, sole_color, badge_text, charm_type="bee"):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="100%" stop-color="#FEF3C7" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="clogBody" x1="0%" y1="20%" x2="100%" y2="80%">
      <stop offset="0%" stop-color="{color_light}" />
      <stop offset="50%" stop-color="{color_main}" />
      <stop offset="100%" stop-color="{color_dark}" />
    </linearGradient>
    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="{sole_color}" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.14"/>
    </filter>
  </defs>

  <!-- Clean card background -->
  <rect width="600" height="450" fill="url(#bgGrad)" rx="24"/>
  
  <!-- Subtle circular backdrop -->
  <circle cx="300" cy="225" r="170" fill="#FFFFFF" opacity="0.6"/>
  <circle cx="300" cy="225" r="130" fill="{color_light}" opacity="0.25"/>

  <!-- Badge Pill -->
  <g transform="translate(40, 36)">
    <rect width="110" height="28" rx="14" fill="#0F172A"/>
    <text x="55" y="18" fill="#FFFFFF" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.5">{badge_text}</text>
  </g>

  <!-- Ground Shadow -->
  <ellipse cx="295" cy="355" rx="195" ry="24" fill="#0F172A" opacity="0.12" filter="blur(6px)"/>

  <!-- MAIN CLOG ILLUSTRATION -->
  <g filter="url(#shadow)" transform="translate(10, 0)">
    <!-- Sole / Midsole Platform (Thick Ergonomic Cushion) -->
    <path d="M 125 315 
             C 140 338, 200 345, 275 345 
             C 365 345, 450 335, 475 310 
             C 485 300, 475 285, 450 282 
             C 410 278, 320 284, 255 288 
             C 195 292, 140 288, 120 298 
             Z" 
          fill="url(#soleGrad)" stroke="{color_dark}" stroke-width="2"/>
    
    <!-- Sole Grip Ridges -->
    <path d="M 170 336 L 175 342 M 220 342 L 225 346 M 270 344 L 275 348 M 325 344 L 330 347 M 380 340 L 385 343 M 430 330 L 435 334" 
          stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>

    <!-- Upper Shoe Foam Body -->
    <path d="M 130 295 
             C 120 250, 145 190, 215 175 
             C 275 162, 365 170, 420 215 
             C 460 250, 475 280, 455 295 
             C 435 305, 390 288, 330 285 
             C 260 282, 185 285, 130 295 Z" 
          fill="url(#clogBody)"/>

    <!-- Collar / Ankle Rim Contour -->
    <path d="M 175 220 
             C 200 190, 245 185, 305 195 
             C 330 200, 350 215, 335 230 
             C 310 245, 260 240, 210 238 
             C 185 237, 172 232, 175 220 Z" 
          fill="{color_dark}" opacity="0.25"/>

    <!-- Heel Pivoting Strap -->
    <path d="M 148 270 
             C 135 240, 140 210, 168 198 
             C 192 188, 230 195, 240 208 
             C 246 216, 238 226, 216 226 
             C 190 226, 165 240, 158 266 Z" 
          fill="{color_dark}"/>
    
    <!-- Strap Rivet / Logo Button -->
    <circle cx="152" cy="270" r="10" fill="#FFFFFF" stroke="{color_dark}" stroke-width="2"/>
    <circle cx="152" cy="270" r="5" fill="#F59E0B"/>

    <!-- Ventilation Ports (Holes) -->
    <ellipse cx="280" cy="210" rx="6" ry="10" fill="{color_dark}" opacity="0.65" transform="rotate(-15 280 210)"/>
    <ellipse cx="320" cy="216" rx="6" ry="11" fill="{color_dark}" opacity="0.65" transform="rotate(-10 320 216)"/>
    <ellipse cx="360" cy="230" rx="7" ry="12" fill="{color_dark}" opacity="0.65" transform="rotate(5 360 230)"/>
    <ellipse cx="400" cy="254" rx="7" ry="12" fill="{color_dark}" opacity="0.65" transform="rotate(20 400 254)"/>

    <ellipse cx="265" cy="238" rx="6" ry="9" fill="{color_dark}" opacity="0.65" transform="rotate(-10 265 238)"/>
    <ellipse cx="305" cy="245" rx="6" ry="10" fill="{color_dark}" opacity="0.65" transform="rotate(-5 305 245)"/>
    <ellipse cx="350" cy="260" rx="7" ry="11" fill="{color_dark}" opacity="0.65" transform="rotate(10 350 260)"/>
    <ellipse cx="390" cy="280" rx="6" ry="9" fill="{color_dark}" opacity="0.65" transform="rotate(25 390 280)"/>

    <ellipse cx="230" cy="258" rx="5" ry="8" fill="{color_dark}" opacity="0.65" transform="rotate(-5 230 258)"/>
    <ellipse cx="270" cy="270" rx="6" ry="8" fill="{color_dark}" opacity="0.65"/>
    <ellipse cx="315" cy="276" rx="6" ry="8" fill="{color_dark}" opacity="0.65"/>

    <!-- Decorative Jibbitz Charm -->
    <g transform="translate(325, 232)">
      <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
      <circle cx="12" cy="12" r="10" fill="#F59E0B"/>
      <!-- Honey Bee / Flower Charm -->
      <path d="M8 12 C8 8, 16 8, 16 12 C16 16, 8 16, 8 12 Z" fill="#0F172A"/>
      <ellipse cx="12" cy="12" rx="3" ry="5" fill="#FEF3C7"/>
      <circle cx="8" cy="8" r="3" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="16" cy="8" r="3" fill="#FFFFFF" opacity="0.8"/>
    </g>

    <!-- Toe Highlight Curve -->
    <path d="M 390 228 C 430 255, 445 278, 435 292" 
          stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.45"/>
  </g>

  <!-- Bottom Details -->
  <text x="300" y="415" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="18" font-weight="800" fill="#0F172A" text-anchor="middle">{title}</text>
  <text x="300" y="433" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="12" font-weight="600" fill="#64748B" text-anchor="middle">Ultra-Light Cloud EVA Cushioning</text>
</svg>"""

products_config = [
    ("clog-honey-amber.svg", "Honey Amber Classic Clog", "#F59E0B", "#B45309", "#FCD34D", "#FFFFFF", "BESTSELLER"),
    ("clog-pastel-mint.svg", "Mint Breeze Cloud Clog", "#10B981", "#047857", "#6EE7B7", "#ECFDF5", "NEW DROP"),
    ("clog-cotton-candy.svg", "Cotton Candy Pink Clog", "#EC4899", "#BE185D", "#F472B6", "#FDF2F8", "TRENDING"),
    ("clog-midnight-slate.svg", "Midnight Slate Sport Clog", "#334155", "#0F172A", "#64748B", "#F1F5F9", "TOP RATED"),
    ("clog-lavender-dream.svg", "Lavender Mist Platform Clog", "#8B5CF6", "#6D28D9", "#C4B5FD", "#F5F3FF", "LIMITED"),
    ("clog-matcha-green.svg", "Matcha Pop Daily Clog", "#84CC16", "#4D7C0F", "#BEF264", "#F7FEE7", "FRESH"),
    ("clog-ocean-navy.svg", "Deep Ocean All-Terrain Clog", "#0284C7", "#0369A1", "#38BDF8", "#F0F9FF", "OUTDOOR"),
    ("clog-sunshine-yellow.svg", "Sunshine Pop Vibrant Clog", "#EAB308", "#A16207", "#FDE047", "#FEFCE8", "HOT DEAL"),
    ("clog-sand-beige.svg", "Desert Sand Minimal Clog", "#D97706", "#78350F", "#FDE68A", "#FFFBEB", "AESTHETIC"),
    ("clog-berry-red.svg", "Berry Blast Street Clog", "#E11D48", "#9F1239", "#FB7185", "#FFF1F2", "BOLD"),
    ("clog-pearl-white.svg", "Pearl White Cushion Clog", "#94A3B8", "#475569", "#E2E8F0", "#FFFFFF", "ICONIC"),
    ("clog-carbon-black.svg", "Stealth Carbon Matte Clog", "#1E293B", "#020617", "#475569", "#0F172A", "ESSENTIAL"),
]

for filename, title, c_main, c_dark, c_light, sole, badge in products_config:
    svg_content = generate_clog_svg(filename, title, c_main, c_dark, c_light, sole, badge)
    with open(os.path.join(images_dir, filename), "w", encoding="utf-8") as f:
        f.write(svg_content)

print(f"Generated {len(products_config)} clog SVG assets successfully!")
