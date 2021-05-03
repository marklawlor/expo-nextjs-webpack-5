import { useSharedValue } from "react-native-reanimated";

import { View, Button } from "react-native";

export default function IndexPage() {
  const sharedVal = useSharedValue(0);
  return (
    <View>
      <Button
        onPress={() => (sharedVal.value = Math.random())}
        title="Button"
      />
    </View>
  );
}
