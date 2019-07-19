import { AsyncStorage}  from "react-native";

export const TokenManager = 
{
    getToken: async () => {
        return await AsyncStorage.getItem("TOKEN")
    },
    setToken: async token => {
        await AsyncStorage.setItem("TOKEN", token)
    }, 
    hasToken: async () => {
        const token = await TokenManager.getToken();
        return Boolean(token);
    }, 
    removeToken : async () => {
       await AsyncStorage.removeToken();
    }
}