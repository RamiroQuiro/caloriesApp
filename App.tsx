import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/views/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Routes/>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
