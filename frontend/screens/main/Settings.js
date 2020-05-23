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
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})