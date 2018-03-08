import React, { Component } from "react";
import { Modal, View } from "react-native";
import { Calendar } from "react-native-calendars";

import BMInput from "../components/BMInput";

class Search extends Component {
  public render() {
    return (
      <View>
        <BMInput label="지역명" />
        <BMInput label="날짜" />
        <BMInput label="인원" />
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
