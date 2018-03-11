import { NavigationStyles } from "@expo/ex-navigation";
import React, { Component } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import BMButton from "../components/BMButton";
import BMInput from "../components/BMInput";
import CalendarModal from "../components/CalendarModal";
import Color from "../styles/Color";

interface IState {
  isCalendarModalVisible: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  goBackButton: {
    paddingRight: 8
  },
  input: {
    marginBottom: 16
  },
  navigationBar: {
    alignItems: "flex-end",
    backgroundColor: Color.WHITE,
    paddingTop: StatusBar.currentHeight || 20
  },
  scrollView: {
    backgroundColor: Color.WHITE,
    flex: 1,
    padding: 16
  }
});

class Search extends Component<{}, IState> {
  public static route = {
    styles: {
      ...NavigationStyles.FloatVertical
    }
  };

  constructor(props: {}) {
    super(props);

    this.state = {
      isCalendarModalVisible: false
    };
  }

  private get navigator() {
    return (this.props as any).navigator;
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={this.goBack} style={styles.goBackButton}>
            <Icon color={Color.GRAY} name="close" size={18} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
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
      </View>
    );
  }

  private goBack = () => {
    this.navigator.pop();
  };

  private search = () => {
    this.navigator.pop();
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
