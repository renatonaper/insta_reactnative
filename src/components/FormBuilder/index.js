import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { validations } from "../../../infra/validations";

export class FormBuilder extends Component {
    state = {
        fields: [],
        errors: {}
    };

    setFields = () => {
        this.setState({
            fields: this.props.fields
        });
    };

    componentDidMount() {
        this.setFields();
    }

    handleFormBuilderSubmit = () => {
        console.warn("Devemos pegar os dados de TODOS os campos");
    }

    handlerChange = fieldName => {
        return novoValor => {
           // console.warn("valor que foi digitado ", novoValor);
            const fieldsAtualizados = this.state.fields.map(
                field => {
                    if (field.name === fieldName) return { ...field, value: novoValor };
                    return field;
                });
            const currentField = this.state.fields.find(field =>{
                return field.name === fieldName;
            });
            const errors = [];
            currentField.syncValidators.forEach(syncValidators => {
                const validatorType = syncValidators[0];
                const validatorData = syncValidators[1];
                const validatorMessage = syncValidators[2];
                const isInvalidResult = validations[validatorType](
                    novoValor,
                    validatorData
                );
                if (isInvalidResult)
                    errors.push({type: validatorType, message: validatorMessage});
            });

            this.setState(prevState => ({
                fields: fieldsAtualizados, 
                errors: {...prevState.errors,[fieldName]:errors}
            }));
        }
    }

    render() {
        return (
            <View>
                {this.state.fields.map(field => {
                    const fieldErrors = this.state.errors[field.name] || [];
                    return (
                        <View key={field.id}>
                            <TextInputSpot
                                field={field}
                                onChangeText={this.handlerChange(field.name)}
                            />
                            {fieldErrors.map(erroDoField => {
                                return <Text key={field.id}>- {erroDoField.message}</Text>;
                            })}
                        </View>
                    );
                })}
                <TouchableOpacity
                    style={{ backgroundColor: "black", padding: 15, borderRadius: 10 }}
                    onPress={this.handleFormBuilderSubmit}>
                    <Text style={{ color: "white" }}>
                        Esse é o botão de cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const TextInputSpot = ({ field, onChangeText }) => {
    return (
        <View>
            <Text>{field.label}</Text>
            <TextInput style={TextInputSpotStyle.textInput} value={field.value}
                onChangeText={onChangeText} />
        </View>
    );
};

const TextInputSpotStyle = StyleSheet.create({
    textInput: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: "#666",
        alignSelf: "stretch",
        marginBottom: 15
    }
})