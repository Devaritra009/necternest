import os

images_dir = r"d:\Ecommerce\images"
os.makedirs(images_dir, exist_ok=True)

# 1. Modern Dark Logo SVG
logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="280" height="60">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#FF5E1E" />
    </linearGradient>
    <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.45"/>
    </filter>
  </defs>
  <!-- Modern Geometric Icon -->
  <g transform="translate(6, 6)">
    <rect x="0" y="0" width="48" height="48" rx="14" fill="#131B2B" stroke="url(#logoGrad)" stroke-width="1.8" filter="url(#neonGlow)"/>
    <!-- Clog silhouette / nest icon -->
    <path d="M13 25 C13 18, 18 14, 27 14 C35 14, 39 18, 40 23 C40 28, 38 31, 35 32 C32 33, 27 33.5, 23 33.5 L17 33.5 C14.5 33.5, 13 30, 13 25 Z" fill="url(#logoGrad)"/>
    <path d="M16 25 C16 21, 20 18, 27 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
    <circle cx="23" cy="22" r="1.6" fill="#FFFFFF" />
    <circle cx="28" cy="22" r="1.6" fill="#FFFFFF" />
    <circle cx="33" cy="24" r="1.6" fill="#FFFFFF" />
    <circle cx="20" cy="25" r="1.4" fill="#FFFFFF" />
    <circle cx="25" cy="26" r="1.4" fill="#FFFFFF" />
    <circle cx="36" cy="12" r="3.5" fill="#FDE68A"/>
  </g>
  <!-- Brand text -->
  <text x="66" y="33" font-family="'Outfit', system-ui, -apple-system, sans-serif" font-size="25" font-weight="900" fill="#F8FAFC" letter-spacing="-0.5">NECTER<tspan fill="#F59E0B">NEST</tspan></text>
  <text x="67" y="47" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="9" font-weight="800" fill="#94A3B8" letter-spacing="2.2">DROP // STREET CLOUD COMFORT</text>
</svg>"""

with open(os.path.join(images_dir, "logo.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg)

# 2. Modern Dark UPI QR Code SVG
qr_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350" width="300" height="350">
  <defs>
    <linearGradient id="qrNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#FF5E1E" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="296" height="346" rx="18" fill="#131B2B" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2"/>
  <!-- Top Bar -->
  <path d="M2 18 C2 9.16 9.16 2 18 2 L282 2 C290.84 2 298 9.16 298 18 L298 52 L2 52 Z" fill="#1E293B"/>
  <text x="150" y="32" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#F59E0B" text-anchor="middle" letter-spacing="1">⚡ BHIM UPI / GPAY / PHONEPE</text>
  
  <!-- QR Box outline (Dark Glass) -->
  <rect x="28" y="70" width="244" height="204" rx="12" fill="#0B0F17" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1.5"/>
  
  <!-- Stylized QR Matrix Pattern in Neon/White -->
  <rect x="52" y="94" width="46" height="46" fill="none" stroke="#F8FAFC" stroke-width="6" rx="6"/>
  <rect x="64" y="106" width="22" height="22" fill="#F59E0B" rx="3"/>
  
  <rect x="202" y="94" width="46" height="46" fill="none" stroke="#F8FAFC" stroke-width="6" rx="6"/>
  <rect x="214" y="106" width="22" height="22" fill="#F59E0B" rx="3"/>
  
  <rect x="52" y="196" width="46" height="46" fill="none" stroke="#F8FAFC" stroke-width="6" rx="6"/>
  <rect x="64" y="208" width="22" height="22" fill="#F59E0B" rx="3"/>

  <!-- Matrix Modules -->
  <g fill="#94A3B8">
    <rect x="112" y="96" width="14" height="26" rx="3"/>
    <rect x="134" y="96" width="26" height="12" rx="3"/>
    <rect x="168" y="96" width="18" height="18" rx="3"/>
    <rect x="112" y="128" width="32" height="12" rx="3"/>
    <rect x="152" y="122" width="20" height="20" rx="3"/>
    <rect x="180" y="124" width="12" height="26" rx="3"/>
    
    <rect x="112" y="152" width="18" height="18" rx="3" fill="#FF5E1E"/>
    <rect x="138" y="148" width="28" height="26" rx="5" fill="#F59E0B"/>
    <rect x="174" y="154" width="16" height="14" rx="3" fill="#FF5E1E"/>
    
    <rect x="112" y="184" width="26" height="14" rx="3"/>
    <rect x="146" y="182" width="16" height="24" rx="3"/>
    <rect x="170" y="186" width="22" height="12" rx="3"/>
    <rect x="202" y="164" width="18" height="32" rx="3"/>
    <rect x="228" y="164" width="20" height="14" rx="3"/>
    <rect x="226" y="190" width="18" height="20" rx="3"/>

    <rect x="112" y="212" width="38" height="14" rx="3"/>
    <rect x="158" y="216" width="18" height="24" rx="3"/>
    <rect x="184" y="208" width="24" height="14" rx="3"/>
    <rect x="216" y="220" width="28" height="14" rx="3"/>
  </g>
  
  <text x="150" y="298" font-family="'Space Grotesk', monospace" font-size="14" font-weight="800" fill="#F59E0B" text-anchor="middle">necternest@upi</text>
  <text x="150" y="322" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#94A3B8" text-anchor="middle">Instant 0-fee payment via any UPI App</text>
</svg>"""

with open(os.path.join(images_dir, "qr-code.svg"), "w", encoding="utf-8") as f:
    f.write(qr_svg)

# 3. Dynamic Modern Streetwear Clog SVG Generator (Sleek Dark Backdrop with Neon Glow)
def generate_clog_svg(filename, title, color_main, color_dark, color_light, sole_color, badge_text, charm_type="bee"):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <!-- Dark Moody Studio Mesh Gradient -->
    <radialGradient id="studioDark" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1E293B" />
      <stop offset="55%" stop-color="#111827" />
      <stop offset="100%" stop-color="#0B0F17" />
    </radialGradient>
    
    <!-- Neon Underglow -->
    <radialGradient id="neonHalo" cx="50%" cy="55%" r="50%">
      <stop offset="0%" stop-color="{color_main}" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="{color_main}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0B0F17" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="clogBody" x1="0%" y1="15%" x2="100%" y2="85%">
      <stop offset="0%" stop-color="{color_light}" />
      <stop offset="45%" stop-color="{color_main}" />
      <stop offset="100%" stop-color="{color_dark}" />
    </linearGradient>

    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="{sole_color}" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <filter id="floatShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="24" stdDeviation="20" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
  </defs>

  <!-- Dark Studio Background -->
  <rect width="600" height="450" fill="url(#studioDark)" rx="24"/>
  
  <!-- Subtle Grid Accent Lines (Streetwear Tech Feel) -->
  <g stroke="rgba(255, 255, 255, 0.03)" stroke-width="1">
    <line x1="0" y1="150" x2="600" y2="150" />
    <line x1="0" y1="300" x2="600" y2="300" />
    <line x1="200" y1="0" x2="200" y2="450" />
    <line x1="400" y1="0" x2="400" y2="450" />
  </g>

  <!-- Glowing Neon Spotlight Ring -->
  <circle cx="300" cy="235" r="170" fill="url(#neonHalo)"/>
  
  <!-- Badge Pill -->
  <g transform="translate(36, 32)">
    <rect width="115" height="28" rx="14" fill="#0B0F17" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.2"/>
    <circle cx="16" cy="14" r="4" fill="{color_main}"/>
    <text x="65" y="18" fill="#F8FAFC" font-family="'Outfit', sans-serif" font-size="10" font-weight="800" text-anchor="middle" letter-spacing="1">{badge_text}</text>
  </g>

  <!-- Ground Dark Drop Shadow -->
  <ellipse cx="295" cy="365" rx="205" ry="24" fill="#000000" opacity="0.6" filter="blur(8px)"/>

  <!-- MAIN CLOG ILLUSTRATION -->
  <g filter="url(#floatShadow)" transform="translate(10, 5)">
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
          stroke="{color_light}" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

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
          fill="{color_dark}" opacity="0.35"/>

    <!-- Heel Pivoting Strap -->
    <path d="M 148 270 
             C 135 240, 140 210, 168 198 
             C 192 188, 230 195, 240 208 
             C 246 216, 238 226, 216 226 
             C 190 226, 165 240, 158 266 Z" 
          fill="{color_dark}"/>
    
    <!-- Strap Rivet / Logo Button -->
    <circle cx="152" cy="270" r="10" fill="#0B0F17" stroke="{color_light}" stroke-width="2"/>
    <circle cx="152" cy="270" r="5" fill="{color_main}"/>

    <!-- Ventilation Ports (Holes) -->
    <ellipse cx="280" cy="210" rx="6" ry="10" fill="{color_dark}" opacity="0.75" transform="rotate(-15 280 210)"/>
    <ellipse cx="320" cy="216" rx="6" ry="11" fill="{color_dark}" opacity="0.75" transform="rotate(-10 320 216)"/>
    <ellipse cx="360" cy="230" rx="7" ry="12" fill="{color_dark}" opacity="0.75" transform="rotate(5 360 230)"/>
    <ellipse cx="400" cy="254" rx="7" ry="12" fill="{color_dark}" opacity="0.75" transform="rotate(20 400 254)"/>

    <ellipse cx="265" cy="238" rx="6" ry="9" fill="{color_dark}" opacity="0.75" transform="rotate(-10 265 238)"/>
    <ellipse cx="305" cy="245" rx="6" ry="10" fill="{color_dark}" opacity="0.75" transform="rotate(-5 305 245)"/>
    <ellipse cx="350" cy="260" rx="7" ry="11" fill="{color_dark}" opacity="0.75" transform="rotate(10 350 260)"/>
    <ellipse cx="390" cy="280" rx="6" ry="9" fill="{color_dark}" opacity="0.75" transform="rotate(25 390 280)"/>

    <ellipse cx="230" cy="258" rx="5" ry="8" fill="{color_dark}" opacity="0.75" transform="rotate(-5 230 258)"/>
    <ellipse cx="270" cy="270" rx="6" ry="8" fill="{color_dark}" opacity="0.75"/>
    <ellipse cx="315" cy="276" rx="6" ry="8" fill="{color_dark}" opacity="0.75"/>

    <!-- Jibbitz Street Charm -->
    <g transform="translate(325, 230)">
      <circle cx="12" cy="12" r="14" fill="#0F172A" stroke="#FFFFFF" stroke-width="2"/>
      <circle cx="12" cy="12" r="9" fill="{color_main}"/>
      <text x="12" y="16" fill="#000000" font-family="'Outfit', sans-serif" font-size="11" font-weight="900" text-anchor="middle">⚡</text>
    </g>

    <!-- Sleek Light Streak Refraction -->
    <path d="M 390 228 C 430 255, 445 278, 435 292" 
          stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>
  </g>

  <!-- Bottom Title (Clean High Contrast) -->
  <text x="300" y="415" font-family="'Outfit', sans-serif" font-size="19" font-weight="800" fill="#F8FAFC" text-anchor="middle" letter-spacing="-0.3">{title}</text>
  <text x="300" y="433" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="1">ZERO-FATIGUE ERGONOMIC CLOUD FOAM</text>
</svg>"""

products_config = [
    ("clog-honey-amber.svg", "Honey Amber Classic Clog", "#F59E0B", "#B45309", "#FCD34D", "#334155", "HYPED // 01"),
    ("clog-pastel-mint.svg", "Mint Breeze Cloud Clog", "#10B981", "#047857", "#6EE7B7", "#064E3B", "FRESH DROP"),
    ("clog-cotton-candy.svg", "Cotton Candy Pink Clog", "#EC4899", "#BE185D", "#F472B6", "#831843", "TRENDING"),
    ("clog-midnight-slate.svg", "Midnight Slate Sport Clog", "#64748B", "#1E293B", "#94A3B8", "#0F172A", "ALL-BLACK DRIP"),
    ("clog-lavender-dream.svg", "Lavender Mist Platform Clog", "#A855F7", "#6B21A8", "#D8B4FE", "#3B0764", "PLATFORM LIFT"),
    ("clog-matcha-green.svg", "Matcha Pop Daily Clog", "#84CC16", "#3F6212", "#BEF264", "#14532D", "VALUE HERO"),
    ("clog-ocean-navy.svg", "Deep Ocean All-Terrain Clog", "#0EA5E9", "#0369A1", "#38BDF8", "#082F49", "MONSOON READY"),
    ("clog-sunshine-yellow.svg", "Sunshine Pop Vibrant Clog", "#EAB308", "#854D0E", "#FDE047", "#422006", "DOPAMINE POP"),
    ("clog-sand-beige.svg", "Desert Sand Minimal Clog", "#D97706", "#78350F", "#FDE68A", "#451A03", "AESTHETIC NEUTRAL"),
    ("clog-berry-red.svg", "Berry Blast Street Clog", "#F43F5E", "#9F1239", "#FB7185", "#4C0519", "BOLD STATEMENT"),
    ("clog-pearl-white.svg", "Pearl White Cushion Clog", "#E2E8F0", "#475569", "#FFFFFF", "#1E293B", "CLEAN MINIMAL"),
    ("clog-carbon-black.svg", "Stealth Carbon Matte Clog", "#475569", "#020617", "#64748B", "#0F172A", "STEALTH BLACK"),
]

for filename, title, c_main, c_dark, c_light, sole, badge in products_config:
    svg_content = generate_clog_svg(filename, title, c_main, c_dark, c_light, sole, badge)
    with open(os.path.join(images_dir, filename), "w", encoding="utf-8") as f:
        f.write(svg_content)

print(f"Generated {len(products_config)} modern dark SVG assets successfully!")
