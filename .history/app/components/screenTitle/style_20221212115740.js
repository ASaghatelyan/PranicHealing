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
        paddingHorizontal: GlobalWidth(16),
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
        top: GlobalHeight(4)
    },
    backIc: {
        width: GlobalWidth(18),
        height: GlobalHeight(18),
        resizeMode: 'contain',
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    editView:{
        position:'absolute',
        right:0
    },
    edit:{
        width:(32),
        height:32,
    },
});
