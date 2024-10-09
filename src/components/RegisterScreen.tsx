import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { RootStackParamList } from "../NavigationParamList";

type RegisterScreenProps = {
  navigation: FrameNavigationProp<RootStackParamList, "Register">,
};

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Register
      </label>
      <textField hint="Email" className="mb-4 p-2 w-3/4 border rounded-md" />
      <textField hint="Password" secure={true} className="mb-4 p-2 w-3/4 border rounded-md" />
      <textField hint="Confirm Password" secure={true} className="mb-4 p-2 w-3/4 border rounded-md" />
      <button
        className="mb-4 p-2 w-3/4 bg-blue-500 text-white rounded-md"
        onTap={() => navigation.navigate("Main")}
      >
        Register
      </button>
      <button
        className="p-2 w-3/4 bg-gray-300 rounded-md"
        onTap={() => navigation.goBack()}
      >
        Back to Login
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