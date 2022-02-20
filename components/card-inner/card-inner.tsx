import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../../components/Themed";

interface ICardInnerProps {
  name: string;
  amount: number;
}

export const CardInner = (props: ICardInnerProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerContainer}>
        <Text weight={"h1"} style={styles.text}>
          {props.name}
        </Text>
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </View>

      <View style={styles.spacer} />

      <View style={styles.innerContainer}>
        <Text weight={"h4"} style={styles.text}>
          Amount spend
        </Text>
        <Text weight={"h4"} style={styles.text}>
          £{props.amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "transparent",
    padding: 15,
  },
  spacer: {
    flexGrow: 1,
    height: 30,
    backgroundColor: "transparent",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
  },
});
