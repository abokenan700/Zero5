# Blinkit Android v17.99.1 — reverse-engineered pixel-perfect design extraction

## 1. Scope and source artifact

This package reverse-engineers the source artifact `Blinkit_v17.99.1(280170991).apks` into a reusable design kit. The source bundle identifies the app as **Blinkit**, package `com.grofers.customerapp`, version `17.99.1`, version code `280170991`, min SDK `24`, and target SDK `36`.

The `.apks` file contains `base.apk`, `split_config.xxhdpi.apk`, `split_config.arm64_v8a.apk`, `icon.png`, and `manifest.json`. The base APK contains 3,094 extracted `res/` files plus runtime assets such as Lottie animations and JSON templates. The xxhdpi split contains density-specific raster assets used for Android pixel checks.

## 2. Deliverables committed in this extraction

| Path | Purpose |
| --- | --- |
| `docs/reverse-engineering/design-tokens.json` | Machine-readable color, typography, spacing, radius, elevation, and component tokens. |
| `docs/reverse-engineering/apk-inventory.json` | APK composition, metadata, resource counts, and copied design-asset list. |
| `docs/reverse-engineering/home-screen-pixel-spec.html` | Static 390 × 844 px responsive reconstruction of the key Blinkit home surface. |
| `docs/reverse-engineering/asset-manifest.md` | Text-only manifest of APK raster assets; binaries are intentionally not committed because binary diffs are unsupported in review. |

## 3. Reverse-engineered architecture and UI system

### Application layer

- Package: `com.grofers.customerapp`.
- Main brand/application label: Blinkit.
- The bytecode strings show a large Kotlin/Android app with Compose, Material 3, appcompat, Zomato/Blinkit namespaces, analytics, cart, login, search, location, payments, media, and notification modules.
- The embedded libraries indicate mixed UI technology: Android Views/XML resources, Jetpack Compose, Material 3, Lottie, Recycler/List surfaces, and custom Blinkit view stubs.

### Design/runtime delivery model

The APK is not a fully static UI bundle. Several surfaces are API/template driven:

- `assets/location/default_template.json` suggests remote-configurable location onboarding content.
- `assets/profile/logged_in_page.json` and `assets/profile/logged_out_page.json` suggest profile page templates.
- `assets/cart/preview_template.json` suggests cart preview templating.
- `assets/customisation/product_customisation.json` suggests product option/customization layouts.
- `assets/home_loader.json` and `.lottie` files provide motion states.

That means the committed HTML spec recreates the reusable shell and component geometry, while product names, prices, offers, image URLs, and campaign banners should be considered API data rather than embedded static design.

## 4. Pixel-perfect home screen extraction

### Canvas

- Target mobile frame: **390 × 844 px**.
- Safe/status top: simulated in the yellow header.
- Coordinate system: CSS pixels matching a common Android logical viewport; xxhdpi assets are referenced for density-aware raster fidelity.

### Header

- Height: **142 px**.
- Background: brand yellow `#F8CB46`.
- Horizontal padding: **16 px**.
- Delivery promise text: **28 px / 32 px**, weight **800**, black.
- Address row: **13 px / 18 px**, weight **600**, black.
- Profile circle: **36 × 36 px**, black fill, white glyph.
- Search bar: **48 px** high, **12 px** radius, white fill, subtle `#EEEEEE` stroke/shadow.

### Search bar

- Top edge: **86 px** from screen top in the reconstruction.
- Left/right: **16 px**.
- Icon: **20 px**.
- Placeholder: `Search "milk"`, **14 px**, muted `#9A9A9A`.

### Content sections

- Body background: `#F7F7F7`.
- Section card surface: white, **12 px** radius.
- Section horizontal padding: **16 px**.
- Section title: **20 px / 24 px**, weight **800**.
- Category grid tile: **72 px** width, **64 px** art block, **11 px** label.
- Product rail card: **124 px** width, **108 × 108 px** image well, **12 px** radius.
- Product title: **13 px / 17 px**, weight **700**, two-line clamp.
- Unit/metadata: **12 px**, muted.
- Price: **13 px**, weight **800**.
- ADD button: **56 × 32 px**, radius **8 px**, green text/stroke.

### Bottom navigation

- Height: **64 px**.
- Background: white.
- Top shadow: `0 -2px 14px rgba(0,0,0,.10)`.
- Icon size: **22 px**.
- Labels: Home, Categories, Print, Cart.
- Active: brand green `#0C831F`; inactive: `#9A9A9A`.

## 5. Extracted tokens

### Brand colors

| Token | Hex | Usage |
| --- | --- | --- |
| `brandYellow` | `#F8CB46` | Header, promotional brand fields, splash identity. |
| `brandGreen` | `#0C831F` | Add buttons, active nav, progress/accent UI. |
| `inkPrimary` | `#1F1F1F` | Primary text and iconography. |
| `inkSecondary` | `#666666` | Secondary metadata. |
| `inkMuted` | `#9A9A9A` | Placeholder and inactive state text. |
| `surfaceAlt` | `#F7F7F7` | App body background. |
| `strokeSubtle` | `#EEEEEE` | Dividers, input borders, product-card borders. |
| `danger` | `#E23744` | Error/negative states and red offer accents. |

### Typography scale

| Role | Size | Line | Weight |
| --- | ---: | ---: | ---: |
| Display delivery promise | 28 | 32 | 800 |
| Section title | 20 | 24 | 800 |
| Subsection/title | 16 | 21 | 700 |
| Body/product title | 14 | 19 | 500–700 |
| Caption/unit metadata | 12 | 16 | 500 |
| Micro chips | 10 | 13 | 700 |

## 6. Asset extraction map

The original extraction identified brand, location, and empty-state raster files, but those binaries are not committed because the review UI reports binary file diffs as unsupported. The full text-only list is maintained in `asset-manifest.md`; the React implementation uses CSS-drawn brand marks and placeholder product art so every reviewed file remains text-renderable.


## 7. Reimplementation notes

1. Use `design-tokens.json` as the source of truth for color/spacing/radius/elevation.
2. Use `home-screen-pixel-spec.html` as a pixel-level visual reference; open it directly in a browser at 390 px wide or use device emulation.
3. Replace mock product/category art with live API images. The shell dimensions are fixed, but catalog imagery and pricing are runtime data.
4. Preserve Android density behavior: export raster assets at 1×, 2×, and 3× if rebuilding natively; the extracted split was xxhdpi. Keep these generated binaries out of the PR unless reviewers explicitly request them.
5. Keep motion parity by reusing `.lottie`/JSON assets from the source APK where licensing and product policy allow.

## 8. Validation commands used

- `unzip -l 'Blinkit_v17.99.1(280170991).apks'` confirmed the APKS bundle contents.
- `unzip -q reverse_engineered/apks/base.apk -d reverse_engineered/raw/base` extracted base resources for inspection.
- `find reverse_engineered/raw/base/res -maxdepth 2 -type f | wc -l` counted 3,094 base resource files.
- `unzip -q reverse_engineered/apks/split_config.xxhdpi.apk -d reverse_engineered/raw/xxhdpi` extracted density-specific assets.
- `strings reverse_engineered/raw/base/classes.dex reverse_engineered/raw/base/classes2.dex` sampled embedded module/class/UI strings.

## 9. Limitations

- Android binary XML was not fully decompiled into source XML in this environment, so the extraction avoids claiming exact implementation class/layout IDs beyond resource names and embedded strings.
- Live product catalog, promotional banners, geolocation, pricing, cart state, and experiments are remote-driven and cannot be recovered from the static APK alone.
- The HTML spec is a faithful design reconstruction of the app shell and components, not a runnable clone of Blinkit backend behavior.

## 10. React implementation

A React web implementation has been added at `apps/blinkit-react/`. React was selected for this repository because the requested output is a measurable pixel-perfect visual surface and the current project does not include a native mobile build chain. The implementation keeps the frame fixed at **390 × 844 px**, maps the extracted tokens into CSS custom properties, and recreates the documented Blinkit home shell with componentized React modules for the header, category grid, product rail, product cards, and bottom navigation. It intentionally avoids committed raster assets so pull requests remain reviewable in environments that do not support binary diffs.

Run it with:

```bash
cd apps/blinkit-react
python3 -m http.server 4173 --directory .
```

Then open `http://localhost:4173`.
