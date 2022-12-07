import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },

    bgImg: {
       
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    logo: {
        width: GlobalWidth(129),
        height: GlobalHeight(78),
        position: 'absolute'
    },

});
