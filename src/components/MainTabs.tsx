import * as React from "react";
import { tabNavigatorFactory } from "react-nativescript-navigation";
import { DietScreen } from "./DietScreen";
import { FoodListScreen } from "./FoodListScreen";
import { MainTabParamList } from "../NavigationParamList";

const TabNavigator = tabNavigatorFactory();

export function MainTabs() {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name="Diet"
        component={DietScreen}
      />
      <TabNavigator.Screen
        name="FoodList"
        component={FoodListScreen}
      />
    </TabNavigator.Navigator>
  );
}