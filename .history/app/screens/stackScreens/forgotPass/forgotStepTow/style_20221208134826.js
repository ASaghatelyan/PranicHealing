import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    forgotIc: {
        width: GlobalWidth(110),
        height: GlobalHeight(110),
        resizeMode: 'contain'
    },
    text: {
        fontSize: GlobalWidth(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#2D2D2D',
        marginBottom: GlobalHeight(46)
    },
    text: {
        fontSize: GlobalWidth(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#2D2D2D',
        marginBottom: GlobalHeight(46)
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnView: {
        flex: 1,
        justifyContent: 'center',
    }
});
