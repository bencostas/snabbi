import { AuthContext } from "@/utils/authContext";
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
    const authContext = useContext(AuthContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login Screen</Text>
            <Button title="Log In" onPress={authContext.logIn} />
        </View>
    );
}
