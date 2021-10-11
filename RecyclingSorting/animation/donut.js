import * as React from 'react';
import {View, Animated, TouchableOpacity, Platform} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function Donut() {
  const percentage = 100;
  const radius = Platform.OS === 'ios' ? 35 : 28;
  const strokeWidth = Platform.OS === 'ios' ? 10 : 8;
  const duration = 5000;
  const color = 'rgba(37, 116, 255, 1)';
  const max = 1000;
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const haftCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const circleRef = React.useRef();

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay: 100,
      useNativeDriver: true,
    }).start();
  };

  function _loadingProgress() {
    animation(percentage);
    animatedValue.addListener(
      v => {
        const maxPerc = (100 * v.value) / 100;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        if (circleRef.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max, percentage],
    );
    return () => {
      animatedValue.removeAllListeners();
    };
  }
  return (
    <View>
      <Svg
        width={radius * 2.8}
        height={radius * 2.8}
        viewBox={Platform.OS === 'ios' ? '0 0 100 100 ' : '0 0 80 80'}>
        <G rotation="-90" origin={haftCircle} {...haftCircle}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={_loadingProgress} />
    </View>
  );
}
