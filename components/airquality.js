import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class AirQuality extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} >AQI : {this.props.aqi}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color:'white',
    fontSize: 62,
    textShadowColor:'red',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius:30,
  }
});




