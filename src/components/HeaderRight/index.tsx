import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Icon } from "react-native-elements";
import { NavigationContext } from "@react-navigation/native";
import { AppContext, AppContextProps } from "../../contexts/AppContext";

export default function HeaderRight() {
  const navigation = useContext(NavigationContext);

  const appContext = useContext<AppContextProps>(AppContext);

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          marginRight: 40,
        }}
        onPress={() => {
          appContext.setSearchBarVisible(!appContext.searchBarVisible);
        }}
      >
        <Icon
          name="search"
          size={23}
          type="material"
          color={"black"}
          tvParallaxProperties={undefined}
        ></Icon>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginRight: 25,
        }}
        onPress={() => {
          navigation?.navigate("Criar Receita", {
            body: "Criar Receita",
          });
        }}
      >
        <Icon
          name="plus"
          size={23}
          type="entypo"
          color={"black"}
          tvParallaxProperties={undefined}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}
