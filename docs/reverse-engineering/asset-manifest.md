# Extracted asset manifest

The APK contains useful raster assets, but they are intentionally **not committed** here because the review environment reports binary files as unsupported. Keep the repository diff text-only and regenerate/copy binaries locally when needed.

| Asset | Origin | Design use |
| --- | --- | --- |
| `icon.png` | `.apks/icon.png` | Launcher/app identity. |
| `app_logo.webp` | `base.apk/res/drawable/app_logo.webp` | Compact app logo. |
| `crystal_home.webp` | `base.apk/res/drawable/crystal_home.webp` | Home/brand illustration. |
| `location_icon.webp` | `base.apk/res/drawable/location_icon.webp` | Location/search onboarding. |
| `location_home_pin.webp` | `base.apk/res/drawable/location_home_pin.webp` | Saved address home marker. |
| `location_work_pin.webp` | `base.apk/res/drawable/location_work_pin.webp` | Saved address work marker. |
| `location_other_pin.webp` | `base.apk/res/drawable/location_other_pin.webp` | Saved address other marker. |
| `no_internet.webp` | `split_config.xxhdpi.apk/res/drawable-xxhdpi-v4/no_internet.webp` | Network empty state. |
| `no_location.webp` | `split_config.xxhdpi.apk/res/drawable-xxhdpi-v4/no_location.webp` | Location empty state. |
| `server_error.webp` | `split_config.xxhdpi.apk/res/drawable-xxhdpi-v4/server_error.webp` | Server error state. |

## Local regeneration note

Use `unzip` against a locally provided APKS artifact to inspect or copy these files locally. Generated raster files should stay untracked unless a reviewer explicitly asks for binary assets.
