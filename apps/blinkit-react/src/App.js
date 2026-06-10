import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { categories, navItems, products } from './catalog.js';
import { tokens } from './tokens.js';

const h = React.createElement;

function SearchIcon() {
  return h(
    'svg',
    { className: 'search-icon', fill: 'none', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
    h('circle', { cx: '11', cy: '11', r: '7', strokeWidth: '2' }),
    h('path', { d: 'M20 20l-3.5-3.5', strokeWidth: '2', strokeLinecap: 'round' })
  );
}

function StatusBar() {
  return h(
    'div',
    { className: 'status-bar' },
    h('span', null, '9:41'),
    h('span', { className: 'status-dots', 'aria-hidden': 'true' }, h('span'), h('span'), h('span'))
  );
}

function Header() {
  return h(
    'header',
    { className: 'app-header' },
    h(StatusBar),
    h(
      'div',
      { className: 'delivery-row' },
      h(
        'div',
        { className: 'delivery-copy' },
        h('h1', null, 'Delivery in 8 minutes'),
        h('p', null, 'Home - 221B Baker Street, Indiranagar')
      ),
      h('button', { className: 'profile-button', 'aria-label': 'Open profile' }, 'B')
    ),
    h('label', { className: 'search-bar', 'aria-label': 'Search products' }, h(SearchIcon), h('span', null, 'Search "milk"'))
  );
}


function BrandMark() {
  return h('div', { className: 'brand-mark', 'aria-label': 'Blinkit wordmark' }, h('span', null, 'blink'), h('strong', null, 'it'));
}

function HeroCard() {
  return h(
    'section',
    { className: 'hero-card', 'aria-label': 'Blinkit delivery promise' },
    h(BrandMark),
    h('div', null, h('strong', null, 'Fresh groceries at your doorstep'), h('p', null, 'Pixel-matched React shell built from APK tokens.'))
  );
}

function CategoryGrid() {
  return h(
    'section',
    { className: 'content-section', 'aria-labelledby': 'category-title' },
    h('div', { className: 'section-heading' }, h('h2', { id: 'category-title' }, 'Shop by category'), h('button', null, 'see all')),
    h(
      'div',
      { className: 'category-grid' },
      categories.map((category) =>
        h(
          'article',
          { className: 'category-tile', key: category.label },
          h('div', { className: 'category-art', style: { backgroundColor: category.tone } }, category.emoji),
          h('span', null, category.label)
        )
      )
    )
  );
}

function ProductCard({ product }) {
  return h(
    'article',
    { className: 'product-card' },
    h('div', { className: 'product-image' }, h('span', { className: 'product-emoji' }, product.emoji), h('span', { className: 'timer-chip' }, '8 MINS')),
    h('h3', null, product.name),
    h('p', null, product.unit),
    h('div', { className: 'purchase-row' }, h('strong', null, product.price), h('button', null, 'ADD'))
  );
}

function ProductRail() {
  return h(
    'section',
    { className: 'content-section product-section', 'aria-labelledby': 'popular-title' },
    h('div', { className: 'section-heading' }, h('h2', { id: 'popular-title' }, 'Popular near you'), h('button', null, 'see all')),
    h('div', { className: 'product-rail' }, products.map((product) => h(ProductCard, { key: product.name, product })))
  );
}

function BottomNav() {
  return h(
    'nav',
    { className: 'bottom-nav', 'aria-label': 'Main navigation' },
    navItems.map((item) =>
      h(
        'button',
        { className: item.active ? 'nav-item active' : 'nav-item', key: item.label, 'aria-current': item.active ? 'page' : undefined },
        h('span', { className: 'nav-icon' }, item.icon),
        h('span', null, item.label)
      )
    )
  );
}

function App() {
  const appStyle = {
    '--viewport-width': `${tokens.viewport.width}px`,
    '--viewport-height': `${tokens.viewport.height}px`,
    '--brand-yellow': tokens.colors.brandYellow,
    '--brand-green': tokens.colors.brandGreen,
    '--ink': tokens.colors.inkPrimary,
    '--muted': tokens.colors.inkSecondary,
    '--soft': tokens.colors.inkMuted,
    '--screen-bg': tokens.colors.surfaceAlt,
    '--surface': tokens.colors.surface,
    '--stroke': tokens.colors.strokeSubtle,
    '--warm': tokens.colors.surfaceWarm,
    '--header-height': `${tokens.layout.headerHeight}px`,
    '--search-height': `${tokens.layout.searchHeight}px`,
    '--bottom-nav-height': `${tokens.layout.bottomNavHeight}px`
  };

  return h(
    'main',
    { className: 'phone-frame', style: appStyle, 'aria-label': 'Blinkit pixel-perfect React implementation' },
    h(Header),
    h('div', { className: 'scroll-content' }, h(HeroCard), h(CategoryGrid), h(ProductRail)),
    h(BottomNav)
  );
}

createRoot(document.getElementById('root')).render(h(App));
