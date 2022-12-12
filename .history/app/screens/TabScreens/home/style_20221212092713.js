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
    pagerView: {
        flex: 1,
        backgroundColor: 'red',
    },
    conteiner: {
        paddingHorizontal: GlobalWidth(26)
    },
    renderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        // paddingBottom: 70,
        height: 290
    },
    ownerImg:{
         width: '100%', height: 381, marginBottom: 18 },
    title: {
        fontFamily: 'Poppins-Bold',
        // marginBottom: GlobalHeight(18),
        fontSize: GlobalWidth(16),
        lineHeight: GlobalHeight(24),
        textAlign: 'center',
        color: '#0088CF'
    },
    text: {
        color: '#7D7D7D',
        fontFamily: 'Poppins-Regular',
        fontSize: GlobalWidth(16),
        lineHeight: GlobalHeight(24),
        textAlign: 'center',
        marginBottom: 70
    },
});
