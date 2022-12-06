import { GlobalWidth,GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";
 
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    styleInput:{
     backgroundColor:'rgba(158, 167, 166, 0.05)',
     borderRadius:8,
     paddingVertical:14,
     paddingLeft:14
    }

});
