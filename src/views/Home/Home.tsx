import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/indes";

export default function Home() {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList,'Home'>>();
  const handleAddCalories = () => {
    navigate('AddFodd')
  };
  return (
    <View style={style.container}>
      <Header />
      <View style={style.articleContainer}>
        <View style={style.leftContainer}>
          <Text style={style.text}>Calorias</Text>
        </View>
        <View style={style.rigthContainer}>
          <Button
            icon={<Icon name="add-circle-outline" />}
            style={style.button}
            onPress={handleAddCalories}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 20,
    color: "green",
  },
  articleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    flex: 1,
  },
  text: {},
  rigthContainer: {},
});
