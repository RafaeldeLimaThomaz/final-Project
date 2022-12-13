import { View, Text, Button, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  NavigationContext,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import useReference from "../../hooks/useReference";
import { ModalContext } from "../../components/AppModal";
import AddIngredientsModal from "../../components/AppModal/Modals/AddIngredientModal";
import useList from "../../hooks/useList";

const Recipe = ({}: { navigation: any }) => {
  const appModal = useContext(ModalContext);
  const navigation = useContext(NavigationContext);
  // const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as any;
  const refKey = params.refKey;

  console.log("Opening Recipe: ", refKey);

  const [recipe, setRecipe] = useReference("recipes/" + refKey);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [directions, setDirections] = useState("");

  const ingredients = useList("recipes/" + refKey + "/ingredients");

  const ingredientsList = Object.keys(ingredients.data || {});
  console.log(ingredientsList);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name);
      setDescription(recipe.description);
      setDirections(recipe.directions);
    }
  }, [recipe]);

  const handleAddIngredient = () => {
    handleSave(false);
    appModal.show(<AddIngredientsModal recipeKey={refKey} />);
  };

  const handleSave = (goBack: boolean = true) => {
    let updatedRecipe = {
      ...recipe,
      name,
      description,
      directions,
    };
    setRecipe!(updatedRecipe);
    if (goBack) navigation?.goBack();
  };

  return (
    <View>
      <Text>Recipe</Text>
      <TextInput value={name} onChangeText={setName} placeholder="name" />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="description"
      />
      <TextInput
        value={directions}
        onChangeText={setDirections}
        placeholder="directions"
      />
      <Button title="Add Ingredient" onPress={handleAddIngredient} />

      {ingredientsList.map((ingrendient, index) => (
        <Text key={index}>{ingrendient}</Text>
      ))}

      <Button title="Save" onPress={() => handleSave()} />
    </View>
  );
};

export default Recipe;
