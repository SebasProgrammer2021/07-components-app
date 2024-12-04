import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode;
  margin?: boolean;
}

const CustomView = ({ style, children, margin = false }: Props) => {
  return (
    <View style={[
      globalStyles.mainContainer,
      margin ? globalStyles.globalMargin : null,
      style
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({})

export default CustomView;