import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="search"
				options={{ headerShown: true, headerBackTitle: "Home" }}
			/>
			<Stack.Screen name="article" options={{ headerShown: false }} />
			<Stack.Screen name="+not-found" />
			<StatusBar style="auto" />
		</Stack>
	);
}
