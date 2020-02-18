import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthNavigator from "./routes/AuthStack";

import Amplify from "aws-amplify";
import config from "./aws-exports";
// import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";

// polyfillGlobal("URLSearchParams", () => undefined);
// delete global.URLSearchParams;

Amplify.configure(config);

export default function App() {
    return <AuthNavigator />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
