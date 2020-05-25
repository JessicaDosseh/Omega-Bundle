import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBarWebAppSkeleton from './Omega-Web-App/packages/web/src/constants/Skeleton/NavBar/NavBar-web_app-skeleton';

export default function App() {
	return (
		<View style={styles.container}>
			<NavBarWebAppSkeleton />
			<Text>Open up App.js to start working on your app! 🚀</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
