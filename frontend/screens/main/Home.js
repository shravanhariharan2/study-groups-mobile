import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PopUp from "../../components/PopUp";

class Home extends Component {
    constructor(props) {
        super(props)
    };

    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    };

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Upcoming Events</Text> 
                </View>
                <View style={styles.eventWrapper}>
                    <PopUp
                        animationType="fade"
                        transparent={true}
                        modalText="Close"
                        modalWidth={200}
                        modalFontSize={15}
                        buttonText="Shrav's Party"
                        buttonWidth={200}
                        buttonFontSize={15}
                    />
                </View>
            </View>
        );
    }
}
export default Home;

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
    eventWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    }
});
