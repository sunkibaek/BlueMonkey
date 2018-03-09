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
              <Calendar />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default CalendarModal;
