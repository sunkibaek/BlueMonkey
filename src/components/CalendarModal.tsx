import React, { Component } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Calendar } from "react-native-calendars";
import Color from "../styles/Color";

interface IProps {
  visible: boolean;
  onClose: () => void;
  onDaySelect: (dateString: string) => void;
}
interface IDay {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}
interface IState {
  selectedDay: IDay | null;
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

class CalendarModal extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { selectedDay: null };
  }

  public render() {
    const { visible, onClose } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop}>
            <View style={styles.container}>
              <Calendar
                markedDates={this.getMarkedDates()}
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

  private getMarkedDates = () => {
    if (!this.state.selectedDay) {
      return null;
    }

    return {
      [this.state.selectedDay.dateString]: {
        color: Color.BLUE,
        selected: Color.BLUE
      }
    };
  };

  private selectDay = (day: IDay) => {
    this.setState(() => ({ selectedDay: day }));
    this.props.onDaySelect(day.dateString);
  };
}

export default CalendarModal;
