import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { Button, ButtonGroup, Icon } from "react-native-elements";

const Home = () => {
  return (
    <View style={style.container}>
      <Header />
      <View style={style.articleContainer}>
        <View style={style.leftContainer}>
          <Text style={style.text}>Calorias</Text>
        </View>
        <View style={style.rigthContainer}>
          <Button icon={<Icon name="add-cicle-outline"/>}/>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  articleContainer: {},
  leftContainer: {},
  rigthContainer: {},
});

export default Home;
