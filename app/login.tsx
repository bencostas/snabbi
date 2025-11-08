import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { Button } from "react-native";

export default function LoginScreen() {
    const authContext = useContext(AuthContext);

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText type="title">Login Screen</ThemedText>
            <Button title="Log In" onPress={authContext.logIn} />
        </ThemedView>
    );
}
