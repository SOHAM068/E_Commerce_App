import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ProductItem = ({ item }) => {
  return (
    <View>
      <Pressable style={{ marginHorizontal: 32, marginVertical: 25 }}>
        <Image
          style={{ width: 150, height: 150, resizeMode: "contain" }}
          source={{ uri: item?.image }}
        />

        <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
          {item?.title}
        </Text>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            ₹{item?.price}
          </Text>
          <Text style={{ color: "#FFC72C", fontWeight: "bold" }}>
            {item?.rating?.rate} ratings
          </Text>
        </View>

        <Pressable style={styles.addToCartContainer}>
          <Text style={{}}>Add to Cart</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  addToCartContainer: {
    marginTop: 10,
    backgroundColor: "#FFC72C",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
