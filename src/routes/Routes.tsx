import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/indes";
import Home from "../views/Home/Home";
import AddFood from "../views/AddFood/AddFood";

const Stack = createStackNavigator<RootStackParamList>();


const  routeScreenDefaultOptions={
        headerStyle:{
            backgroundColor:"rgba(7,26,93,255"
        },
        headerTitleStyle:{
            color:"FFF"
        },
        headerShown:false
}
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions} />
        <Stack.Screen name="AddFodd" component={AddFood} options={routeScreenDefaultOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
