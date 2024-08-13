import { Image, StyleSheet, Platform, View, Text } from "react-native";
import StackNavigator from "../navigation/StackNavigator";
import { Provider } from "react-redux";
import store from "../store";
import Modal, { ModalPortal } from 'react-native-modals';
import { UserContext } from "../UserContext";

export default function HomeScreen() {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigator />
          <ModalPortal />
        </UserContext>
      </Provider>
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