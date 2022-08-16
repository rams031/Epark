import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
    const { container, shadowProp } = styles;

    return (
        <SafeAreaView style={container}>
            <View style={[shadowProp, { flex: 3, height: "auto", borderRadius: 20, backgroundColor: 'white' }]}>
                <Text>Register</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        paddingVertical: 10
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default Register