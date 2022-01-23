// 1. import the box component from Box.js
// 2. define boxes,isXchance,and winner with useStatehooks as these changes states during the game.
// 3. Writ the playBox function and pass in the boxcomponent and include as props the information you need from the child component.

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Box from "./components/Box";

export default function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isXChance, setIsXChance] = useState(true);
  const [winner, setWinner] = useState(null);

  function PlayBox(no) {
    return (
      <Box
        no={no}
        boxInfo={{ boxes, setBoxes }}
        chance={{ isXChance, setIsXChance }}
        winner={winner}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.playBoard}>
        <View style={styles.boxRows}>
          {PlayBox(0)}
          {PlayBox(1)}
          {PlayBox(2)}
        </View>
        <View style={styles.boxRows}>
          {PlayBox(3)}
          {PlayBox(4)}
          {PlayBox(5)}
        </View>
        <View style={styles.boxRows}>
          {PlayBox(6)}
          {PlayBox(7)}
          {PlayBox(8)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  playBoard: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: "orange",
   
  },
  boxRows: {
    flexDirection: "row",
  },
});
