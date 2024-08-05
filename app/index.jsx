import { Image, StyleSheet, Platform, View, Text } from "react-native";
import StackNavigator from "../navigation/StackNavigator";

export default function HomeScreen() {
  return (
    <>
      <StackNavigator />
    </>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});