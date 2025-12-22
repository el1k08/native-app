import { useEffect, useState } from 'react';
import { ErrorNotificationProps } from './ErrorNotification.props';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Colors, FontSizes } from '../tokens';

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShown, setIsShown] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	}

	useEffect(() => {
		if(error) {
			setIsShown(true);
			const timeout = setTimeout(() => {
				setIsShown(false);
			}, 3000);

			return () => clearTimeout(timeout);
		}else {
			return;
		}
	}, [error]);

	if(!isShown) {
		return <></>;
	}

	return (
		<Animated.View style={[styles.error, { transform: [{ translateY: animatedValue }] }]} onLayout={onEnter}>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		top: 50,
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15
	},
	errorText: {
		fontSize: FontSizes.fs16,
		color: Colors.white,
		textAlign: 'center',
	}
});