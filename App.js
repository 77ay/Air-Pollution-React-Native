import React from "react";
import Air from "./components/Air";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground, TextInput } from "react-native";
import { Button } from "react-native-elements";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Phuket"
    };
  }

  render() {
    let { city } = this.state;
    return (
      <ImageBackground source={require("../map-app/bg.jpeg")} style={styles.backdrop}>
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <View style={styles.container}>
          <Text style={{ color:'white', fontSize: 18 }} >Please enter your city.</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={ (city) => this.setState({ city }) }
          />
        </View>
        <Air city={this.state.city} />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 200
  },
  backdrop: {
    width: "100%",
    height: "100%"
  },
  input: {
    height: 60,
    width: 200,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 10,
    textAlign: "center",
    color: 'white',
    fontSize: 24
  }
  
});
