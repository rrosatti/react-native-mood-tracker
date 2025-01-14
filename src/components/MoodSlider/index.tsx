import React, {useEffect, useMemo} from 'react';
import Slider from '@react-native-community/slider';
import {Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

import Expressionless from '../../../assets/Expressionless.svg';
import Sad from '../../../assets/Sad.svg';
import Smile from '../../../assets/Smile.svg';
import {useState} from 'react';
import {SvgProps} from 'react-native-svg';
import {MoodConfig} from '../../state/local/types';
import {isHappy, isNeutral, isSad} from './utils';
import {useGetMoodLocale} from '../../utils/mood';

const styles = StyleSheet.create(theme => ({
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
  minTrackColor: {
    color: theme.colors.progressBar.minTrack,
  },
  maxTrackColor: {
    color: theme.colors.progressBar.maxTrack,
  },
}));

const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 100;

type EmojiInfoProps = {
  active: boolean;
  SvgImage: React.FC<SvgProps>;
  text: string;
  onPress: () => void;
};
const EmojiInfo = ({active, SvgImage, text, onPress}: EmojiInfoProps) => (
  <TouchableOpacity style={styles.emojiInfo} onPress={onPress}>
    <SvgImage height={50} width={50} opacity={active ? 1 : 0.2} />
    <Text style={[styles.emojiInfoText, {opacity: active ? 1 : 0.2}]}>
      {text}
    </Text>
  </TouchableOpacity>
);

type Props = {
  // eslint-disable-next-line no-unused-vars
  onSelectedMood: (mood: MoodConfig) => void;
};

const MoodSlider = ({onSelectedMood}: Props) => {
  const [sliderValue, setSliderValue] = useState(0);

  const getMoodLocale = useGetMoodLocale();

  const selectedMood = useMemo(() => {
    if (isSad(sliderValue)) return 'sad';
    if (isNeutral(sliderValue)) return 'neutral';
    if (isHappy(sliderValue)) return 'happy';
    return null;
  }, [sliderValue]);

  useEffect(() => {
    if (selectedMood) {
      onSelectedMood({
        type: selectedMood,
        percentage: Math.round(sliderValue),
        createdOn: new Date(),
        updatedOn: new Date(),
      });
    }
  }, [selectedMood, sliderValue, onSelectedMood]);

  return (
    <>
      <View style={styles.wrapper}>
        <EmojiInfo
          SvgImage={Sad}
          text={getMoodLocale('sad')}
          active={selectedMood === 'sad'}
          onPress={() => setSliderValue(0)}
        />
        <EmojiInfo
          SvgImage={Expressionless}
          text={getMoodLocale('neutral')}
          active={selectedMood === 'neutral'}
          onPress={() => setSliderValue(50)}
        />
        <EmojiInfo
          SvgImage={Smile}
          text={getMoodLocale('happy')}
          active={selectedMood === 'happy'}
          onPress={() => setSliderValue(100)}
        />
      </View>
      <Slider
        style={styles.slider}
        value={sliderValue}
        minimumValue={SLIDER_MIN_VALUE}
        maximumValue={SLIDER_MAX_VALUE}
        maximumTrackTintColor={styles.maxTrackColor.color}
        minimumTrackTintColor={styles.minTrackColor.color}
        onValueChange={setSliderValue}
      />
    </>
  );
};

export default MoodSlider;
