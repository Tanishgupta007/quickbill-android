# QuickBill Android — BRIGHT WAYS

This is a Capacitor Android wrapper around the current QuickBill app.

## Included app behaviour
- BRIGHT WAYS shop details and 58mm receipt styling
- UPI ID `paytm.s2daltl@pty` and amount-specific UPI QR
- Calculator keypad; amount display does not invoke the soft keyboard
- Optional customer name (defaults to Walk-in Customer)
- Generate Bill saves the bill before opening the Android print dialog
- Day-wise history with daily bill count and sales total
- History search, receipt reopening, export/import backup
- RawBT Bluetooth print bridge already present in the web app

## Important storage note
Inside the installed Android app, the WebView has its own persistent app storage, so the existing localStorage-backed history remains on the device between normal app launches. It is not a cloud database and will be erased if the app data is cleared or the app is uninstalled. Use Export bill history backup regularly. Existing history from a `file://` browser copy does not automatically migrate into the APK; export it from the old app and import it after installation if it can still be opened.

## Build APK in GitHub Actions
1. Create a GitHub repository and upload the *contents* of this folder (including `.github`).
2. Open the repository's **Actions** tab.
3. Select **Build QuickBill Android APK** and tap **Run workflow** (or push to `main`).
4. Wait for the workflow to finish successfully.
5. Open that workflow run, scroll to **Artifacts**, and download `QuickBill-Android-APK`.
6. Extract the downloaded artifact ZIP; install `app-debug.apk` on Android. Allow Chrome/Files to install unknown apps if Android asks.

The workflow creates the native Android wrapper in the cloud and builds a debug APK. No Android Studio is needed on the phone.

## Printing
Install RawBT, pair the Shreyans SRS583, select the printer and ESC/POS general driver in RawBT. QuickBill launches the Android print intent. Exact printer output must be physically tested; keep the regular Android print/PDF option as fallback.

## App updates
For future web app changes, replace files under `www/` and rebuild the APK with the workflow. Installing a new APK over the old one with the same application ID normally preserves app data; uninstalling first will remove local history.
