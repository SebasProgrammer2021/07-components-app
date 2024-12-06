import React from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]}>
      </Animated.View>
      <Pressable onPress={() => {
        fadeIn({});
        startMovingTopPosition({
          initialPosiiton: -200,
          easing: Easing.elastic(1),
          duration: 750
        })
      }}
        style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text>fadeOut</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150
  }
})

export default Animation101Screen;
