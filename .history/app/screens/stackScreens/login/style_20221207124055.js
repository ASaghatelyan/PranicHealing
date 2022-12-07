import { GlobalWidth ,GlobalHeight} from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";
 
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flexGrow: 1,
        position: 'relative',
    },
    bgImg:{
        flex:1,
        a
    },
    logo: {
        width: GlobalWidth(129),
        height: GlobalHeight(78),
        position:'absolute'
    },

});
