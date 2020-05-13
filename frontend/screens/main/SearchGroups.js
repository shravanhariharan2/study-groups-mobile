import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class SearchGroups extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>SearchGroups</Text>
            </View>
        );
    }
}
export default SearchGroups;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});