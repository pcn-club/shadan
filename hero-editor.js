(function () {
  var EDITOR_DATA = {
  "iconSize": 49,
  "textPadding": {
    "top": 14,
    "left": 5,
    "bottom": 20,
    "width": 100
  },
  "textStyle": {
    "fontFamily": "Shippori Mincho",
    "titleSize": 3.25,
    "titleLineHeight": 1.4,
    "titleMarginBottom": 1.1,
    "bodySize": 1.5,
    "bodyLineHeight": 1.6,
    "opacity": 1
  },
  "icons": [
    {
      "id": 82,
      "name": "筑波大",
      "top": 5.8,
      "left": 63.4
    },
    {
      "id": 72,
      "name": "掛川",
      "top": 5.9,
      "left": 70.1
    },
    {
      "id": 71,
      "name": "日新",
      "top": 6,
      "left": 74.6
    },
    {
      "id": 68,
      "name": "高田馬場",
      "top": 6.6,
      "left": 66.8
    },
    {
      "id": 79,
      "name": "ふるため",
      "top": 6.7,
      "left": 78.8
    },
    {
      "id": 10,
      "name": "札幌",
      "top": 6.9,
      "left": 92.2,
      "size": 50
    },
    {
      "id": 70,
      "name": "魚津",
      "top": 7,
      "left": 82.5
    },
    {
      "id": 54,
      "name": "函館",
      "top": 13.9,
      "left": 89.1
    },
    {
      "id": 85,
      "name": "渋谷",
      "top": 14.7,
      "left": 68.5
    },
    {
      "id": 25,
      "name": "北千住",
      "top": 15.3,
      "left": 77.9
    },
    {
      "id": 45,
      "name": "中野",
      "top": 16,
      "left": 63
    },
    {
      "id": 76,
      "name": "カワサキ",
      "top": 16.1,
      "left": 74.4
    },
    {
      "id": 75,
      "name": "滝沢",
      "top": 17.3,
      "left": 81.4
    },
    {
      "id": 33,
      "name": "北京",
      "top": 18.2,
      "left": 53.3
    },
    {
      "id": 86,
      "name": "飯田",
      "top": 23.4,
      "left": 64.7
    },
    {
      "id": 74,
      "name": "軽井沢",
      "top": 23.4,
      "left": 73.2
    },
    {
      "id": 88,
      "name": "さいたま",
      "top": 23.6,
      "left": 68
    },
    {
      "id": 30,
      "name": "青森津軽",
      "top": 24.2,
      "left": 89.5
    },
    {
      "id": 73,
      "name": "新潟",
      "top": 25,
      "left": 78.3
    },
    {
      "id": 60,
      "name": "青森ひがし",
      "top": 25,
      "left": 94.1
    },
    {
      "id": 61,
      "name": "酒田",
      "top": 33.1,
      "left": 88.4
    },
    {
      "id": 22,
      "name": "タイランド",
      "top": 35.3,
      "left": 49.7
    },
    {
      "id": 1,
      "name": "福井",
      "top": 40,
      "left": 69.5
    },
    {
      "id": 4,
      "name": "金沢",
      "top": 40,
      "left": 73.7
    },
    {
      "id": 34,
      "name": "福大附属",
      "top": 41.6,
      "left": 65.3
    },
    {
      "id": 55,
      "name": "山形米沢",
      "top": 41.9,
      "left": 87.2
    },
    {
      "id": 2,
      "name": "仙台",
      "top": 43.6,
      "left": 92.4
    },
    {
      "id": 29,
      "name": "前橋",
      "top": 44.3,
      "left": 81.3
    },
    {
      "id": 66,
      "name": "舞鶴",
      "top": 45.2,
      "left": 59.5
    },
    {
      "id": 9,
      "name": "シリコンバレー",
      "top": 46.3,
      "left": 97.6
    },
    {
      "id": 31,
      "name": "勝山",
      "top": 48.2,
      "left": 72.9
    },
    {
      "id": 26,
      "name": "北はりま",
      "top": 48.6,
      "left": 51.1
    },
    {
      "id": 14,
      "name": "丹波",
      "top": 48.7,
      "left": 55.1
    },
    {
      "id": 15,
      "name": "世田谷",
      "top": 49.2,
      "left": 88.6
    },
    {
      "id": 28,
      "name": "上田",
      "top": 49.9,
      "left": 76.8
    },
    {
      "id": 5,
      "name": "鯖江",
      "top": 50,
      "left": 69.6
    },
    {
      "id": 41,
      "name": "武生",
      "top": 51.2,
      "left": 66.3
    },
    {
      "id": 23,
      "name": "いわき",
      "top": 52.7,
      "left": 92.6
    },
    {
      "id": 24,
      "name": "京都南",
      "top": 53.7,
      "left": 58.4
    },
    {
      "id": 19,
      "name": "ひろしま",
      "top": 58,
      "left": 50
    },
    {
      "id": 8,
      "name": "東京",
      "top": 58.8,
      "left": 88
    },
    {
      "id": 18,
      "name": "名古屋",
      "top": 59.8,
      "left": 64.9
    },
    {
      "id": 17,
      "name": "奈良",
      "top": 62.3,
      "left": 60.9
    },
    {
      "id": 6,
      "name": "大阪",
      "top": 64.3,
      "left": 56.9
    },
    {
      "id": 62,
      "name": "沼津",
      "top": 66.1,
      "left": 67.7
    },
    {
      "id": 11,
      "name": "東京多摩",
      "top": 66.5,
      "left": 79.5
    },
    {
      "id": 67,
      "name": "伊豆大島",
      "top": 67.8,
      "left": 75.1
    },
    {
      "id": 42,
      "name": "幕張",
      "top": 68,
      "left": 96
    },
    {
      "id": 27,
      "name": "東京ベイ",
      "top": 68.2,
      "left": 91.9
    },
    {
      "id": 56,
      "name": "青山",
      "top": 68.3,
      "left": 88.1
    },
    {
      "id": 3,
      "name": "三重",
      "top": 68.5,
      "left": 63.6
    },
    {
      "id": 38,
      "name": "ちとから",
      "top": 69,
      "left": 84.2
    },
    {
      "id": 32,
      "name": "北九州",
      "top": 69.4,
      "left": 46.9
    },
    {
      "id": 20,
      "name": "南大阪",
      "top": 72.8,
      "left": 59.6
    },
    {
      "id": 12,
      "name": "湘南",
      "top": 76.1,
      "left": 71.2
    },
    {
      "id": 43,
      "name": "横浜",
      "top": 77.3,
      "left": 82.3
    },
    {
      "id": 40,
      "name": "品川",
      "top": 77.4,
      "left": 90.1
    },
    {
      "id": 57,
      "name": "鎌倉",
      "top": 77.5,
      "left": 78.7
    },
    {
      "id": 59,
      "name": "愛媛西予",
      "top": 78.6,
      "left": 56.8
    },
    {
      "id": 51,
      "name": "有明",
      "top": 86.8,
      "left": 44.8
    },
    {
      "id": 13,
      "name": "宮崎",
      "top": 88.1,
      "left": 51.6
    },
    {
      "id": 69,
      "name": "沖縄",
      "top": 92.4,
      "left": 41
    },
    {
      "id": 16,
      "name": "鹿児島",
      "top": 95.6,
      "left": 48.3
    }
  ]
};

  var CANVAS_W = 980;
  var CANVAS_H = 460;
  var ICON_BASE = './img/membericon/';

  var canvas = document.getElementById('canvas');
  var iconsLayer = document.getElementById('icons-layer');
  var iconList = document.getElementById('icon-list');
  var jsonOutput = document.getElementById('json-output');
  var textJsonOutput = document.getElementById('text-json-output');
  var textJsonInput = document.getElementById('text-json-input');
  var heroTextEl = document.getElementById('hero-text');
  var statusEl = document.getElementById('editor-status');

  var icons = [];
  var iconSize = 42;
  var textPadding = { top: 26, left: 5, bottom: 20, width: 100 };
  var textStyle = {
    fontFamily: 'Noto Serif JP',
    titleSize: 1.85,
    titleLineHeight: 1.55,
    titleMarginBottom: 1.1,
    bodySize: 0.95,
    bodyLineHeight: 2,
    opacity: 1,
  };
  var selectedId = null;
  var drag = null;

  var TEXT_PADDING_DEFAULTS = { top: 26, left: 5, bottom: 20, width: 100 };
  var TEXT_STYLE_DEFAULTS = {
    fontFamily: 'Noto Serif JP',
    titleSize: 1.85,
    titleLineHeight: 1.55,
    titleMarginBottom: 1.1,
    bodySize: 0.95,
    bodyLineHeight: 2,
    opacity: 1,
  };

  function normalizeTextPadding(raw) {
    if (!raw) {
      return Object.assign({}, TEXT_PADDING_DEFAULTS);
    }
    var left = raw.left != null ? raw.left : TEXT_PADDING_DEFAULTS.left;
    return {
      top: raw.top != null ? raw.top : TEXT_PADDING_DEFAULTS.top,
      left: left,
      bottom: raw.bottom != null ? raw.bottom : TEXT_PADDING_DEFAULTS.bottom,
      width: 100,
    };
  }

  function applyHeroText() {
    if (heroTextEl) {
      heroTextEl.style.top = textPadding.top + '%';
      heroTextEl.style.left = textPadding.left + '%';
      heroTextEl.style.bottom = textPadding.bottom + '%';
      heroTextEl.style.width = '100%';
      heroTextEl.style.right = 'auto';
      heroTextEl.style.padding = '0';
      var font = resolveHeroFont(textStyle.fontFamily);
      heroTextEl.style.setProperty('--hero-text-font-family', font.css);
      heroTextEl.style.setProperty('--hero-title-font-weight', String(font.titleWeight));
      heroTextEl.style.setProperty('--hero-body-font-weight', String(font.bodyWeight));
      heroTextEl.style.setProperty('--hero-title-size', textStyle.titleSize + 'em');
      heroTextEl.style.setProperty('--hero-title-line-height', String(textStyle.titleLineHeight));
      heroTextEl.style.setProperty('--hero-title-margin-bottom', textStyle.titleMarginBottom + 'em');
      heroTextEl.style.setProperty('--hero-body-size', textStyle.bodySize + 'em');
      heroTextEl.style.setProperty('--hero-body-line-height', String(textStyle.bodyLineHeight));
      heroTextEl.style.opacity = String(textStyle.opacity != null ? textStyle.opacity : 1);
    }
    document.getElementById('text-padding-top').value = textPadding.top;
    document.getElementById('text-padding-bottom').value = textPadding.bottom;
    document.getElementById('text-padding-left').value = textPadding.left;
    document.getElementById('text-padding-top-val').textContent = textPadding.top + '%';
    document.getElementById('text-padding-bottom-val').textContent = textPadding.bottom + '%';
    document.getElementById('text-padding-left-val').textContent = textPadding.left + '%';
    document.getElementById('text-font-family').value = textStyle.fontFamily;
    document.getElementById('text-title-size').value = Math.round(textStyle.titleSize * 100);
    document.getElementById('text-title-size-val').textContent = textStyle.titleSize + 'em';
    document.getElementById('text-title-line-height').value = Math.round(textStyle.titleLineHeight * 100);
    document.getElementById('text-title-line-height-val').textContent = String(textStyle.titleLineHeight);
    document.getElementById('text-body-size').value = Math.round(textStyle.bodySize * 100);
    document.getElementById('text-body-size-val').textContent = textStyle.bodySize + 'em';
    document.getElementById('text-body-line-height').value = Math.round(textStyle.bodyLineHeight * 100);
    document.getElementById('text-body-line-height-val').textContent = String(textStyle.bodyLineHeight);
    refreshTextOutput();
    refreshOutput();
  }

  function exportTextJson() {
    return JSON.stringify({
      textPadding: textPadding,
      textStyle: textStyle,
    }, null, 2);
  }

  function refreshTextOutput() {
    if (textJsonOutput) {
      textJsonOutput.value = exportTextJson();
    }
  }

  function applyTextConfig(raw) {
    var data = typeof raw === 'string' ? JSON.parse(raw.trim()) : raw;
    if (!data || (data.textPadding == null && data.textStyle == null)) {
      throw new Error('textPadding または textStyle が必要です');
    }
    if (data.textPadding != null) {
      textPadding = normalizeTextPadding(data.textPadding);
    }
    if (data.textStyle != null) {
      textStyle = Object.assign({}, TEXT_STYLE_DEFAULTS, data.textStyle);
    }
    applyHeroText();
    setStatus('文字設定を反映しました');
  }

  function copyTextJson() {
    var json = exportTextJson();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(json).then(function () {
        setStatus('文字設定をクリップボードにコピーしました');
      });
    }
    textJsonOutput.focus();
    textJsonOutput.select();
    document.execCommand('copy');
    setStatus('文字設定をコピーしました');
    return Promise.resolve();
  }

  function mergeTextPadding(partial) {
    textPadding = {
      top: partial.top != null ? partial.top : textPadding.top,
      left: partial.left != null ? partial.left : textPadding.left,
      bottom: partial.bottom != null ? partial.bottom : textPadding.bottom,
      width: 100,
    };
  }

  function mergeTextStyle(partial) {
    textStyle = {
      fontFamily: partial.fontFamily != null ? partial.fontFamily : textStyle.fontFamily,
      titleSize: partial.titleSize != null ? partial.titleSize : textStyle.titleSize,
      titleLineHeight: partial.titleLineHeight != null ? partial.titleLineHeight : textStyle.titleLineHeight,
      titleMarginBottom: partial.titleMarginBottom != null ? partial.titleMarginBottom : textStyle.titleMarginBottom,
      bodySize: partial.bodySize != null ? partial.bodySize : textStyle.bodySize,
      bodyLineHeight: partial.bodyLineHeight != null ? partial.bodyLineHeight : textStyle.bodyLineHeight,
      opacity: partial.opacity != null ? partial.opacity : textStyle.opacity,
    };
  }

  function getEffectiveSize(icon) {
    return icon.size != null ? icon.size : iconSize;
  }

  function applyIconElementSize(el, icon) {
    el.style.setProperty('--hero-icon-size', getEffectiveSize(icon) + 'px');
  }

  function formatIconLabel(icon) {
    var size = getEffectiveSize(icon);
    var sizeLabel = icon.size != null ? ', ' + size + 'px' : '';
    return icon.name + ' (' + icon.top + '%, ' + icon.left + '%' + sizeLabel + ')';
  }

  function applyDefaultIconSize(size) {
    iconSize = size;
    document.getElementById('icon-size-default').value = size;
    document.getElementById('icon-size-default-val').textContent = size + 'px';
    icons.forEach(function (icon) {
      if (icon.size != null) return;
      var el = iconsLayer.querySelector('[data-id="' + icon.id + '"]');
      if (el) applyIconElementSize(el, icon);
    });
    updateSelectionUI();
    refreshOutput();
  }

  function updateSelectedIconSize(size) {
    if (selectedId == null) return;
    icons.forEach(function (icon) {
      if (icon.id !== selectedId) return;
      icon.size = size;
      var el = iconsLayer.querySelector('[data-id="' + icon.id + '"]');
      if (el) applyIconElementSize(el, icon);
      var li = iconList.querySelector('[data-id="' + icon.id + '"]');
      if (li) li.textContent = formatIconLabel(icon);
    });
    document.getElementById('icon-size-selected').value = size;
    document.getElementById('icon-size-selected-val').textContent = size + 'px';
    refreshOutput();
  }

  function resetSelectedIconSize() {
    if (selectedId == null) return;
    icons.forEach(function (icon) {
      if (icon.id !== selectedId) return;
      delete icon.size;
      var el = iconsLayer.querySelector('[data-id="' + icon.id + '"]');
      if (el) applyIconElementSize(el, icon);
      var li = iconList.querySelector('[data-id="' + icon.id + '"]');
      if (li) li.textContent = formatIconLabel(icon);
    });
    updateSelectionUI();
    refreshOutput();
  }

  function updateSelectionUI() {
    var selectedSlider = document.getElementById('icon-size-selected');
    var selectedVal = document.getElementById('icon-size-selected-val');
    var resetBtn = document.getElementById('btn-reset-icon-size');
    if (selectedId == null) {
      selectedSlider.disabled = true;
      resetBtn.disabled = true;
      selectedVal.textContent = '—';
      return;
    }
    var icon = icons.find(function (i) { return i.id === selectedId; });
    if (!icon) return;
    selectedSlider.disabled = false;
    resetBtn.disabled = icon.size == null;
    var size = getEffectiveSize(icon);
    selectedSlider.value = size;
    selectedVal.textContent = size + 'px' + (icon.size == null ? '（デフォルト）' : '');
  }

  function normalizeData(raw) {
    if (Array.isArray(raw)) {
      return { iconSize: 42, icons: raw, textPadding: TEXT_PADDING_DEFAULTS, textStyle: TEXT_STYLE_DEFAULTS };
    }
    return {
      iconSize: raw.iconSize || 42,
      icons: raw.icons || [],
      textPadding: normalizeTextPadding(raw.textPadding),
      textStyle: raw.textStyle || TEXT_STYLE_DEFAULTS,
    };
  }

  function setStatus(msg, isError) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.style.color = isError ? '#c00' : '#555';
  }

  function pct(n) {
    return Math.round(n * 10) / 10;
  }

  function toPosition(clientX, clientY) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = CANVAS_W / rect.width;
    var scaleY = CANVAS_H / rect.height;
    var x = (clientX - rect.left) * scaleX;
    var y = (clientY - rect.top) * scaleY;
    return {
      left: pct(Math.max(0, Math.min(100, (x / CANVAS_W) * 100))),
      top: pct(Math.max(0, Math.min(100, (y / CANVAS_H) * 100))),
    };
  }

  function exportJson() {
    var data = {
      iconSize: iconSize,
      textPadding: textPadding,
      textStyle: textStyle,
      icons: icons.map(function (icon) {
        var entry = {
          id: icon.id,
          name: icon.name,
          top: icon.top,
          left: icon.left,
        };
        if (icon.size != null) {
          entry.size = icon.size;
        }
        return entry;
      }).sort(function (a, b) {
        return a.top - b.top || a.left - b.left;
      }),
    };
    return JSON.stringify(data, null, 2);
  }

  function refreshOutput() {
    jsonOutput.value = icons.length ? exportJson() : '';
  }

  function selectIcon(id) {
    selectedId = id;
    iconsLayer.querySelectorAll('.hero-icon').forEach(function (el) {
      el.classList.toggle('is-selected', Number(el.dataset.id) === id);
    });
    iconList.querySelectorAll('li').forEach(function (li) {
      li.classList.toggle('is-selected', Number(li.dataset.id) === id);
    });
    updateSelectionUI();
  }

  function updateIconPosition(id, top, left) {
    icons.forEach(function (icon) {
      if (icon.id === id) {
        icon.top = top;
        icon.left = left;
      }
    });
    var el = iconsLayer.querySelector('[data-id="' + id + '"]');
    if (el) {
      el.style.top = top + '%';
      el.style.left = left + '%';
    }
    var li = iconList.querySelector('[data-id="' + id + '"]');
    if (li) {
      var icon = icons.find(function (i) { return i.id === id; });
      if (icon) {
        li.textContent = formatIconLabel(icon);
      }
    }
    refreshOutput();
  }

  function onDragMove(e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    e.preventDefault();
    var pos = toPosition(e.clientX, e.clientY);
    updateIconPosition(drag.id, pos.top, pos.left);
  }

  function onDragEnd(e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    drag.el.classList.remove('is-dragging');
    try {
      drag.el.releasePointerCapture(e.pointerId);
    } catch (err) { /* noop */ }
    drag.el.removeEventListener('pointermove', onDragMove);
    drag.el.removeEventListener('pointerup', onDragEnd);
    drag.el.removeEventListener('pointercancel', onDragEnd);
    drag = null;
  }

  function renderIcon(icon) {
    var el = document.createElement('div');
    el.className = 'hero-icon';
    el.dataset.id = String(icon.id);
    el.style.top = icon.top + '%';
    el.style.left = icon.left + '%';
    applyIconElementSize(el, icon);

    var img = document.createElement('img');
    img.src = ICON_BASE + icon.id + '.png';
    img.alt = 'PCN' + icon.name;
    img.draggable = false;

    el.appendChild(img);

    el.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      selectIcon(icon.id);
      drag = {
        id: icon.id,
        el: el,
        pointerId: e.pointerId,
      };
      el.classList.add('is-dragging');
      el.addEventListener('pointermove', onDragMove);
      el.addEventListener('pointerup', onDragEnd);
      el.addEventListener('pointercancel', onDragEnd);
      if (el.setPointerCapture) {
        el.setPointerCapture(e.pointerId);
      }
    });

    iconsLayer.appendChild(el);

    var li = document.createElement('li');
    li.dataset.id = String(icon.id);
    li.textContent = formatIconLabel(icon);
    li.addEventListener('click', function () {
      selectIcon(icon.id);
    });
    iconList.appendChild(li);
  }

  function loadData(raw) {
    var data = normalizeData(raw);
    applyDefaultIconSize(data.iconSize);
    textPadding = normalizeTextPadding(data.textPadding);
    textStyle = Object.assign({}, data.textStyle);
    applyHeroText();
    icons = data.icons.map(function (item) {
      var icon = {
        id: item.id,
        name: item.name,
        top: item.top,
        left: item.left,
      };
      if (item.size != null) {
        icon.size = item.size;
      }
      return icon;
    });
    iconsLayer.innerHTML = '';
    iconList.innerHTML = '';
    icons.forEach(renderIcon);
    refreshOutput();
    setStatus(icons.length + ' 個のアイコンを読み込みました。ドラッグして位置を合わせてください。');
  }

  document.getElementById('icon-opacity').addEventListener('input', function (e) {
    var v = e.target.value;
    iconsLayer.style.opacity = v / 100;
    document.getElementById('icon-opacity-val').textContent = v + '%';
  });

  document.getElementById('icon-size-default').addEventListener('input', function (e) {
    applyDefaultIconSize(Number(e.target.value));
  });

  document.getElementById('icon-size-selected').addEventListener('input', function (e) {
    updateSelectedIconSize(Number(e.target.value));
  });

  document.getElementById('btn-reset-icon-size').addEventListener('click', function () {
    resetSelectedIconSize();
  });

  ['top', 'bottom', 'left'].forEach(function (side) {
    document.getElementById('text-padding-' + side).addEventListener('input', function (e) {
      var next = {};
      next[side] = Number(e.target.value);
      mergeTextPadding(next);
      applyHeroText();
    });
  });

  document.getElementById('text-font-family').addEventListener('change', function (e) {
    mergeTextStyle({ fontFamily: e.target.value });
    applyHeroText();
  });

  document.getElementById('text-title-size').addEventListener('input', function (e) {
    mergeTextStyle({ titleSize: Number(e.target.value) / 100 });
    applyHeroText();
  });

  document.getElementById('text-title-line-height').addEventListener('input', function (e) {
    mergeTextStyle({ titleLineHeight: Number(e.target.value) / 100 });
    applyHeroText();
  });

  document.getElementById('text-body-size').addEventListener('input', function (e) {
    mergeTextStyle({ bodySize: Number(e.target.value) / 100 });
    applyHeroText();
  });

  document.getElementById('text-body-line-height').addEventListener('input', function (e) {
    mergeTextStyle({ bodyLineHeight: Number(e.target.value) / 100 });
    applyHeroText();
  });

  document.getElementById('btn-copy-text').addEventListener('click', function () {
    copyTextJson().catch(function () {
      setStatus('コピーに失敗しました', true);
    });
  });

  document.getElementById('btn-copy-text-bottom').addEventListener('click', function () {
    copyTextJson().catch(function () {
      setStatus('コピーに失敗しました', true);
    });
  });

  document.getElementById('btn-apply-text').addEventListener('click', function () {
    try {
      applyTextConfig(textJsonInput.value);
    } catch (err) {
      setStatus('文字設定の反映に失敗しました: ' + err.message, true);
    }
  });

  document.getElementById('btn-export').addEventListener('click', function () {
    var json = exportJson();
    var blob = new Blob([json], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'hero-positions.json';
    a.click();
    URL.revokeObjectURL(a.href);
    refreshOutput();
  });

  document.getElementById('file-import').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        loadData(JSON.parse(reader.result));
      } catch (err) {
        setStatus('JSON の読み込みに失敗しました', true);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  iconsLayer.style.opacity = 0.25;
  textPadding = Object.assign({}, TEXT_PADDING_DEFAULTS);
  textStyle = TEXT_STYLE_DEFAULTS;
  applyHeroText();

  var yearsEl = document.getElementById('hero-years');
  if (yearsEl) {
    yearsEl.textContent = String(new Date().getFullYear() - 2015);
  }

  if (location.protocol === 'file:') {
    setStatus('file:// では動作しません。python3 -m http.server 8765 などで http://localhost:8765/hero-editor.html を開いてください。', true);
  }

  if (typeof EDITOR_DATA !== 'undefined' && EDITOR_DATA.icons && EDITOR_DATA.icons.length) {
    loadData(EDITOR_DATA);
  } else if (typeof EDITOR_ICONS !== 'undefined' && EDITOR_ICONS.length) {
    loadData(EDITOR_ICONS);
  } else {
    setStatus('アイコンデータがありません', true);
  }
})();
