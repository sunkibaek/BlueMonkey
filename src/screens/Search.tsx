import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { NavigationInjectedProps } from "react-navigation";

import BMButton from "../components/BMButton";
import BMInput from "../components/BMInput";
import CalendarModal from "../components/CalendarModal";
import Color from "../styles/Color";

interface IState {
  isCalendarModalVisible: boolean;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flex: 1,
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

  private get navigation() {
    return (this.props as NavigationInjectedProps).navigation;
  }

  public render() {
    return (
      <ScrollView style={styles.container}>
        <BMInput label="지역명" style={styles.input} />

        <BMInput
          label="날짜"
          style={styles.input}
          onFocus={this.openCalendarModal}
        />

        <BMInput label="인원" style={styles.input} />

        <BMButton onPress={this.search} title="검색" />

        <CalendarModal
          visible={this.state.isCalendarModalVisible}
          onClose={this.closeCalendarModal}
        />
      </ScrollView>
    );
  }

  private search = () => {
    this.navigation.navigate("List");
  };

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
