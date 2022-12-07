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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    logo: {
        width: GlobalWidth(129),
        height: GlobalHeight(78),
        position: 'absolute'
    },
    bottomView: {
        paddingHorizontal: GlobalWidth(16),
        paddingBottom: GlobalHeight(60),
        paddingTop:GlobalHeight(47)
    },
    welcome: {
        marginLeft: GlobalWidth(3),
        marginBottom: GlobalHeight(48),
        fontSize: GlobalWidth(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#2D2D2D',
    },
    forgot:{
        marginLeft: GlobalWidth(3),
        marginBottom: GlobalHeight(48),
        fontSize: GlobalWidth(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#2D2D2D',
    },
});
