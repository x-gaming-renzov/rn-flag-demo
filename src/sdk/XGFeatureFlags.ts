import { EventSource } from 'react-native-sse';

type FlagValue = string | boolean | number;
type Flags = Record<string, FlagValue>;

interface UserAttributes {
  key: string;
  anonymous: boolean;
  campaign?: string;
  platform?: string;
  [attr: string]: any;
}

class XGFeatureFlags {
  private static instance: XGFeatureFlags | null = null;
  private envId: string;
  private flags: Flags = {};
  private subscribers: Record<string, Set<(value: FlagValue) => void>> = {};
  private eventSource?: EventSource;
  private registered = false;

  private constructor(envId: string) {
    this.envId = envId;
    this.connect();
  }

  static init(envId: string): void {
    if (XGFeatureFlags.instance) {
      console.warn('XGFeatureFlags has already been initialized.');
      return;
    }
    XGFeatureFlags.instance = new XGFeatureFlags(envId);
  }

  static get(): XGFeatureFlags {
    if (!XGFeatureFlags.instance) {
      throw new Error('XGFeatureFlags.init() must be called before using feature flags.');
    }
    return XGFeatureFlags.instance;
  }

  register(attrs: UserAttributes): void {
    if (!this.eventSource) {
      throw new Error('XGFeatureFlags.init() must be called before register().');
    }
    if (this.registered) {
      return;
    }
    this.registered = true;
    fetch(`https://flags.xgaming-inc.com/${this.envId}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attrs),
    })
      .then(res => res.json())
      .then(data => {
        if (data.flags) {
          this.updateFlags(data.flags);
        }
      })
      .catch(err => {
        console.error('Failed to register for feature flags:', err);
      });
  }

  getFlag<T>(key: string, fallback: T): T {
    if (!this.eventSource) {
      throw new Error('XGFeatureFlags.init() must be called before getFlag().');
    }
    const value = this.flags[key];
    if (value === undefined) {
      return fallback;
    }
    return (value as unknown) as T;
  }

  subscribe(key: string, callback: (value: FlagValue) => void): () => void {
    if (!this.eventSource) {
      throw new Error('XGFeatureFlags.init() must be called before subscribe().');
    }
    if (!this.subscribers[key]) {
      this.subscribers[key] = new Set();
    }
    this.subscribers[key].add(callback);
    // call immediately with current value if present
    if (this.flags[key] !== undefined) {
      callback(this.flags[key]);
    }
    return () => {
      this.subscribers[key].delete(callback);
    };
  }

  private connect(): void {
    this.eventSource = new EventSource(`https://flags.xgaming-inc.com/${this.envId}/stream`);
    this.eventSource.addEventListener('message', event => {
      try {
        const data = JSON.parse(event.data);
        if (data.flags) {
          this.updateFlags(data.flags);
        }
      } catch (err) {
        console.error('Failed to parse feature flag event:', err);
      }
    });
  }

  private updateFlags(newFlags: Flags): void {
    this.flags = newFlags;
    for (const key of Object.keys(this.subscribers)) {
      if (key in this.flags) {
        const value = this.flags[key];
        this.subscribers[key].forEach(cb => cb(value));
      }
    }
  }
}

export default XGFeatureFlags;