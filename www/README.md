# QuickBill — BRIGHT WAYS

Mobile-first offline-friendly billing app for Android browsers.

## Latest workflow
- Enter an optional customer name (defaults to `Walk-in Customer`).
- Add item amounts using the on-screen keypad.
- Tap **Generate Bill**: the bill is saved to local history and the browser's print preview opens directly. The separate in-app bill preview step is skipped.
- The receipt can still be printed through the Android print dialog / configured print service. The print preview uses the existing 58mm receipt layout.
- Bills can be reviewed later from History; opening a historical bill still shows its preview and Share / 50mm Print-PDF actions.

## Shop details
- Shop: BRIGHT WAYS
- Address: SATWARI JAMMU
- UPI ID: `paytm.s2daltl@pty`

## Run
Host the folder on HTTPS (for example, Netlify) and open the hosted URL in Chrome. Do not launch `index.html` directly from the Files app: `file://` does not support the service worker/PWA behavior reliably.

Bills and settings are stored locally in the browser profile. Export backups regularly before clearing browser data or changing the hosting origin.
