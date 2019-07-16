import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Tela de Login</Text>
                <TextInput style={styles.formTextField} placeholder="Usuario" />
                <TextInput style={styles.formTextField} placeholder="Senha" secureTextEntry={true} />
            </View>
        )
    }
}

LoginScreen.navigationOptions =
    {
        header: null
    };

const styles = StyleSheet.create(
    {
        container: {
            flex: 1, justifyContent: "center",
            alignItems: "center",
            paddingLeft: 50, paddingRight: 50
        },
        formTextField: {
            height: 40, borderBottomWidth: 2,
            borderBottomColor: "#666", alignSelf: "stretch",
            marginBottom: 15
        }
    }
)
