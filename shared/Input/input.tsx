import { View, TextInput, TextInputProps, StyleSheet, Pressable } from 'react-native'
import { Colors, FontSizes, Radius } from '../tokens'
import { useState } from 'react'
import EyeClosedIcon from '../../assets/icons/eye-closed'
import EyeOpenIcon from '../../assets/icons/eye-open'

export function Input({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    return (
        <View>
            <TextInput
                style={styles.input}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholderTextColor={Colors.gray}
                {...props}
            />

            {isPassword && (
                <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setIsPasswordVisible((state) => !state)}
                >
                    {isPasswordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </Pressable>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: FontSizes.fs16,
        color: Colors.gray,
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
})
