import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import BMInput from "../components/BMInput";

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    marginBottom: 16
  }
});

class Search extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <BMInput label="지역명" style={styles.input} />

        <BMInput label="날짜" style={styles.input} />

        <BMInput label="인원" style={styles.input} />
      </View>
    );
  }
}

export default Search;
