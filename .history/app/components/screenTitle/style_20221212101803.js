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
        fontFamily: 'Poppins-Bold',
        // marginBottom: GlobalHeight(18),
        fontSize: GlobalWidth(16),
        lineHeight: GlobalHeight(24),
        textAlign: 'center',
        color: '#0088CF'
    },
});
