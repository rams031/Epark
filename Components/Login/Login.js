import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Text, Checkbox, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


function Login({ navigation }) {
    const {
        container,
        accountHelpTitle,
        row,
        col,
        flexMarginTitle,
        flexMarginForm,
        titleLabel
    } = styles;

    const textInputStyle = {
        mode: 'outlined',
        activeOutlineColor: '#874BE3'
    }

    // Local State
    const [text, setText] = useState("");

    return (
        <SafeAreaView style={container}>
            <View style={col}>
                <Text style={titleLabel} variant="headlineSmall">
                    Welcome Back!
                </Text>
                <Text variant="headlineLarge">
                    Sign In to your Account
                </Text>
            </View>
            <View style={[col, flexMarginTitle]}>
                <View style={[col, flexMarginForm]}>
                    <View>
                        <Text variant="labelLarge">Email Account</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Email"
                            value={text}
                            onChangeText={text => setText(text)}
                            {...textInputStyle}
                        />
                    </View>
                </View>
                <View style={[col, flexMarginForm]}>
                    <View>
                        <Text variant="labelLarge">Password Account</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Password"
                            value={text}
                            onChangeText={text => setText(text)}
                            {...textInputStyle}
                        />
                    </View>
                </View>
                <View style={[row, flexMarginForm, { justifyContent: "space-between", alignItems: "center" }]}>
                    <View style={[row, { alignItems: "center" }]}>
                        <View>
                            <Checkbox
                                status={'checked'}
                                {...accountHelpTitle}
                            />
                        </View>
                        <View></View>
                        <Text style={accountHelpTitle}>
                            Remember Me
                        </Text>
                    </View>
                    <View>
                        <Text style={accountHelpTitle}>
                            Forgot Password?
                        </Text>
                    </View>
                </View>
                <View style={[flexMarginForm]}>
                    <Button
                        icon="login"
                        mode="contained"
                        buttonColor="#8c7bff"
                        accessibilityHint="Sign In"
                        accessibilityLabel="Sign In"
                        contentStyle={{ height: 50, flexDirection: 'row-reverse' }}
                        onPress={() => navigation.navigate('Register')}
                    >
                        Sign In
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    col: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    flexMarginTitle: {
        marginTop: 30,
    },
    flexMarginForm: {
        marginTop: 15,
    },
    titleLabel: {
        color: '#56565A',
        fontWeight: '500'
    },
    accountHelpTitle: {
        color: '#A5A5A5',
        uncheckedColor: '#A5A5A5'
    }
});


export default Login