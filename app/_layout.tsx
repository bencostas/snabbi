import { AuthProvider } from "@/utils/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
        <Stack>
        {/* Public routes (login, etc) so redirects to /login work */}
        <Stack.Screen name="login" options={{ headerShown: false }} />

        <Stack.Screen
            name="(protected)"
            options={{
            headerShown: false,
            }}
        />
        </Stack>
    </AuthProvider>
  );
}