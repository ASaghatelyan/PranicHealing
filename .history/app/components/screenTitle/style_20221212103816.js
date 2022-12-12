import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        marginVertical: GlobalHeight(8),
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        paddingHorizontal:GlobalWidth(16), 
        backgroundColor:'blue'
    },
    titleText: {
        fontFamily: 'Poppins-Regular',
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(27),
        color: '#2D2D2D'
    },
    backView: {
        position: 'absolute',
        left: GlobalWidth(25), 
        top: GlobalHeight(4),
        
    },
    backIc: {
        width: GlobalWidth(20),
        height: GlobalHeight(12),
        resizeMode: 'contain',
        backgroundColor:'red'
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});
