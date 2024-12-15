/* eslint-disable no-unused-vars */
import {create} from 'zustand';

import {MMKV} from 'react-native-mmkv';
import {StorageConfig, StorageKey} from '../types';
import {defaultValues} from '../defaultValues';

const secureKeys: StorageKey[] = [];
const isSecureKey = (key: StorageKey): boolean => secureKeys.includes(key);

const storage = new MMKV();
const secureStorage = new MMKV({
  id: 'secureStorage',
  encryptionKey: 'MMKV-MOOD-TRACKER',
});

const getTargetStorage = (key: StorageKey) =>
  isSecureKey(key) ? secureStorage : storage;

type StorageState = {
  storage: StorageConfig;
  setItem: <K extends StorageKey>(
    key: K,
    value: StorageConfig[K],
  ) => Promise<void>;
  getItem: <K extends StorageKey>(key: K) => Promise<StorageConfig[K]>;
  removeItem: <K extends StorageKey>(key: K) => Promise<void>;
  clear: () => void;
};

const initializeStorage = (): StorageConfig => {
  const initialStorage: Partial<StorageConfig> = {};

  Object.keys(defaultValues).forEach(key => {
    const targetStorage = getTargetStorage(key as StorageKey);
    const value = targetStorage.getString(key);
    initialStorage[key as StorageKey] = value
      ? JSON.parse(value)
      : defaultValues[key as StorageKey];
  });

  return initialStorage as StorageConfig;
};

const useStorage = create<StorageState>()(set => ({
  storage: initializeStorage(),
  setItem: async <K extends StorageKey>(key: K, value: StorageConfig[K]) => {
    try {
      const targetStorage = getTargetStorage(key);
      targetStorage.set(key, JSON.stringify(value));
      set(state => ({
        storage: {...state.storage, [key]: value},
      }));
    } catch (e) {
      console.warn(`Failed to set item with key "${key}":`, JSON.stringify(e));
    }
  },
  getItem: async <K extends StorageKey>(key: K) => {
    try {
      const targetStorage = getTargetStorage(key);
      const value = targetStorage.getString(key);
      return value ? JSON.parse(value) : defaultValues[key];
    } catch (e) {
      console.warn(`Failed to get item with key "${key}":`, JSON.stringify(e));
      return defaultValues[key];
    }
  },
  removeItem: async <K extends StorageKey>(key: K) => {
    try {
      const targetStorage = getTargetStorage(key);
      targetStorage.delete(key);
      set(state => ({
        storage: {...state.storage, [key]: defaultValues[key] ?? undefined},
      }));
    } catch (e) {
      console.warn(
        `Failed to remove item with key "${key}":`,
        JSON.stringify(e),
      );
    }
  },
  clear: async () => {
    try {
      Object.keys(defaultValues).forEach(key => {
        const targetStorage = getTargetStorage(key as StorageKey);
        targetStorage.delete(key);
      });
      set({storage: defaultValues});
    } catch (e) {
      console.warn('Failed to clear storage:', JSON.stringify(e));
    }
  },
}));

export default useStorage;
