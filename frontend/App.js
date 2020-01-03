import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import AuthNavigator from "./routes/AuthStack"

export default function App() {
  return (
    <AuthNavigator />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});