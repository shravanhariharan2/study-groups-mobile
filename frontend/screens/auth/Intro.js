import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthButton from "../../components/AuthButton";

export default class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Study Groups Mobile</Text>
                    <Text style={styles.subTitle}>Find study groups easily</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <AuthButton
                        text="Sign Up"
                        width={240}
                        fontSize={20}
                        onPress={() => this.props.navigation.navigate("Signup")}
                    />
                    <AuthButton
                        text="Log In"
                        width={240}
                        fontSize={20}
                        onPress={() => this.props.navigation.navigate("Login")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d9e7fc"
    },
    titleWrapper: {
        marginTop: 160,
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    subTitle: {
        marginTop: 30,
        fontSize: 24
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 50
    },
});
