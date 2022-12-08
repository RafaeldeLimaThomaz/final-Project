import React from "react";
import { View } from "react-native";

import { DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import styles from "./styles";

interface DrawerMenuItemProps {
  label: string;
  icon: {
    name: string;
    type: string;
  };
  callback: () => void;
}

export default function DrawerMenuItem({
  label,
  icon,
  callback,
}: DrawerMenuItemProps) {
  return (
    <View
      style={[
        styles.menuItemsCard,
        {
          backgroundColor: "#fff",
          width: 263.12,
          height: 50,
          justifyContent: "space-between",
        },
      ]}
    >
      <Icon
        containerStyle={{ paddingLeft: 15 }}
        name={icon.name}
        type={icon.type}
        color="green"
        size={20}
        tvParallaxProperties={undefined}
      />
      <DrawerItem
        style={{
          position: "absolute",
          left: 0,
          width: 263.12,
          height: 50,
          paddingLeft: 30,
        }}
        label={label}
        labelStyle={{ color: "green" }}
        onPress={callback}
      />
    </View>
  );
}
