import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Activity = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});


export const capitalizeFirstLetter = (string) => {
    return (string[0].toUpperCase() + string.slice(1))
}

