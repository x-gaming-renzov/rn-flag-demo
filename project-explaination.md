# Project Explanation

This document provides an overview of the `rn-flag-demo` project, including its purpose, structure, and instructions for getting started.

## Overview

`rn-flag-demo` is a simple Expo-based React Native example application. It demonstrates a basic layout, screens, and a simulated network call, with the intention of later illustrating how to wrap such calls behind feature flags.

## Getting Started

To get up and running with this project:

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

3. Run on a simulator or device:

   ```bash
   npm run ios    # iOS simulator
   npm run android # Android emulator
   ```

## Project Structure

```
. 
├── App.tsx               # Root component with navigation setup
├── index.ts              # Expo entry point
├── app.json              # Expo configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and scripts
├── assets/               # Image and icon assets
├── components/           # Reusable UI components
├── screens/              # Screen components (pages/views)
└── services/             # API services and data-fetching
```

### Key Directories and Files

- **App.tsx & index.ts**  
  Entry point of the application. Sets up React Navigation and registers the root component.

- **screens/Home.tsx**  
  Displays a headline and hero image. Fetches a welcome message from `services/api.ts` on mount.

- **components/Headline.tsx**  
  Renders a text headline with consistent styling.

- **components/Hero.tsx**  
  Displays an image (e.g., hero/banner) with styling.

- **services/api.ts**  
  Simulates a network request using Axios and a delay. Returns a welcome message and includes a comment hinting at wrapping this call behind a feature flag in future demonstrations.

## Dependencies

Key dependencies used in this project:

- **expo**: Expo SDK for building and running the app.  
- **react-native**: Core React Native library.  
- **@react-navigation/native-stack**: Stack-based navigation.  
- **axios**: HTTP client for API calls.  

## TypeScript

The project is configured to use TypeScript with strict mode enabled via `tsconfig.json`, extending `expo/tsconfig.base`.

## Next Steps

This demo is set up to be extended with feature-flag logic around the API call in `services/api.ts`. The hard-coded fallback copy and comment in that file show where flags can be introduced to toggle behavior.

---

_This file was auto-generated in a pull request to document the project structure and usage._  