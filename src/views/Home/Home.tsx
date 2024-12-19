import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
const {navigate}=useNavigation<StackNavigationProp<RootStackParamList,'AddFood'>>()
    const handleAddCalories=()=>{
        navigate('AddFood')
    }
  return (
    <View style={style.container}>
      <Header />
      <View style={style.articleContainer}>
        <View style={style.leftContainer}>
          <Text style={style.text}>Calorias</Text>
        </View>
        <View style={style.rigthContainer}>
          <Button icon={<Icon name="add-circle-outline"/>}  style={style.button} onPress={handleAddCalories}/>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  button:{
    borderRadius:20,
    color:"green"
  },
  articleContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  leftContainer: {
    flex:1,

  },
  rigthContainer: {
    
  },
});

export default Home;
