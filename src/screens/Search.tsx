import React, { Component } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

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
        <Modal animationType="slide" transparent={true} visible={true}>
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <View
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                overflow: "hidden"
              }}
            >
              <Calendar />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Search;
