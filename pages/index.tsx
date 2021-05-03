import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { H1 } from "@expo/html-elements"

export default function IndexPage() {
  return (
    <View>
      <Text style={styles.text}>Hello, World!</Text>
      <H1>Test</H1>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red"
  }
})
