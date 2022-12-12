import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        marginVertical: 8,
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        paddingHorizontal: 16,
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
        backgroundColor: 'red',
        top: (8)
    },
    backIc: {
        width: GlobalWidth(20),
        height: GlobalHeight(20),
        resizeMode: 'contain'
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});
