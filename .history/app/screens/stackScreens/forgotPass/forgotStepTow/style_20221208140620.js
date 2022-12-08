import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content:{
        flex: 1, 
        paddingHorizontal: GlobalWidth(16),
        paddingBottom:GlobalHeight(200)
    },
    forgotIc: {
        width: GlobalWidth(110),
        height: GlobalHeight(110),
        resizeMode: 'contain'
    },
    text: {
        fontSize: GlobalWidth(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#2D2D2D',
    },
    textInfo: {
        fontSize: GlobalWidth(14),
        fontFamily: 'Poppins-Regular',
        color: '#2D2D2D',
        marginBottom: GlobalHeight(46),
        maxWidth: GlobalWidth(219)
    },
    textEmail: {
        fontSize: GlobalWidth(14),
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        marginBottom: GlobalHeight(46),

    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnView: {
        flex: 1,
        justifyContent: 'center',
    },
    btn: {
        alignItems: "center",
        justifyContent: 'center',
        borderColor: '#0088CF',
        borderWidth: 1,
        borderRadius: GlobalWidth(14),
        paddingVertical: GlobalHeight(12),
        marginBottom: GlobalHeight(13)
    },
    btnName: {
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
        color: "#0088CF",
        fontFamily: "Poppins-Bold",
    }
});
