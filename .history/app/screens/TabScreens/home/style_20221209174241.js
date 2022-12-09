import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
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
        paddingBottom: 110,
        height: 322
    },
    title: {
        fontFamily: 'Poppins-Bold',
        marginBottom: GlobalHeight(18),
        fontSize: GlobalWidth(16),
        lineHeight: GlobalHeight(24),
        textAlign: 'center',
        color: '#0088CF'
    },
    text: {
b
    },
});
