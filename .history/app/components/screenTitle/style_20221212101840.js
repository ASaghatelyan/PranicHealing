import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content:{
        marginVertical:8,
        alignItems:'center',
        justifyContent:'center'
    },
    titleText:{
        fontFamily: 'Poppins-Regular',
        // marginBottom: GlobalHeight(18),
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(24), 
        color: '#2D2D2D'
    },
});
