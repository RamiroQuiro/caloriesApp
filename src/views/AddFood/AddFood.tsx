import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { Button, Icon } from "react-native-elements";

const AddFood = () => {
  return (
    <View style={style.addFoodContenedor}>
      <Header />
      <View style={style.container}>
        <View style={style.topContainer}>
            <Text style={style.title}>AddFood</Text>
    
            <Button
              icon={
                <Icon
                  backgroundColor={"green"}
                  borderRadius={50}
                  name="cloud"
                  color={"white"}
                />
              }
              type="clear"
            />
        </View>
        <View style={style.bottomContianer}>
          <View style={style.text}></View>
          <View style={style.buttonRigth}></View>
        </View>
      </View>
    </View>
  );
};

export default AddFood;

const style = StyleSheet.create({
  addFoodContenedor: { flex: 12, backgroundColor: "#FFF" },
  container: { width: "100%" },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {},
  bottomContainer: {},
  title: {
    fontWeight:'bold',
    textAlign:'left',
    flex: 0.5,
  },
  text: {},
  buttonContainer: {
    flex: 0.5,
  },
  buttonRigth: {},
});
