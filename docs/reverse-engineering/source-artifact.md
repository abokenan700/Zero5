# Source APK artifact policy

`Blinkit_v17.99.1(280170991).apks` was used as the reverse-engineering source artifact, but it is intentionally not committed in the current reviewable tree because it is a binary archive and the review UI reports binary files as unsupported.

To reproduce extraction locally:

1. Place `Blinkit_v17.99.1(280170991).apks` in the repository root.
2. Run `unzip -l 'Blinkit_v17.99.1(280170991).apks'` to inspect bundle contents.
3. Extract locally into an ignored scratch directory such as `reverse_engineered/`.
4. Do not commit generated `.apk`, `.apks`, `.png`, `.webp`, `.jpg`, `.lottie`, or other binary outputs unless explicitly requested.
