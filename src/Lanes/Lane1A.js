import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Lane1A() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Lane 1A</Text>

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
        color: 'gray',
        marginTop: 10,
        fontWeight: 'bold',
    }
});
