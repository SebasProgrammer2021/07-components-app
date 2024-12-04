import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

const Title = ({ text, safe = false, white = false }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? "white" : colors.text
      }}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({})

export default Title;
