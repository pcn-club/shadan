/**
 * ヒーロー文言のフォント定義
 * Mac標準フォントはローカルインストール不要。Google Fontsはネット接続が必要。
 */
var HERO_FONT_OPTIONS = {
  'Hiragino Mincho': {
    css: '"Hiragino Mincho ProN", "Hiragino Mincho Pro", "YuMincho", "Yu Mincho", serif',
    titleWeight: 600,
    bodyWeight: 300,
  },
  'Hiragino Sans': {
    css: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", sans-serif',
    titleWeight: 600,
    bodyWeight: 300,
  },
  'Noto Serif JP': {
    css: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    titleWeight: 700,
    bodyWeight: 400,
  },
  'Noto Serif JP Light': {
    css: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    titleWeight: 400,
    bodyWeight: 300,
  },
  'Shippori Mincho': {
    css: '"Shippori Mincho", "Hiragino Mincho ProN", serif',
    titleWeight: 500,
    bodyWeight: 400,
  },
  'Noto Sans JP': {
    css: '"Noto Sans JP", "Hiragino Sans", sans-serif',
    titleWeight: 700,
    bodyWeight: 400,
  },
  'Noto Sans JP Light': {
    css: '"Noto Sans JP", "Hiragino Sans", sans-serif',
    titleWeight: 400,
    bodyWeight: 300,
  },
  serif: { css: 'serif', titleWeight: 700, bodyWeight: 400 },
  'sans-serif': { css: 'sans-serif', titleWeight: 700, bodyWeight: 400 },
};

function resolveHeroFont(name) {
  return HERO_FONT_OPTIONS[name] || HERO_FONT_OPTIONS['Hiragino Mincho'];
}
