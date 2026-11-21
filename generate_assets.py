import os

images_dir = r"d:\Ecommerce\images"
os.makedirs(images_dir, exist_ok=True)

# 1. Clean Modern Logo SVG (Cyber Amber + Ice Cyan with Dark Streetwear Capsule for Dark & Light Mode)
logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="280" height="60">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>

    <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#00F0FF" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Streetwear Badge Capsule (Guarantees 100% Contrast in both Dark and Light Mode) -->
  <rect x="2" y="3" width="276" height="54" rx="14" fill="#080C16" stroke="rgba(0, 240, 255, 0.28)" stroke-width="1.2" />

  <!-- Modern Icon with Clean Border -->
  <g transform="translate(8, 6)">
    <rect x="0" y="0" width="48" height="48" rx="12" fill="#0F172A" stroke="url(#brandGrad)" stroke-width="1.8" filter="url(#logoGlow)"/>
    <!-- Clog silhouette / nest icon -->
    <path d="M13 25 C13 18, 18 14, 27 14 C35 14, 39 18, 40 23 C40 28, 38 31, 35 32 C32 33, 27 33.5, 23 33.5 L17 33.5 C14.5 33.5, 13 30, 13 25 Z" fill="url(#brandGrad)"/>
    <path d="M16 25 C16 21, 20 18, 27 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.9"/>
    <circle cx="23" cy="22" r="1.6" fill="#FFFFFF" />
    <circle cx="28" cy="22" r="1.6" fill="#FFFFFF" />
    <circle cx="33" cy="24" r="1.6" fill="#FFFFFF" />
    <circle cx="20" cy="25" r="1.4" fill="#FFFFFF" />
    <circle cx="25" cy="26" r="1.4" fill="#FFFFFF" />
    <circle cx="36" cy="12" r="3.5" fill="#00F0FF"/>
  </g>

  <!-- Brand Typography -->
  <text x="68" y="33" font-family="'Outfit', system-ui, sans-serif" font-size="24" font-weight="900" fill="#F8FAFC" letter-spacing="-0.5" class="brand-text-logo">NECTER<tspan fill="#F59E0B">NEST</tspan></text>
  <text x="69" y="47" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="8.5" font-weight="800" fill="#00F0FF" letter-spacing="2">STUDIO // STREETWEAR ARCHIVE</text>
</svg>"""

with open(os.path.join(images_dir, "logo.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg)

# 2. Modern Dark/Light Compatible QR Code SVG
qr_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 350" width="300" height="350">
  <defs>
    <linearGradient id="qrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="296" height="346" rx="18" fill="#0E1626" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
  
  <!-- Top Bar -->
  <path d="M2 18 C2 9.16 9.16 2 18 2 L282 2 C290.84 2 298 9.16 298 18 L298 52 L2 52 Z" fill="#162238"/>
  <text x="150" y="32" font-family="'Outfit', sans-serif" font-size="13" font-weight="900" fill="#00F0FF" text-anchor="middle" letter-spacing="1">⚡ BHIM UPI / GPAY / PHONEPE</text>
  
  <!-- QR Box outline -->
  <rect x="28" y="70" width="244" height="204" rx="12" fill="#070B13" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
  
  <!-- Stylized QR Matrix Pattern in Ice Cyan & Clean White -->
  <rect x="52" y="94" width="46" height="46" fill="none" stroke="#F8FAFC" stroke-width="6" rx="6"/>
  <rect x="64" y="106" width="22" height="22" fill="#00F0FF" rx="3"/>
  
  <rect x="202" y="94" width="46" height="46" fill="none" stroke="#F8FAFC" stroke-width="6" rx="6"/>
  <rect x="214" y="106" width="22" height="22" fill="#00F0FF" rx="3"/>
  
  <rect x="52" y="196" width="46" height="46" fill="none" stroke="#F8FAFC" stroke-width="6" rx="6"/>
  <rect x="64" y="208" width="22" height="22" fill="#00F0FF" rx="3"/>

  <!-- Matrix Modules -->
  <g fill="#94A3B8">
    <rect x="112" y="96" width="14" height="26" rx="3"/>
    <rect x="134" y="96" width="26" height="12" rx="3"/>
    <rect x="168" y="96" width="18" height="18" rx="3"/>
    <rect x="112" y="128" width="32" height="12" rx="3"/>
    <rect x="152" y="122" width="20" height="20" rx="3"/>
    <rect x="180" y="124" width="12" height="26" rx="3"/>
    
    <rect x="112" y="152" width="18" height="18" rx="3" fill="#F59E0B"/>
    <rect x="138" y="148" width="28" height="26" rx="5" fill="#00F0FF"/>
    <rect x="174" y="154" width="16" height="14" rx="3" fill="#F59E0B"/>
    
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
  
  <text x="150" y="298" font-family="'Outfit', monospace" font-size="14" font-weight="900" fill="#00F0FF" text-anchor="middle">necternest@upi</text>
  <text x="150" y="322" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#94A3B8" text-anchor="middle">Instant 0-fee payment via any UPI App</text>
</svg>"""

with open(os.path.join(images_dir, "qr-code.svg"), "w", encoding="utf-8") as f:
    f.write(qr_svg)

# 3. Dynamic Studio Clog SVG Generator (Cohesive Cool Color Lighting, NO Rainbow)
def generate_clog_svg(filename, title, color_main, color_dark, color_light, sole_color, badge_text, charm_symbol="⚡"):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <!-- Deep Obsidian Studio Mesh Gradient -->
    <radialGradient id="studioDark" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#151E32" />
      <stop offset="55%" stop-color="#0E1626" />
      <stop offset="100%" stop-color="#070B13" />
    </radialGradient>
    
    <!-- Cool Spotlight Halo -->
    <radialGradient id="neonHalo" cx="50%" cy="58%" r="48%">
      <stop offset="0%" stop-color="{color_main}" stop-opacity="0.4"/>
      <stop offset="55%" stop-color="{color_main}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#070B13" stop-opacity="0"/>
    </radialGradient>

    <!-- Upper Shoe Foam Gradient -->
    <linearGradient id="clogBody" x1="0%" y1="10%" x2="100%" y2="90%">
      <stop offset="0%" stop-color="{color_light}" />
      <stop offset="45%" stop-color="{color_main}" />
      <stop offset="100%" stop-color="{color_dark}" />
    </linearGradient>

    <!-- Sole Platform Gradient -->
    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="{sole_color}" />
      <stop offset="100%" stop-color="#090D16" />
    </linearGradient>

    <filter id="floatShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="24" stdDeviation="20" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="600" height="450" fill="url(#studioDark)" rx="24"/>

  <!-- Spotlight Ring -->
  <circle cx="280" cy="225" r="175" fill="url(#neonHalo)"/>

  <!-- Badge Pill -->
  <g transform="translate(36, 32)">
    <rect width="125" height="30" rx="15" fill="#090E1A" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5"/>
    <circle cx="16" cy="15" r="4.5" fill="{color_main}"/>
    <text x="70" y="19" fill="#F8FAFC" font-family="'Outfit', sans-serif" font-size="10.5" font-weight="900" text-anchor="middle" letter-spacing="1">{badge_text}</text>
  </g>

  <!-- Floor Contact Shadow -->
  <ellipse cx="295" cy="370" rx="210" ry="24" fill="#000000" opacity="0.7" filter="blur(10px)"/>

  <!-- MAIN CLOG 3D VECTOR -->
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
          stroke="{color_light}" stroke-width="3.5" stroke-linecap="round" opacity="0.75"/>

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
          fill="{color_dark}" opacity="0.38"/>

    <!-- Heel Pivoting Turbo Strap -->
    <path d="M 148 270 
             C 135 240, 140 210, 168 198 
             C 192 188, 230 195, 240 208 
             C 246 216, 238 226, 216 226 
             C 190 226, 165 240, 158 266 Z" 
          fill="{color_dark}"/>
    
    <!-- Strap Rivet / Logo Button -->
    <circle cx="152" cy="270" r="10" fill="#0B0F17" stroke="{color_light}" stroke-width="2.2"/>
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
    <g transform="translate(325, 228)">
      <circle cx="14" cy="14" r="16" fill="#0B0F17" stroke="#FFFFFF" stroke-width="2"/>
      <circle cx="14" cy="14" r="11" fill="{color_main}"/>
      <text x="14" y="19" fill="#000000" font-family="'Outfit', sans-serif" font-size="13" font-weight="900" text-anchor="middle">{charm_symbol}</text>
    </g>

    <!-- Clean Rim Specular Reflection -->
    <path d="M 385 224 C 430 255, 448 278, 438 294" 
          stroke="{color_light}" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.75"/>
  </g>

  <!-- Bottom Title -->
  <text x="300" y="414" font-family="'Outfit', sans-serif" font-size="19" font-weight="900" fill="#F8FAFC" text-anchor="middle" letter-spacing="-0.3">{title}</text>
  <text x="300" y="433" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#94A3B8" text-anchor="middle" letter-spacing="1.5">ZERO-GRAVITY CLOUD FOAM • WATERPROOF</text>
</svg>"""

products_config = [
    ("clog-honey-amber.svg", "Honey Amber Classic Clog", "#F59E0B", "#B45309", "#FDE68A", "#2A1F0D", "HYPED // 01", "⚡"),
    ("clog-pastel-mint.svg", "Mint Breeze Cloud Clog", "#10B981", "#065F46", "#6EE7B7", "#064E3B", "FRESH MINT", "🌿"),
    ("clog-cotton-candy.svg", "Cotton Candy Sweet Blossom", "#EC4899", "#9D174D", "#F472B6", "#831843", "TRENDING", "🌸"),
    ("clog-midnight-slate.svg", "Midnight Slate Sport Pro", "#64748B", "#1E293B", "#94A3B8", "#0F172A", "ALL-BLACK DRIP", "🔥"),
    ("clog-lavender-dream.svg", "Lavender Mist Chunky Platform", "#A855F7", "#581C87", "#D8B4FE", "#3B0764", "PLATFORM LIFT", "✨"),
    ("clog-matcha-green.svg", "Matcha Pop Daily Clog", "#84CC16", "#3F6212", "#BEF264", "#14532D", "ACID MATCHA", "🚀"),
    ("clog-ocean-navy.svg", "Deep Ocean All-Terrain Explorer", "#0EA5E9", "#0369A1", "#7DD3FC", "#082F49", "AQUA OUTDOOR", "🌊"),
    ("clog-sunshine-yellow.svg", "Sunshine Pop Vibrant Clog", "#EAB308", "#854D0E", "#FEF08A", "#422006", "DOPAMINE POP", "☀️"),
    ("clog-sand-beige.svg", "Desert Sand Minimalist", "#D97706", "#78350F", "#FDE68A", "#451A03", "SAND AESTHETIC", "☕"),
    ("clog-berry-red.svg", "Berry Blast Street Clog", "#F43F5E", "#9F1239", "#FDA4AF", "#4C0519", "CRIMSON BLITZ", "🍓"),
    ("clog-pearl-white.svg", "Pearl White Cloud Classic", "#E2E8F0", "#475569", "#FFFFFF", "#1E293B", "CLEAN ICE", "💎"),
    ("clog-carbon-black.svg", "Stealth Carbon Matte Black", "#475569", "#020617", "#64748B", "#0F172A", "STEALTH CARBON", "⚔️"),
]

for filename, title, c_main, c_dark, c_light, sole, badge, charm in products_config:
    svg_content = generate_clog_svg(filename, title, c_main, c_dark, c_light, sole, badge, charm)
    with open(os.path.join(images_dir, filename), "w", encoding="utf-8") as f:
        f.write(svg_content)

print(f"Regenerated {len(products_config)} clean cohesive studio SVG assets!")
