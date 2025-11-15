# Rampo CSS Design Framework

**モダンで網羅的なCSSデザインフレームワーク**

Rampoは、現代のWebアプリケーション開発のために設計された、包括的でモダンなCSSフレームワークです。レスポンシブデザイン、ダークモード対応、豊富なコンポーネント、柔軟なユーティリティクラスを提供します。

## 特徴

- ✨ **モダンなデザイン**: 最新のデザイントレンドに基づいた美しいコンポーネント
- 🎨 **CSS Variables**: カスタマイズ可能なデザイントークン
- 🌙 **ダークモード対応**: 自動・手動切り替え対応
- 📱 **完全レスポンシブ**: モバイルファーストアプローチ
- 🎯 **網羅的なコンポーネント**: ボタン、フォーム、カード、モーダル、ナビゲーションなど
- ⚡ **軽量**: 最適化されたCSS
- 🔧 **柔軟**: カスタマイズ可能なユーティリティクラス
- ♿ **アクセシビリティ**: WCAG準拠

## クイックスタート

### インストール

プロジェクトに直接CSSとJavaScriptファイルを含めます：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <link rel="stylesheet" href="path/to/css/rampo.css">
</head>
<body>
  <!-- Your content here -->

  <script src="path/to/js/rampo.js"></script>
</body>
</html>
```

## コンポーネント

### ボタン

```html
<!-- Basic buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>

<!-- Outline buttons -->
<button class="btn btn-outline-primary">Outline</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Special -->
<button class="btn btn-gradient-primary">Gradient</button>
<button class="btn btn-primary btn-pill">Pill</button>
<button class="btn btn-primary btn-elevated">Elevated</button>
```

### カード

```html
<div class="card">
  <div class="card-header">Card Header</div>
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content goes here.</p>
    <button class="btn btn-primary">Action</button>
  </div>
  <div class="card-footer">Card Footer</div>
</div>
```

### フォーム

```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-control" placeholder="you@example.com">
  <span class="form-text">Helper text</span>
</div>

<div class="form-check">
  <input type="checkbox" class="form-check-input" id="check1">
  <label class="form-check-label" for="check1">Checkbox</label>
</div>

<div class="form-check form-switch">
  <input type="checkbox" class="form-check-input" id="switch1">
  <label class="form-check-label" for="switch1">Switch</label>
</div>
```

### モーダル

```html
<!-- Trigger button -->
<button onclick="myModal.show()">Open Modal</button>

<!-- Modal backdrop -->
<div class="modal-backdrop"></div>

<!-- Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Modal Title</h3>
        <button class="modal-close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Modal content...</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" data-dismiss="modal">Cancel</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<script>
  const myModal = new Rampo.Modal('#myModal');
</script>
```

### アラート

```html
<div class="alert alert-success">
  <strong>Success!</strong> Your action was completed.
</div>

<div class="alert alert-warning alert-dismissible">
  <strong>Warning:</strong> Please check your input.
  <button class="alert-dismiss" data-dismiss="alert">&times;</button>
</div>
```

### ナビゲーション

```html
<!-- Navbar -->
<nav class="navbar">
  <a href="#" class="navbar-brand">Brand</a>
  <ul class="navbar-nav">
    <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
  </ul>
</nav>

<!-- Tabs -->
<ul class="nav-tabs">
  <li class="nav-item">
    <a href="#tab1" class="nav-link active" data-target="#tab1">Tab 1</a>
  </li>
  <li class="nav-item">
    <a href="#tab2" class="nav-link" data-target="#tab2">Tab 2</a>
  </li>
</ul>

<!-- Accordion -->
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">
      <button class="accordion-button collapsed">Item 1</button>
    </div>
    <div class="accordion-collapse">
      <div class="accordion-body">Content...</div>
    </div>
  </div>
</div>
```

## レイアウト

### Grid System

```html
<div class="container">
  <div class="grid grid-cols-3 gap-4">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>
```

### Flexbox

```html
<div class="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>

<div class="flex-center">
  <div>Centered</div>
</div>

<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## ユーティリティ

### スペーシング

```html
<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mt-8 mb-4">Margin top & bottom</div>
<div class="mx-auto">Centered horizontally</div>

<!-- Padding -->
<div class="p-6">Padding all sides</div>
<div class="px-4 py-2">Padding horizontal & vertical</div>
```

### カラー

```html
<!-- Background -->
<div class="bg-primary">Primary background</div>
<div class="bg-success">Success background</div>

<!-- Text -->
<p class="text-primary">Primary text</p>
<p class="text-error">Error text</p>
```

### ボーダー & シャドウ

```html
<div class="border rounded-lg">Bordered box</div>
<div class="border-2 border-primary rounded-xl">Colored border</div>

<div class="shadow-sm">Small shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-2xl">Extra large shadow</div>
```

### アニメーション

```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-in-up">Slide up</div>
<div class="hover-grow">Grows on hover</div>
<div class="hover-lift">Lifts on hover</div>

<div class="spinner">Loading...</div>
<div class="skeleton skeleton-text"></div>
```

## ダークモード

### 自動ダークモード

システム設定に基づいて自動的にダークモードが適用されます。

### 手動切り替え

```html
<button data-toggle="dark-mode">Toggle Dark Mode</button>
```

## JavaScript API

### Modal

```javascript
const modal = new Rampo.Modal('#myModal');
modal.show();
modal.hide();
modal.toggle();
```

### Tabs

```javascript
const tabs = new Rampo.Tabs('.nav-tabs');
```

### Accordion

```javascript
const accordion = new Rampo.Accordion('.accordion');
```

### Toast Notification

```javascript
Rampo.showToast('Message sent!', 'success', 3000);
Rampo.showToast('Error occurred', 'error', 3000);
```

### Copy to Clipboard

```javascript
Rampo.copyToClipboard('Text to copy');
```

## カスタマイズ

CSS Variablesを使用して簡単にカスタマイズできます：

```css
:root {
  --color-primary-600: #your-color;
  --font-sans: your-font-family;
  --radius-lg: your-radius;
  /* など... */
}
```

## ブラウザサポート

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## プロジェクト構造

```
css-design-framework-rampo/
├── css/
│   ├── base/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── typography.css
│   ├── layout/
│   │   ├── grid.css
│   │   └── flexbox.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── forms.css
│   │   ├── cards.css
│   │   ├── modal.css
│   │   ├── alert.css
│   │   ├── navigation.css
│   │   └── table.css
│   ├── utilities/
│   │   ├── spacing.css
│   │   ├── helpers.css
│   │   └── animations.css
│   └── rampo.css (main file)
├── js/
│   └── rampo.js
├── examples/
│   └── index.html
└── README.md
```

## ライセンス

MIT License

## 貢献

貢献を歓迎します！バグレポート、機能リクエスト、プルリクエストをお待ちしています。

---

Made with ♥ for developers
