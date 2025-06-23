import { useSyncExternalStore } from 'react';
import XGFeatureFlags from './XGFeatureFlags';

export default function useFeatureFlag<T>(key: string, fallback: T): T {
  const subscribe = (callback: () => void) => {
    return XGFeatureFlags.get().subscribe(key, () => {
      callback();
    });
  };
  const getSnapshot = () => XGFeatureFlags.get().getFlag<T>(key, fallback);
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}