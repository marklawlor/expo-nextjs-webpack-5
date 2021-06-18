import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import styleModule from "../styles.module.css"

export default function IndexPage() {
  return (
    <View>
      <Text style={styles.text}>Hello, World!</Text>
      <ActivityIndicator />
<button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styleModule.error}
    >
      Error
    </button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
