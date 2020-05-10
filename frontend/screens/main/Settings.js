import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class Settings extends Component {
    constructor(props){
        super(props);


    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={KeyboardEvent.dismiss} accesible={false}>
                <Text style={styles.container}>Settings Test</Text>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        backgroundColor: "#b3cde0",
        alignText: "center",
        justifyContent: "center"
    },

})