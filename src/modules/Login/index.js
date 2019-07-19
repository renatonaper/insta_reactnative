import React, { Component } from "react";
import {  Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import InstaelumService from "../../../services/InstaelumService";
import { FormBuilder } from "../../components/FormBuilder";

export class LoginScreen extends Component {

    state = {
        fields: [],
        login: "",
        senha: ""
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
    

    componentDidMount() {
        const fields = [
          {
            id: 1,
            slug: "login",
            title: "Usuário",
            type: "text",
            syncValidators: []
          },
          {
            id: 2,
            slug: "senha",
            title: "Senha",
            type: "password",
            syncValidators: []
          }
        ];
    
        setTimeout(() => {
          this.setState({ fields });
        }, 2000);
      }

      handleUserLogin = values => {
        InstaelumService.login({senha: values.senha, login: values.login})
        .then(() => {
          this.propss.navigation.navigate("Auth");
        })
        .catch(err => {alert("Aconteceu algo");});
      };

      render() {

        return (
          <KeyboardAvoidingView
          style={styles.container}
          behavior="padding" enabled>
            <FormBuilder
              onSuccess={
                values => {
                  this.handleUserLogin(values);
                }
              }
              fields={[
                  {
                    id: 1, 
                    name: "login",
                    label: "Login", 
                    type: "text",
                    value: "",
                    syncValidators: [
                        ["required", {} , "Este campo é obrigatório"],
                        ["minlength", {min: 3} , "Por favor preencha a quantidade minima de 3 caracteres"],
                      ]
                  },
                  {
                    id: 2, 
                    name: "senha",
                    label: "Senha", 
                    type: "number",
                    value: "",
                    syncValidators: [[
                       "required", {} , "Este campo é obrigatório"
                    ]]
                  }
                ]
              }
              />
          </KeyboardAvoidingView> 
          // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          //   <Text style={styles.title}>Instaelum</Text>
          //   {this.state.fields.length === 0 ? <ActivityIndicator /> : null}
          //   {this.state.fields.map(field => {
          //     return (
          //       <TextInput
          //         key={field.id}
          //         onChangeText={this.handleChange(field.slug)}
          //         style={styles.formTextField}
          //         placeholder={field.title}
          //         secureTextEntry={field.type === "password" ? true : false}
          //       />
          //     );
          //   })}
          //   <TouchableOpacity onPress={this.handleUserLogin} style={styles.btn}>
          //     <Text style={styles.textColor}>Logar</Text>
          //   </TouchableOpacity>
          // </KeyboardAvoidingView>
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


