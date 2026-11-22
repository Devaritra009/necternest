import base64
import os
from PIL import Image

# 1. Load logo-badge.png
badge = Image.open('images/logo-badge.png')

# 2. Save favicon (192x192 and 32x32)
fav192 = badge.resize((192, 192), Image.Resampling.LANCZOS)
fav192.save('images/favicon.png')

fav32 = badge.resize((32, 32), Image.Resampling.LANCZOS)
fav32.save('images/favicon-32.png')
# Save favicon.ico
fav32.save('favicon.ico', format='ICO')

# 3. Save images/logo.png
badge.save('images/logo.png')

# 4. Generate images/logo.svg with embedded base64 badge and clean vector typography
with open('images/logo-badge.png', 'rb') as f:
    b64_badge = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" width="280" height="60">
  <defs>
    <filter id="crestGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#F59E0B" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- 3D Official Circular Crest Badge -->
  <g transform="translate(4, 3)" filter="url(#crestGlow)">
    <image href="data:image/png;base64,{b64_badge}" x="0" y="0" width="54" height="54" />
  </g>

  <!-- Brand Typography -->
  <text x="68" y="34" font-family="'Outfit', -apple-system, sans-serif" font-size="24" font-weight="900" fill="#F8FAFC" letter-spacing="-0.5" class="brand-text-logo">NECTER<tspan fill="#F59E0B">NEST</tspan></text>
  <text x="69" y="48" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="8" font-weight="800" fill="#00F0FF" letter-spacing="2.2">STUDIO // STREETWEAR ARCHIVE</text>
</svg>'''

with open('images/logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('Successfully generated logo.png, logo.svg with new emblem, favicon.png, and favicon.ico!')
