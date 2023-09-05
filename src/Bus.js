import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import  MapView, { Polyline,Marker,Callout  } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';
import Lane3 from "./Lanes/Lane3";
import Lane1A from "./Lanes/Lane1A";
import None from "./Lanes/None";

const sheetRef = useRef < BottomSheet > null;
//const [isOpen, setIsOpen] = useState(true);

const snapPoints = ["10%", "40%", "90%"];

export default function Bus() {

  const [selected,setSelected] = useState('none');

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.0961,
          longitude: 19.6583,
          latitudeDelta: 0.09,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={[
            { latitude: 46.0961, longitude: 19.6583 },
            { latitude: 46.1061, longitude: 19.6683 },
            { latitude: 46.1161, longitude: 19.6683 },
          ]}
          tappable={true}
          strokeWidth={7}
          strokeColor={(selected=='3')?'red':'blue'}
          onPress={()=>{
            console.log(selected)
            setSelected('3')
          }}
        />
        <Polyline
          coordinates={[
            { latitude: 46.0861, longitude: 19.6383 },
            { latitude: 46.1261, longitude: 19.6283 },
            { latitude: 46.1361, longitude: 19.6083 },
          ]}
          tappable={true}
          strokeWidth={7}
          strokeColor={(selected=='1A')?'red':'gray'}
          onPress={()=>{
            setSelected('1A')
            
            console.log(selected)
          }}
        />

        <Marker
          coordinate={{
            latitude: 46.1061,
            longitude: 19.6683
          }}
          pinColor="blue"
        >
          <Callout>
            <Text>Lifka</Text>
          </Callout>
        </Marker>

      </MapView>

      <BottomSheet
        //ref={sheetRef}
        snapPoints={snapPoints}
      >
        <BottomSheetView>

        <Picker
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) =>
            setSelected(itemValue)
          }>
          <Picker.Item label="Lane 1A" value="1A" />
          <Picker.Item label="Lane 2" value="2" />
          <Picker.Item label="Lane 3" value="3" />
          <Picker.Item label="Lane 6" value="6" />
        </Picker>
        {renderSwich(selected)}

        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

function renderSwich(param){
  switch (param){
    case 'none':
      return <None/>
    case '3':
      return <Lane3/>
    case '1A':
      return <Lane1A/>
  }
}

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
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
    color: "white",
    fontWeight: "bold",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

/*
          <ImageBackground
            source={require("../images/buses.jpg")}
            style={styles.mainPic}
          >
            <View style={styles.mainPicSubView}>
              <Text style={styles.mainPicText}>Bus</Text>
            </View>
          </ImageBackground>
        */
