import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function None() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>No selected lane</Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
    }
});
