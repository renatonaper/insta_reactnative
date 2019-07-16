import React from "react";
import { View, Text , TouchableOpacity} from "react-native";


export class CardPostFooter  extends React.Component 
{
    state ={
        likeada: false,
        likers: [{loginUsuario: "renatonaper"}]
    }

    render()
    {
    return (
            <View  style={{padding: 15}} >
                <TouchableOpacity
                    onPress={() =>{
                        this.setState({
                               // likers:[{loginUsuario: "rafael"},...this.state.likers]
                                likeada: !this.state.likeada
                            });
                        }}
                    style={{
                        backgroundColor: this.state.likeada ? "red": "gray",
                        justifyContent: "center",
                        alignItems:"center",
                        width: 50,
                        height: 50
                    }}
                    >
                    <Text style={{color: "white", fontSize: 20}}>
                        {
                        //    this.state.likers.length
                        }
                    </Text>
                    </TouchableOpacity>

                
                <Text style={{ padding: 15 }} >Renato Bonito</Text>
            </View>
        );
    }
}