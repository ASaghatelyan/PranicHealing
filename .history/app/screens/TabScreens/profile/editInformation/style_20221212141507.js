import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    generalView: {
        backgroundColor: '#FFF',
        height: '100%'
    },
    content: {
        flexGrow: 1,
        paddingBottom: GlobalHeight(90),
        paddingTop: Platform.OS === 'android' ? GlobalHeight(44) : 0,
    },
    userInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: GlobalHeight(11),
        marginBottom: GlobalHeight(12),
        paddingHorizontal: GlobalWidth(16)
    },
    userIc: {
        width: GlobalWidth(128),
        height: GlobalHeight(128),
        borderRadius: 23,
        position: 'relative'
    },
    courseCountView: {
        alignItems: 'flex-start',
        paddingHorizontal: GlobalWidth(16),
        marginBottom: GlobalHeight(32),
    },
    edit: {
        width: GlobalWidth(32),
        height: GlobalWidth(32),
        position: 'absolute',
        right: -4
    },
    bio: {
        fontFamily: 'Poppins-Bold',
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(27),
        color: '#0088CF'
    },
    bioInfo: {
        color: '#7D7D7D',
        fontFamily: 'Poppins-Light',
        fontSize: GlobalWidth(14),
        lineHeight: GlobalHeight(21),
        borderWidth: 1,
        borderColor: '#D9D9D9',
        width: '100%',
        height: GlobalHeight(131),
        paddingVertical: GlobalHeight(5),
        paddingHorizontal: GlobalWidth(12),
        borderRadius: 2,
        marginTop: GlobalHeight(12)
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: "100%"
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: GlobalWidth(14),
        lineHeight: GlobalHeight(22),
        color: 'rgba(0, 0, 0, 0.25)'
    },
    titleText: {
        fontFamily: 'Poppins-Regular',
        fontSize: GlobalWidth(14),
        lineHeight: GlobalHeight(21),
        color: '#2D2D2D',
        marginBottom: GlobalHeight(8)
    },
    input: {
        paddingHorizontal: GlobalWidth(6),
paddingVertical:1
    },
});
