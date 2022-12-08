import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HeaderRight from "./HeaderRight";
import Recipes from "../../screens/Recipes";
import Recipe from "../../screens/Recipe";

const Stack = createNativeStackNavigator();

export default function RecipesRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Receitas" component={Recipes} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
}
