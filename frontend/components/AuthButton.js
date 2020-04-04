import React, { Component } from "react";
import { 
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
        marginBottom: 30,
        backgroundColor: "#87b7ff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
});