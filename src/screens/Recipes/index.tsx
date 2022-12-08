import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import useList from "../../hooks/useList";
import listToArray from "../../helpers/listToArray";
import RecipeShape from "../../types/RecipeShape";
import { AppContext } from "../../contexts/AppContext";

const Recipes = () => {
  const appContext = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const recipes = useList("recipes");
  const recipesList = listToArray(recipes.data || {});

  const handleEdit = (refKey: string | undefined) => {
    if (refKey) navigation?.navigate("Recipe", { refKey });
  };

  const renderItem = (item: RecipeShape) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.directions}</Text>
      <Text>{JSON.stringify(item.ingredients)}</Text>
      <Button title="Edit" onPress={() => handleEdit(item.key)} />
    </View>
  );

  return (
    <View style={{ marginTop: 30 }}>
      {appContext.searchBarVisible && <Text>Search Bar HERE!!</Text>}

      <FlatList
        data={recipesList}
        renderItem={(itemInfo) => renderItem(itemInfo.item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddfafC",
  },

  cardText: {
    color: "white",
    flex: 1,
    flexWrap: "wrap",
    textAlign: "justify",
    marginLeft: 15,
  },
  textInput: {
    color: "white",
  },
});

export default Recipes;
