import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const sheetRef = useRef < BottomSheet > null;
//const [isOpen, setIsOpen] = useState(true);

const snapPoints = ["10%","60%"];

export default function Taxi() {
  return (
    <View style={styles.container}>
      <Text>Taxi</Text>

      <BottomSheet
        //ref={sheetRef}
        snapPoints={snapPoints}
      >
        <BottomSheetView>
          <ImageBackground
            source={require("../images/taxies.jpg")}
            style={styles.mainPic}
          >
            <View
              style={styles.mainPicSubView}
            >
              <Text style={styles.mainPicText}>Taxi</Text>
            </View>
          </ImageBackground>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  mainPic: {
    width: win.width,
    height: 170,
  },
  mainPicSubView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  mainPicText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  }
});
