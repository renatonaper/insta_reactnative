import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";

export class LoginScreen extends Component {

    state = {
        login: "",
        senha: "",
        eloi: true
    };

    handleChange = nomeDoCampo => {
        return valorDoCampo => {
            this.setState({ [nomeDoCampo]: valorDoCampo });
        };
    }; 
    
    handleClick = () => {
        this.setState({
            eloi: !this.state.eloi
        });
    }
    
    handleUserLogin = () => {
            console.warn(this.state);
    };

    
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
                <Text style={styles.title}>Instaelum</Text>
                <TextInput
                    onChangeText={this.handleChange("login")}
                    style={styles.formTextField}
                    placeholder="Usuario" />
                <TextInput
                    onChangeText={this.handleChange("senha")}
                    style={styles.formTextField}
                    placeholder="Senha" secureTextEntry={this.state.eloi} />
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.handleUserLogin}>
                    <Text style={styles.textColor}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.handleClick}
                >
                    <Text style={styles.textColor}>Eloi</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

LoginScreen.navigationOptions =
    {
        header: null
    };

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "#3095f3",
        borderRadius: 10,
        marginTop:20,
        padding: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center"
    },
    textColor: {
        color: "#fff",
        fontSize: 15
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 50,
        paddingRight: 50
    },
    formTextField: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: "#666",
        alignSelf: "stretch",
        marginBottom: 15
    }
});


