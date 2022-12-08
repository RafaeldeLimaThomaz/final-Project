import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HeaderRight from "./RecipesRouter/HeaderRight";
import MenuDrawerContent from "./MenuDrawerContent";
import useAuth from "../hooks/useAuth";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Recipe from "../screens/Recipe";
import Recipes from "../screens/Recipes";
import RecipesRouter from "./RecipesRouter";

const Drawer = createDrawerNavigator();

export default function Router() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <MenuDrawerContent {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Agenda" component={MyAgenda} />
              <Drawer.Screen name="Cronograma" component={TimeLine} /> */}

        <Drawer.Screen
          name="RecipesRouter"
          component={RecipesRouter}
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
