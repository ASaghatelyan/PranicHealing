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
        justifyContent: 'space-between',
        backgroundColor: 'red'
    },
    logo: {
        width: GlobalWidth(129),
        height: GlobalHeight(78),
        marginTop: GlobalHeight(100)
    },
    bottomView: {
        paddingHorizontal: GlobalWidth(16),
        paddingBottom: GlobalHeight(60),
        paddingTop: GlobalHeight(47),
        borderTopLeftRadius: GlobalWidth(47),
        borderTopRightRadius: GlobalWidth(47),
        backgroundColor: '#FFF',
        width: '100%',
    },
    welcome: {
        marginLeft: GlobalWidth(3),
        marginBottom: GlobalHeight(48),
        fontSize: GlobalWidth(18),
        fontFamily: 'Poppins-SemiBold',
        color: '#2D2D2D',
    },
    forgot: {
        alignItems: 'flex-end',
        marginTop: 5
    },
    forgotText: {
        fontSize: GlobalWidth(14),
        fontFamily: 'Poppins-Regular',
        color: '#83C661',
    },
    linearGradient: { 
        width:width-32,left:32,
        height:GlobalHeight(100),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: GlobalWidth(40),
        position:'absolute',
        top:-17, 
        
    },
});
