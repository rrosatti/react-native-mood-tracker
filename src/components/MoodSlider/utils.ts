export const isSad = (sliderValue: number): boolean =>
  sliderValue >= 0 && sliderValue < 33;

export const isNeutral = (sliderValue: number): boolean =>
  sliderValue > 33 && sliderValue < 66;

export const isHappy = (sliderValue: number): boolean =>
  sliderValue > 66 && sliderValue <= 100;
