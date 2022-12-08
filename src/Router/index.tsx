import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import HeaderRight from "../components/HeaderRight";
import MenuDrawerContent from "../components/MenuDrawerContent";
import useAuth from "../hooks/useAuth";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Recipe from "../screens/Recipe";
import Recipes from "../screens/Recipes";

const Stack = createNativeStackNavigator();
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
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <Button onPress={() => logout()} title="Logout" />
            ),
          }}
        />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
