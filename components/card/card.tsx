import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../../components/Themed";

interface ICardProps {
  children?: React.ReactChild;
  color?: boolean;
}

const colors = ["#66B5CE", "#AE54B0"];

export const Cards = (props: ICardProps) => {
  return (
    <>
      <StatusBar style={"light"} />
      <View
        style={[
          styles.wrapper,
          { backgroundColor: props.color ? colors[0] : colors[1] },
        ]}
      >
        {props.children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 120,
    width: "85%",
    borderRadius: 15,
  },
});
