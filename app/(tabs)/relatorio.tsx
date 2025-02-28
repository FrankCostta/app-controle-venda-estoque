import { View, Text, StyleSheet } from 'react-native';

export default function Relatorio() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Relatório</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 50,
	},
});