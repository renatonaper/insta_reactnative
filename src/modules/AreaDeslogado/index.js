import { createStackNavigator} from "react-navigation";
import { LoginScreen } from "../Login";

export const AreaDeslogado = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
});