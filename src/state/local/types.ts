// mood
export type MoodConfig = {
  type: 'sad' | 'neutral' | 'happy';
  percentage: number;
  createdOn: Date;
  updatedOn: Date;
};

// storage
export interface StorageConfig {
  moods: MoodConfig[];
}
export type StorageKey = keyof StorageConfig;
