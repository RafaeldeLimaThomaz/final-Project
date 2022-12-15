import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { NavigationContext, useRoute } from "@react-navigation/native";
import useReference from "../../hooks/useReference";
import { ModalContext } from "../../components/AppModal";
import AddIngredientsModal from "../../components/AppModal/Modals/AddIngredientModal";
import useList from "../../hooks/useList";
import styles from "./styles";
import { Card } from "react-native-elements";
import { getDatabase, ref, remove } from "firebase/database";

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

  const handleDiscard = (goBack: boolean = true) => {
    remove(ref(getDatabase(), "recipes/" + refKey));
    if (goBack) navigation?.goBack();
  };

  return (
    <View>
      <Card
        containerStyle={{
          width: "90%",
          backgroundColor: "#EF3762",
          borderRadius: 10,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            margin: 10,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Nova Receita
        </Text>
        <Card.Divider color="white" width={1} />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          style={styles.titleInput}
          textAlign={"center"}
          placeholderTextColor={"#fee9e9"}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição"
          style={styles.titleInput}
          placeholderTextColor={"#fee9e9"}
          textAlign={"center"}
        />
        <TextInput
          value={directions}
          onChangeText={setDirections}
          placeholder="Modo de Preparo"
          style={styles.titleInput}
          placeholderTextColor={"#fee9e9"}
          textAlign={"center"}
        />
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#FF4984",
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 53,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "white",
            width: 200,
            height: 30,
          }}
          onPress={handleAddIngredient}
        >
          <Text style={{ color: "white" }}>Adicionar Ingrediente</Text>
        </TouchableOpacity>
        {ingredientsList.map((ingrendient, index) => (
          <Text key={index}>{ingrendient}</Text>
        ))}
      </Card>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: 30,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#087530",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white",
            width: 100,
            height: 40,
          }}
          onPress={() => handleSave()}
        >
          <Text style={{ color: "white" }}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#ca154e",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white",
            width: 100,
            height: 40,
          }}
          onPress={() => handleDiscard()}
        >
          <Text style={{ color: "white" }}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recipe;
