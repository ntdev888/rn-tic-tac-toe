import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from "react-native";
import Gamebox from "./Gamebox";

const screenWidth = Dimensions.get("window").width;

const backgroundImg = require("./img/background.jpg");

export default function App() {
  function buttonPress() {
    Alert.alert("Hello Tauroa Family");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./img/background.jpg")}
        style={styles.backgroundImage}
        resizeMode="center"
      >
        <View style={styles.appBox}>
          <Text style={styles.textBox}>Lets Build Tic Tac Toe!</Text>
          <Gamebox />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    width: screenWidth,
    height: "auto",
    flex: 1,
  },

  textBox: {
    padding: 12,
    backgroundColor: "#FFFFFF",
  },

  appBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
