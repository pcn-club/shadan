#!/usr/bin/env python3
"""hero-positions.json を hero-icons.js / hero-editor.js / style.css に反映する"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
raw = json.loads((ROOT / 'hero-positions.json').read_text(encoding='utf-8'))

TEXT_PADDING_DEFAULTS = {'top': 26, 'left': 5, 'bottom': 20, 'width': 100}
TEXT_STYLE_DEFAULTS = {
    'fontFamily': 'Noto Serif JP',
    'titleSize': 1.85,
    'titleLineHeight': 1.55,
    'titleMarginBottom': 1.1,
    'bodySize': 0.95,
    'bodyLineHeight': 2,
    'opacity': 1,
}
FONT_CSS = {
    'Hiragino Mincho': '"Hiragino Mincho ProN", "Hiragino Mincho Pro", "YuMincho", "Yu Mincho", serif',
    'Hiragino Sans': '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", sans-serif',
    'Noto Serif JP': '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    'Noto Serif JP Light': '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    'Shippori Mincho': '"Shippori Mincho", "Hiragino Mincho ProN", serif',
    'Noto Sans JP': '"Noto Sans JP", "Hiragino Sans", sans-serif',
    'Noto Sans JP Light': '"Noto Sans JP", "Hiragino Sans", sans-serif',
    'serif': 'serif',
    'sans-serif': 'sans-serif',
}

if isinstance(raw, list):
    icon_size = 42
    icons = raw
    text_padding = TEXT_PADDING_DEFAULTS
    text_style = TEXT_STYLE_DEFAULTS
else:
    icon_size = raw.get('iconSize', 42)
    icons = raw.get('icons', [])
    text_padding = raw.get('textPadding', TEXT_PADDING_DEFAULTS)
    if 'width' not in text_padding and 'right' in text_padding:
        left = text_padding.get('left', 5)
        text_padding = {
            'top': text_padding.get('top', 26),
            'left': left,
            'bottom': text_padding.get('bottom', 20),
            'width': 100 - left - text_padding.get('right', 54),
        }
    elif 'width' not in text_padding:
        text_padding = dict(TEXT_PADDING_DEFAULTS)
    text_style = raw.get('textStyle', TEXT_STYLE_DEFAULTS)

icons_json = json.dumps(icons, ensure_ascii=False, indent=2)
editor_json = json.dumps(
    {
        'iconSize': icon_size,
        'textPadding': text_padding,
        'textStyle': text_style,
        'icons': icons,
    },
    ensure_ascii=False,
    indent=2,
)
text_padding_js = json.dumps(text_padding, ensure_ascii=False)
text_style_js = json.dumps(text_style, ensure_ascii=False)
font_css = FONT_CSS.get(text_style.get('fontFamily', 'Hiragino Mincho'), FONT_CSS['Hiragino Mincho'])

# hero-icons.js
hero_js = (ROOT / 'hero-icons.js').read_text(encoding='utf-8')
hero_js, n1 = re.subn(
    r'const HERO_POSITIONS = \[[\s\S]*?\];',
    f'const HERO_POSITIONS = {icons_json};',
    hero_js,
    count=1,
)
hero_js, n2 = re.subn(
    r'iconSize: \d+,',
    f'iconSize: {icon_size},',
    hero_js,
    count=1,
)
if 'textPadding:' in hero_js:
    hero_js, n3 = re.subn(
        r'textPadding: \{[^}]+\},',
        f'textPadding: {text_padding_js},',
        hero_js,
        count=1,
    )
else:
    hero_js = hero_js.replace(
        f'iconSize: {icon_size},',
        f'iconSize: {icon_size},\n  textPadding: {text_padding_js},',
        1,
    )
    n3 = 1
if 'textStyle:' in hero_js:
    hero_js, n4 = re.subn(
        r'textStyle: \{[^}]+\},',
        f'textStyle: {text_style_js},',
        hero_js,
        count=1,
    )
else:
    hero_js = hero_js.replace(
        f'textPadding: {text_padding_js},',
        f'textPadding: {text_padding_js},\n  textStyle: {text_style_js},',
        1,
    )
    n4 = 1
if n1 != 1 or n2 != 1 or n3 != 1 or n4 != 1:
    raise SystemExit('hero-icons.js の更新に失敗しました')
(ROOT / 'hero-icons.js').write_text(hero_js, encoding='utf-8')
print(f'Updated hero-icons.js ({len(icons)} icons, size {icon_size}px)')

# hero-editor.js
editor_js = (ROOT / 'hero-editor.js').read_text(encoding='utf-8')
if 'var EDITOR_DATA' in editor_js:
    editor_js, n5 = re.subn(
        r'var EDITOR_DATA = \{[\s\S]*?\};',
        f'var EDITOR_DATA = {editor_json};',
        editor_js,
        count=1,
    )
elif 'var EDITOR_ICONS' in editor_js:
    editor_js, n5 = re.subn(
        r'var EDITOR_ICONS = \[[\s\S]*?\];',
        f'var EDITOR_DATA = {editor_json};',
        editor_js,
        count=1,
    )
else:
    raise SystemExit('hero-editor.js 内の EDITOR_DATA / EDITOR_ICONS が見つかりません')
if n5 != 1:
    raise SystemExit('hero-editor.js の更新に失敗しました')
(ROOT / 'hero-editor.js').write_text(editor_js, encoding='utf-8')
print(f'Updated hero-editor.js ({len(icons)} icons, size {icon_size}px)')

# style.css
style_css = (ROOT / 'style.css').read_text(encoding='utf-8')
style_css, n6 = re.subn(
    r'--hero-text-padding-top: [\d.]+%;',
    f'--hero-text-padding-top: {text_padding["top"]}%;',
    style_css,
    count=1,
)
style_css, n7 = re.subn(
    r'--hero-text-padding-bottom: [\d.]+%;',
    f'--hero-text-padding-bottom: {text_padding["bottom"]}%;',
    style_css,
    count=1,
)
style_css, n8 = re.subn(
    r'--hero-text-padding-left: [\d.]+%;',
    f'--hero-text-padding-left: {text_padding["left"]}%;',
    style_css,
    count=1,
)
if '--hero-text-width:' in style_css:
    style_css, n9 = re.subn(
        r'--hero-text-width: [\d.]+%;',
        f'--hero-text-width: {text_padding["width"]}%;',
        style_css,
        count=1,
    )
else:
    style_css = style_css.replace(
        f'--hero-text-padding-left: {text_padding["left"]}%;',
        f'--hero-text-padding-left: {text_padding["left"]}%;\n  --hero-text-width: {text_padding["width"]}%;',
        1,
    )
    n9 = 1
# 旧形式の --hero-text-padding-right を除去
style_css = re.sub(r'\s*--hero-text-padding-right: [\d.]+%;\n', '\n', style_css, count=1)
style_css, n10 = re.subn(
    r"--hero-text-font-family: [^;]+;",
    f'--hero-text-font-family: {font_css};',
    style_css,
    count=1,
)
style_css, n11 = re.subn(
    r'--hero-title-size: [\d.]+em;',
    f'--hero-title-size: {text_style["titleSize"]}em;',
    style_css,
    count=1,
)
style_css, n12 = re.subn(
    r'--hero-title-line-height: [\d.]+;',
    f'--hero-title-line-height: {text_style["titleLineHeight"]};',
    style_css,
    count=1,
)
style_css, n13 = re.subn(
    r'--hero-title-margin-bottom: [\d.]+em;',
    f'--hero-title-margin-bottom: {text_style["titleMarginBottom"]}em;',
    style_css,
    count=1,
)
style_css, n14 = re.subn(
    r'--hero-body-size: [\d.]+em;',
    f'--hero-body-size: {text_style["bodySize"]}em;',
    style_css,
    count=1,
)
style_css, n15 = re.subn(
    r'--hero-body-line-height: [\d.]+;',
    f'--hero-body-line-height: {text_style["bodyLineHeight"]};',
    style_css,
    count=1,
)
opacity = text_style.get('opacity', 1)
if '--hero-text-opacity:' in style_css:
    style_css, n16 = re.subn(
        r'--hero-text-opacity: [\d.]+;',
        f'--hero-text-opacity: {opacity};',
        style_css,
        count=1,
    )
else:
    style_css = style_css.replace(
        f'--hero-body-line-height: {text_style["bodyLineHeight"]};',
        f'--hero-body-line-height: {text_style["bodyLineHeight"]};\n  --hero-text-opacity: {opacity};',
        1,
    )
    n16 = 1
if n6 != 1 or n7 != 1 or n8 != 1 or n9 != 1 or n10 != 1 or n11 != 1 or n12 != 1 or n13 != 1 or n14 != 1 or n15 != 1 or n16 != 1:
    raise SystemExit('style.css の更新に失敗しました')
(ROOT / 'style.css').write_text(style_css, encoding='utf-8')
print('Updated style.css (text padding/style)')
