import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Calendar } from "react-native-calendars";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "flex-end"
  },
  container: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden"
  }
});

class CalendarModal extends Component<IProps> {
  public render() {
    const { visible, onClose } = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop}>
            <View style={styles.container}>
              <Calendar
                markedDates={{
                  "2018-03-12": {
                    color: "blue",
                    selected: "blue"
                  },
                  "2018-03-13": {
                    color: "blue",
                    selected: "blue"
                  }
                }}
                minDate={Date()}
                markingType="period"
                onDayPress={this.selectDay}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  private selectDay = (_: {
    year: number;
    month: number;
    day: number;
    timestamp: number;
    dateString: string;
  }) => {
    // TODO: implement day selection
  };
}

export default CalendarModal;
