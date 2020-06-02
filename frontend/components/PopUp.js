import React, { Component } from "react";
import { StyleSheet, Modal, View, Text } from "react-native";
import AuthButton from "./AuthButton";

class PopUp extends Component {
    state = {modalVisible: false};

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    };

    render(){
        const {modalVisible} = this.state;
        return (
            <View style={styles.container}>
                <Modal
                    animationType={this.props.animationType}
                    transparent={this.props.transparent}
                    visible={modalVisible}
                    onRequestClose={() => {}}
                >
                    <View style={styles.modalWrapper}>
                        <View style={styles.insideWrapper}>
                            <Text 
                                style={{
                                    ...styles.textWrapper,
                                    fontSize: this.props.insideFontSize
                                }}
                            >
                                 {this.props.insideText}
                            </Text>
                            <AuthButton
                                text={this.props.modalText}
                                width={this.props.modalWidth}
                                fontSize={this.props.modalFontSize}
                                onPress={() => {this.setModalVisible(!modalVisible)}}
                            />
                        </View>
                    </View>
                </Modal>
                <AuthButton
                    text={this.props.buttonText}
                    width={this.props.buttonWidth}
                    fontSize={this.props.buttonFontSize}
                    onPress={() => {this.setModalVisible(!modalVisible)}}
                />
            </View>
        );
    }
}
export default PopUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    insideWrapper: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    },
    textWrapper: {
        marginBottom: 15
    }
});