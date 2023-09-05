import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Lane3() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Lane 3</Text>
      <Text style={styles.subHeading}>Makova Sedmica - Lifka - Bajski put</Text>

      <View style={styles.directionRow}>
        <TouchableOpacity style={styles.directionChild}>
          <Text>Radni Dan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.directionChild}>
          <Text>Viken i Praznici</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 30,
        color: 'dodgerblue',
        marginTop: 10,
        fontWeight: 'bold',
    },
    subHeading: {
      fontSize: 15,
      color: 'dodgerblue',
      marginTop: 5,
    },
    directionRow: {
      marginTop: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    directionChild: {
      backgroundColor: 'lightgray',
      height: 100,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center'
    }
});
