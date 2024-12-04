import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';

const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 4000);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[colors.primary, "red", "orange", "green"]}
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={top}
        />
      }
      style={[
        globalStyles.globalMargin, globalStyles.mainContainer
      ]}
    >
      <Title text='Pull to refresh' safe />
    </ScrollView>
  );
}

const styles = StyleSheet.create({})

export default PullToRefreshScreen;
