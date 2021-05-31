import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { View, Button } from "react-native";

export default function IndexPage() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <>
      <Animated.View
        style={[
          { width: 20, height: 20, backgroundColor: "blue" },
          animatedStyles,
        ]}
      />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}
