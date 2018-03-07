import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import BMInput from "../components/BMInput";

const styles = StyleSheet.create({});

class Search extends Component {
  public render() {
    return (
      <View>
        <BMInput label="지역명" />
        <BMInput label="날짜" />
        <BMInput label="인원" />
      </View>
    );
  }
}

export default Search;
