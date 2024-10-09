import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DietScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Screen</Text>
      <Text style={styles.text}>Calories: 2000 / 2500</Text>
      <Text style={styles.text}>Protein: 100g / 150g</Text>
      <Text style={styles.text}>Carbs: 250g / 300g</Text>
      <Text style={styles.text}>Fat: 65g / 80g</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});