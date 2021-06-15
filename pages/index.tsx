import React from "react";
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";

export default function IndexPage() {
  return (
    <View>
      <Text style={styles.text}>Hello, World!</Text>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
