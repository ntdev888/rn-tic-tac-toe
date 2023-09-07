import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handlePress() {
    setValue("x");
  }

  return (
    <Pressable onPress={handlePress}>
      <Text style={gamestyles.square}>{value}</Text>
    </Pressable>
  );
}

function Gamebox() {
  return (
    <View style={gamestyles.gamebox}>
      <View style={gamestyles.row}>
        <Square id={1} />
        <Square id={2} />
        <Square id={3} />
      </View>
      <View style={gamestyles.row}>
        <Square id={4} />
        <Square id={5} />
        <Square id={6} />
      </View>
      <View style={gamestyles.row}>
        <Square id={7} />
        <Square id={8} />
        <Square id={9} />
      </View>
    </View>
  );
}

const gamestyles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },

  gamebox: {
    margin: 12,
    padding: 5,
    backgroundColor: "white",
  },

  square: {
    height: 74,
    width: 74,
    margin: 2,
    fontSize: 50,
    padding: 12,
    backgroundColor: "lightblue",
  },
});

export default Gamebox;
