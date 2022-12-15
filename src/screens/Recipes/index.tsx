import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContext } from "@react-navigation/native";
import useList from "../../hooks/useList";
import listToArray from "../../helpers/listToArray";
import RecipeShape from "../../types/RecipeShape";
import { AppContext } from "../../contexts/AppContext";
import { Card, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { getDatabase, ref, remove } from "firebase/database";

const Recipes = () => {
  const appContext = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const recipes = useList("recipes");
  const recipesList = listToArray(recipes.data || {});

  const width = useWindowDimensions().width * 0.6;

  const handleEdit = (refKey: string | undefined) => {
    if (refKey) navigation?.navigate("Recipe", { refKey });
  };

  const handleDelete = (refKey: string | undefined) => {
    return Alert.alert(
      "Apagar Receita?",
      "Excluir definitivamente esta receita?",
      [
        {
          text: "Apagar",
          onPress: () => {
            remove(ref(getDatabase(), "recipes/" + refKey));
          },
          style: "destructive",
        },

        {
          text: "Cancelar",
        },
      ]
    );
  };

  const renderItem = (item: RecipeShape) => (
    <ScrollView>
      <Card
        containerStyle={{
          backgroundColor: "#EF3762",
          borderRadius: 10,
        }}
      >
        <Card.Title style={{ color: "white" }}>{item.name}</Card.Title>
        <Card.Divider color="white" width={1} />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View
            style={{
              width: width * 0.6,
              height: width * 0.6,
              marginBottom: width / 15,
              backgroundColor: "#FF4984",
              borderStyle: "dashed",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "white",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name="image"
              type="feather"
              color={"white"}
              tvParallaxProperties={undefined}
            />
          </View>
          <View>
            <Text style={{ color: "white" }}>
              Descrição: {item.description}
            </Text>
            <Text style={{ color: "white" }}>
              Modo de preparo:{item.directions}
            </Text>
          </View>
        </View>

        <Text style={{ color: "white", margin: 10 }}>
          Ingredientes: {JSON.stringify(item.ingredients)}
        </Text>
        <Card.Divider color="white" width={1} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: width * 0.6,
              height: width / 6,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation?.navigate("Receita Detalhada", {
                body: "Receita Detalhada",
              });
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>ABRIR</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name="edit"
              size={20}
              type="feather"
              color="green"
              raised
              onPress={() => handleEdit(item.key)}
              tvParallaxProperties={undefined}
            ></Icon>
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name="trash"
              size={20}
              raised
              onPress={() => {
                handleDelete(item.key);
              }}
              type="feather"
              color="#EF3762"
              tvParallaxProperties={undefined}
            ></Icon>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );

  return (
    <View style={{ marginTop: 30 }}>
      {appContext.searchBarVisible && <Text>Search Bar HERE!!</Text>}

      <FlatList
        data={recipesList}
        renderItem={(itemInfo) => renderItem(itemInfo.item)}
      ></FlatList>
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
