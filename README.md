# SBN Daily Rounds PWA

Swipe-based daily walkthrough app for SBN DCEO technicians. Real-time sync across all tablets via Firebase.

## Deploy to GitHub Pages

1. Open a terminal/command prompt
2. Navigate to this folder:
   ```
   cd C:\Users\swicjeff\Documents\Personal\sbn-daily-rounds-pwa
   ```
3. Initialize git and push:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/jeffreyswick8/sbn-daily-rounds.git
   git push -u origin main
   ```
4. Go to https://github.com/jeffreyswick8/sbn-daily-rounds/settings/pages
5. Under "Source", select **Deploy from a branch**
6. Select **main** branch and **/ (root)** folder
7. Click **Save**
8. Wait 1-2 minutes, then visit: https://jeffreyswick8.github.io/sbn-daily-rounds/

## Install on Tablet

**iPad:**
1. Open Safari and go to https://jeffreyswick8.github.io/sbn-daily-rounds/
2. Tap the Share button (box with arrow)
3. Tap "Add to Home Screen"
4. Name it "Rounds" and tap Add

**Android Tablet:**
1. Open Chrome and go to https://jeffreyswick8.github.io/sbn-daily-rounds/
2. Tap the three-dot menu
3. Tap "Add to Home screen" or "Install app"
4. Confirm

## How It Works

- **Swipe right** = OK / Expected
- **Swipe left** = Issue / Unexpected (note + camera expand)
- **ALL OK** button = marks entire section clean in one tap
- ~20 taps for a clean round instead of 200+
- All tablets sync in real-time via Firebase
