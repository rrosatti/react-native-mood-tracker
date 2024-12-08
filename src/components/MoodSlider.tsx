import React, {useMemo} from 'react';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';

import Expressionless from '../../assets/Expressionless.svg';
import Sad from '../../assets/Sad.svg';
import Smile from '../../assets/Smile.svg';
import {useState} from 'react';
import {SvgProps} from 'react-native-svg';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  emojiInfo: {
    alignItems: 'center',
  },
  emojiInfoText: {
    fontSize: 18,
    marginTop: 4,
  },
  slider: {
    width: '100%',
  },
});

const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 100;
const SLIDER_MIN_TRACK_COLOR = '#294c60';
const SLIDER_MAX_TRACK_COLOR = '#adb6c4';

type EmojiInfoProps = {
  opacity: number;
  SvgImage: React.FC<SvgProps>;
  text: string;
};
const EmojiInfo = ({opacity, SvgImage, text}: EmojiInfoProps) => {
  const textStyles = useMemo(
    () => [styles.emojiInfoText, {opacity}],
    [opacity],
  );
  return (
    <View style={styles.emojiInfo}>
      <SvgImage height={50} width={50} opacity={opacity} />
      <Text style={textStyles}>{text}</Text>
    </View>
  );
};

const MoodSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <View style={styles.wrapper}>
        <EmojiInfo
          SvgImage={Sad}
          text="Sad"
          opacity={sliderValue >= 0 && sliderValue < 33 ? 1 : 0.2}
        />
        <EmojiInfo
          SvgImage={Expressionless}
          text="Neutral"
          opacity={sliderValue > 33 && sliderValue < 66 ? 1 : 0.2}
        />
        <EmojiInfo
          SvgImage={Smile}
          text="Happy"
          opacity={sliderValue > 66 && sliderValue <= 100 ? 1 : 0.3}
        />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={SLIDER_MIN_VALUE}
        maximumValue={SLIDER_MAX_VALUE}
        maximumTrackTintColor={SLIDER_MAX_TRACK_COLOR}
        minimumTrackTintColor={SLIDER_MIN_TRACK_COLOR}
        onValueChange={setSliderValue}
      />
    </>
  );
};

export default MoodSlider;
