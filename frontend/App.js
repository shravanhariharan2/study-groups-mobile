import React from "react";
import AppNavigator from "./routes/AppNavigator";

import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

export default function App() {
    return <AppNavigator />;
}

