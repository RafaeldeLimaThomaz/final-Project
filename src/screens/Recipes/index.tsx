import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import useList from "../../hooks/useList";
import listToArray from "../../helpers/listToArray";
import RecipeShape from "../../types/RecipeShape";

const Recipes = () => {
  const navigation = useContext(NavigationContext);
  const recipes = useList("recipes");
  const recipesList = listToArray(recipes.data || {});

  const handleCreateRecipe = async () => {
    const newRecipe: RecipeShape = {
      name: "",
      description: "",
      directions: "",
    };

    const createdKey = await recipes.create(newRecipe);

    navigation?.navigate("Recipe", { key: createdKey });
  };

  const handleEdit = (key: string | undefined) => {
    if (key) navigation?.navigate("Recipe", { key });
  };

  const renderItem = (item: RecipeShape) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.directions}</Text>
      <Button title="Edit" onPress={() => handleEdit(item.key)} />
    </View>
  );

  return (
    <View style={{ marginTop: 30 }}>
      <Button onPress={handleCreateRecipe} title="Create Recipe" />
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
