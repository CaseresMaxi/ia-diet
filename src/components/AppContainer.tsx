import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";
import { MainTabs } from "./MainTabs";
import { RootStackParamList } from "../NavigationParamList";

const StackNavigator = stackNavigatorFactory();

export const AppContainer = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
      />
      <StackNavigator.Screen
        name="Register"
        component={RegisterScreen}
      />
      <StackNavigator.Screen
        name="Main"
        component={MainTabs}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);