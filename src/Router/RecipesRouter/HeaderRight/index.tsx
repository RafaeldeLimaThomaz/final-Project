import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Icon } from "react-native-elements";
import { NavigationContext } from "@react-navigation/native";
import { AppContext, AppContextProps } from "../../../contexts/AppContext";
import useList from "../../../hooks/useList";
import RecipeShape from "../../../types/RecipeShape";

export default function HeaderRight() {
  const navigation = useContext(NavigationContext);

  const appContext = useContext<AppContextProps>(AppContext);

  const recipes = useList("recipes");

  const handleCreateRecipe = async () => {
    const newRecipe: RecipeShape = {
      name: "",
      description: "",
      directions: "",
    };

    const createdKey = await recipes.create(newRecipe);

    navigation?.navigate("Recipe", { key: createdKey });
  };

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
        onPress={handleCreateRecipe}
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
