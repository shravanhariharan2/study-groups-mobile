import React, { Component } from "react";
import { StyleSheet, Modal, View } from "react-native";
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
                    style={styles.modalWrapper}
                    animationType={this.props.animationType}
                    transparent={this.props.transparent}
                    text={this.props.modalText}
                    width={this.props.modalWidth}
                    fontSize={this.props.modalFontSize}
                    visible={modalVisible}
                    onRequestClose={() => {}}
                >
                    <AuthButton
                        text={this.props.modalText}
                        width={this.props.modalWidth}
                        fontSize={this.props.modalFontSize}
                        onPress={() => {this.setModalVisible(!modalVisible)}}
                    />
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
        alignContent: "right",
        backgroundColor: "#87b7ff"
    }
});