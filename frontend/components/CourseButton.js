import React, { Component } from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";

class CourseButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{...this.props.style, ...styles.button}} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
export default CourseButton;

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold"
    },
});