import React from "react";
import {View, Text, Button} from "react-native";
import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Feed from "./Feed";
import { AreaDeslogado } from "./src/modules/AreaDeslogado";

//Tela 1
const TelaInicial =(props) =>(
    <View>
        <Text>Tela Inicial</Text>
        <Button
            title="Ver Detalhes"
            onPress={() => props.navigation.navigate("Detalhe")}
           />
    </View>
);
//Tela 2 
const DetalheScreen =(props) =>(
    <View>
        <Text>Detalhes</Text>
        <Button
            title="Voltar Inicio"
            onPress={() => props.navigation.navigate("Inicial")}
           />
    </View>
);

const FeedScreen =(props) =>(
    <View>
        <Text>Detalhes</Text>
        <Button
            title="Voltar Inicio"
            onPress={() => props.navigation.navigate("Inicial")}
           />
    </View>
);

const PerfilScreen =(props) =>(
    <View>
        <Text>Detalhes</Text>
        <Button
            title="Voltar Inicio"
            onPress={() => props.navigation.navigate("Inicial")}
           />
    </View>
);





const FeedStack = createStackNavigator({
    FeedStackHome: {
        screen: Feed
    }
});

const PerfilStack = createStackNavigator({
    Inicial:{
        screen:TelaInicial
    },
    Detalhe:{
        screen: DetalheScreen
    }
})


const AreaLogado = createBottomTabNavigator({
    Feed: {
        screen: FeedStack
    },
    Perfil: {
        screen: PerfilStack
    }
});

class AuthScreen extends React.Component
{
    state = {ready: false} ;
    componentDidMount(){
    setTimeout(() => {
        const hasUserToken  = false;
        this.setState({ready: true},
            () => {
                this.props.navigation.navigate(hasUserToken ? "Logado": "Deslogado");
            }); 
        }, 5000);
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>Carregando...</Text>
            </View>
        )
    }
}


    
const SistemaDeNavegacaoDaNossaApzinha = createSwitchNavigator(
    {
        Auth: AuthScreen,
        Deslogado: AreaDeslogado,
        Logado: AreaLogado
    }
)
export default createAppContainer(SistemaDeNavegacaoDaNossaApzinha);