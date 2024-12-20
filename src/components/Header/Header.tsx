import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { infoUser } from "../../types/indes";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "react-native-elements";

const Header: FC<infoUser> = () => {
  const staticInfo = {
    name: "Ramiro Quiorga",
    uri: "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  const { canGoBack, goBack } = useNavigation();
  return (
    <View style={style.constianer}>
      {canGoBack() ? 
      <View style={style.arrowContainer}>
         <Button icon={<Icon name="arrow-back" size={24}  onPress={()=>goBack()}/> } type="clear"/>
      </View> : undefined}
      <View style={style.leftContainer}>
        <Text style={style.title}>Hola {staticInfo.name}</Text>
        <Text style={style.text}>Bienvenido de vuelta por aqui</Text>
      </View>
      <View style={style.rigthContainer}>
        <View style={style.containerImage}>
          <Image style={style.image} source={{ uri: staticInfo.uri }} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  constianer: {
    backgroundColor: "#FFF",
    borderBottomColor: "#ff550050",
    borderBottomWidth: 0.25,
    flexDirection: "row",
    height: 100,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowContainer:{
    marginLeft:-15
  },
  leftContainer: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rigthContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "ultralight",
  },
  image: {
    width: "100%",
    height: 75,
    borderRadius: 150,
    objectFit: "cover",

    alignContent: "center",
    justifyContent: "center",
  },
  containerImage: {
    backgroundColor: "red",
    borderRadius: 500,
    width: "40%",
  },
});
export default Header;
