# XG Nova SDK Demo App

A React Native demo application showcasing the **XG Nova SDK** - a lightweight feature flag SDK with real-time Server-Sent Events (SSE) support for X-Gaming's feature flag service.

## ✨ What This Demo Shows

This Expo React Native app demonstrates:

- 🚀 **Real-time feature flag updates** via Server-Sent Events
- ⚛️ **React Native & Expo integration** with the XG Nova SDK
- 🪝 **React hooks** for easy feature flag access
- 🎯 **Type-safe TypeScript** implementation
- 🔄 **Auto-fallback** when feature flags are unavailable
- 📱 **Cross-platform** support (iOS, Android, Web)

## 🎮 Features Demonstrated

### 1. Dynamic Text Content
- **Flag:** `expo-headline`
- **Component:** `Headline.tsx`
- **Fallback:** "Make Your Game Legendary."
- **Demo:** Text changes in real-time when flag is updated

### 2. Dynamic Image Content
- **Flag:** `hero-image-b64`
- **Component:** `HeroImage.tsx`
- **Fallback:** Base64 encoded default image
- **Demo:** Image swaps instantly when flag is updated

### 3. User Targeting
- **Campaign targeting:** `diablo-2`
- **UTM source tracking:** `google`
- **Anonymous user support:** `false`

## 📋 Prerequisites

Before running this demo, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** installed globally
- **iOS Simulator** (for iOS testing) or **Android Emulator** (for Android testing)
- **Expo Go app** (for physical device testing)

## 🚀 Quick Start

### 1. Clone and Navigate to Project

```bash
git clone <repository-url>
cd xg-flag-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

This will start the Expo development server and show a QR code.

### 4. Run on Different Platforms

Choose your preferred platform:

```bash
# iOS Simulator
npm run ios

# Android Emulator  
npm run android

# Web Browser
npm run web

# Physical Device (scan QR code with Expo Go app)
npm start
```

### 5. See Feature Flags in Action

Once the app is running, you'll see:
- A headline text (controlled by `expo-headline` flag)
- A hero image (controlled by `hero-image-b64` flag)
- Status text confirming the UI is mounted

**Try changing the feature flags in your XG Nova dashboard to see real-time updates!**

## 🏗️ Implementation Details

### SDK Initialization

```typescript
// App.tsx - Initialize the SDK with environment ID
XGFeatureFlags.init('6854a5aab37a36094d18a5da');
```

### User Registration

```typescript
// App.tsx - Register user with targeting attributes
XGFeatureFlags.get().register({
  key: uuid(),            // unique user identifier
  anonymous: false,       // identified user
  campaign: 'diablo-2',   // campaign targeting
  utm_source: 'google',   // traffic source
}).catch(err => console.error('register failed', err));
```

### Using Feature Flags in Components

#### Text Content Example
```typescript
// src/components/Headline.tsx
const heading = useFeatureFlag<string>(
  'expo-headline',
  'Make Your Game Legendary.'
);
```

#### Image Content Example  
```typescript
// src/components/HeroImage.tsx
const b64 = useFeatureFlag<string>(
  'hero-image-b64',
  'iVBORw0KGgoAAAANSUhEUgAABVY...'   // fallback base64 image
);
```

## 📁 Project Structure

```
xg-flag-demo/
├── App.tsx                    # Main app component & SDK initialization
├── src/
│   └── components/
│       ├── Headline.tsx       # Dynamic text with feature flags
│       └── HeroImage.tsx      # Dynamic image with feature flags
├── assets/                    # App icons and images
├── package.json              # Dependencies and scripts
├── app.json                  # Expo configuration
├── eas.json                  # EAS Build configuration
└── index.ts                  # Entry point
```

## 🔧 Key Dependencies

```json
{
  "xg-nova-sdk": "^0.1.2",           // XG Nova SDK
  "react-native-sse": "^1.2.1",     // Server-Sent Events
  "react-native-get-random-values": "~1.11.0", // Crypto polyfill
  "uuid": "^11.1.0",                // UUID generation
  "expo": "~53.0.12",               // Expo framework
  "react": "19.0.0",                // React
  "react-native": "0.79.4"          // React Native
}
```

## 🎯 Environment Configuration

The demo uses the following environment:
- **Environment ID:** `6854a5aab37a36094d18a5da`

To use your own environment:
1. Replace the environment ID in `App.tsx`
2. Create corresponding feature flags in your XG Nova dashboard:
   - `expo-headline` (string type)
   - `hero-image-b64` (string type for base64 image)

## 🧪 Testing Different Scenarios

### 1. Change Feature Flag Values
- Update `expo-headline` in your XG Nova dashboard
- Watch the headline text change in real-time
- No app restart required!

### 2. Test Image Swapping
- Update `hero-image-b64` with a different base64 encoded image
- See the image swap instantly in the app

### 3. Test Targeting
- Modify user attributes in the registration
- Create targeting rules in your dashboard
- Test how different users see different content

## 🐛 Troubleshooting

### Common Issues

**❌ "Call XGFeatureFlags.init(envId) first" Error**
- Ensure `XGFeatureFlags.init()` is called before any component renders
- Check that the environment ID is correct

**❌ Feature flags not updating**
- Verify network connectivity
- Check console logs for SSE connection status
- Ensure the environment ID exists in your XG Nova dashboard

**❌ Metro bundler issues**
- Clear cache: `npx expo start --clear`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

**❌ iOS/Android build issues**
- Ensure you have the latest Expo CLI: `npm install -g @expo/cli`
- Check that your development environment is properly set up

**❌ UUID/crypto issues**
- Ensure `react-native-get-random-values` is imported before uuid
- This is already configured correctly in `App.tsx`

### Debug Mode

The app includes extensive logging. Check your console/terminal for:
- `[APP]` - App lifecycle events
- Feature flag updates and changes
- SSE connection status and events

## 🎮 Next Steps

1. **Create your own environment** in the XG Nova dashboard
2. **Replace the environment ID** in `App.tsx` with your own
3. **Add new feature flags** and components to test different scenarios
4. **Implement user authentication** for more advanced targeting
5. **Add analytics tracking** using the `track()` method

## 📖 XG Nova SDK Documentation

For full SDK documentation, API reference, and advanced usage examples, see the [XG Nova SDK Documentation](https://github.com/x-gaming-renzov/xg-nova-sdk).

## 🤝 Support

For issues and questions:
- 📧 Email: paras@xgaming.club
- 🐛 Issues: [GitHub Issues](https://github.com/x-gaming-renzov/xg-nova-sdk/issues)

---

**Happy Feature Flagging! 🚀** 