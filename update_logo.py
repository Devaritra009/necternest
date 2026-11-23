import os
import base64
import numpy as np
from PIL import Image, ImageFilter

MEDIA_CREST = 'C:/Users/agent/.gemini/antigravity/brain/2bf41a3a-c762-4d3b-a8a2-1ac67779d5fc/.user_uploaded/media_1795458847708_cefe539a.jpg'
MEDIA_SAMPLE = 'C:/Users/agent/.gemini/antigravity/brain/2bf41a3a-c762-4d3b-a8a2-1ac67779d5fc/.user_uploaded/media_1795458847683_4ce2bcf5.jpg'

os.makedirs('images', exist_ok=True)

# -----------------------------------------------------------------------------
# 1. CIRCULAR CREST BADGE EXTRACTION (from media_1795458847708_cefe539a.jpg)
# -----------------------------------------------------------------------------
im_crest = Image.open(MEDIA_CREST)
cx, cy = 535, 524
radius = 444
pad = 8

x0 = int(cx - radius - pad)
x1 = int(cx + radius + pad)
y0 = int(cy - radius - pad)
y1 = int(cy + radius + pad)

crop_crest = im_crest.crop((x0, y0, x1, y1)).convert('RGBA')
arr_crest = np.array(crop_crest)

H, W = arr_crest.shape[:2]
Y, X = np.ogrid[:H, :W]
ccx = cx - x0
ccy = cy - y0
dist = np.sqrt((X - ccx)**2 + (Y - ccy)**2)

# Antialiased alpha mask for smooth circular cut
alpha = np.clip((radius + 3 - dist) / 4.0, 0.0, 1.0)
arr_crest[:, :, 3] = (alpha * 255).astype(np.uint8)

badge = Image.fromarray(arr_crest)
badge.save('images/logo-badge.png', optimize=True)
badge.save('images/logo.png', optimize=True)
print('Saved images/logo-badge.png and images/logo.png (size: %s)' % (badge.size,))

# -----------------------------------------------------------------------------
# 2. FAVICONS (192x192, 32x32, .ico)
# -----------------------------------------------------------------------------
fav192 = badge.resize((192, 192), Image.Resampling.LANCZOS)
fav192.save('images/favicon.png', optimize=True)

fav32 = badge.resize((32, 32), Image.Resampling.LANCZOS)
fav32.save('images/favicon-32.png', optimize=True)
fav32.save('favicon.ico', format='ICO')
print('Saved images/favicon.png, images/favicon-32.png, favicon.ico')

# -----------------------------------------------------------------------------
# 3. WORDMARK & FONT ARTWORK EXTRACTION (from media_1795458847683_4ce2bcf5.jpg)
# -----------------------------------------------------------------------------
im_sample = Image.open(MEDIA_SAMPLE)

def make_transparent_on_black(pil_img, threshold=12, soft=18):
    arr = np.array(pil_img.convert('RGBA'))
    rgb = arr[:, :, :3].astype(float)
    brightness = np.max(rgb, axis=-1)
    a = np.clip((brightness - threshold) / (soft - threshold), 0.0, 1.0)
    arr[:, :, 3] = (a * 255).astype(np.uint8)
    return Image.fromarray(arr)

# Wordmark alone: "NECTERNEST"
wm_crop = im_sample.crop((95, 308, 950, 408))
wm_trans = make_transparent_on_black(wm_crop)
wm_trans.save('images/logo-wordmark.png', optimize=True)
print('Saved images/logo-wordmark.png (size: %s)' % (wm_trans.size,))

# Wordmark with "WEAR YOUR STORY"
wm_full_crop = im_sample.crop((95, 308, 950, 450))
wm_full_trans = make_transparent_on_black(wm_full_crop)
wm_full_trans.save('images/logo-wordmark-tagline.png', optimize=True)
print('Saved images/logo-wordmark-tagline.png (size: %s)' % (wm_full_trans.size,))

# Full Horizontal Brand Lockup (Emblem + Wordmark + Tagline + Apparel Icons)
logo_full_crop = im_sample.crop((95, 55, 950, 540))
logo_full_trans = make_transparent_on_black(logo_full_crop)
logo_full_trans.save('images/logo-horizontal.png', optimize=True)
print('Saved images/logo-horizontal.png (size: %s)' % (logo_full_trans.size,))

# Light-mode version of the wordmark (dark metallic obsidian NECTER + gold NEST)
arr_wm = np.array(wm_trans, dtype=np.float32)
H_wm, W_wm = arr_wm.shape[:2]
r = arr_wm[:, :, 0]
g = arr_wm[:, :, 1]
b = arr_wm[:, :, 2]
a = arr_wm[:, :, 3]

is_gold = (r > 120) & (g > 80) & ((r - b) > 40) & ((g - b) > 25)
X_wm = np.tile(np.arange(W_wm), (H_wm, 1))
is_necter = (~is_gold) & (X_wm < int(W_wm * 0.58)) & (a > 10)

lum = 0.299 * r + 0.587 * g + 0.114 * b
dark_lum = 255.0 - (lum * 0.82)
arr_wm[is_necter, 0] = dark_lum[is_necter] * 0.08
arr_wm[is_necter, 1] = dark_lum[is_necter] * 0.12
arr_wm[is_necter, 2] = dark_lum[is_necter] * 0.20

arr_wm_out = np.clip(arr_wm, 0, 255).astype(np.uint8)
wm_light = Image.fromarray(arr_wm_out)
wm_light.save('images/logo-wordmark-light.png', optimize=True)
print('Saved images/logo-wordmark-light.png')

# -----------------------------------------------------------------------------
# 4. SOCIAL SHARING CARD (1200x630 Open Graph for WhatsApp & Twitter)
# -----------------------------------------------------------------------------
og_canvas = Image.new('RGB', (1200, 630), (8, 12, 22))
target_w = 760
target_h = int(logo_full_trans.height * (target_w / logo_full_trans.width))
logo_og = logo_full_trans.resize((target_w, target_h), Image.Resampling.LANCZOS)

pos_x = (1200 - target_w) // 2
pos_y = (630 - target_h) // 2

glow_mask = logo_og.split()[-1].filter(ImageFilter.GaussianBlur(30))
glow_img = Image.new('RGB', (target_w, target_h), (245, 158, 11))
og_canvas.paste(glow_img, (pos_x, pos_y), glow_mask)
og_canvas.paste(logo_og, (pos_x, pos_y), logo_og)
og_canvas.save('images/og-brand.jpg', quality=95)
print('Saved images/og-brand.jpg (1200x630)')

# -----------------------------------------------------------------------------
# 5. VECTOR SVG LOGO WITH EMBEDDED CREST & WORDMARK
# -----------------------------------------------------------------------------
# Optimize badge to 200x200 for SVG embed so file remains lightweight (~60KB)
badge_svg = badge.resize((200, 200), Image.Resampling.LANCZOS)
badge_svg.save('images/logo-badge-embed.png', optimize=True)

with open('images/logo-badge-embed.png', 'rb') as f:
    b64_badge = base64.b64encode(f.read()).decode('utf-8')

with open('images/logo-wordmark.png', 'rb') as f:
    b64_wm = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 64" width="340" height="64">
  <defs>
    <filter id="crestGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#F59E0B" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Official Crowned 'N' Circular Crest Badge -->
  <g transform="translate(4, 4)" filter="url(#crestGlow)">
    <image href="data:image/png;base64,{b64_badge}" x="0" y="0" width="56" height="56" />
  </g>

  <!-- Sharp Streetwear Tech Wordmark Artwork -->
  <g transform="translate(68, 12)">
    <image href="data:image/png;base64,{b64_wm}" x="0" y="0" width="230" height="27" />
    <text x="4" y="38" font-family="'Oxanium', 'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="800" fill="#F59E0B" letter-spacing="2.6">WEAR YOUR STORY</text>
  </g>
</svg>'''

with open('images/logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

if os.path.exists('images/logo-badge-embed.png'):
    os.remove('images/logo-badge-embed.png')

print('Generated images/logo.svg!')
print('All brand logo and font assets updated successfully!')
