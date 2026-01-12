import {
    StyleSheet,
    PressableProps,
    Pressable,
    Text,
    Animated,
    GestureResponderEvent,
} from 'react-native'
import { Colors, FontSizes, Radius } from '../tokens'

export function Button({ title, ...props }: PressableProps & { title: string }) {
    const animatedValue = new Animated.Value(100)
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary],
    })

    const fadeIn = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start()

        props.onPressIn?.(e)
    }

    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true,
        }).start()

        props.onPressOut?.(e)
    }

    return (
        <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: color,
                }}
            >
                <Text style={styles.title}>{title}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        borderRadius: Radius.r10,
    },
    title: {
        color: Colors.white,
        fontSize: FontSizes.fs18,
    },
})
