import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { CardInner } from "../../components/card-inner/card-inner";
import { Cards } from "../../components/card/card";
import { View, Text } from "../../components/Themed";
import useDefaultSafeView from "../../hooks/useDefaultSafeView";

export default function HomeScreen() {

  const insets = useDefaultSafeView();

  return (
    <>
      <View style={[styles.wrapper, {paddingTop: insets.top}]}>
        <Cards color={true}>
          <CardInner name={"David Taylor"} amount={1000} />
        </Cards>
      </View>
      <StatusBar style={"light"} />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
 
});
