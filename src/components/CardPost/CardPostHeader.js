import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";

export const CardPostHeader = function (props) {
    return (
        <View style={style.container} >
            <Image
                style={style.useAvatar}
                source={{ uri: props.imagem }}
            />
            <Text style={style.userLogin}>{`@${props.usuario}`}</Text>
        </View>
    );
}
 //Estilos
const style = StyleSheet.create({
        container: { flexDirection: "row",alignItems: "center", justifyContent: "flex-start", padding: 15},
        useAvatar: { width: 50, height: 50, borderRadius: 50 / 2 },
        userLogin: { paddingLeft: 15 }
    }
)
//PropTypes
CardPostHeader.propTypes = {
    imagem: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired
}