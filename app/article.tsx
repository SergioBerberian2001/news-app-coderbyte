import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const article = () => {
	const params = useLocalSearchParams();
	const article = params.article ? JSON.parse(params.article as string) : null;
	const url = article.image.toString();
	return (
		<SafeAreaView style={styles.main}>
			<View>
				<View
					style={{
						flexDirection: "row",
						width: "100%",
						gap: 12,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						source={{
							uri: url,
						}}
						style={styles.image}
					/>
				</View>
				<View style={{ gap: 8, width: "95%", padding: 10 }}>
					<Text style={styles.mainTitle}>{article.title}</Text>
					<Text style={styles.date}>{article.publishedAt}</Text>
					<Text style={styles.title}>Description</Text>
					<Text style={styles.description}>{article.description}</Text>
					<Text style={styles.title}>Content</Text>
					<Text style={styles.description}>{article.content}</Text>
				</View>
				<View style={{ width: "100%" }}>
					<Text style={styles.description}>{article.source.name}</Text>
					<Text style={styles.description}>{article.source.url}</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default article;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "white",
	},
	image: {
		width: "100%",
		aspectRatio: 2,
		borderRadius: 0,
		backgroundColor: "gray",
	},
	title: { fontSize: 18, fontWeight: "500", width: "100%" },
	mainTitle: { fontSize: 22, fontWeight: "500", width: "100%" },
	date: { fontSize: 14, fontWeight: "300", color: "grey" },
	description: { fontSize: 16, fontWeight: "300" },
});
