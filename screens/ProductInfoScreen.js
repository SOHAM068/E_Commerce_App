import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useRoute } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { useNavigation } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ProductInfoScreen = () => {
  const route = useRoute();
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable style={styles.pressable1}>
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search amazon.in" />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            key={index}
            source={{ uri: item }}
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
          >
            <View style={styles.BGImageBackground}>
              <View style={styles.BGImage}>
                <Text style={styles.BGImageText}>20% off</Text>
              </View>

              <View
                style={[
                  styles.BGImage,
                  { backgroundColor: "#E0E0E0", marginTop: 8 },
                ]}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color="black"
                />
              </View>
            </View>

            <View
              style={[
                styles.BGImage,
                {
                  marginTop: "auto",
                  marginLeft: 20,
                  marginBottom: 20,
                  backgroundColor: "#E0E0E0",
                },
              ]}
            >
              <Feather name="heart" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" , color:'grey'}}>
          {route?.params?.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}> 
          ₹{route?.params?.price}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Color: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.color}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Size: </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
          Total : ₹{route.params.price}
        </Text>
        <Text style={{ color: "#00CED1" }}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  pressable1: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  BGImageBackground: {
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  BGImage: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 30,
    width: 43,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  BGImageText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 13,
  },
});
