import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function FoodListScreen() {
  const [foods, setFoods] = useState([
    { id: '1', name: 'Apple', calories: 95 },
    { id: '2', name: 'Banana', calories: 105 },
    { id: '3', name: 'Chicken Breast', calories: 165 },
  ]);

  const addFood = () => {
    setFoods([...foods, { id: Date.now().toString(), name: 'New Food', calories: 100 }]);
  };

  const removeFood = (id) => {
    setFoods(foods.filter(food => food.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food List</Text>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Text>{item.name} - {item.calories} cal</Text>
            <Button title="Remove" onPress={() => removeFood(item.id)} />
          </View>
        )}
      />
      <Button title="Add Food" onPress={addFood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});