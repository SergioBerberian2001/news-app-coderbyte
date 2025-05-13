import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
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

const search = () => {
	const params = useLocalSearchParams();
	const search = params.search || "";
	const [articles, setArticles] = useState<Article[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const apikey = "bec014c5b93e859c68e095dade5acea4";
	const url =
		"https://gnews.io/api/v4/search?q=" +
		search +
		"&lang=en&country=us&max=10&apikey=" +
		apikey;

	useEffect(() => {
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setArticles(data.articles);
				setIsLoading(false);
				console.log(articles);

				for (var i = 0; i < articles.length; i++) {
					// articles[i].title
					console.log("Title: " + articles[i]["title"]);
					// articles[i].description
					console.log("Description: " + articles[i]["description"]);
					// You can replace {property} below with any of the article properties returned by the API.
					// articles[i].{property}
					// console.log(articles[i]['{property}']);

					// Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
					// break;
				}
			});
	}, []);

	return (
		<SafeAreaView style={styles.mainView}>
			<Text style={styles.title}>Search Results</Text>

			{isLoading ? (
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<ActivityIndicator color="blue" size="large" />
				</View>
			) : (
				<View>
                    {!articles && <Text style={styles.title}>No Results Found</Text>
}
					<FlatList
						scrollEnabled={true}
						data={articles}
						contentContainerStyle={styles.listContainer}
						renderItem={({ item, index }) => (
							<View
								key={index}
								style={{
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
								}}
							>
								{/* <NewsListItem article={item} />
								 */}
								<Text>Hello</Text>
							</View>
						)}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default search;

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "white",
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
	},
	title: {
		paddingTop: 20,
		fontSize: 24,
		fontWeight: "500",
	},
	listContainer: {
		borderBottomWidth: 1,
	},
});
