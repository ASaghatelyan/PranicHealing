import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    forgotIc: {
        width: GlobalWidth(110),
        height: GlobalHeight(110),
        resizeMode:'contain'
    },
    text:{
        
    }
});
