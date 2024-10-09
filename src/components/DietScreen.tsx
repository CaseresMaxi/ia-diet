import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function DietScreen() {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Diet Screen
      </label>
      <label className="text-lg mb-2">
        Calories: 2000 / 2500
      </label>
      <label className="text-lg mb-2">
        Protein: 100g / 150g
      </label>
      <label className="text-lg mb-2">
        Carbs: 250g / 300g
      </label>
      <label className="text-lg mb-2">
        Fat: 65g / 80g
      </label>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});