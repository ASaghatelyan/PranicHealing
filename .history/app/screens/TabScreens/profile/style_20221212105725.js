import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { greaterOrEq } from "react-native-reanimated";

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
   paddingHorizontal:greaterOrEq(16)
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
    },
    userIc: {
        width: GlobalWidth(128),
        height: GlobalHeight(128),
        borderRadius: 23
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
        height: GlobalHeight(84)
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
