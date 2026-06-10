# Public assets

This React implementation intentionally does not commit extracted raster APK assets (`.png`, `.webp`, etc.). The UI is rebuilt with CSS, text, emoji placeholders, and tokenized geometry so the pull-request diff remains fully reviewable in environments that do not support binary file previews.

If production-grade raster fidelity is required, copy assets locally from `Blinkit_v17.99.1(280170991).apks` into this folder after checkout; do not commit those generated binaries back to the repository.
