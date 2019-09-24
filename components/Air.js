import React from "react";
import AirQuality from "./airquality";
import { StyleSheet, Text, View } from "react-native";

export default class Air extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      air_quality: {
        aqi: 0
      }
    };
  }

  fetchData = () => {
    fetch(
      `https://api.waqi.info/feed/${this.props.city}/?token=b74e04aa2618c5ecc1fa728529cb3741099a69ae`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          air_quality: {
            aqi: json.data.aqi,
            name: json.data.debug.sync
          }
        });
      })
      .catch(error => {
        console.warn(error);
      });
  };

  componentDidMount = () => this.fetchData();

   componentDidUpdate = prevProps => {
     if (prevProps.city !== this.props.city) {
       this.fetchData();
     }
   };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}> {this.props.city} </Text>
          <AirQuality {...this.state.air_quality} />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold"
  },
  describe:{
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  }
});
