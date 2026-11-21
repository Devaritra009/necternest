import os

images_dir = r"d:\Ecommerce\images"
os.makedirs(images_dir, exist_ok=True)

# 1. Ultra-Modern Multi-Color Logo SVG with Iridescent Holographic Glow
logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="280" height="60">
  <defs>
    <!-- Multi-Color Aurora Neon Gradient -->
    <linearGradient id="auroraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="35%" stop-color="#8B5CF6" />
      <stop offset="70%" stop-color="#FF3366" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="60%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>

    <filter id="multiGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#8B5CF6" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Modern Icon with Gradient Border -->
  <g transform="translate(6, 6)">
    <rect x="0" y="0" width="48" height="48" rx="14" fill="#0D121F" stroke="url(#auroraGrad)" stroke-width="2" filter="url(#multiGlow)"/>
    <!-- Clog silhouette / nest icon -->
    <path d="M13 25 C13 18, 18 14, 27 14 C35 14, 39 18, 40 23 C40 28, 38 31, 35 32 C32 33, 27 33.5, 23 33.5 L17 33.5 C14.5 33.5, 13 30, 13 25 Z" fill="url(#auroraGrad)"/>
    <path d="M16 25 C16 21, 20 18, 27 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.9"/>
    <circle cx="23" cy="22" r="1.6" fill="#FFFFFF" />
    <circle cx="28" cy="22" r="1.6" fill="#FFFFFF" />
    <circle cx="33" cy="24" r="1.6" fill="#FFFFFF" />
    <circle cx="20" cy="25" r="1.4" fill="#FFFFFF" />
    <circle cx="25" cy="26" r="1.4" fill="#FFFFFF" />
    <circle cx="36" cy="12" r="3.5" fill="#00F0FF"/>
  </g>

  <!-- Brand Typography -->
  <text x="66" y="33" font-family="'Outfit', system-ui, sans-serif" font-size="25" font-weight="900" fill="url(#textGrad)" letter-spacing="-0.5">NECTER<tspan fill="#F59E0B">NEST</tspan></text>
  <text x="67" y="47" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="9" font-weight="800" fill="#94A3B8" letter-spacing="2.2">STUDIO // STREETWEAR ARCHIVE</text>
</svg>"""

with open(os.path.join(images_dir, "logo.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg)

# 2. Modern Multi-Color Dynamic Clog SVG Generator (Vibrant Neon Accent Lighting & Tech Grid)
def generate_clog_svg(filename, title, color_main, color_dark, color_light, sole_color, badge_text, accent_glow="#8B5CF6", charm_symbol="⚡"):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <!-- Deep Obsidian Studio Gradient with Multi-Color Aura -->
    <radialGradient id="studioDark" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#192237" />
      <stop offset="50%" stop-color="#101726" />
      <stop offset="100%" stop-color="#080C14" />
    </radialGradient>
    
    <!-- Neon Underglow Spotlight -->
    <radialGradient id="neonHalo" cx="50%" cy="58%" r="48%">
      <stop offset="0%" stop-color="{color_main}" stop-opacity="0.45"/>
      <stop offset="45%" stop-color="{accent_glow}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#080C14" stop-opacity="0"/>
    </radialGradient>

    <!-- Upper Shoe Foam Gradient -->
    <linearGradient id="clogBody" x1="0%" y1="10%" x2="100%" y2="90%">
      <stop offset="0%" stop-color="{color_light}" />
      <stop offset="40%" stop-color="{color_main}" />
      <stop offset="100%" stop-color="{color_dark}" />
    </linearGradient>

    <!-- Platform Sole Gradient with High Contrast Lip -->
    <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="{sole_color}" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <!-- Multi-Color Badge Pill Gradient -->
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color_main}" />
      <stop offset="100%" stop-color="{accent_glow}" />
    </linearGradient>

    <filter id="floatShadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="26" stdDeviation="22" flood-color="#000000" flood-opacity="0.75"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="600" height="450" fill="url(#studioDark)" rx="24"/>
  
  <!-- Modern Tech Circuit Dot Matrix (Subtle) -->
  <g fill="rgba(255, 255, 255, 0.05)">
    <circle cx="80" cy="80" r="1.5"/>
    <circle cx="120" cy="80" r="1.5"/>
    <circle cx="160" cy="80" r="1.5"/>
    <circle cx="440" cy="80" r="1.5"/>
    <circle cx="480" cy="80" r="1.5"/>
    <circle cx="520" cy="80" r="1.5"/>
    <circle cx="80" cy="120" r="1.5"/>
    <circle cx="520" cy="120" r="1.5"/>
  </g>

  <!-- Dual-Tone Ambient Spotlight Rings -->
  <circle cx="280" cy="225" r="175" fill="url(#neonHalo)"/>
  <circle cx="380" cy="210" r="120" fill="{accent_glow}" opacity="0.12" filter="blur(20px)"/>

  <!-- Badge Pill with Multi-Color Border -->
  <g transform="translate(36, 32)">
    <rect width="125" height="30" rx="15" fill="#0A0E18" stroke="url(#badgeGrad)" stroke-width="1.8"/>
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
    <circle cx="152" cy="270" r="5" fill="{accent_glow}"/>

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

    <!-- Jibbitz Street Charm with Vivid Glow -->
    <g transform="translate(325, 228)">
      <circle cx="14" cy="14" r="16" fill="#0B0F17" stroke="url(#badgeGrad)" stroke-width="2"/>
      <circle cx="14" cy="14" r="11" fill="{accent_glow}"/>
      <text x="14" y="19" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-size="13" font-weight="900" text-anchor="middle">{charm_symbol}</text>
    </g>

    <!-- Vibrant Rim Light Specular Reflection -->
    <path d="M 385 224 C 430 255, 448 278, 438 294" 
          stroke="{color_light}" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.75"/>
  </g>

  <!-- Bottom Title (Ultra Crisp Modern Typography) -->
  <text x="300" y="414" font-family="'Outfit', sans-serif" font-size="19" font-weight="900" fill="#F8FAFC" text-anchor="middle" letter-spacing="-0.3">{title}</text>
  <text x="300" y="433" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#94A3B8" text-anchor="middle" letter-spacing="1.5">ZERO-GRAVITY CLOUD FOAM • WATERPROOF</text>
</svg>"""

products_config = [
    # filename, title, color_main, color_dark, color_light, sole, badge, accent_glow, charm
    ("clog-honey-amber.svg", "Honey Amber Classic Clog", "#F59E0B", "#B45309", "#FDE68A", "#2A1F0D", "HYPED // 01", "#FF3366", "⚡"),
    ("clog-pastel-mint.svg", "Mint Breeze Cloud Clog", "#10B981", "#065F46", "#6EE7B7", "#064E3B", "FRESH MINT", "#00F0FF", "🌿"),
    ("clog-cotton-candy.svg", "Cotton Candy Sweet Blossom", "#EC4899", "#9D174D", "#F472B6", "#831843", "TRENDING", "#8B5CF6", "🌸"),
    ("clog-midnight-slate.svg", "Midnight Slate Sport Pro", "#64748B", "#1E293B", "#94A3B8", "#0F172A", "ALL-BLACK DRIP", "#00F0FF", "🔥"),
    ("clog-lavender-dream.svg", "Lavender Mist Chunky Platform", "#A855F7", "#581C87", "#D8B4FE", "#3B0764", "PLATFORM LIFT", "#FF3366", "✨"),
    ("clog-matcha-green.svg", "Matcha Pop Daily Clog", "#84CC16", "#3F6212", "#BEF264", "#14532D", "ACID MATCHA", "#00F59B", "🚀"),
    ("clog-ocean-navy.svg", "Deep Ocean All-Terrain Explorer", "#0EA5E9", "#0369A1", "#7DD3FC", "#082F49", "AQUA OUTDOOR", "#00F0FF", "🌊"),
    ("clog-sunshine-yellow.svg", "Sunshine Pop Vibrant Clog", "#EAB308", "#854D0E", "#FEF08A", "#422006", "DOPAMINE POP", "#FF5E1E", "☀️"),
    ("clog-sand-beige.svg", "Desert Sand Minimalist", "#D97706", "#78350F", "#FDE68A", "#451A03", "SAND AESTHETIC", "#F59E0B", "☕"),
    ("clog-berry-red.svg", "Berry Blast Street Clog", "#F43F5E", "#9F1239", "#FDA4AF", "#4C0519", "CRIMSON BLITZ", "#A855F7", "🍓"),
    ("clog-pearl-white.svg", "Pearl White Cloud Classic", "#E2E8F0", "#475569", "#FFFFFF", "#1E293B", "CLEAN ICE", "#00F0FF", "💎"),
    ("clog-carbon-black.svg", "Stealth Carbon Matte Black", "#475569", "#020617", "#64748B", "#0F172A", "STEALTH CARBON", "#A855F7", "⚔️"),
]

for filename, title, c_main, c_dark, c_light, sole, badge, accent_glow, charm in products_config:
    svg_content = generate_clog_svg(filename, title, c_main, c_dark, c_light, sole, badge, accent_glow, charm)
    with open(os.path.join(images_dir, filename), "w", encoding="utf-8") as f:
        f.write(svg_content)

print(f"Generated {len(products_config)} ultra-vibrant multi-color SVG assets successfully!")
