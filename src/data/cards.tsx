import React from "react";
import { ReactElement } from "react";
import { Text } from "react-native";
import TextBold from "../components/TextBold";

export interface CardDataProps {
  id: string;
  title: string;
  backColor: string;
  image: any;
  text: ReactElement;
}

const cards: Array<CardDataProps> = [
  {
    id: "1",
    title: "MARTA ROCHA",
    image: require("../../assets/martaRocha.png"),
    backColor: "#fff",
    text: (
      <Text>
        Combinação deliciosa de creme de <TextBold>ovos</TextBold>, crocante de{" "}
        <TextBold>nozes</TextBold>, suspiro com <TextBold>ameixa</TextBold> e/ou{" "}
        <TextBold>damasco </TextBold>
        caramelizados
      </Text>
    ),
  },
  {
    id: "2",
    title: "DOIS AMORES",
    image: require("../../assets/doisAmores.png"),
    backColor: "#f7a8bb",
    text: (
      <Text>
        Massa de pão-de-ló de <TextBold>chocolate</TextBold>, com recheio de
        brigadeiro
        <TextBold> branco</TextBold> e brigadeiro <TextBold>preto</TextBold>,
        com opcional de <TextBold>morangos</TextBold>
      </Text>
    ),
  },
  {
    id: "3",
    title: "RED VELVET",
    image: require("../../assets/redVelvet.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "4",
    title: "RAFFAELLO",
    image: require("../../assets/raffaello.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "5",
    title: "LIMÃO SICILIANO C/ FRUTAS VERMELHAS",
    image: require("../../assets/lemonRedFruits.png"),
    backColor: "#fff",
    text: <Text></Text>,
  },
  {
    id: "6",
    title: "CHOCOLATUDO",
    image: require("../../assets/chocolatudo.png"),
    backColor: "#fff",
    text: <Text></Text>,
  },
  {
    id: "7",
    title: "ABACAXI COM CÔCO",
    image: require("../../assets/abacaxiCoco.png"),
    backColor: "#fff",
    text: <Text></Text>,
  },
  {
    id: "8",
    title: "NATA COM SUSPIRO",
    image: require("../../assets/nataSuspiro.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "9",
    title: "DOCE DE LEITE COM AMEIXA",
    image: require("../../assets/doceLeiteAmeixa.png"),
    backColor: "#fff",
    text: <Text></Text>,
  },
  {
    id: "10",
    title: "FRUTAS VERMELHAS COM BAUNILHA",
    image: require("../../assets/vanillaRedFruits.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "11",
    title: "ALPINO COM CREME DE NINHO",
    image: require("../../assets/alpinoNinho.png"),
    backColor: "#fff",
    text: <Text></Text>,
  },
  {
    id: "12",
    title: "ALPINO",
    image: require("../../assets/alpino.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "13",
    title: "CREME DE NINHO",
    image: require("../../assets/lemonRedFruits.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "14",
    title: "CARAMELO SALGADO COM CHOCOLATE",
    image: require("../../assets/carameloChocolate.png"),
    backColor: "#fff",
    text: <Text></Text>,
  },
  {
    id: "15",
    title: "CREAM CHEESE COM AMARENA",
    image: require("../../assets/creamCheeseCherry.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "16",
    title: "PISTACHE",
    image: require("../../assets/pistache.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
  {
    id: "17",
    title: "DOCE DE LEITE COM NOZES",
    image: require("../../assets/doceLeiteNozes.png"),
    backColor: "#f7a8bb",
    text: <Text></Text>,
  },
];

export default cards;
