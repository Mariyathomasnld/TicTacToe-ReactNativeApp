// 1.create box component



import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Box() {

return <View style={styles.boxView}>





  </View>;
}

export default Box;

const styles = StyleSheet.create({
  boxView: {
    minWidth: 110,
    minHeight: 110,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
});
