import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { Button, Icon, Input } from "react-native-elements";

const AddFood = () => {
  return (
    <View style={style.addFoodContenedor}>
      <Header />
      <View style={style.container}>
        <View style={style.topContainer}>
          <View>
            <Text style={style.title}>AddFood</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Button
              icon={
                <Icon
                  backgroundColor={"#4ecb71"}
                  borderRadius={50}
                  name="add-circle-outline"
                  color={"white"}
                />
              }
              type="clear"
            />
          </View>
        </View>
        <View style={style.searchContainer}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Input
              placeholder="apples ,pie ,soda..."
              style={style.inputSearch}
            />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Button
              icon={
                <Icon
                  backgroundColor={"#4ecb71"}
                  borderRadius={50}
                  name="search"
                  color={"white"}
                />
              }
              type="clear"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddFood;

const style = StyleSheet.create({
  addFoodContenedor: {
    flex: 12,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  container: { width: "100%", flex: 1, alignItems: "center", padding: 10 },
  topContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputSearch: {
    fontSize: 14,
  },
  searchContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {},
  bottomContainer: {},
  title: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
    flex: 0.5,
  },
  text: {
    alignItems: "flex-start",
  },
  buttonContainer: {
    flex: 0.5,
  },
  buttonRigth: {},
});
