import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        marginVertical: 8,
        alignItems: 'center',
        position: 'relative',
        width: '100%'
    },
    titleText: {
        fontFamily: 'Poppins-Regular',
        // marginBottom: GlobalHeight(18),
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(27),
        color: '#2D2D2D'
    },
    backView: {
        // position: 'absolute',
        // left:25,
        backgroundColor:'red',
 
    },
    backIc:{
        width:GlobalWidth(6),
        height:GlobalHeight(12)
    },
});
