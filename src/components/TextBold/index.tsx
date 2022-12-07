import React from "react";
import { ReactNode } from "react";
import { Text } from "react-native";

interface TextBoldProps {
  children: ReactNode;
}

const TextBold = (props: TextBoldProps) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

export default TextBold;
