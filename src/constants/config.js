import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  Alert,
  ToastAndroid,
  Modal,
  ActivityIndicator,
} from "react-native";
import { Dimensions } from "react-native";
// import changeNavigationBarColor from "react-native-navigation-bar-color";
import { GRAY } from "./color";

// Dimension Configuration
//----> Use HEIGHT & WIDTH for dynamic height & width throughout your code.
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

//Statusbar Configuration
//---> Use MyStatusBar for cross platform
export const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ height: StatusBar.currentHeight, backgroundColor }}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

//Toast message
export const Toaster = (msg) => {
  if (Platform.OS == "ios") {
    Alert.alert(msg);
  } else {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
};

// export const changeBottomBarColor = async (color) => {
//   try {
//     const response = await changeNavigationBarColor(color, true);
//     console.log(response); // {success: true}
//   } catch (e) {
//     console.log(e); // {success: false}
//   }
// };

//Styles configuration
export const STYLESCONFIG = StyleSheet.create({
  //---> Use STYLES.elevation for cross platform elevation
  elevation: {
    shadowColor: "#1C1C1C",
    shadowOffset: { width: 2, height: 1.5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
