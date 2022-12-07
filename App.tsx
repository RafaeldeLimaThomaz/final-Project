import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppModal from "./src/components/AppModal";
import firebaseConfig from "./src/config/firebaseConfig";
import useFirebase from "./src/hooks/useFirebase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AppContext } from "./src/contexts/AppContext";
import MenuDrawerContent from "./src/components/MenuDrawerContent";
import HeaderRight from "./src/components/HeaderRight";
import Home from "./src/screens/Home";
import Recipes from "./src/screens/Recipes";
import Recipe from "./src/screens/Recipe";

const Drawer = createDrawerNavigator();

export default function App() {
  const [searchBarVisible, setSearchBarVisible] = React.useState(false);
  const appContext = {
    searchBarVisible,
    setSearchBarVisible,
  };

  const firebaseApp = useFirebase(firebaseConfig);
  if (firebaseApp == null) return <Text>Loading...</Text>;

  return (
    <AppModal>
      <View style={styles.container}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={(props) => <MenuDrawerContent {...props} />}
              initialRouteName="Home"
            >
              <Drawer.Screen name="Home" component={Home} />
              {/* <Drawer.Screen name="Agenda" component={MyAgenda} />
              <Drawer.Screen name="Cronograma" component={TimeLine} /> */}
              <Drawer.Screen
                name="Receitas"
                component={Recipes}
                options={{
                  headerRight: () => <HeaderRight />,
                }}
              />

              {/* <Drawer.Screen name="Lista de compras" component={ShoppingList} /> */}
              {/* <Drawer.Screen name="Criar Receita" component={CreateRecipe} /> */}
              {/* <Drawer.Screen
                name="Receita Detalhada"
                component={RecipeDetails}
              /> */}
              <Drawer.Screen name="Recipe" component={Recipe} />
            </Drawer.Navigator>
          </NavigationContainer>
        </AppContext.Provider>
      </View>
    </AppModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
