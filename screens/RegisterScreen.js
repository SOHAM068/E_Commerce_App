import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "expo-router";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    //send a post request to the backend API
    axios
      .post("http://localhost:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Restration Successfull",
          "You have registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        Alert.alert("Registration Error", "An error occured while registering");
        console.log("Registration Failed", err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
          style={{ width: 150, height: 100 }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headingText}>Register To Your Account</Text>
        </View>

        <View style={{ marginTop: 60 }}>
          <View style={styles.InputFieldBox}>
            <Ionicons
              name="person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter your name"
              style={styles.TextInput}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.InputFieldBox}>
            <MaterialCommunityIcons
              name="email-plus"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email"
              style={styles.TextInput}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.InputFieldBox}>
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your password"
              style={styles.TextInput}
            />
          </View>
        </View>

        <View style={styles.lastContainer}>
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password?
          </Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable onPress={handleRegister} style={styles.Pressable}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fonstSize: 16,
              textAlign: "center",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ color: "gray", fonstSize: 16, textAlign: "center" }}>
            Already have an account?{" "}
            <Text style={{ color: "#007FFF" }}>Sign In</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },
  InputFieldBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
    marginTop: 30,
    backgroundColor: "#D0D0D0",
    borderRadius: 5,
  },
  TextInput: {
    width: 330,
    marginVertical: 10,
    fontSize: 16,
  },
  lastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  Pressable: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
});
