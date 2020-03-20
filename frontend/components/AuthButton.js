import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class AuthButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    ...styles.button,
                    width: this.props.width
                }}
                onPress={this.props.onPress}
                width={this.props.width}
                fontSize={this.props.fontSize}
                >
                <Text style={{ fontSize: this.props.fontSize }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}
export default AuthButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 60,
        borderWidth: 2,
        borderColor: "#63ace5",
        marginBottom: 30,
        backgroundColor: "#63ace5",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
});