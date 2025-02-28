import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';


export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{title: 'Oops! Não encontrado.'}} />
			<View style={styles.container}>
				<Link href="/" style={styles.title}>
					Voltar para a tela inicial
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textDecorationLine: 'underline',
	},
});