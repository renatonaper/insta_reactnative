import React from "react";
import {View, Text, Button} from "react-native";
import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Feed, { FeedScreen } from "./Feed";
import { AreaDeslogado } from "./src/modules/AreaDeslogado";
import { AuthScreen } from "./src/modules/Auth";

//Tela 1
const TelaInicial =(props) =>(
    <View>
        <Text>Tela Inicial</Text>
        <Text>{JSON.stringify(props.navigation.state.params)}</Text>
        <Text>ID do post: {props.navigation.getParam("postId", "NO-ID")}</Text>
        <Button
            title="Ver Detalhes"
            onPress={() => props.navigation.navigate("Detalhe")}
           />
    </View>
);
//Tela 2 n
const DetalheScreen =(props) =>(
    <View>
        <Text>Detalhes</Text>
       
        <Button
            title="Voltar Inicio"
            onPress={() => props.navigation.navigate("Inicial")}
           />
    </View>
);


const LogoutScreen =(props) =>(
    <View>
        <Text>Sair</Text>
        <Button
            title="Voltar Inicio"
            onPress={() => props.navigation.navigate("Inicial")}
           />
    </View>
);





const FeedStack = createStackNavigator({
    FeedStackHome: {
        screen: FeedScreen
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

const SistemaDeNavegacaoDaNossaApzinha = createSwitchNavigator(
    {
        Auth: AuthScreen,
        Deslogado: AreaDeslogado,
        Logado: AreaLogado
    }
)
export default createAppContainer(SistemaDeNavegacaoDaNossaApzinha);