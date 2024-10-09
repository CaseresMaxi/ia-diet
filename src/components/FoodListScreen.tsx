import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function FoodListScreen() {
  const [foods, setFoods] = React.useState([
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Chicken Breast", calories: 165 },
  ]);

  const addFood = () => {
    setFoods([...foods, { name: "New Food", calories: 100 }]);
  };

  const removeFood = (index: number) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Food List
      </label>
      <scrollView height="70%">
        {foods.map((food, index) => (
          <gridLayout key={index} columns="*, auto" className="mb-2 p-2 border-b">
            <label col="0" className="text-lg">{food.name} - {food.calories} cal</label>
            <button col="1" className="bg-red-500 text-white p-1 rounded" onTap={() => removeFood(index)}>Remove</button>
          </gridLayout>
        ))}
      </scrollView>
      <button className="mt-4 p-2 w-3/4 bg-green-500 text-white rounded-md" onTap={addFood}>
        Add Food
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
});