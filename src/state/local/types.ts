// mood
export type MoodConfig = {
  type: 'sad' | 'neutral' | 'happy';
  percentage: number;
  createdOn: Date;
  updatedOn: Date;
};

// language

export type Language = 'pt' | 'en';

// storage
export interface StorageConfig {
  language: Language;
  moods: MoodConfig[];
}
export type StorageKey = keyof StorageConfig;
