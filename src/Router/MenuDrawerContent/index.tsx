import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { View } from "react-native";
import useAuth from "../../hooks/useAuth";
import DrawerMenuItem from "./DrawerMenuItem";
import styles from "./styles";

export default function MenuDrawerContent(props: any) {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.containerMain}
    >
      <View style={styles.menuContainer}>
        <DrawerMenuItem
          label="Agenda"
          icon={{ name: "calendar", type: "entypo" }}
          callback={() => {
            alert("Time favors those who are patient. ");
            // props.navigation.navigate("Agenda", { body: "agenda" });
          }}
        />

        <DrawerMenuItem
          label="Cronograma"
          icon={{ name: "check", type: "entypo" }}
          callback={() => {
            alert("I'll be back soon!");
            // props.navigation.navigate("Cronograma", { body: "cronograma" });
          }}
        />

        <DrawerMenuItem
          label="Receitas"
          icon={{ name: "book", type: "entypo" }}
          callback={() => {
            props.navigation.navigate("RecipesRouter", { body: "receitas" });
          }}
        />

        <DrawerMenuItem
          label="Lista de Compras"
          icon={{ name: "cart", type: "ionicon" }}
          callback={() => {
            alert("Wait and You'll see!");
            // props.navigation.navigate("Lista de compras", {
            //   body: "lista de compras",
            // });
          }}
        />

        <DrawerMenuItem
          label="Logout"
          icon={{ name: "cart", type: "ionicon" }}
          callback={() => logout()}
        />
      </View>
    </DrawerContentScrollView>
  );
}
