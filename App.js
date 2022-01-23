// 1. import the box component from Box.js
// 2. define boxes,isXchance,and winner with useStatehooks as these changes states during the game.
// 3. Writ the playBox function and pass in the boxcomponent and include as props the information you need from the child component.

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

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

  const winPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWin() {
    for (let i = 0; i < winPosition.length; i++) {
      if (
        boxes[winPosition[i][0]] !== null &&
        boxes[winPosition[i][0]] === boxes[winPosition[i][1]] &&
        boxes[winPosition[i][0]] === boxes[winPosition[i][2]]
      ) {
        setWinner(boxes[winPosition[i][0]]);
        return;
      }
    }
  }

  
  useEffect(() => {
    calculateWin();
  }, [isXChance]);

  function resetValues() {
    setWinner(null);
    setBoxes(Array(9).fill(null));
    setIsXChance(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="orange" />
      <Button title="Restart" color="#841584" onPress={resetValues} />

      <View style={styles.featureContainer}>
        {winner !== null ? (
          <Text style={[styles.primaryText, styles.winnerText]}>
            {winner} WON
          </Text>
        ) : (
          <Text style={styles.primaryText}>
            Chance: {isXChance ? "X" : "O"}
          </Text>
        )}
      </View>

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

  featureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  primaryText: {
    fontSize: 36,
    color: "purple",
    fontWeight: "bold",
    textAlign: "center",
  },
  winnerText: {
    color: "darkorange",
    fontSize: 36,
  },
});
