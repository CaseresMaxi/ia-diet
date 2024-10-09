import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { RootStackParamList } from "../NavigationParamList";

type LoginScreenProps = {
  navigation: FrameNavigationProp<RootStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Login
      </label>
      <textField hint="Email" className="mb-4 p-2 w-3/4 border rounded-md" />
      <textField hint="Password" secure={true} className="mb-4 p-2 w-3/4 border rounded-md" />
      <button
        className="mb-4 p-2 w-3/4 bg-blue-500 text-white rounded-md"
        onTap={() => navigation.navigate("Main")}
      >
        Login
      </button>
      <button
        className="mb-4 p-2 w-3/4 bg-red-500 text-white rounded-md"
        onTap={() => console.log("Google Sign In")}
      >
        Sign in with Google
      </button>
      <button
        className="p-2 w-3/4 bg-gray-300 rounded-md"
        onTap={() => navigation.navigate("Register")}
      >
        Register
      </button>
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