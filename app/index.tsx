import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Keyboard,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const index = () => {
	const [search, setSearch] = useState<string>("");
	const [articles, setArticles] = useState<Article[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const router = useRouter();

	const apikey = "bec014c5b93e859c68e095dade5acea4";
	const category = "general";
	const url =
		"https://gnews.io/api/v4/top-headlines?category=" +
		category +
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

	const handleSearchSubmit = () => {
		router.navigate({
			pathname: "/search",
			params: { search: search },
		});
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<SafeAreaView style={styles.mainView}>
				<Text style={styles.title}>News</Text>
				<View style={{ flexDirection: "row", gap: 2, padding: 12 }}>
					<TextInput
						value={search}
						placeholder="Search..."
						onChangeText={setSearch}
						style={styles.textInputSearch}
						placeholderTextColor="grey"
					/>
					<Pressable
						style={styles.searchButton}
						onPress={() => handleSearchSubmit()}
					>
						<MaterialIcons name="search" color="white" size={20} />
					</Pressable>
				</View>
				{isLoading ? (
					<View style={{ justifyContent: "center", alignItems: "center" }}>
						<ActivityIndicator color="blue" size="large" />
					</View>
				) : (
					<View>
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
		</TouchableWithoutFeedback>
	);
};

export default index;

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "white",
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	textInputSearch: {
		width: "90%",
		paddingVertical: 12,
		paddingHorizontal: 8,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 10,
	},
	searchButton: {
		width: "10%",
		aspectRatio: 1,
		backgroundColor: "rgb(40, 115, 214)",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	listContainer: {
		borderBottomWidth: 1,
	},
});
