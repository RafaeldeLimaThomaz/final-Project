import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppModal from "./src/components/AppModal";
import firebaseConfig from "./src/config/firebaseConfig";
import useFirebase from "./src/hooks/useFirebase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AppContext } from "./src/contexts/AppContext";
import MenuDrawerContent from "./src/Router/MenuDrawerContent";
import HeaderRight from "./src/Router/RecipesRouter/HeaderRight";
import Home from "./src/screens/Home";
import Recipes from "./src/screens/Recipes";
import Recipe from "./src/screens/Recipe";
import Router from "./src/Router";

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
          <Router />
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
