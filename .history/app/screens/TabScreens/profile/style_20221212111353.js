import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        paddingBottom: GlobalHeight(90),
        paddingTop: Platform.OS === 'android' ? GlobalHeight(44) : 0
    },
    linearGradient: {
        flex: 1,
        paddingHorizontal: GlobalWidth(16),
        paddingBottom:GlobalHeight(20),
        borderBottomL:
    },
    conteiner: {
        paddingHorizontal: GlobalWidth(26)
    },
    renderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        // paddingBottom: 70,
        height: GlobalHeight(290)
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: GlobalHeight(11),
        marginBottom: GlobalHeight(12)
    },
    userTextView: {
        justifyContent: 'space-between'
    },
    userIc: {
        width: GlobalWidth(128),
        height: GlobalHeight(128),
        borderRadius: 23,
        marginRight: GlobalWidth(12)
    },
    nameText: {
        fontFamily: 'Poppins-Bold',
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(27),
        textAlign: 'center',
        color: '#2D2D2D'
    },
    qrIc: {
        width: GlobalWidth(89),
        height: GlobalHeight(84),
        marginBottom: GlobalHeight(5)
    },
    courseBtn: {
        backgroundColor: "#83C661",

    },
    courseCountView: {
        alignItems: 'flex-start',

    },
    socialView: {
        flexDirection: 'row',
        marginVertical: GlobalHeight(12)
    },
    socialIc: {
        width: GlobalWidth(24),
        height: GlobalWidth(24),
        marginRight: GlobalWidth(12)
    },
    bio: {
        fontFamily: 'Poppins-Bold',
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(27),
         color: '#0088CF'
    },
    bioInfo:{
        color:'#7D7D7D',
        fontFamily: 'Poppins-Light',
        fontSize: GlobalWidth(14),
        lineHeight: GlobalHeight(21),
     }
});
