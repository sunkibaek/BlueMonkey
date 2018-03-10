import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import BMInput from "../components/BMInput";
import CalendarModal from "../components/CalendarModal";

interface IState {
  isCalendarModalVisible: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    marginBottom: 16
  }
});

class Search extends Component<{}, IState> {
  public static navigationOptions = {
    title: "검색"
  };

  constructor(props: {}) {
    super(props);

    this.state = {
      isCalendarModalVisible: false
    };
  }

  public render() {
    return (
      <View style={styles.container}>
        <BMInput label="지역명" style={styles.input} />

        <BMInput
          label="날짜"
          style={styles.input}
          onFocus={this.openCalendarModal}
        />

        <BMInput label="인원" style={styles.input} />

        <CalendarModal
          visible={this.state.isCalendarModalVisible}
          onClose={this.closeCalendarModal}
        />
      </View>
    );
  }

  private openCalendarModal = () => {
    this.setState(() => ({
      isCalendarModalVisible: true
    }));
  };

  private closeCalendarModal = () => {
    this.setState(() => ({
      isCalendarModalVisible: false
    }));
  };
}

export default Search;
