import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { NavigationContext } from "@react-navigation/native";
import useList from "../../hooks/useList";
import listToArray from "../../helpers/listToArray";
import SearchBar from "react-native-dynamic-search-bar";
import RecipeShape from "../../types/RecipeShape";
import { AppContext } from "../../contexts/AppContext";
import cards, { CardDataProps } from "../../data/cards";
import { Card, Icon } from "react-native-elements";

interface ItemProps {
  item: CardDataProps;
}

const Item = function ({ item }: ItemProps) {
  const navigation = useContext(NavigationContext);

  const width = useWindowDimensions().width * 0.6;

  return (
    <View
      style={{
        padding: "3%", // change here to adjust. number is also available: +- 28
      }}
    >
      <Card
        containerStyle={{
          backgroundColor: "#EF3762",
          borderRadius: 10,
        }}
      >
        <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
        <Card.Divider color="white" width={1} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            source={item.image}
            style={{
              resizeMode: "contain",
              width: width * 0.6,
              backgroundColor: item.backColor,
              marginBottom: width / 15,
              height: width * 0.6,
              borderRadius: 10,
              justifyContent: "center",
            }}
          ></Image>

          <Text style={styles.cardText}>{item.text}</Text>
        </View>

        <View style={{ marginBottom: 10 }}></View>

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
              onPress={() => {
                alert("Edit");
              }}
              tvParallaxProperties={undefined}
            ></Icon>
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon
              name="trash"
              size={20}
              raised
              onPress={() => {
                alert("Excluir");
              }}
              type="feather"
              color="#EF3762"
              tvParallaxProperties={undefined}
            ></Icon>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const Recipes = () => {
  const appContext = useContext(AppContext);
  const navigation = useContext(NavigationContext);
  const recipes = useList("recipes");
  const recipesList = listToArray(recipes.data || {});
  const [filteredCards, setFilteredCards] = useState(cards);

  const filterCards = (text: string) => {
    const filteredResult = cards.filter((card: CardDataProps) =>
      card.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredCards(filteredResult);
  };

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
      {appContext.searchBarVisible && (
        <SearchBar
          style={{
            marginTop: 15,
            marginBottom: 10,
            backgroundColor: "#EF3762",
          }}
          textInputStyle={styles.textInput}
          placeholderTextColor="#FAD3D9"
          onChangeText={filterCards}
          onClearPress={() => setFilteredCards(cards)}
          searchIconComponent={
            <Icon
              name="search"
              size={20}
              type="feather"
              color="white"
              tvParallaxProperties={undefined}
            ></Icon>
          }
          clearIconComponent={
            <Icon
              name="x"
              size={20}
              type="feather"
              color="white"
              tvParallaxProperties={undefined}
            ></Icon>
          }
          placeholder="Pesquisar receita"
        />
      )}

      {/* <FlatList
        data={recipesList}
        renderItem={(itemInfo) => renderItem(itemInfo.item)}
      /> */}
      <FlatList
        data={recipesList}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      {/* <View
        style={{
          flex: 1,
          height: useWindowDimensions().height,
          width: useWindowDimensions().width,
        }}
      >
        <FlashList
          data={filteredCards}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          estimatedItemSize={100}
        />
      </View> */}
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
