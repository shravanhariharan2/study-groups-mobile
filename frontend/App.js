import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthNavigator from "./routes/AuthStack";

import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

export default function App() {
    return <AuthNavigator />;
}

