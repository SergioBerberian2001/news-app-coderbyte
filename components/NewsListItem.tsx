import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Article = {
	title: string;
	description: string;
	content: string;
	url: string;
	image: string;
	publishedAt: string;
	source: {
		name: string;
		url: string;
	};
};

const NewsListItem = (prop: any) => {
	const article = prop.article;
	const url = article.image.toString();
	const [parsedDate, setParsedDate] = useState<string>();
	const router = useRouter();

	const publishedDate = () => {
		// console.log(article.publishedAt);
		var date = Date.parse(article.publishedAt);
		const date2 = date.valueOf;
		// console.log(date2);
		// setParsedDate(date);
	};

	useEffect(() => {
		publishedDate();
	}, []);

	return (
		<Pressable
			onPress={() => {
				router.navigate({
					pathname: "/article",
					params: { article: JSON.stringify(article) },
				});
			}}
			style={{
				gap: 12,
				padding: 12,
				width: "100%",
				borderBottomWidth: 1,
			}}
		>
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

				<Text style={styles.title}>{article.title}</Text>
			</View>
			<View style={{ gap: 8, width: "95%" }}>
				<Text style={styles.date}>{article.publishedAt}</Text>
				<Text style={styles.description}>{article.description}</Text>
			</View>
		</Pressable>
	);
};

export default NewsListItem;

const styles = StyleSheet.create({
	image: {
		width: "20%",
		aspectRatio: 1,
		borderRadius: 100,
		backgroundColor: "gray",
	},
	title: { fontSize: 18, fontWeight: "500", width: "80%" },
	date: { fontSize: 14, fontWeight: "300", color: "grey" },
	description: { fontSize: 16, fontWeight: "300" },
});

//"articles": [
//   {
//     "title": "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//     "description": "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//     "content": "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//     "url": "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//     "image": "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//     "publishedAt": "2022-09-28T08:14:24Z",
//     "source": {
//       "name": "PhoneArena",
//       "url": "https://www.phonearena.com"
//     }
//   }
// ]
