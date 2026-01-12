## Description

React Native application for iOS and Android.

## Requirements

- Node.js >= 16
- npm or yarn
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS)

## Installation

```bash
# Install dependencies
npm install

# For iOS install pods
cd ios && pod install && cd ..
```

## Running

```bash
# iOS
npm run ios

# Android
npm run android

# Metro bundler
npm start
```

## Project Structure

```
/src
	/components  # Components
	/screens     # Screens
	/navigation  # Navigation
	/services    # API and services
	/utils       # Utilities
	/assets      # Images, fonts
```

## Build

```bash
# iOS
npm run build:ios

# Android
npm run build:android
```

## Technologies

- React Native
- React Navigation
- TypeScript
- Axios
